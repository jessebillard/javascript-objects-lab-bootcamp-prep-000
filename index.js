var recipes = {
  
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value
  
  return recipes
}
/* good */


function deleteFromObjectByKey(object, key) {
  
}


function destructivelyDeleteFromObjectByKey(object, key) {
  
}





