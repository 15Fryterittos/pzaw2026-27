import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from "react";

interface ToWhichFilm {
  year_film?:number;
  title_film?:string;
  image_film?:string;
  rating?:number;
}

interface ToWhichBook {
  title_book?:string;
  author_book?:string;
  year_book?:number;
  image_book?:string;
}

interface ToWhichAlbum {
  title_album?:string;
  year_albmum?:number;
  artist_name_album?:string;
  gen_album?:string;
  songa_album?: {title: string; duration: string}[];
  image_album?:string;
}

const films: ToWhichFilm[] = [
  { title_film: "Angry Birds 1", year_film: 2016, rating: 9, image_film: "/angry-birds-1.jpg"},

  { title_film: "Angry Birds 2", year_film: 2019, rating: 8, image_film: "/angry-birds-2.jpg"},

  { title_film: "Angry Birds 3", year_film: 2026, rating: 7, image_film: "/angry-birds-3.jpg"},

  {title_film: "Odlot", year_film: 2009, rating: 10, image_film: "/odlot.jpg"}
];

const books: ToWhichBook[] = [
  { title_book: "Lalka", author_book: "Bolesław Prus", year_book: 1887, image_book: "/lalka.jpg"},

  { title_book: "Zbrodnia i Kara", author_book: "Fiodor Dostojewski", year_book: 1867, image_book: "/zbrodniaikara.jpg"},

  { title_book: "Dziady cz. III", author_book: "Adam Mickiewicz", year_book: 1860, image_book: "/dziady-cz3.jpg"}
];

const albums: ToWhichAlbum[] = [
  {
    title_album: "Era47", artist_name_album: "OKI", gen_album: "Rap", year_albmum: 2025, image_album: "/era47.jpg", 
    songa_album: [
      { title: "WODA SODOWA", duration: "2:35" },
      { title: "NIEWOLNIK", duration: "2:03" },
      { title: "CERTIFIED LOVER", duration: "2:39" },
      { title: "SPRZEDAŁEM SIĘ", duration: "3:27" },
      { title: "PUK PUK PUK", duration: "2:35" },
      { title: "JEREMY SOCHAN SKIT", duration: "0:19" },
      { title: "JEREMY SOCHAN", duration: "2:25" },
      { title: "QUAD STUDIO FREESTYLE", duration: "2:11" },
      { title: "ILE LAT?", duration: "2:30" },
      { title: "JESTEŚMY ZA MŁODZI", duration: "3:12" },
      { title: "NA ZAWSZE MAŁOLAT", duration: "2:54" },
      { title: "OD ZERA", duration: "4:42" },
      { title: "JEŚLI CHCIAŁBYŚ TO MOŻESZ WPAŚĆ", duration: "2:20" },
      { title: "WRAK", duration: "3:23" },
      { title: "SEROTONINA", duration: "2:13" },
      { title: "ŻYCIE TO ZA MAŁO", duration: "2:18" },
      { title: "KAUCJA", duration: "4:01" },
      { title: "OK OK OK", duration: "2:28" },
      { title: "DOM", duration: "3:41" },
      { title: "AGENT47", duration: "2:47" }
    ]},
  {
    title_album: "Najdłuższe Wakacje Życia", artist_name_album: "Monday Waxie", gen_album: "Rap", year_albmum: 2025, image_album: "/najdluzsze_wakacje_zycia.jpg", 
    songa_album: [
      { title: "z ostatniej ławki", duration: "1:42" },
      { title: "rap shit", duration: "1:53" },
      { title: "bitch face", duration: "2:05" },
      { title: "ed, edd i eddy", duration: "1:53" },
      { title: "dance, dance, dance", duration: "2:05" },
      { title: "billie", duration: "2:04" }
    ]
  }
];


function WhichFilm({ year_film, title_film, image_film, rating }: ToWhichFilm) {

  function handleFilmClick() {
    console.log("Wybrano film: " + title_film);
  }

  function handleDetailsClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    console.log("Pokaż szczegóły dla " + title_film);
  }

  return (
    <div className="card h-100" onClick={handleFilmClick}>
      <img src={image_film} className="card-img-top" alt={title_film}/>
      <div className="card-body">
        <h2 className="card-title">{title_film}</h2>
        <h3 className="card-text">Rok produkcji: {year_film}</h3>
        <button className="btn btn-primary" onClick={handleDetailsClick}>
          Pokaż szczegóły
        </button>
        <h4 className="card-text">Ocena filmu: {rating}</h4>
        {rating! >= 8 && ( <p className="alert alert-success">Polecany</p> )}
      </div>
    </div>
  );
}


function WhichBook({ title_book, author_book, year_book, image_book } : ToWhichBook) {
  return (
    <div className="card h-100">
      <img src={image_book} className="card-img-top" alt={title_book} />
      <div className="card-body">
        <h2 className="card-title">{title_book}</h2>
        <p className="card-text">Autor: {author_book}</p>
        <p className="card-text">Rok wydania: {year_book}</p>
        {year_book! < 2000 && ( <p className="card-text">Klasyka</p> )}
      </div>
    </div>
  );
}

