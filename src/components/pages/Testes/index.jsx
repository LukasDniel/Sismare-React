import axios from "axios";
import React, {useState, useEffect} from "react";

const baseURL = "https://63234f04362b0d4e7de1284e.mockapi.io/cadastro";

export default function Testes() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;



  return (
    <div>
      {post.map((element, item) => {
        return(
        <div key={item}>
          <h1>{element.nome}</h1>
          <p>{element.numero}</p>
        </div>
        );
      })}
    </div>
  );
}