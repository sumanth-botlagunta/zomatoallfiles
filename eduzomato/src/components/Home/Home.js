import Topcover from "./Topcover";
import Quicksearch from "./Quicksearch";
import Quickapi from "./Quickapi";
import Footer from "../Footer";

function Home() {
  return (
    <div className="home">
      <Topcover />
      <Quicksearch />
      <Quickapi />
      <Footer />
    </div>
  );
}

export default Home;
