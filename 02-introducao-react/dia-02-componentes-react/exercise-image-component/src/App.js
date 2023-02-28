import './App.css';
import Image from './Image';
import CatImg from './cat.jpg'

function App() {
  return (
    <Image source={ CatImg } alternativeText='Cute cat staring' />
  );
}

export default App;
