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
