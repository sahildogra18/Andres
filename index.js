export let getPosts = async function () {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  return response.json();
};
