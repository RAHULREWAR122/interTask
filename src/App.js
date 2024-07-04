import Navbar from './Components/Navbar/nav';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import SignUp from "./pages/SignUp/signUp.jsx"
import Join from "./pages/JoinNow/Join.jsx"
import Login from "./pages/Login/Login.jsx"
import Profile from "./pages/UserProfile/Profile.jsx"

function App() {
   
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<SignUp />} />
          <Route path="joinUs" element={<Join />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;