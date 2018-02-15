var recipes = {
  prop: 1
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {['prop2'] : 2});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes['prop2'] = 2;
  return recipes
}


function deleteFromObjectByKey(object, key) {
  
}


function destructivelyDeleteFromObjectByKey(object, key) {
  
}





