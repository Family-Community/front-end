import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./pages/signup";
import Main from "./pages/main";
import Mypage from "./pages/mypage";
import Profile from "./pages/profile";
import ProfileAdd from "./pages/profileAdd";
import ProfileEdit from "./pages/profileEdit";
import ProfileAuth from "./pages/profileAuth";
import Post from "./pages/post";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Signup />}></Route>
        <Route path={`/:familyCode`} element={<Main />}></Route>
        <Route path={`/mypage`} element={<Mypage />}></Route>
        <Route path={`/:family_code/profile`} element={<Profile />}></Route>
        <Route path={`/:family_code/profileAdd`} element={<ProfileAdd />}></Route>
        <Route path={`/profileEdit`} element={<ProfileEdit />}></Route>
        <Route path={`/:family_code/profileAuth`} element={<ProfileAuth />}></Route>
        <Route path={`/:family_code/post`} element={<Post />}></Route>
      </Routes>
    </Router>
  );
}

export default App;