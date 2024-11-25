import React from 'react';

function EmployeeList({ employees, employeeStatus, onClockInOut }) {
  return (
    <div className="employee-list">
      {employees.map((employee) => {
        const { clockedIn, clockInTime, clockOutTime, totalHours } = employeeStatus[employee];
        return (
          <div key={employee}>
            <div>
              <h2>{employee}</h2>
              <p>{clockedIn ? 'Clocked In' : 'Clocked Out'}</p>
              {clockedIn ? (
                <p>Last Clock In: {clockInTime?.toLocaleString()}</p>
              ) : (
                clockOutTime && (
                  <p>Last Clock Out: {clockOutTime?.toLocaleString()}</p>
                )
              )}
              <p>Total Hours Worked: {totalHours.toFixed(2)} hours</p>
            </div>
            <button onClick={() => onClockInOut(employee)}>
              {clockedIn ? 'Clock Out' : 'Clock In'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default EmployeeList;
