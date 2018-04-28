const app = "I don't do much."

var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  cats.unshift(name);
  return cats;
}

function destructivelyPrependKitten(name){
  cats.shift(name);
  return cats;
}

function destructivelyRemoveLastKitten(){
  cats.pop(0,cats.length-1);
  return cats;
}

function destructivelyRemoveFirstKitten(){

}

function appendKitten(name){

}

function prependKitten(name){

}

function removeLastKitten(){

}

function  removeFirstKitten(){

}
