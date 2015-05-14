if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          return i;
        }
      };
      return -1;
    },

    sum : function(arr) {
      var totalSum = arr.reduce(function(a, b) {
        return a + b;
      }, 0);
      return totalSum;
      // or
      // var sum = arr[0];
      // for (var i = 1; i < arr.length; i ++) {
      //   sum += arr[i]
      // }
      // return sum;
    },

    remove : function(arr, item) {
      for (var i = 0; i < arr.length; i ++) {

      }
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
