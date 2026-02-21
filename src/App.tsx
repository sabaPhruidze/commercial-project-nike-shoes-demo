import { Footer } from "./sections/index";
import { type AppSection, APP_SECTIONS } from "./config/sectionsConfig";
import Nav from "./components/Nav";

const App = () => (
  <div className="relative overflow-x-hidden">
    <header>
      <Nav />
    </header>
    <main id="main-content">
      {APP_SECTIONS.map((s: AppSection) => (
        <section key={s.id} id={s.id} className={s.className}>
          {s.element}
        </section>
      ))}
    </main>
    <footer className="padding-x padding-t pb-8 bg-black">
      <Footer />
    </footer>
  </div>
);

export default App;
