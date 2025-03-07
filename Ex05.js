// Viết một chương trình khai báo một mảng và nhập vào ký tự. In ra số “ký tự số” trong mảng

// bước 1: cho người dùng nhập vào một mảng
let arry = [];

// bước 2: cho người dùng nhập vào các phần tử cho mảng, có thể cho người dùng nhập cả kí tự
let n = +prompt("Nhập vào số phần tử của mảng: ", "");
let arr = new Array(n);
for (let i = 0; i < n; i++) {
  arr[i] = prompt("Nhập vào phần tử thứ " + (i + 1));
}

// bước 3: tìm kiếm và tính tổng các kí tự là số có trong mảng
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (!isNaN(arr[i])) {
    sum += parseInt(arr[i]);
  }
}

alert("Tổng các ký tự số trong mảng là: " + sum);
