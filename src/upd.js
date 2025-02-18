import { useState } from "react";
import axios from "axios";
export default function UpdateUser() {
  const [formData, setFormData] = useState({ email: "", newName: "" });
  const [message, setMessage] = useState(""); // Stores success/error message
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      if (!formData.email.trim() || !formData.newName.trim()) {
        alert("Please enter an email and a new name.");
        return;
      }
      const response = await axios.put("https://unk-garc.onrender.com/update", formData);
      setMessage(response.data.message);
      setFormData({ email: "", newName: "" }); // Clear form after update
    } catch (error) {
      console.error("Error updating user:", error);
      setMessage("Error updating user.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleUpdate} className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Update Username</h2>
        <div className="mb-4">
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">New Name</label>
          <input
            type="text"
            name="newName"
            value={formData.newName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter new name"
          />
        </div>

        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Update Name
        </button>
      </form>

      {message && <h1 className="mt-4 text-lg font-bold text-green-600">{message}</h1>}
    </div>
  );
}
