import './App.css';

function WhichYear({year}) {
  return (
    <h3>Rok produkcji: {year}</h3>
  );
}


function App() {
  return (
    <div>
      <h1>Moje filmy</h1>

      <div className="filmy">
        <div className="film">
          <img src="/angry-birds-1.jpg" alt="Angry Birds 1" />
          <h2>Angry Birds 1</h2>
          <WhichYear year={2016} />
        </div>
        <div className="film">
          <img src="/angry-birds-2.jpg" alt="Angry Birds 2" />
          <h2>Angry Birds 2</h2>
          <WhichYear year={2019} />
        </div>
        <div className="film">
          <img src="/angry-birds-3.jpg" alt="Angry Birds 3" />
          <h2>Angry Birds 3</h2>
          <WhichYear year={2026}/>
        </div>
      </div>
    </div>
  );
}

export default App

