import './App.css';
//import Header from './component/header/header';
import PostView from './component/postview/postview';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landing from './component/Landingpage/landing';


function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Landing/>}/>
  <Route path="/postview" element={<PostView/>}/>
  </Routes></BrowserRouter>
</>      
  );
}

export default App;
