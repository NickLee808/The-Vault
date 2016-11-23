'use strict';

module.exports = function(){
  
  var lock = {};

  function setValue(key,value){
    lock[key] = value;
    return lock;
  }

  function getValue(key){
    if(lock[key]){
      return lock[key];
    } else {
      return null;  
    }
  }

  return{
    setValue: setValue,
    getValue: getValue
  };
};