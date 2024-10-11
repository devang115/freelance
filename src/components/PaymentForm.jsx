import React, { useState } from 'react';
import PropTypes from 'prop-types';

function PaymentForm({ onSubmit, projects, setShowForm }) {
  const [projectName, setProjectName] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('unpaid');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ projectName, amount: parseFloat(amount), status });
    setProjectName('');
    setAmount('');
    setStatus('unpaid');
    setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label
          className="block text-gray-700 text-sm font-bold mb-1"
          htmlFor="projectName"
        >
          Project:
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        >
          <option value="">Select a project</option>
          {projects.map((project) => (
            <option key={project.id} value={project.name}>
              {project.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label
          className="block text-gray-700 text-sm font-bold mb-1"
          htmlFor="amount"
        >
          Amount:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label
          className="block text-gray-700 text-sm font-bold mb-1"
          htmlFor="status"
        >
          Status:
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="unpaid">Unpaid</option>
          <option value="paid">Paid</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
      >
        Add Payment
      </button>
    </form>
  );
}

PaymentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      // ... other properties of a project ...
    })
  ).isRequired,
  setShowForm: PropTypes.func.isRequired,
};

export default PaymentForm;