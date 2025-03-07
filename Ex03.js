// Bước 1: Cho người dùng nhập vào số phần tử của mảng mong muốn
let n = +prompt("Nhập vào số phần tử của mảng: ", "");

// Kiểm tra nếu n không hợp lệ
while (isNaN(n) || n <= 0) {
  n = +prompt("Số lượng phần tử không hợp lệ: ", "");
}

// Bước 2: Tạo mảng có n phần tử
let arr = new Array(n);

// Bước 3: Nhập các phần tử vào mảng
for (let i = 0; i < n; i++) {
  let num;

  // Kiểm tra đầu vào là số hợp lệ
  do {
    num = prompt(`Mời bạn nhập phần tử thứ ${i + 1}: `, "");

    if (isNaN(num) || num.trim() === "") {
      alert("Bạn phải nhập một số hợp lệ! Vui lòng nhập lại.");
    }
  } while (isNaN(num) || num.trim() === "");

  arr[i] = +num;
}

// Bước 4: Đếm số phần tử có giá trị âm
let dem = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    dem++;
  }
}

// Bước 5: In kết quả ra màn hình
if (dem > 0) {
  alert("Số phần tử là số âm có trong mảng: " + dem);
} else {
  alert("Mảng không chứa giá trị là số âm.");
}
