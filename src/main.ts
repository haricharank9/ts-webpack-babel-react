import "./styles.scss";

console.log("Hello World");

const html = `<div class="red">
<h1>Hello World!</h1>
</div>
`;

const root = document.getElementById("root") || new HTMLDivElement();
root.innerHTML = html;
