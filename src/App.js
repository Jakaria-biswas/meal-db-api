import { Route, Routes } from 'react-router-dom';
import './App.css';
import Find from './components/Find/Find';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';
import NotMatch from './components/NotMatch/NotMatch';

function App() {
  return (
    <div>
          <Header></Header>
           <Routes>
               <Route path="/"  element={<Foods/>}></Route>
               <Route path="/find" element={<Find/>}></Route>
               <Route path="*" element={<NotMatch/>}></Route>
           </Routes>
    </div>
  );
}

export default App;
