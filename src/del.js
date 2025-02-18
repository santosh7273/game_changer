import { useState } from "react";
import axios from "axios";

export default function Delda() {
  const [formData, setFormData] = useState({ name: ""});
  const [msg, setMsg] = useState(""); // Message state
  const [deleted, setDeleted] = useState(false); // Tracks if a delete happened
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleDelete = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    try {
      const response = await axios.delete("http://localhost:5000/delete",{data: formData }); // Corrected request format
      setFormData({ name: "" }); // Only reset the existing field
      setDeleted(true); // Update state to trigger re-render
      setMsg(response.data.message); // Store the delete message
    } catch (error) {
      console.error("Error deleting entry:", error);
      setDeleted(true);
      setMsg("Error deleting entry.");
    }
  };
  
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleDelete} className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">User Form</h2>
        <div className="mb-4">
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
          Delete
        </button>
      </form>

      {deleted && (
        <h1 className="mt-4 text-lg font-bold text-red-600">{msg}</h1>
      )}
    </div>
  );
}
