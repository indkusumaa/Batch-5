//function untuk generate array random sejumlah 100 dengan range 1-50
// function generateArray() {
//   return Array(100)
//     .fill()
//     .map(() => Math.floor(Math.random() * 50) + 1);
// }
// console.log(generateArray());

const array = [
  19, 17, 40, 12, 21, 10, 17, 4, 3, 50, 14, 21, 21, 22, 24, 4, 14, 39, 44, 39, 12, 42, 26, 50, 20, 11, 25, 29, 34, 8, 14, 38, 3, 28, 42, 10, 38, 11, 15, 15, 33, 44, 19, 29, 15, 18, 27, 21, 35, 24, 25, 28, 15, 48, 2, 3, 27, 13, 34, 49, 16,
  29, 43, 29, 32, 22, 26, 24, 18, 41, 15, 12, 1, 27, 13, 31, 27, 32, 8, 23, 37, 41, 47, 9, 40, 45, 7, 2, 15, 22, 10, 43, 48, 46, 5, 12, 10, 22, 13, 39,
];

// function untuk split array kedalam array genap
function split_even(array) {
  let even_array = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even_array.push(array[i]);
    }
  }
  return even_array;
}

// console.log(split_even(array));

// function untuk split array kedalam array ganjil
function split_odd(array) {
  let odd_array = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odd_array.push(array[i]);
    }
  }
  return odd_array;
}
//console.log(split_odd(array));

let array_even = split_even(array);
let array_odd = split_odd(array);

// function untuk mencari min value dari suatu array
function min_value(array) {
  let min_value = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min_value > array[i]) {
      min_value = array[i];
    }
  }
  return min_value;
}
// function untuk mencari max value dari suatu array
function max_value(array) {
  let max_value = 0;
  for (let i = 0; i < array.length; i++) {
    if (max_value < array[i]) {
      max_value = array[i];
    }
  }
  return max_value;
}

//function untuk menjumlahkan semua array
function total_value(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

//function untuk memberikan rata-rata nilai array
function average_value(array) {
  let average = total_value(array) / array.length;
  return average;
}

function membandingkan_min() {
  if (min_value(array_even) < min_value(array_odd)) {
    console.log(`Min value dari array genap (${min_value(array_even)}) lebih kecil dari array ganjil (${min_value(array_odd)})`);
  } else {
    console.log(`Min value dari array genap (${min_value(array_even)}) lebih besar dari array ganjil (${min_value(array_odd)})`);
  }
}
function membandingkan_max() {
  if (max_value(array_even) < max_value(array_odd)) {
    console.log(`Max value dari array genap (${max_value(array_even)}) lebih kecil dari array ganjil (${max_value(array_odd)})`);
  } else {
    console.log(`Max value dari array genap (${max_value(array_even)}) lebih besar dari array ganjil (${max_value(array_odd)})`);
  }
}
function membandingkan_total() {
  if (total_value(array_even) < total_value(array_odd)) {
    console.log(`Total value dari array genap (${total_value(array_even)}) lebih kecil dari array ganjil (${total_value(array_odd)})`);
  } else {
    console.log(`Total value dari array genap (${total_value(array_even)}) lebih besar dari array ganjil (${total_value(array_odd)})`);
  }
}
function membandingkan_average() {
  if (average_value(array_even) < average_value(array_odd)) {
    console.log(`Nilai rata-rata dari array genap (${average_value(array_even)}) lebih kecil dari array ganjil (${average_value(array_odd)})`);
  } else {
    console.log(`Nilai rata-rata dari array genap (${average_value(array_even)}) lebih besar dari array ganjil (${average_value(array_odd)})`);
  }
}

console.log(`Min value dari array genap adalah ${min_value(array_even)}`);
console.log(`Min value dari array ganjil adalah ${min_value(array_odd)}`);
console.log(`Max value dari array genap adalah ${max_value(array_even)}`);
console.log(`Max value dari array ganjil adalah ${max_value(array_odd)}`);
console.log(`Total value dari array genap adalah ${total_value(array_even)}`);
console.log(`Total value dari array ganjil adalah ${total_value(array_odd)}`);
console.log(`Nilai rata-rata dari array genap adalah ${average_value(array_even)}`);
console.log(`Nilai rata-rata dari array ganjil adalah ${average_value(array_odd)}`);
console.log("\n");
membandingkan_min();
membandingkan_max();
membandingkan_total();
membandingkan_average();
