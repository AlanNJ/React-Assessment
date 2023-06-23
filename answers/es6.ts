// 1
let array = [1, 3, 5, 2, 4];

const result1 = array.map((num) => {
	if (num % 2 === 1) {
		return num;
	}
});

// 2
const result2 = array.map((num) => {
	return num * num;
});

//3 without map as it will be quite similar to 1
let result3 = [];
let i = 0;
while (i < array.length) {
	result3.push(array[i] * array[i]);
	i += 2;
}
console.log(result3);
