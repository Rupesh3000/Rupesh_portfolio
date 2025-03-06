// src/components/ProjectCard.jsx
function ProjectCard({ image, name, description, codeLink, detailsLink }) {
  return (
    <div className="bg-[#2A2A3E] rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-300 text-sm mt-2 line-clamp-2">{description}</p>
        <div className="mt-4 flex gap-4 justify-between">
          <a
            href={codeLink}
            className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700"
          >
            Code/Demo
          </a>
          <a
            href={detailsLink}
            className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
