import { useEffect } from 'react'
import * as C from './App.styles'
import { Character } from './components/Character';
import { useCaracter } from './hooks/useCaracter'

const App = () =>{

  const char = useCaracter();
  
  useEffect(()=>{
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent)=>{
    switch(e.code){
      case 'KeyA':
      case 'ArrowLeft':  
        char.moveLeft();
      break;
      case 'KeyW':
      case 'ArrowUp':  
        char.moveUp();
      break;
      case 'KeyD':
      case 'ArrowRight':  
        char.moveRight();
      break;
      case 'KeyS':
      case 'ArrowDown':  
        char.moveDown()
      break;
    }
  }

  return(
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} />
      </C.Map>
    </C.Container>
  );
}

export default App;