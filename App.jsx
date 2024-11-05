import { useEffect, useState } from "react";
import "./App.css";
import { getPosts } from "./Api";
import Card from "./Components/Card";

function App() {
  let [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((post) => setData(post));
  }, []);

  return (
    <>
      <h1>Author And their Books</h1>
      <ol>
        {data ? (
          data.map((post, index) => (
            <Card key={index} title={post.title} body={post.body} />
          ))
        ) : (
          <p>No data</p>
        )}
      </ol>
    </>
  );
}

export default App;
