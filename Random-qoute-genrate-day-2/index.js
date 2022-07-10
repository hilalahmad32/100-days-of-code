const url = "https://type.fit/api/quotes";
const quotes = document.querySelector("blockquote");
const author = document.querySelector("p");
const button = document.querySelector("button");
button.addEventListener("click", async () => {
  getQoutes();
});

const getQoutes = async () => {
  const data = await (await fetch(url)).json();

  const index = Math.floor(Math.random() * data.length);
  quotes.innerText = data[index].text;
  author.innerText = data[index].author;
};
getQoutes();
