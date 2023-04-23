import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Card from './Card.jsx'
import data from './data.jsx'

function App() {
  const generateCard = data.map((place, index) => {
    return (
      <div key={place.id}>
        <Card {...place} />
        {index !== data.length - 1 && <hr className='line'/>}
      </div>
    );
  });

  return (
    <div className="App">
      <Header />
      {generateCard}
    </div>
  );
}

export default App
