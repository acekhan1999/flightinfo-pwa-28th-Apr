import React from 'react';

const RequestForm = ({ name, setName, flightNo, setFlightNo, handleSubmit }) => (
  <>
    <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Request Flight Info</h2>
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        background: '#f9f9f9',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          fontSize: '16px',
        }}
      />
      <input
        type="text"
        placeholder="Flight Number"
        value={flightNo}
        onChange={(e) => setFlightNo(e.target.value)}
        required
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          fontSize: '16px',
        }}
      />
      <button
        type="submit"
        style={{
          background: '#007BFF',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Submit Request
      </button>
    </form>
  </>
);

export default RequestForm;