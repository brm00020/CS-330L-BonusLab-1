import './App.css';
import Navbar from './Navbar';
import CustomCard from './Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 330L</h1>
      <h2>Section - 011</h2>
      <p>WVU ID: 800407787</p>
      <p>Hi I am Benjamin Marsh</p>
      <CustomCard />
    </div>
  );
}

export default App;