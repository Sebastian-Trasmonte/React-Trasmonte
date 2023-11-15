import Navbar from "./components/Navbar/navbar"
import ItemListContainer from "./components/Body/ItemListContainer"

function App() {
  return (
    <>
      <div className="Navbar">
        <Navbar />
      </div>
      <body>
        <ItemListContainer saludo="Hola, bienvenido a mi App!!" />
      </body>
    </>
  )

}

export default App;