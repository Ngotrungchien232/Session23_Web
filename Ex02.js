// bước 1: tạo một mảng rỗng
let arr = [];

// bước 2: cho người dùng nhập vào 10 phần tử
for (let i = 0; i < 10; i++) {
  let num;

  // Kiểm tra đầu vào
  do {
    num = prompt("Mời bạn nhập một số: ", "");

    // Kiểm tra xem có phải số không
    if (isNaN(num)) {
      alert("Bạn phải nhập một số hợp lệ! Vui lòng nhập lại.");
    }
  } while (isNaN(num));

  arr.push(+num);
}

// in ra mảng vừa nhập vào console
console.log(arr);

// bước 3: dùng vòng lặp để có thể kiểm tra xem có số lớn nhất trong mảng không
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    alert("số lớn nhất có trong mảng là: " + max);
  }
  if (num.trim() === "") {
    alert("không có số lớn nhất ");
  }
}
