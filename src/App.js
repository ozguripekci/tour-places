import './App.css';
import Card from './components/card/Card';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import data from './helper/data';


const App = () => {
  return (
    <div className="App">
      <p> {'>>'} App.js is working</p>
      
      <Navbar/>
      <Header/>
      <Card places = {data}/>
    </div>
  );
}

export default App;
