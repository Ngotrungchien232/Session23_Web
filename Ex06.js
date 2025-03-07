// Khai báo mảng có sẵn các giá trị
let mang = [1, 0, null, undefined, "", "Hello", false, true, NaN, Infinity];

// Loại bỏ các phần tử có giá trị falsy
let mangLoaiBoFalsy = mang.filter(function (phantu) {
  return phantu;
});

console.log(mangLoaiBoFalsy);
alert("kết quả của bài toán là: " + mangLoaiBoFalsy);
