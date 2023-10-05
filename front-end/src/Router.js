import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main'
import CreateProd from './components/CreateProd'
import DisplayProd from './components/DisplayProd'
import Register from './components/Register'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
              
        </Route>
        <Route path="/CreateProd" element={<CreateProd />}>
              
        </Route>
        <Route path="/DisplayProd" element={<DisplayProd />}>
              
        </Route>
        <Route path="/Register" element={<Register />}>
              
        </Route>
        <Route path="/NotFound" element={<NotFound />}>
              
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
