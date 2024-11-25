

import { Routes, Route } from "react-router-dom";

// importar vistas
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import CustomNavbar from "./components/Navbar";

import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import Tienda from "./pages/Tienda";
import Carrito from "./pages/Carrito";

const App = () => {
  return (
    <>
      <CustomNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/cart" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Ruta para manejar errores */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
