import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Collection from "./components/collection/collection";
import Choose from "./components/choose/choose";
import Works from "./components/works/works";
import Footer from "./components/footer/footer";

// ----> Scss
import "./assets/Scss/container.scss";
import "./assets/Scss/general.scss";
import "./assets/Scss/fonts.scss";

function App() {
  return (
    <>
      <div className="container">
        <header className="site__header">
          <Header />
        </header>
        <main class="site__main">
          <Hero />
          <Collection />
          <Choose />
          <Works />
        </main>
        <footer class="site__footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
