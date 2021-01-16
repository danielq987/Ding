import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Input from './Input.js'
import InputTag from './InputTags.js'


function Heading() {
  return (
    <div className="Heading-scroll">
      <div>
        {/* // if you want text to move faster you can insert more DINGS */}
        <h1 className="header1">DING DING DING</h1>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading></Heading>
        <Input></Input>
        <InputTag></InputTag>
      </header>
    </div>
  );
}


export default App;
