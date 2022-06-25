import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Collection from "./components/collection/collection";

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
        </main>
      </div>
    </>
  );
}

export default App;
