import React from 'react';
import PropTypes from 'prop-types'; 

function ProjectCard({ project, onUpdate, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg fade-in">
      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
      <p className="text-sm mb-1">Due Date: {project.dueDate}</p>
      <p className="text-sm mb-2">
        Status:{' '}
        <span
          className={`font-semibold ${
            project.status === 'active' ? 'text-green-600' : 'text-blue-600'
          }`}
        >
          {project.status}
        </span>
      </p>
      <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors duration-300"
          onClick={() =>
            onUpdate(project.id, {
              ...project,
              status: project.status === 'active' ? 'completed' : 'active',
            })
          }
        >
          Toggle Status
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors duration-300"
          onClick={() => onDelete(project.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
ProjectCard.propTypes = {
    project: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired, // Or PropTypes.instanceOf(Date) if you're using Date objects
      status: PropTypes.string.isRequired,
    }).isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };
export default ProjectCard;