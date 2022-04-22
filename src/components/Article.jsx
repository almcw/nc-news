import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Article.css";

const Article = () => {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    fetch(`https://almcw-nc-news.herokuapp.com/api/articles/${article_id}`)
      .then((res) => res.json())
      .then((res) => setArticle(res.article));
  }, [article_id]);

  return (
    <div className="article">
      <h2>
        Article #{article.article_id}: {article.title}
      </h2>
      <main>
        <p>Author: {article.author}</p>
        <p>{article.body}</p>
      </main>
    </div>
  );
};

export default Article;
