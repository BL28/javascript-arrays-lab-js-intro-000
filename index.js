const app = "I don't do much."

var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  cats.push(name);
  return cats;
}

function destructivelyPrependKitten(name){
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastKitten(){
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstKitten(){

}

function appendKitten(name){
  return [cats,...name];
}

function prependKitten(name){
  return [cats,...name];
}

function removeLastKitten(){

}

function  removeFirstKitten(){
  cats
}
