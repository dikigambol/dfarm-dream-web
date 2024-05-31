import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/auth"
import DashboardOperator from "./pages/operator/dashboard"

function App() {
  return (
    <Router>
      <Routes>
        {/* halaman utama  */}
        <Route index exact element={<Login />} />
        <Route path="/dashboard-operator" element={<DashboardOperator />} />
      </Routes>
    </Router>

  )
}
export default App
