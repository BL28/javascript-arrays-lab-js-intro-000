const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){

}

function appendKitten(name){
  return [kittens,...name];
}

function prependKitten(name){
  return [kittens,...name];
}

function removeLastKitten(){

}

function  removeFirstKitten(){
  cats
}
