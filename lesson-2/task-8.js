const array = [1, 2, 3, 4, 5, 6];

var count = 0; 
for (i = 0; i <= array.length; i++) {
    if (i%2 == 0 && i > 3) {
        count += i;
    }
}
console.log(count);