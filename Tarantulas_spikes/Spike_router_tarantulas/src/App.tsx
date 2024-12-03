import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import NoMatchPage from "./pages/NoMatchPage";
import SingleCharacterPage from "./pages/SingleCharacterPage";
import Artists from "./pages/Artists";
import Producers from "./pages/Producers";
import Team from "./pages/Team";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<NoMatchPage />}>
        <Route index element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route
          path="characters/:characterId"
          element={<SingleCharacterPage />}
        />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />}>
          <Route path="artists" element={<Artists />} />
          <Route path="producers" element={<Producers />} />
        </Route>
        {/* <Route path="*" element={<NoMatchPage />} /> */}
      </Route>
    )
  );

  return (
    <>
      <h1>Rick & Morty with TS</h1>

      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
