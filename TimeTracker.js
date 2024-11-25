import React, { useState, useEffect } from 'react';
import EmployeeList from './EmployeeList';

function TimeTracker({ employees }) {
  // State to manage the clock-in/out status and timestamps
  const [employeeStatus, setEmployeeStatus] = useState(
    employees.reduce((acc, employee) => {
      acc[employee] = {
        clockedIn: false,
        clockInTime: null,
        clockOutTime: null,
        totalHours: 0,
      };
      return acc;
    }, {})
  );

  // Handle clock in/out for an employee
  const handleClockInOut = (employee) => {
    setEmployeeStatus((prevStatus) => {
      const currentTime = new Date();
      const updatedStatus = { ...prevStatus };

      if (updatedStatus[employee].clockedIn) {
        // Clocking out
        updatedStatus[employee].clockOutTime = currentTime;
        updatedStatus[employee].totalHours +=
          (currentTime - updatedStatus[employee].clockInTime) / 3600000; // Convert ms to hours
        updatedStatus[employee].clockedIn = false;
      } else {
        // Clocking in
        updatedStatus[employee].clockInTime = currentTime;
        updatedStatus[employee].clockedIn = true;
      }

      return updatedStatus;
    });
  };

  // Reset all employee time tracking
  const handleReset = () => {
    setEmployeeStatus(
      employees.reduce((acc, employee) => {
        acc[employee] = {
          clockedIn: false,
          clockInTime: null,
          clockOutTime: null,
          totalHours: 0,
        };
        return acc;
      }, {})
    );
  };

  // Log the status change in the console when it changes
  useEffect(() => {
    employees.forEach((employee) => {
      const status = employeeStatus[employee].clockedIn ? 'Clocked In' : 'Clocked Out';
      console.log(`${employee}: ${status}`);
    });
  }, [employeeStatus, employees]);

  return (
    <div className="time-tracker">
      <EmployeeList
        employees={employees}
        employeeStatus={employeeStatus}
        onClockInOut={handleClockInOut}
      />
      <button onClick={handleReset}>Reset All Tracking</button>
    </div>
  );
}

export default TimeTracker;
