import './App.css';

function App() {
  return (
    <div>
      <h1>Moje filmy</h1>

      <div className="filmy">
        <div className="film">
          <img src="/angry-birds-1.jpg" alt="Angry Birds 1" />
          <h2>Angry Birds 1</h2>
          <h3>Rok produkcji: 2016</h3>
        </div>
        <div className="film">
          <img src="/angry-birds-2.jpg" alt="Angry Birds 2" />
          <h2>Angry Birds 2</h2>
          <h3>Rok produkcji: 2019</h3>
        </div>
        <div className="film">
          <img src="/angry-birds-3.jpg" alt="Angry Birds 3" />
          <h2>Angry Birds 3</h2>
          <h3>Rok produkcji: 2026</h3>
        </div>
      </div>
    </div>
  );
}

export default App

