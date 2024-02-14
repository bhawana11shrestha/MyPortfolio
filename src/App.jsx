
import styles from './App.module.css';
import { Hero } from './compontents/Hero/Hero';
import { Navbar } from './compontents/Navbar/Navbar';

function App() {
 

  return <div className={styles.App}> 
  <Navbar />
  <Hero />
  </div>;
    
}

export default App;
