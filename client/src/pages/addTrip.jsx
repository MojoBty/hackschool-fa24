import { useState } from "react";
import styles from "../styles/TripForm.module.css";

const AddTrip = () => {
  /*  Activity 1: Add the useState hooks for 
    destination, 
    startDate, 
    endDate, 
    entry
  */
 
  const [destination, setDestination] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [entry, setEntry] = useState('')

  return (
    <div className={styles.container}>
      <h2>Add a Trip</h2>
      <form className={styles.tripForm}>
        <label htmlFor="destination">Destination:</label>
        <input type="text" className="destination" name="destination" onChange={(e) => setDestination(e.target.value)} required />

        <label htmlFor="startDate">Start Date:</label>
        <input type="date" className="startDate" name="startDate" onChange={(e) => setStartDate(e.target.value)} required />

        <label htmlFor="endDate">End Date:</label>
        <input type="date" className="endDate" name="endDate" onChange={(e) => setEndDate(e.target.value)} required />

        <label htmlFor="entry">Journal Entry:</label>
        <textarea className="entry" name="entry" onChange={(e) => setEntry(e.target.value)} required></textarea>

        <button type="submit">Add Trip</button>
      </form>
    </div>
  )
};

export default AddTrip;