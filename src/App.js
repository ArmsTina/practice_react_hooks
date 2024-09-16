import './App.css';
import Practice_useEffect1 from './hooks/Practice_useEffect1';
import Practice_useState from './hooks/Practice_useState';
import {Routes, Route, Link} from 'react-router-dom';
import {HStack} from '@chakra-ui/react'
import Practice_useEffect2 from './hooks/Practice_useEffect2';
import Practice_useRef2 from './hooks/Practice_useRef2';
import Practice_useRef1 from './hooks/Practice_useRef1';
import Practice_notuseContext from './notContext_Template/Practice_notuseContext';
import Practice_useContext from './hooks/Practice_useContext';
import Practice_useMemo1 from './hooks/Practice_useMemo1';
import Practice_useMemo2 from './hooks/Practice_useMemo2';

// 새로고침이 페이지 전체를 렌더링 하지만, 리액트를 사용시 변경된 부분만 렌더링 한다.
function App() {
  return (
    <>
      <HStack>
        <nav><Link to="/usestate">useState</Link></nav>
        <nav><Link to="/useeffect1">useEffect 1</Link></nav>
        <nav><Link to="/useeffect2">useEffect 2</Link></nav>
        <nav><Link to="/useref1">useRef 1</Link></nav>
        <nav><Link to="/useref2">useRef 2</Link></nav>
        <nav><Link to="/notusecontext">No useContext</Link></nav>
        <nav><Link to="/usecontext">useContext</Link></nav>
        <nav><Link to="/usememo1">useMemo1</Link></nav>
        <nav><Link to="/usememo2">useMemo2</Link></nav>
      </HStack>
      <Routes><Route path="/usestate" element={<Practice_useState/>}/></Routes>
      <Routes><Route path="/useeffect1" element={<Practice_useEffect1/>}/></Routes>
      <Routes><Route path="/useeffect2" element={<Practice_useEffect2/>}/></Routes>
      <Routes><Route path="/useref1" element={<Practice_useRef1/>}/></Routes>
      <Routes><Route path="/useref2" element={<Practice_useRef2/>}/></Routes>
      <Routes><Route path="/notusecontext" element={<Practice_notuseContext/>}/></Routes>
      <Routes><Route path="/usecontext" element={<Practice_useContext/>}/></Routes>
      <Routes><Route path="/usememo1" element={<Practice_useMemo1/>}></Route></Routes>
      <Routes><Route path="/usememo2" element={<Practice_useMemo2/>}></Route></Routes>
    </>
  );
}

export default App;
