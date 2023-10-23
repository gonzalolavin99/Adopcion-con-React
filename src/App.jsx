
import './App.css'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App() {
  

  return (
    <>
   <Header title ="Adopta un  perrito"/>
<MyCard 
  imgDir="http://placekitten.com/g/200/300"
  dogName="Mike"
  />

  

    </>
  )
}

export default App
