<<<<<<< HEAD
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
=======
console.log("hej");

function add(x: number, y: number): number {
  let sum: number = x + y;
  return sum;
}

// function createHtml(tag: string) {
//   // return document.createElement("'" + tag + "'");
// }

// createHtml("input");

function printHtml(sum: number): void {
  let heading: HTMLHeadingElement = document.createElement("h3");
  heading.innerHTML = sum.toString();
  document.body.appendChild(heading);
}
>>>>>>> d08b8933d1d2ef36fef4f0604096377abcf36c62
