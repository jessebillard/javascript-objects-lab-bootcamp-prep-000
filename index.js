var recipes = {
  prop: 1
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}



function deleteFromObjectByKey(object, key) {
  let newRec = Object.assign({}, recipes)
  delete newRec[key]
  return newRec
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes[prop]
  return recipes
}





