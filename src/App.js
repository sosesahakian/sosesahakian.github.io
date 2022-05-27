import './App.css';
import Contact from './components/Contact';
import Info from './components/Info';
import Skills from './components/Skills';
import AboutMe from './components/SmallAbout';
import Work from './components/Work';

function App() {
  return (
    <div className="App overflow-hidden">
      <Info />
      <AboutMe />
      <Work />
      <Skills />
      <Contact />
    </div>
    
  );
}

export default App;
