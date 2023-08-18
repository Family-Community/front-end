import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./pages/signup";
import Main from "./pages/main";
import Mypage from "./pages/mypage";
import Profile from "./pages/profile";
import ProfileAdd from "./pages/profileAdd";
import ProfileEdit from "./pages/profileEdit";
import ProfileAuth from "./pages/profileAuth";
import Posting from "./pages/posting";
import PostingUpdate from "./pages/postingUpdate";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Signup />}></Route>
        <Route path={`/:familyCode`} element={<Main />}></Route>
        <Route path={`/:familyCode/:postMemberId/:memberId/:me`} element={<Mypage />}></Route>
        <Route path={`/:familyCode/profile`} element={<Profile />}></Route>
        <Route path={`/:familyCode/profileAdd`} element={<ProfileAdd />}></Route>
        <Route path={`/:familyCode/:memberId/profileEdit`} element={<ProfileEdit />}></Route>
        <Route path={`/:familyCode/profileAuth`} element={<ProfileAuth />}></Route>
        <Route path={`/:familyCode/posting`} element={<Posting />}></Route>
        <Route path={`/:familyCode/:memberId/:postId/update`} element={<PostingUpdate />}></Route>
      </Routes>
    </Router>
  );
}

export default App;