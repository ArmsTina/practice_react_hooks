import './App.css';
import Practice_useEffect from './hooks/Practice_useEffect';
import Practice_useState from './hooks/Practice_useState';
import {Routes, Route, Link} from 'react-router-dom';
import {HStack, VStack} from '@chakra-ui/react'

function App() {
  return (
    <>
      <HStack>
        <div>
          <nav><Link to="/usestate">useState</Link></nav>
        </div>
        <div>
          <nav><Link to="/useeffect">useEffect</Link></nav>
        </div>
      </HStack>
      <Routes><Route path="/usestate" element={<Practice_useState/>}/></Routes>
      <Routes><Route path="/useeffect" element={<Practice_useEffect/>}/></Routes>
    </>
  );
}

export default App;