function Album({ title_album, year_albmum, artist_name_album, gen_album, songa_album, image_album}: ToWhichAlbum) {

  function handleSongClick(albums_song: string) {
    console.log("Wybrano utwór: " + albums_song + " z " + title_album);
  }

    return (
      <div className="card h-100">
      <img src={image_album} className="card-img-top" alt={title_album} />
      <div className="card-body">
        <h2 className="card-title">{title_album}</h2>
        <h4>{artist_name_album}</h4>
        <h5 className="card-text">Gatunek: {gen_album}</h5>
        <h5 className="card-text">Rok: {year_albmum}</h5>
      <div>
        <h3>Piosenki:</h3>

        {(!songa_album || songa_album.length === 0) && (
          <div className="alert alert-warning">
            Brak piosenek
          </div>
        )}

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Numer</th>
              <th>Tytuł</th>
              <th className="text-end">Czas trwania</th>
            </tr>
          </thead>
          <tbody>
            {songa_album?.map((song, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td onClick={() => handleSongClick(song.title)}>{song.title}</td>
                <td className="text-end">{song.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
    );
}

function App() {

  const [filmsOpen, setFilmsOpen] = useState(true);
  const [booksOpen, setBooksOpen] = useState(true);
  const [albumsOpen, setAlbumsOpen] = useState(true);
  const [filmsAfter2010Open, setFilmsAfter2010Open] = useState(true);
  const [booksFilteredOpen, setBooksFilteredOpen] = useState(true);
  const [albumWithMostSongsOpen, setAlbumWithMostSongsOpen] = useState(true);
  const [movieSearch, setMovieSearch] = useState("");
  const [bookSearch, setBookSearch] = useState("");
  const [albumSearch, setAlbumSearch] = useState("");

  films.sort((first, second) => first.title_film!.localeCompare(second.title_film!));

  books.sort((first, second) => first.title_book!.localeCompare(second.title_book!));

  albums.sort((first, second) => first.title_album!.localeCompare(second.title_album!));

  const FilmsAfter2010 = films.filter((film) => film.year_film! > 2010);
  const BooksFiltered = books.toSorted((first, second) => second.year_book! - first.year_book!);

  let album_with_most_songs = albums[0];

  for (let album of albums) {
    if (album.songa_album!.length > album_with_most_songs.songa_album!.length) {
      album_with_most_songs = album;
    }
  }

  return (
     <div className="container">
      <input type="text" className="form-control" id="movie-search" placeholder="Wpisz tytuł" value={movieSearch} onChange={(event) => {
        setMovieSearch(event.target.value); 
        console.log(event.target.value);
      }}/>
      <p>{movieSearch}</p>

      <h1 onClick={() => setFilmsOpen(!filmsOpen)}>
        {filmsOpen ? "⏷" : "⏵"} Moje filmy
      </h1>

      {filmsOpen && (
        <div className="row g-3">
          {films.map((films, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <WhichFilm title_film={films.title_film} year_film={films.year_film} image_film={films.image_film} rating={films.rating}/>
            </div>
          ))}
        </div>
      )}

      
      <input type="text" className="form-control" id="book-search" placeholder="Wpisz tytuł" value={bookSearch} onChange={(event) => {
        setBookSearch(event.target.value);
        console.log(event.target.value);
      }}/>
      <p>{bookSearch}</p>

      <h1 onClick={() => setBooksOpen(!booksOpen)}>
        {booksOpen ? "⏷" : "⏵"} Moje książki
      </h1>

      {booksOpen && (
        <div className="row g-3">
          {books.map((book, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <WhichBook title_book={book.title_book} author_book={book.author_book} year_book={book.year_book} image_book={book.image_book}/>
            </div>
          ))}
        </div>
      )}

      <input type="text" className="form-control" id="album-search" placeholder="Wpisz tytuł" value={albumSearch} onChange={(event) => {
        setAlbumSearch(event.target.value);
        console.log(event.target.value);
      }}/>
      <p>{albumSearch}</p>

      <h1 onClick={() => setAlbumsOpen(!albumsOpen)}>
        {albumsOpen ? "⏷" : "⏵"} Muzyka
      </h1>

      {albumsOpen && (
        <div className="row g-3">
          {albums.map((album, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <Album title_album={album.title_album} artist_name_album={album.artist_name_album} gen_album={album.gen_album}
                      year_albmum={album.year_albmum} songa_album={album.songa_album} image_album={album.image_album}/>
            </div>
          ))}
        </div>
      )}

      <h1 onClick={() => setFilmsAfter2010Open(!filmsAfter2010Open)}>
        {filmsAfter2010Open ? "⏷" : "⏵"} Filmy po 2010
      </h1>

      {filmsAfter2010Open && (
        <div className="row g-3">
          {FilmsAfter2010.map((film, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <WhichFilm title_film={film.title_film} year_film={film.year_film} image_film={film.image_film} rating={film.rating}/>
            </div>
          ))}
        </div>
      )}

      <h1 onClick={() => setBooksFilteredOpen(!booksFilteredOpen)}>
        {booksFilteredOpen ? "⏷" : "⏵"} Książki od najnowszej
      </h1>

      {booksFilteredOpen && (
        <div className="row g-3">
          {BooksFiltered.map((book, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <WhichBook title_book={book.title_book} author_book={book.author_book} year_book={book.year_book} image_book={book.image_book}/>
            </div>
          ))}
        </div>
      )}

      <h1 onClick={() => setAlbumWithMostSongsOpen(!albumWithMostSongsOpen)}>
        {albumWithMostSongsOpen ? "⏷" : "⏵"} Album z największą liczbą utworów
      </h1>

      {albumWithMostSongsOpen && (
        <div className="row g-3">
          <div className="col-12 col-lg-6">
            <Album title_album={album_with_most_songs.title_album} artist_name_album={album_with_most_songs.artist_name_album} gen_album={album_with_most_songs.gen_album}
                  year_albmum={album_with_most_songs.year_albmum} songa_album={album_with_most_songs.songa_album} image_album={album_with_most_songs.image_album}/>
          </div>
        </div>
      )}

    </div>
    
  );
}

export default App
