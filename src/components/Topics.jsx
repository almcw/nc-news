import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Topics.css";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch("https://almcw-nc-news.herokuapp.com/api/topics")
      .then((res) => res.json())
      .then((res) => setTopics(res.topics));
  }, []);

  return (
    <>
      <h2>Sort by Topic:</h2>
      <main>
        <ul className="topics_container">
          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <p>
                  <Link to={`/articles/${topic.slug}`}>
                    {topic.description}
                  </Link>
                </p>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Topics;
