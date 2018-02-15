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
/* good */


function deleteFromObjectByKey(object, key) {
  let newObj = Object.assign({}, object)
  return newObj
}


function destructivelyDeleteFromObjectByKey(object, key) {
  
}





