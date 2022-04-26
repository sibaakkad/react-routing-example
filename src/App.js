import './App.css';
import './css/style.css'
import * as React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AboutUs from './components/aboutUs';
import Home from './components/home';
import Products from './components/products';
import NotAuthorized from './components/notAuthorized';
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [user, setUser] = React.useState(null);

  const handleLogin = () => setUser({ id: '1', name: 'robin' });
  const handleLogout = () => setUser(null);
  return (
    <div className="App">
      {user ? (
          <button class="button" onClick={handleLogout}>Sign Out</button>
        ) : (
          <button class="button" onClick={handleLogin}>Sign In</button>
        )}
     <BrowserRouter>
     <Navigation/>
        <Routes>
          <Route path="/" element={<ProtectedRoute user={user}><Home /></ProtectedRoute>} />
          <Route path="about" element={<ProtectedRoute user={user}><AboutUs /></ProtectedRoute>} />
          <Route path="product" element={<ProtectedRoute user={user}><Products /></ProtectedRoute>} />
          <Route path="/401" element={<NotAuthorized />} />
          <Route path="*" element={<main style={{ padding: "1rem" }}>
            {/* burada yıldız "*" diğerlerini bulamazsan ehr ne olursa bununla eşleş demek.  */}
            <p>There' s nothing here: 404!!</p> </main>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export const Navigation = () => (
  <nav>
    <h1>Müzik Dükkanım</h1>
    <div class="container">
      <ul>
        <li><NavLink to="/">Ana Sayfa</NavLink></li>
        <li><NavLink to="/product">Ürünlerimiz</NavLink></li>
        <li><NavLink to="/about">Hakkımızda</NavLink></li>
      </ul>
    </div>
  </nav>
);
export default App;
