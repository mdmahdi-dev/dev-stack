import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import type { Technology } from "./types/technology";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

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
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-xl font-semibold text-gray-600">
          Loading technologies...
        </h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <Hero />

      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TechnologyGrid
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            onAdd={handleAdd}
          />
        </div>

        <div>
          <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>

      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;