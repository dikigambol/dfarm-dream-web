import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/auth"
import Dashboard from "./pages/operator/dashboard"
import Users from "./pages/operator/dataUser"
import DataCages from "./pages/operator/dataKandang"
import DataCost from "./pages/operator/dataKeuangan"
import FormUsers from "./pages/operator/dataUser/formUser"
import NotFound from "./pages/404/404"

function App() {
  return (
    <Router>
      <Routes>
        {/* halaman utama  */}
        <Route index exact element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/users" element={<Users />} />
        <Route path="/form-users/:userId" element={<FormUsers />} />

        <Route path="/cages" element={<DataCages />} />
        <Route path="/cost" element={<DataCost />} />


        <Route path="/not-found" element={<NotFound />} />
        <Route
          path="*"
          element={<Navigate to="/not-found" replace />}
        />

      </Routes>
    </Router>

  )
}
export default App
