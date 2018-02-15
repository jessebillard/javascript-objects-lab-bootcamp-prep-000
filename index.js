var recipes = {
  
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {['prop'] : 1});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes['prop2'] = 2
  return recipes
}
/* good */


function deleteFromObjectByKey(object, key) {
  
}


function destructivelyDeleteFromObjectByKey(object, key) {
  
}





