import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchFormData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/fetch");
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
      {data ? (
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
