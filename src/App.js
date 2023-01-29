import "./App.scss";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/navigation";
import About from "./pages/About";
import Article from "./pages/Article";

const Shop = () => {
  return <h1>Shop page</h1>;
};

const NoPage = () => {
  return <h1>This page is not found</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="article/:id" element={<Article />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
