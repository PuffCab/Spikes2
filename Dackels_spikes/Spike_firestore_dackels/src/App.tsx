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
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Test from "./pages/Test";
import NoMatchPage from "./pages/NoMatchPage";
import DetailsPage from "./pages/DetailsPage";
import Team from "./pages/Team";
import Scripts from "./pages/Scripts";
import Producers from "./pages/Producers";
import TeamLayout from "./components/TeamLayout";
import { CharactersContextProvider } from "./context/CharactersContext";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/chat";
const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NoMatchPage />}>
      <Route
        index
        element={
          <CharactersContextProvider>
            <Home />
          </CharactersContextProvider>
        }
      />
      <Route
        path="characters"
        element={
          <ProtectedRoute>
            <Characters />
          </ProtectedRoute>
        }
      />
      <Route path="characters/:characterName" element={<DetailsPage />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route
        path="chat"
        element={
          <ProtectedRoute>
            <Chat />
            //{" "}
          </ProtectedRoute>
        }
      />

      <Route path="about" element={<About />}>
        <Route path="test" element={<Test />} />
      </Route>
      <Route
        path="team"
        element={
          <CharactersContextProvider>
            <TeamLayout />
          </CharactersContextProvider>
        }
      >
        <Route index element={<Team />} />
        <Route path="scripts" element={<Scripts />} />
        <Route path="producers" element={<Producers />} />
      </Route>
      {/* <Route path="*" element={<NoMatchPage />} /> */}
    </Route>
  )
);
function App() {
  return (
    <>
      <h1>Rick & Morty with TS</h1>
      <AuthContextProvider>
        {/* <CharactersContextProvider> */}
        <RouterProvider router={router} />
        {/* </CharactersContextProvider> */}
      </AuthContextProvider>
    </>
  );
}

export default App;
