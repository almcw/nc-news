import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/article/:article_id" element={<Article />} />
          <Route path="/articles/:topic_slug" element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
