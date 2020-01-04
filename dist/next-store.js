/**
 * Created by dcpai on 2017/7/4.
 */
(function() {
  var global = window || this;
  var ENGIE_LOCAL = "localStorage";
  var ENGIE_SESSION = "sessionStorage";
  var Store = {
    engine: ENGIE_LOCAL,
    set local(str) {
      this.engine = ENGIE_LOCAL;
      this.sets(str);
    },
    get local() {
      this.engine = ENGIE_LOCAL;
      return this.gets();
    },
    set session(str) {
      this.engine = ENGIE_SESSION;
      this.sets(str);
    },
    get session() {
      this.engine = ENGIE_SESSION;
      return this.gets();
    },
    set: function(inKey, inValue) {
      global[Store.engine].setItem(inKey, JSON.stringify(inValue));
    },
    get: function(inKey) {
      var _value = global[Store.engine].getItem(inKey);
      return JSON.parse(_value);
    },
    sets: function(inObject) {
      for (var inKey in inObject) {
        Store.set(inKey, inObject[inKey]);
      }
    },
    gets: function(inKeys) {
      var result = {};
      var keys = inKeys || [];
      var i = 0,
        key;
      var storeEngine = global[Store.engine];
      if (keys.length === 0) {
        for (i = 0; i < storeEngine.length; i++) {
          key = storeEngine.key(i);
          keys.push(key);
        }
      }
      for (var k in keys) {
        result[keys[k]] = Store.get(keys[k]);
      }
      return result;
    },
    clear: function(inKey) {
      global[Store.engine].removeItem(inKey);
    },
    clearAll: function(inArray) {
      if (Array.isArray(inArray)) {
        inArray.forEach(function(item) {
          Store.clear(item);
        });
      } else {
        global[Store.engine].clear();
      }
    }
  };
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Store;
  }
})();
