import './App.css';

interface ToWhichYear {
  year_film?:number;
  title_film?:string;
}

interface ToWhichBook {
  title_book?:string;
  author_book?:string;
  year_book?:number;
}

function WhichYear({ year_film, title_film } : ToWhichYear) {
  return (
    <div className="film-info">
      <h2>{title_film}</h2>
      <p>Rok produkcji: {year_film}</p>
    </div>
  );
}

function WhichBook({ title_book, author_book, year_book } : ToWhichBook) {
  return (
    <div className="ksiazka-info">
      <h2>{title_book}</h2>
      <p>Autor: {author_book}</p>
      <p>Rok wydania: {year_book}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Moje filmy</h1>

      <div className="filmy">

        <div className="film">
          <img src="/angry-birds-1.jpg" alt="Angry Birds 1" />
          <WhichYear title_film="Angry Birds 1" year_film={2016} />
        </div>

        <div className="film">
          <img src="/angry-birds-2.jpg" alt="Angry Birds 2" />
          <WhichYear title_film="Angry Birds 2" year_film={2019} />
        </div>

        <div className="film">
          <img src="/angry-birds-3.jpg" alt="Angry Birds 3" />
          <WhichYear title_film="Angry Birds 3" year_film={2026} />
        </div>

      </div>

      <h1>Moje książki</h1>

      <div className="ksiazki">

        <div className="ksiazka">
          <img src="/lalka.jpg" alt="Lalka" />
          <WhichBook title_book="Lalka" author_book="Bolesław Prus" year_book={1887} />
        </div>

        <div className="ksiazka">
          <img src="/zbrodniaikara.jpg" alt="Zbrodnia i Kara" />
          <WhichBook title_book="Zbrodnia i Kara" author_book="Fiodor Dostojewski" year_book={1867} />
        </div>

        <div className="ksiazka">
          <img src="/dziady-cz3.jpg" alt="Dziady cz. III" />
          <WhichBook title_book="Dziady cz. III" author_book="Adam Mickiewicz" year_book={1860} />
        </div>

      </div>

    </div>
    
  );
}

export default App
