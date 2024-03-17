import BackgroundHeading from "./components/BackgroundHeading";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { MainContext } from "./contexts/Context";

function App() {
  return (
    <>
      <MainContext>
      <BackgroundHeading />
      <main>
        <Header  />
        <ItemList
        
        />
        <Sidebar
      
        />
      </main>
      <Footer />
      </MainContext>
    </>
  );
}

export default App;
