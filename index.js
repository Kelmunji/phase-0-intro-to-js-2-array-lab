// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
  console.log("After destructivelyAppendCat:", cats);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  console.log("After destructivelyPrependCat:", cats);
}

function destructivelyRemoveLastCat() {
  cats.pop();
  console.log("After destructivelyRemoveLastCat:", cats);
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  console.log("After destructivelyRemoveFirstCat:", cats);
}


function appendCat(name) {
  const newCats = [...cats, name];
  console.log("After appendCat:", newCats);
  return newCats;
}

function prependCat(name) {
  const newCats = [name, ...cats];
  console.log("After prependCat:", newCats);
  return newCats;
}

function removeLastCat() {
  const newCats = cats.slice(0, -1);
  console.log("After removeLastCat:", newCats);
  return newCats;
}

function removeFirstCat() {
  const newCats = cats.slice(1);
  console.log("After removeFirstCat:", newCats);
  return newCats;
}

console.log("Initial cats array:", cats);
destructivelyAppendCat("Ralph");
destructivelyPrependCat("Bob");
destructivelyRemoveLastCat();
destructivelyRemoveFirstCat();
appendCat("Broom");
prependCat("Arnold");
removeLastCat();
removeFirstCat();










 
 

 

