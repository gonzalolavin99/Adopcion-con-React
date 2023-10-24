// App.js
import React from "react";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import "./index.css"; // Importa tus estilos CSS

function App() {
  return (
    <>
      <Header title="Adopta un perrito" />
      <div className="card-container">
        <MyCard
          className="my-card"
          imgDir="https://placedog.net/400/556?id=17"
          dogName="Mike"
          dogCap="Mike es un perro amigable y juguetón que adora los paseos y jugar a buscar la pelota."
          backgroundColor="secondary" // Propiedad backgroundColor
          textoBadge="Labrador" // Propiedad textoBadge
        />
        <MyCard
          className="my-card"
          imgDir="https://placedog.net/400/258?id=56"
          dogName="Luna"
          dogCap="Luna es una perrita cariñosa y tranquila que disfruta de la compañía de la familia."
          backgroundColor="primary"
          textoBadge="Pug"
        />
        <MyCard
          className="my-card"
          imgDir="https://placedog.net/400/440?id=61"
          dogName="Buddy"
          dogCap="Buddy es un perro inteligente y activo que adora los desafíos mentales y físicos."
          backgroundColor="danger"
          textoBadge="Basset hound"
        />
        <MyCard
          className="my-card"
          imgDir="https://placedog.net/1000/563?id=18"
          dogName="Coco"
          dogCap="Coco es un perro cariñoso y dulce que se lleva bien con niños y otros animales."
          backgroundColor="success"
          textoBadge="Husky Siberiano"
        />
      </div>
     <Footer></Footer>
    </>
  );
}

export default App;
