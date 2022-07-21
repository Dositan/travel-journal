import Navbar from "./components/Navbar";
import Places from "./components/Places";
import data from "./data.json";

function App() {
  const places = data.map((item) => {
    return <Places key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <section className="places-list">{places}</section>
    </div>
  );
}

export default App;
