import './App.css';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {DetailsPage, E404Page, MainPage, MovieListPage, SecurityPage, SupportPage} from "./pages";
import {
    Adventures,
    Animations,
    Comedies,
    Crimes,
    Documentaries,
    Dramas,
    Families,
    Fantasies,
    GenresList,
    Histories,
    Horrors, Loading,
    Musics,
    Mysteries,
    Romances,
    ScienceFiction,
    Thrillers,
    TvMovies,
    User,
    Wars,
    Westerns
} from "./components";

import {Actions} from "./components/Genres/Actions";

function App() {
  return (
    <div>
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route path={'/'} element={<MainPage/>}/>
              <Route path={'/movies'} element={<MovieListPage/>}/>
              <Route path={'movies/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres'} element={<GenresList/>}/>
              <Route path={'/genres/action'} element={<Actions/>}/>
              <Route path={'/genres/action/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/adventure'} element={<Adventures/>}/>
              <Route path={'/genres/adventure/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/animation'} element={<Animations/>}/>
              <Route path={'/genres/animation/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/comedy'} element={<Comedies/>}/>
              <Route path={'/genres/comedy/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/crime'} element={<Crimes/>}/>
              <Route path={'/genres/crime/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/documentary'} element={<Documentaries/>}/>
              <Route path={'/genres/documentary/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/drama'} element={<Dramas/>}/>
              <Route path={'/genres/drama/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/family'} element={<Families/>}/>
              <Route path={'/genres/family/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/fantasy'} element={<Fantasies/>}/>
              <Route path={'/genres/fantasy/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/history'} element={<Histories/>}/>
              <Route path={'/genres/history/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/horror'} element={<Horrors/>}/>
              <Route path={'/genres/horror/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/music'} element={<Musics/>}/>
              <Route path={'/genres/music/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/mystery'} element={<Mysteries/>}/>
              <Route path={'/genres/mystery/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/romance'} element={<Romances/>}/>
              <Route path={'/genres/romance/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/science-fiction'} element={<ScienceFiction/>}/>
              <Route path={'/genres/science-fiction/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/tv-movie'} element={<TvMovies/>}/>
              <Route path={'/genres/tv-movie/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/thriller'} element={<Thrillers/>}/>
              <Route path={'/genres/thriller/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/war'} element={<Wars/>}/>
              <Route path={'/genres/war/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/genres/western'} element={<Westerns/>}/>
              <Route path={'/genres/western/:movieID'} element={<DetailsPage/>}/>

              <Route path={'/me'} element={<User/>}/>
              <Route path={'/me/security'} element={<SecurityPage/>}/>
              <Route path={'/me/support'} element={<SupportPage/>}/>

              <Route path={'/loading'} element={<Loading/>}/>
          </Route>

          <Route path={'/404'} element={<E404Page/>}/>

      </Routes>
    </div>
  );
}

export default App;
