import { useState } from "react";
import "./Reservation.css";

function Reservation() {
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    const date = form.get("date");
    const time = form.get("time");
    const guests = form.get("guests");

    setConfirmation(
      `🎉 Reservation Successful! Thank you ${name}. Your table for ${guests} guest(s) has been reserved on ${date} at ${time}. We look forward to serving you at Elite Dining.`
    );

    e.target.reset();
  };

  return (
    <div className="overlay">
      <div className="reservation-container">
        <h1>Elite Dining</h1>
        <p className="subtitle">Reserve Your Table</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" name="name" required />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" name="email" required />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" required />
          </div>

          <div className="input-group">
            <label>Date</label>
            <input type="date" name="date" required />
          </div>

          <div className="input-group">
            <label>Time</label>
            <input type="time" name="time" required />
          </div>

          <div className="input-group">
            <label>Number of Guests</label>
            <select name="guests" required>
              <option value="">Select Guests</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7+</option>
            </select>
          </div>

          <div className="input-group">
            <label>Special Requests</label>
            <textarea rows="4" name="message"></textarea>
          </div>

          <button type="submit">Reserve Table</button>
        </form>

        {confirmation && (
          <div className="confirmation-message">
            {confirmation}
          </div>
        )}
      </div>
    </div>
  );
}

export default Reservation;