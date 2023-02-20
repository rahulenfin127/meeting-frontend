import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import ProtectedRoute from "./components/Navigation/ProtectedRoute/ProtectedRoute"
import Login from "./components/Users/Login/Login";
import Register from "./components/Users/Register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';

import Admin from "./components/AdminPage/AdminPage";
import AdminRoute from "./components/Navigation/ProtectedRoute/AdminProtectedRoute"
import CreateMeeting from "./components/Meeting/CreateMeetingPage";
import MeetingListPage from "./components/Meeting/MeetingListPage";
//admin


//logged in user


function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* admin */}

        <Route exact path="/admin" element={
          <AdminRoute>
            <Admin />
            </AdminRoute>
        } />

        {/* logged in user */}


        <Route exact path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        <Route exact path="/create-meeting" element={<CreateMeeting/>}/>
        <Route exact path="/meeting-list" element={<MeetingListPage/>}/>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Navigate replace to="/login"/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
