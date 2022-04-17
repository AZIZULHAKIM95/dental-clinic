import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header'
import Home from './Pages/Home/Home/Home'
import Blogs from './Pages/Blogs/Blogs'
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
