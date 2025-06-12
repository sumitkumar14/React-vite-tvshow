import { Routes, Route } from "react-router-dom";
import Home from "@/components/Home";
import About from "@/components/About";
import ShowTvSeries from "@/Views/ShowTvseries";
import ShowTvSeriesDetails from "@/Views/ShowTvSeriesDetails";
import Login from "@/components/Login";
import Signup from "@/components/Signup"
import ProtectedRoute from "@/components/ProtectedRoute";

const AppRoutes = ({ auth }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<ProtectedRoute auth={auth}><ShowTvSeries /></ProtectedRoute>} />
      <Route path="/ShowTvSeriesDetails/:id" element={<ProtectedRoute auth={auth}><ShowTvSeriesDetails /></ProtectedRoute>} />
      <Route path="/home" element={<ProtectedRoute auth={auth}><Home /></ProtectedRoute>} />
      <Route path="/about" element={<ProtectedRoute auth={auth}><About /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;