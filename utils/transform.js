const _set = require('lodash/set');
const _isEmpty = require('lodash/isEmpty');

function flattenObj(ob) {
  var toReturn = {};

  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;

    if ((typeof ob[i]) == 'object' && ob[i] !== null) {
      var flatObject = flattenObj(ob[i]);
      if(_isEmpty(flatObject)){
        toReturn[i] = flatObject;
        continue;
      }
      for (var x in flatObject) {
        if(!flatObject.hasOwnProperty(x)) continue;
        toReturn[i + '.' + x] = flatObject[x];
      }
    }
    else toReturn[i] = ob[i];
  }
  return toReturn;
}

function expandObj(obj){
  const  newObj = {};
  for(const key in obj)
    _set(newObj, key, obj[key]);
  return newObj;
}

module.exports={flattenObj, expandObj};