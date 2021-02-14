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

    reduce: function(collection, callback, acc = -2) {
      for(let i = 0; i<collection.length; i++)
      {
        acc = (callback(acc, collection[i], collection))
      }
      return acc

    },
    find: function(collection, predicate)
    {
      for(let i = 0; i<collection.length; i++)
      {
        if(predicate(collection[i]))
        {
          return collection[i]
        }
      }
      return undefined

    },
    filter: function(collection, predicate)
    {
      let out = [];
      for(let i = 0; i<collection.length; i++)
      {
        if(predicate(collection[i]))
        {
          out.push(collection[i])
        }
      }
      return out

    },
    size: function(collection)
    {
      if (typeof collection == "object")
      {
        return Object.keys(collection).length
      }
      else
      {
        return collection.length
      }
    },
    first: function(collection, n=1)
    {
      let out = [];
      for(let i=0; i<n; i++)
      {
        out.push(collection[i])
      }
      return (out.length === 1 ? out[0]: out);
    },
    last: function(collection, n=1)
    {
      let out = [];
      for(let i=0; i<n; i++)
      {
        out.push(collection[collection.length - n + i])
      }
      return (out.length === 1 ? out[0]: out);
    },
    compact: function(collection)
    {
      let out = [];
      for(let i=0; i<collection.length; i++)
      {
        if(collection[i])
        {
          out.push(collection[i])
        }
      }
      return out;
    },
    sortBy: function(collection, callback)
    {
      let out = [];
      for(let i=0; i<collection.length; i++)
      {
        out.push(collection[i])
      }
      return out.sort(function(a, b){return callback(a) - callback(b)})
    },
    flatten: function(array, [shallow])
    {
        out = []
        for(let i=0; i<array.length; i++)
        {
            if(array[i].isArray)
            {
              out.concat(fi.flatten(array[i]))
            }
        }
    },
    functions: function() {

    },


  }
})()

fi.libraryMethod()
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
