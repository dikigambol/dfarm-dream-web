import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/auth"
import Dashboard from "./pages/operator/dashboard"
import Users from "./pages/operator/dataUser"
import DataCages from "./pages/operator/dataKandang"
import DataCost from "./pages/operator/dataKeuangan"

function App() {
  return (
    <Router>
      <Routes>
        {/* halaman utama  */}
        <Route index exact element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cages" element={<DataCages />} />
        <Route path="/cost" element={<DataCost />} />
      </Routes>
    </Router>

  )
}
export default App
