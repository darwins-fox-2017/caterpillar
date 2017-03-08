var lodash = {
  isEmpty: function (array) {
    if(array[0]){
      return true
    }else{
      return false
    }
  },
  count: function (array) {
    var sum = 0
    array.forEach(function() {
      sum += 1
    })

    return sum
  },
  head: function (array) {
    return array[0]
  },
  tail: function (array) {
    return array.slice(1)
  },
  flatten: function (array) {
    return array.reduce(function (flat, toFlatten) {
      if(Array.isArray(toFlatten)){
        return flat.concat(lodash.flatten(toFlatten))
      }else{
        return flat.concat(toFlatten)
      }
    }, []);
  }

}

module.exports = lodash;
