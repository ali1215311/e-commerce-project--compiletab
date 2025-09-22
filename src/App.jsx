import { Route, Routes } from "react-router";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* User Layout */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route>{/* Amdin Layout */}</Route>
      </Routes>
      <Toaster position="top-right" richColors closeButton />
    </>
  );
};

export default App;
