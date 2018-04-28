const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
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
