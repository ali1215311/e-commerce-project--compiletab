import { Route, Routes } from "react-router";
import UserLayout from "./components/Layout/UserLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        {/* User Layout */}
      </Route>

      <Route>{/* Amdin Layout */}</Route>
    </Routes>
  );
};

export default App;
