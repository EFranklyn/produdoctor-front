import logo from './logo.svg';
import './App.css';
import Sidebar from './views/sidebar/sidebar';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { urls } from './configs/urls';
import { createGlobalStyle } from 'styled-components';


function App() {
  return (
    <div style={{display:'flex', width:'100%'}}>
      <Sidebar />
      <main >
        <Routes>
          {urls.map((item,index)=>(
          <>
            <Route path={item.path} element={item.component} />
            
            {item.subComponents?.map((subItem, index)=>(
            <Route path={subItem.to} element={subItem.component} />
  
          ))}
          </>
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
