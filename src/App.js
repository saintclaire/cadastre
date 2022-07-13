import './App.css';
import Home from './pages/home/Home';
// import ReactDOM from "react-dom/client";
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
    <Routes>
     <Route>
       <Route index element={<Home/>}/>
       <Route path='login' element={<Login/>}/>
       <Route index element={<List/>}/>
       <Route path=':userId' element={<Single/>}/>
       <Route path='new' element={<New/>}/>

     </Route>
     {/* <Route path='product'>
     <Route index element={<Home/>}/>
       <Route path='login' element={<Login/>}/>
       <Route index element={<List/>}/>
       <Route path=':userId' element={<Single/>}/>
       <Route path='new' element={<New/>}/>

     </Route> */}
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
