import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
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
    setSelectedTechnologies((current) => {
      const alreadyAdded = current.some(
        (item) => item.id === technology.id
      );

      if (alreadyAdded) {
        toast.warning(`${technology.name} is already in your stack.`);
        return current;
      }

      toast.success(`${technology.name} added to your stack.`);
      return [...current, technology];
    });
  };

  const handleRemove = (id: number) => {
    setSelectedTechnologies((current) => {
      const removedTechnology = current.find(
        (technology) => technology.id === id
      );

      if (removedTechnology) {
        toast.success(`${removedTechnology.name} removed from your stack.`);
      }

      return current.filter((technology) => technology.id !== id);
    });
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.success("All technologies removed from your stack.");
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
        selectedTechnologies={selectedTechnologies}
        onAdd={handleAdd}
      />

      <div className="mx-auto max-w-7xl px-6 pb-16">
        <YourStack
          selectedTechnologies={selectedTechnologies}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />

        <ToastContainer />
      </div>
    </div>
  );
}

export default App;