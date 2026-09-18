import type { Technology } from "../types/technology";

interface TechnologyCardProps {
    technology: Technology;
    selectedTechnologies: Technology[];
    onAdd: (technology: Technology) => void;
}

function TechnologyCard({
    technology,
    selectedTechnologies,
    onAdd,
}: TechnologyCardProps) {
    const isAdded = selectedTechnologies.some(
        (item) => item.id === technology.id
    );

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            {/* Icon + Badge */}
            <div className="flex items-center justify-between">
                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-12 w-12"
                />

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    {technology.badge}
                </span>
            </div>

            {/* Name */}
            <h2 className="mt-5 text-xl font-bold text-gray-900">
                {technology.name}
            </h2>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-600">
                {technology.description}
            </p>

            {/* Category + Difficulty */}
            <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                    {technology.category}
                </span>

                <span className="text-sm text-gray-500">
                    {technology.difficulty}
                </span>
            </div>

            {/* Rating */}
            <div className="mt-4">
                <span className="text-yellow-500">★</span>{" "}
                <span className="text-sm font-medium">
                    {technology.rating}
                </span>
            </div>

            {/* Add Button */}
            <button
                onClick={() => onAdd(technology)}
                disabled={isAdded}
                className="mt-5 w-full rounded-lg bg-black px-4 py-2 font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>

        </div>
    );
}

export default TechnologyCard;