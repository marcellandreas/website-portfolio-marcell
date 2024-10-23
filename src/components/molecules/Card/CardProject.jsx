import { Link } from "react-router-dom";

export function CardProject({ id, name, img, technologies, type }) {
  return (
    <article className="project-card relative bg-primary-300 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:rotate-y-15">
      <Link to={`/projects/${id}`} aria-label={`View project ${name}`}>
        <div className="project-inner">
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="w-full h-48 object-cover transition-opacity duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 ease-in-out flex items-center justify-center">
            <p className="text-white">Click to details</p>
          </div>

          <div className="p-4">
            <h2 className="text-xl font-semibold text-primary-100">{name}</h2>
            <p className="text-gray-400 flex gap-2 flex-wrap">
              {technologies?.map((data, i) => (
                <span
                  className="flex flex-row bg-primary-600  p-1 rounded-lg"
                  key={i}
                >
                  {data}
                </span>
              ))}
            </p>
            <p className="text-sm text-gray-500">{type}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
