import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

/* auth */
import Login from "./pages/auth"
import Reset from "./pages/auth/reset"
import NotFound from "./pages/404/404"

/* super operator */
import Dashboard from "./pages/super_operator/dashboard"
import Users from "./pages/super_operator/dataUser"
import DataCages from "./pages/super_operator/dataKandang"
import DataCost from "./pages/super_operator/dataKeuangan"
import FormUsers from "./pages/super_operator/dataUser/formUser"

/* operator */
import Homes from "./pages/operator/dashboard"
import ManageKandang from "./pages/operator/manageKandang"
import CageDetails from "./pages/operator/manageKandang/detailKandang"

/* investor */
import Investors from "./pages/investor/dashboard"
import InverstorCages from "./pages/investor/manageKandang"
import ProfileInvestor from "./pages/investor/profile"
import DetailCages from "./pages/investor/manageKandang/detailCages"
import ProfileOperator from "./pages/operator/profile"
import ProfileSuperOperator from "./pages/super_operator/profile"

function App() {
  return (
    <Router>
      <Routes>
        {/* Login  */}
        <Route index exact element={<Login />} />
        <Route path="/reset" element={<Reset />} />

        {/* Super Operator  */}

          <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/form-users/:userId" element={<FormUsers />} />
        <Route path="/cages" element={<DataCages />} />
        <Route path="/cost" element={<DataCost />} />
        <Route path="/users-profile" element={<ProfileSuperOperator />} />

        {/* Operator  */}
        <Route path="/home" element={<Homes />} />
        <Route path="/manage-cages" element={<ManageKandang />} />
        <Route path="/detail-cages" element={<CageDetails />} />
        <Route path="/operator-profile" element={<ProfileOperator />} />

        {/* Investor  */}
        <Route path="/investor" element={<Investors />} />
        <Route path="/investor-cages" element={<InverstorCages />} />
        <Route path="/cages-detail" element={<DetailCages />} />
        <Route path="/investor-profile" element={<ProfileInvestor />} />

        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Router>
  )
}
export default App
