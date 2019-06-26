const array = [1, 2, 3, 4];

var count  = 0;
for (i = 0; i <= array.length; i++) {
    if (i%2 == 0) {
        count += i;
    }
}
console.log(count);