import React, { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    console.log("Booking Date & Time:", date, time);
  };

  return (
    <form onSubmit={handleBooking} className="p-4 max-w-md mx-auto mt-10 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Book Your Test</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full mb-3 p-2 border"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full mb-3 p-2 border"
      />
      <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">
        Book Test
      </button>
    </form>
  );
};

export default BookingForm;
