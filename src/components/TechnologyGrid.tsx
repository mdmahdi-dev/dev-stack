import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologyGridProps {
    technologies: Technology[];
    selectedTechnologies: Technology[];
    onAdd: (technology: Technology) => void;
}

function TechnologyGrid({
    technologies,
    selectedTechnologies,
    onAdd,
}: TechnologyGridProps) {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900">
                    Explore Technologies
                </h2>

                <p className="mt-2 text-gray-600">
                    Discover the technologies you can add to your development stack.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {technologies.map((technology) => (
                    <TechnologyCard
                        key={technology.id}
                        technology={technology}
                        selectedTechnologies={selectedTechnologies}
                        onAdd={onAdd}
                    />
                ))}
            </div>
        </section>
    );
}

export default TechnologyGrid;