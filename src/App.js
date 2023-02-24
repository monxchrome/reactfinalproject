import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {DetailsPage, E404Page, MainPage, MovieListPage} from "./pages";
import {User} from "./components/User/User";
import {SecurityPage} from "./pages/SecurityPage/SecurityPage";
import {SupportPage} from "./pages/SupportPage/SupportPage";
import {Test} from "./components/test/Test";
import {GenresList} from "./components/Genres/GenresList";
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
              <Route path={'/me'} element={<User/>}/>
              <Route path={'/me/security'} element={<SecurityPage/>}/>
              <Route path={'/me/support'} element={<SupportPage/>}/>
              <Route path={'/test'} element={<Test/>}/>
          </Route>

          <Route path={'/404'} element={<E404Page/>}/>

      </Routes>
    </div>
  );
}

export default App;
