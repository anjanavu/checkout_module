import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     </Routes>
    </>
  );
}

export default App;
