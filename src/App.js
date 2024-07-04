import Navbar from './Components/Navbar/nav';
import { createBrowserRouter , BrowserRouter , Route , Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/signUp';
import Login from './pages/Login/Login';
import Profile from './pages/UserProfile/Profile';
import Join from './pages/JoinNow/Join';



function App() {
   
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<SignUp />} />
        <Route path="/joinUs" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;