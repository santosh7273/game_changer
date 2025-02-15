import {React,useState,useEffect} from "react"
import axios from 'axios';
export default function FetchFormData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://unk-garc.onrender.com/fetch");
        setData(response.data);
      } catch (err) {
        setError("Error fetching data");
        console.error("Error fetching data:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Fetched Form Data</h2>
      {error && <p className="text-red-500">{error}</p>}
      {data.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td className="border border-gray-300 p-2">{item.name}</td>
                <td className="border border-gray-300 p-2">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

