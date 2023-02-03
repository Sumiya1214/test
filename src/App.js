import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from "./container/about"

function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default App


























// import Home from './container/dashboard/home';
// import Dashboard from "./container/dashboard/dashboard";
// import { BrowserRouter,Routes,Route } from 'react-router-dom';

// function App() {
//   return (
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/admin/dashboard" element={<Dashboard/>}/>
//         </Routes>
//     </BrowserRouter>
    
//   );
// }
// export default App;
