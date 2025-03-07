// viết chương trình nhập vào một mảng gồm 10 phần tử , sau đó in ra các phần lớn hơn hoặc bằng 10

// bước 1: tạo một mảng rỗng
let arr = [];

// bước 2: cho người dùng nhập vào 10 phần tử
for (let i = 0; i < 10; i++) {
  let num;

  // Kiểm tra đầu vào
  do {
    num = prompt("Mời bạn nhập một số: ", "");

    // Kiểm tra xem có phải số không
    if (isNaN(num) || num.trim() === "") {
      alert("Bạn phải nhập một số hợp lệ! Vui lòng nhập lại.");
    }
  } while (isNaN(num) || num.trim() === "");

  arr.push(+num);
}

//tạo ra một biến để đếm xem có bao nhiêu phần tử lớn hơn hoặc bằng 10
let dem = 0;

// bước 4: sử dụng vòng lặp để duyệt qua các phần tử lớn hơn hoặc bằng 10
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10) {
    dem++;
  } else {
    alert("không có phần tử nào lớn hơn hoặc bằng 10");
  }
}

// bước 5: in ra màn hình xem có bao nhiêu phần tử lớn hơn hoặc bằng 10
alert("số phần tử lớn hơn hoặc bằng 10 là: " + dem);
