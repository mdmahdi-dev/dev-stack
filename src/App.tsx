import { useEffect, useState } from "react";
import type { Technology } from "./types/technology";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import YourStack from "./components/YourStack";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  const handleAdd = (technology: Technology) => {
    setSelectedTechnologies((current) => [...current, technology]);
  };

  const handleRemove = (id: number) => {
    setSelectedTechnologies((current) =>
      current.filter((technology) => technology.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading technologies...</h1>;
  }

  return (
    <div>
      <Navbar />

      <Hero />

      <TechnologyGrid
        technologies={technologies}
        onAdd={handleAdd}
      />

      <div className="mx-auto max-w-7xl px-6 pb-16">
        <YourStack
          selectedTechnologies={selectedTechnologies}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
}

export default App;