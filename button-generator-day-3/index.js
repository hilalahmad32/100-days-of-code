const padding = document.querySelector("#padding");
const paddingTop = document.querySelector("#paddingTop");
const paddingBottom = document.querySelector("#paddingBottom");

const margin = document.querySelector("#margin");
const marginTop = document.querySelector("#marginTop");
const marginBottom = document.querySelector("#marginBottom");

const fontSize = document.querySelector("#fontSize");
const bgColor = document.querySelector("#bgColor");
const textColor = document.querySelector("#textColor");
const button = document.querySelector("button");

padding.addEventListener("change", () => {
  button.style.padding = padding.value + "px";
});
paddingTop.addEventListener("change", () => {
  button.style.paddingTop = paddingTop.value + "px";
});

paddingBottom.addEventListener("change", () => {
  button.style.paddingBottom = paddingBottom.value + "px";
});

paddingBottom.addEventListener("change", () => {
  button.style.paddingBottom = paddingBottom.value + "px";
});

margin.addEventListener("change", () => {
  button.style.margin = margin.value + "px";
});
marginTop.addEventListener("change", () => {
  button.style.marginTop = marginTop.value + "px";
});
marginBottom.addEventListener("change", () => {
  button.style.marginBottom = marginBottom.value + "px";
});

fontSize.addEventListener("change", () => {
  button.style.fontSize = fontSize.value + "px";
});
bgColor.addEventListener("change", () => {
  button.style.backgroundColor = bgColor.value;
});

textColor.addEventListener("change", () => {
  button.style.color = textColor.value;
});
