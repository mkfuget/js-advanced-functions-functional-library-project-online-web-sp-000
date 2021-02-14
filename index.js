const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      if (typeof collection == "object")
      {
        for(const [key, value] of Object.entries(collection))
        {
          callback(value, key, collection)
        }
      }
      else
      {
        for(let i = 0; i<collection.length; i++)
        {
          callback(collection[i], i, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let out = [];
      if (typeof collection == "object")
      {
        for(const [key, value] of Object.entries(collection))
        {
          out.push(callback(value, key, collection))
        }
      }
      else
      {
        for(let i = 0; i<collection.length; i++)
        {
          out.push(callback(collection[i], i, collection))
        }
      }
      return out

    },

    reduce: function(collection, callback, acc = 0) {
      let out = acc;
      for(let i = 0; i<collection.length; i++)
      {
        out += (callback(collection[i], acc, collection))
      }
      return out

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
