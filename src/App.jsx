import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Card from './Card.jsx'
import data from './data.jsx'

function App() {
  const generate = data.map(place => {
    return <Card 
      key={place.id}
      {...place}
      />
      
  }) 

  return (
    <div className="App">
      <Header/>
      {generate}
      {/* <Card/> */}
    </div>
  )
}

export default App
