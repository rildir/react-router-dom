import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import React, { useEffect } from "react";

export default function Article() {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const { data: article, isPending, error } = useFetch(url);
  const navigate = useNavigate();

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && (
        <div>
          {error} <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      )}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}{" "}
    </div>
  );
}
