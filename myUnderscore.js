const ArrayProto = Array.prototype,
      ObjProto = Object.prototype;
const SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;  

const push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

const nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeCreate = Object.create;

let has = function (obj, path) {
  if (!isArray(path)) {
    return obj != null && hasOwnProperty.call(obj, path);
  }

  const length = path.length;
  for (let i = 0; i < length; i++) {
    let key = path[i];
    if (obj == null || !hasOwnProperty.call(obj, key)) {
      return false;
    }
    obj = obj[key];
  }
  return !!length;
};

let isArray = nativeIsArray || function(obj) {
  return toString.call(obj) === '[object Array]'
};

module.exports = {
  isArray,
  has
};