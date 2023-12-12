import './css/base.sass';
import Header from './components/Header'
import BaseBlock from './components/BaseBlock'
import AdditionalBlock from './components/AdditionalBlock'
import Total from './components/Total';


function App() {
  return (
    <div className="App">
      <Header />
      <BaseBlock />
      <AdditionalBlock />
      
      <Total />

    </div>
  );
}

export default App;

