import React, { useState } from 'react';
import PaymentForm from './PaymentForm';
import PropTypes from 'prop-types'; 

function PaymentsSection({ payments, onMarkAsPaid, onAddPayment, projects }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md fade-in">
      <h2 className="text-xl font-bold mb-3">Payments</h2>
      <div className="space-y-3 mb-4">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="flex justify-between items-center p-3 bg-gray-100 rounded"
          >
            <div>
              <p className="font-semibold">{payment.projectName}</p>
              <p className="text-sm">Amount: ${payment.amount}</p>
            </div>
            <div className="flex items-center">
              <span
                className={`mr-2 text-sm font-semibold ${
                  payment.status === 'paid'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {payment.status}
              </span>
              {payment.status === 'unpaid' && (
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors duration-300"
                  onClick={() => onMarkAsPaid(payment.id)}
                >
                  Mark as Paid
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancel' : 'Add Payment'}
      </button>
      {showForm && (
        <PaymentForm
          onSubmit={onAddPayment}
          projects={projects}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
}
PaymentsSection.propTypes = {
    payments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        projectName: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
        // ... any other properties of a payment object ...
      })
    ).isRequired,
    onMarkAsPaid: PropTypes.func.isRequired,
    onAddPayment: PropTypes.func.isRequired,
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        // ... any other properties of a project object ...
      })
    ).isRequired,
  };
export default PaymentsSection;