import React, { useState, useEffect } from "react";

const TimeTracker = ({ onTimeElapsed }) => {
  const startDate = "2023-08-04"; // Hardcoded start date
  const [timeElapsed, setTimeElapsed] = useState({ years: 0, months: 0 });

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const start = new Date(startDate);
      const now = new Date();

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();

      // Adjust for negative months
      if (months < 0) {
        years -= 1;
        months += 12;
      }

      const data = { years, months };
      setTimeElapsed(data);

      // Pass data to the parent or another component
      if (onTimeElapsed) onTimeElapsed(data);
    };

    calculateTimeElapsed();

    const timer = setInterval(calculateTimeElapsed, 1000 * 60 * 60 * 24);

    return () => clearInterval(timer);
  }, [onTimeElapsed]);
};

export default TimeTracker;