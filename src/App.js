import './App.css';
import Practice_useEffect1 from './hooks/Practice_useEffect1';
import Practice_useState from './hooks/Practice_useState';
import {Routes, Route, Link} from 'react-router-dom';
import {HStack} from '@chakra-ui/react'
import Practice_useEffect2 from './hooks/Practice_useEffect2';

function App() {
  return (
    <>
      <HStack>
        <div>
          <nav><Link to="/usestate">useState</Link></nav>
        </div>
        <div>
          <nav><Link to="/useeffect1">useEffect 1</Link></nav>
        </div>
        <div>
          <nav><Link to="/useeffect2">useEffect 2</Link></nav>
        </div>
      </HStack>
      <Routes><Route path="/usestate" element={<Practice_useState/>}/></Routes>
      <Routes><Route path="/useeffect1" element={<Practice_useEffect1/>}/></Routes>
      <Routes><Route path="/useeffect2" element={<Practice_useEffect2/>}/></Routes>
    </>
  );
}

export default App;
