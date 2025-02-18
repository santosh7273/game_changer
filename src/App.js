import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FetchFormData from "./fetchdata";
import Form from "./Contact";
import Delda from "./del.js"
import UpdateUser from "./upd.js";
export default function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-500 hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/fetch" className="text-blue-500 hover:underline">Fetch Data</Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
            </li>
            <li>
              <Link to="/delete" className="text-blue-500 hover:underline">Delete</Link>
            </li>
            <li>
              <Link to="/update" className="text-blue-500 hover:underline">Update</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/fetch" element={<FetchFormData />} />
          <Route path="/contact" element={<Form/>} />
          <Route path="/update" element={<UpdateUser/>} />
          <Route path="/delete" element={<Delda/>} />
          <Route path="/" element={<h1 className="text-2xl font-bold">Welcome to the Home Page of santosh kumar</h1>} />
          <Route path="/delmsg" element={<Delda/>} />
        </Routes>
      </div>
    </Router>
  );
}
