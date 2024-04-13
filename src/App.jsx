import Card from "./Components/card";
import Cardmanager from "./Components/cardmanager";
import Nevbar from "./Components/nevbar";
import '@fontsource/roboto';
import Search from "./Components/search";
import FetchdataProvider from "./context/FetchdataContextProvider";

function App() {

  return (
    <FetchdataProvider>
      <Nevbar />
      <Search />
      <Cardmanager/>
    </FetchdataProvider>
  );
}

export default App;
