//map
function myMap(array, callback)  {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i], i);
    }
    return newArray;
}

myMap(['a','b','c','d'], (currentItem, index) => {return currentItem + ' ' + index})

//forEach
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function callback(element) {
    console.log(element);
}

const array = [2, 4, 6, 8, 10];
myForEach(array, callback);

