import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [mousePos, setMousePos] = useState({});
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return (
    <div className="App" style={{position: "relative"}}>
      
      <div style={{position: "absolute", top:`${mousePos.y}px`, left: `${mousePos.x}px`, cursor:"pointer"}}><div>
      You are at position{' '}
      <b>
        ({mousePos.x}, {mousePos.y})
      </b></div>
    </div>
    </div>
  );
}

export default App;
