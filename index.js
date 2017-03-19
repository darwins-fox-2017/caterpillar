function isEmpty(arr) {
    if (arr.shift() == undefined) {
        console.log("Array kosong");
        return true
    } else {
        console.log("Array sudah ada isi");
        return false
    }
}
console.log(`---------------------------- isEmpty ----------------------------`);
console.log(isEmpty([]));
console.log(isEmpty([1, 2, 3]));


function count(arr) {
    if (arr.shift() == undefined) {
        console.log("Array kosong");
        return 0
    } else {
        // hitung jumlah element array
        let cek = 0
        let total = arr.map(function (arr) {
            return cek++
        })
        console.log("Jumlah isi array nya coy: ");
        return cek + 1
    }
}
console.log(`---------------------------- count ----------------------------`);
console.log(count([]));
console.log(count([1, 2, 3, 4, 5, 8]));


function head(arr) {
    console.log("Isi array paling depan: ");
    return arr[0]
}
console.log(`---------------------------- head ----------------------------`);
console.log(head([]));
console.log(head([9, 8]));


function tail(arr) {
    console.log("Isi array selain index ke 1: ");
    if (isEmpty(arr)) {
        return ``
    } else {
        return arr.slice(1)
    }
}
console.log(`---------------------------- tail ----------------------------`);
console.log(tail([]));
console.log(tail([1, 2, 3, 6, 8]));


function flatten(arr) {
    return arr.join()
        .split(",");
}
console.log(`---------------------------- flatten ----------------------------`);
console.log(flatten([2, 3, [5, 6], 5, [6, 8, [8, 2, 1]]]));;
