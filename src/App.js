import './App.css';
import Header from './header/header';
import Content from './content/section-1/content';
import Section2 from './content/section-2/section-2';
import Section3 from './content/section-3/section-3';
import InfoContact from './content/info-content/info-content';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Content/>
      <Section2/>
      <Section3/>
      <InfoContact/>

    </div>
  );
}

export default App;
