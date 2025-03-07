// Bước 1: Cho người dùng nhập vào một mảng
let arr = [];

// Bước 2: Cho người dùng nhập vào các phần tử cho mảng
let n = +prompt("Nhập vào số phần tử của mảng: ", "");

// Kiểm tra số phần tử hợp lệ
while (isNaN(n) || n <= 0) {
  n = +prompt("Số lượng phần tử không được nhỏ hơn 0: ", "");
}

for (let i = 0; i < n; i++) {
  let value;
  do {
    value = prompt("Nhập vào phần tử thứ " + (i + 1));
    if (isNaN(value) || value.trim() === "") {
      alert("Vui lòng nhập số hợp lệ!");
    }
  } while (isNaN(value) || value.trim() === "");
  arr.push(+value);
}

// Bước 3: Tìm kiếm phần tử lớn thứ hai trong mảng
let max = -Infinity;
let max2 = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max2 = max;
    max = arr[i];
  } else if (arr[i] > max2 && arr[i] !== max) {
    max2 = arr[i];
  }
}

// Bước 4: In ra số lớn thứ hai trong mảng
if (max2 === -Infinity) {
  alert("Không có số lớn thứ hai trong mảng.");
} else {
  alert("Số lớn thứ hai có trong mảng là: " + max2);
}
