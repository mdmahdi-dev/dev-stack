import type { Technology } from "../types/technology";

interface YourStackProps {
  selectedTechnologies: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

function YourStack({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        <span className="text-sm text-gray-500">
          {selectedTechnologies.length} Technology Selected
        </span>
      </div>

      {selectedTechnologies.length === 0 ? (
        <p className="mt-6 text-sm text-gray-500">
          No technologies selected yet.
        </p>
      ) : (
        <div className="mt-6 space-y-3">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-8 w-8"
                />

                <div>
                  <p className="font-medium text-gray-900">
                    {technology.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {technology.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-gray-400 hover:text-red-500"
                aria-label={`Remove ${technology.name}`}
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
}

export default YourStack;