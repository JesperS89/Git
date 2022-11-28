let input1: HTMLInputElement = document.createElement("input");
let input2: HTMLInputElement = document.createElement("input");
let addbutton: HTMLButtonElement = document.createElement("button");

document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(addbutton);

addbutton.innerHTML = "Addera";

addbutton.addEventListener("click", () => {
  let sum: number = add(parseInt(input.value), parseInt(input2.value));
  printHTML(sum);
});
