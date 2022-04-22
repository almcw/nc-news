import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Articles.css";
import Topics from "./Topics";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  let { topic_slug } = useParams();
  if (topic_slug === "all") topic_slug = "";
  useEffect(() => {
    fetch(
      `https://almcw-nc-news.herokuapp.com/api/articles?topic=${topic_slug}`
    )
      .then((res) => res.json())
      .then((res) => setArticles(res.articles));
  }, [topic_slug]);
  let count = 0;

  return (
    <>
      <Topics />
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
