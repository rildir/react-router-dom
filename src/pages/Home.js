import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/button/button.component";
import { useFetch } from "../hooks/useFetch";

// styles
import "./Home.scss";

export default function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");
  return (
    <div>
      <div className="home">
        <h1>Articles</h1>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {articles &&
          articles.map((article) => (
            <div key={article.id} className="card">
              <h3>{article.title}</h3>
              <p>{article.author}</p>
              <Button type="button" buttonType="google">
                <Link to={`/article/${article.id}`}>Read More...</Link>
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
}
