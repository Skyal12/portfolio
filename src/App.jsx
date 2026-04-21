//Views
import Homepage from "./assets/views/homepage";

//Comps
import ErrorBoundary from "./assets/comp/error.jsx";
import { LanguageProvider } from "./assets/utils/langue.jsx";
import Cursor from "./assets/comp/cursor";
import BackTop from "./assets/comp/back-top";
import CoordonneeX from "./assets/comp/coordonneeX";
import CoordonneeY from "./assets/comp/coordonneeY";
import Loader from "./assets/comp/loader.jsx";

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Loader />
        <Cursor />
        <BackTop />
        <CoordonneeX />
        <CoordonneeY />
        <Homepage />
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
