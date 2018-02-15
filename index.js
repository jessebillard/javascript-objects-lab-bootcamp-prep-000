var recipes = {
  prop: 1
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
  let newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}


function destructivelyDeleteFromObjectByKey(object, key) {
  
}





