import './App.css';

interface ToWhichFilm {
  year_film?:number;
  title_film?:string;
  image_film?:string;
  rating_film?:number;
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
  { title_film: "Angry Birds 1", year_film: 2016, rating_film: 6/7, image_film: "/angry-birds-1.jpg"},

  { title_film: "Angry Birds 2", year_film: 2019, rating_film: 67/76, image_film: "/angry-birds-2.jpg"},

  { title_film: "Angry Birds 3", year_film: 2026, rating_film: 676/67, image_film: "/angry-birds-3.jpg"}
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

function WhichFilm({ year_film, title_film, image_film, rating_film } : ToWhichFilm) {
  return (
    <div className="film-info">
      <img src={image_film} alt={title_film} />
      <div className="film-info">
        <h2>{title_film}</h2>
        <h5>Rok produkcji: {year_film}</h5>
        <h6>Ocena filmu: {rating_film}</h6>
      </div>
    </div>
  );
}

function WhichBook({ title_book, author_book, year_book, image_book } : ToWhichBook) {
  return (
    <div className="ksiazka-info">
      <img src={image_book} alt={title_book} />
      <h2>{title_book}</h2>
      <p>Autor: {author_book}</p>
      <p>Rok wydania: {year_book}</p>
    </div>
  );
}

function Album({ title_album, year_albmum, artist_name_album, gen_album, songa_album, image_album}: ToWhichAlbum) {
    return (
      <div className='album_info'>
        <img src={image_album} alt={title_album} />
        <h2>{title_album}</h2>
        <h4>{artist_name_album}</h4>
        <h5>Gatunek: {gen_album}</h5>
        <h6>Rok: {year_albmum}</h6>
        <div>
          <h3>Piosenki:</h3>
          <ol>
            {songa_album?.map((song, index) => (
              <li key={index}>{song.title} ({song.duration})</li>
            ))}
          </ol>
        </div>
      </div>
    );
}

function App() {

  const FilmsAfter2010 = films.filter((film) => film.year_film! > 2010);
  const BooksFiltered = books.toSorted((first, second) => first.year_book! - second.year_book!);

  return (
    <div>
      <h1>Moje filmy</h1>

      <div className="filmy">
        {films.map((films, index) => (
          <div className='film'>
            <WhichFilm key={index} title_film={films.title_film} year_film={films.year_film} image_film={films.image_film} rating_film={films.rating_film}/>
          </div>
        ))}
      </div>

      
      <h1>Moje książki</h1>

      <div className="ksiazki">
        {books.map((book, index) => (
          <div className="ksiazka" key={index}>
            <WhichBook title_book={book.title_book} author_book={book.author_book} year_book={book.year_book} image_book={book.image_book}/>
          </div>
        ))}
      </div>


      <h1>Muzyka</h1>

      <div className="albumy">
        {albums.map((album, index) => (
          <div className="album" key={index}>
            <Album title_album={album.title_album} artist_name_album={album.artist_name_album} gen_album={album.gen_album} year_albmum={album.year_albmum} songa_album={album.songa_album} image_album={album.image_album}/>
          </div>
        ))}
      </div>

      <h1>Filmy po 2010:</h1>

      <div className="filmy">
        {FilmsAfter2010.map((film, index) => (
          <div className="film" key={index}>
            <WhichFilm title_film={film.title_film} year_film={film.year_film} image_film={film.image_film} rating_film={film.rating_film}/>
          </div>
        ))}
      </div>

      <h1>Książki od najstarszej:</h1>

      <div className="ksiazki">
        {BooksFiltered.map((book, index) => (
          <div className="ksiazka" key={index}>
            <WhichBook title_book={book.title_book} author_book={book.author_book} year_book={book.year_book} image_book={book.image_book}/>
          </div>
        ))}
      </div>

    </div>
    
  );
}

export default App
