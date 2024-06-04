import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/auth"
import Dashboard from "./pages/operator/dashboard"
import Users from "./pages/operator/dataUser"
import DataCages from "./pages/operator/dataKandang"
import DataCost from "./pages/operator/dataKeuangan"
import FormUsers from "./pages/operator/dataUser/formUser"
import NotFound from "./pages/404/404"
import Dashboard from "./pages/super_operator/dashboard"
import Users from "./pages/super_operator/dataUser"
import DataCages from "./pages/super_operator/dataKandang"
import DataCost from "./pages/super_operator/dataKeuangan"
import Homes from "./pages/operator/dashboard"
import ManageKandang from "./pages/operator/manageKandang"
import CageDetails from "./pages/operator/manageKandang/detile"
import ManageInvestor from "./pages/operator/manageInvestor"

function App() {
  return (
    <Router>
      <Routes>
        {/* Login  */}
        <Route index exact element={<Login />} />

        {/* Super Operator  */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/form-users/:userId" element={<FormUsers />} />
        <Route path="/cages" element={<DataCages />} />
        <Route path="/cost" element={<DataCost />} />

        {/* Operator  */}
        <Route path="/home" element={<Homes />} />
        <Route path="/manage-cages" element={<ManageKandang />} />
        <Route path="/detile-cages" element={<CageDetails />} />
        <Route path="/investor" element={<ManageInvestor />} />

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
