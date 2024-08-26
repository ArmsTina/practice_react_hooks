import './App.css';
import Practice_useState from './hooks/Practice_useState';

function App() {
  return (
    <>
      <ol className="lists">
        <div>
          <li>useState</li>
          <Practice_useState/>
        </div>
        <div>
          <li>useEffect</li>
        </div>
      </ol>
    </>
  );
}

export default App;
