function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (array[j] < array[j - 1]) {
                let temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

 

function test() {
    let myArray = [4,2,6,5,1,3];
    insertionSort(myArray);
    console.log(myArray);
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/  