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
    functions: function() {

    },


  }
})()

fi.libraryMethod()
