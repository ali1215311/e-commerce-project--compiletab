import { Route, Routes } from "react-router";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        {/* User Layout */}
        <Route index element={<Home />} />
      </Route>

      <Route>{/* Amdin Layout */}</Route>
    </Routes>
  );
};

export default App;
