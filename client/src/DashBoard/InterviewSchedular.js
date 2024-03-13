import React, { useState } from 'react';
import ResponsiveDrawer from "./dashboard";

const InterviewScheduler = () => {
  // Example of available time slots (can be fetched from API)
  const availableTimeSlots = [
    '9:00 AM - 10:00 AM',
    '10:30 AM - 11:30 AM',
    '1:00 PM - 2:00 PM',
    '2:30 PM - 3:30 PM',
    '4:00 PM - 5:00 PM'
  ];

  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [isScheduled, setIsScheduled] = useState(false);

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleScheduleInterview = () => {
    // Implement logic to send interview schedule request to server
    // This can include sending selectedTimeSlot to backend API
    setIsScheduled(true);
  };

  return (
    <ResponsiveDrawer>
    <div style={{marginTop:'70px'}}>
      <h2>Interview Scheduler</h2>
      <p>Select an available time slot for your interview:</p>
      <div>
        {availableTimeSlots.map((timeSlot, index) => (
          <button
            key={index}
            onClick={() => handleTimeSlotSelect(timeSlot)}
            disabled={isScheduled}
            style={{ marginRight: '10px', marginBottom: '10px' }}
          >
            {timeSlot}
          </button>
        ))}
      </div>
      {selectedTimeSlot && (
        <div>
          <p>Selected Time Slot: {selectedTimeSlot}</p>
          <button onClick={handleScheduleInterview} disabled={isScheduled}>
            Schedule Interview
          </button>
        </div>
      )}
      {isScheduled && (
        <div>
          <p>Interview scheduled successfully!</p>
        </div>
      )}
    </div>
    </ResponsiveDrawer>
  );
};

export default InterviewScheduler;
