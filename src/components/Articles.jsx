import { useEffect, useState } from "react";
import "./Articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://almcw-nc-news.herokuapp.com/api/articles")
      .then((res) => res.json())
      .then((res) => setArticles(res.articles));
  }, []);
  let count = 0;

  return (
    <>
      <h1>Articles</h1>
      <main>
        <ul className="container">
          {articles.map((article) => {
            count++;
            return (
              <li
                className={count % 2 === 0 ? "Case1" : "Case2"}
                key={article.article_id}
              >
                <p>
                  {article.topic}: {article.title} ({article.author})
                </p>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Articles;
