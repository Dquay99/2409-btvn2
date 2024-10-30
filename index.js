//Qiuzz 0 : 
let s = prompt("Nhập vào một chuỗi: ");

function checkStringLength(s) {
    if ( s.length >= 8) {
      console.log("Chuỗi này ok");
    } else {
      console.log("Ngắn quá, dài thêm tí nữa");
    }
  };
checkStringLength(s);
 
//Qiuzz 1 : 
function checkAge(a) {
    if (a >= 18) {
      console.log("Đủ 18 thì quẩy tiếp");
    } else if (a >= 16) {
      console.log("Đợi thêm ít năm nữa");
    } else {
      console.log("Còn quá nà trẻ");
    }
  }
  let a = prompt("Nhập vào một số tuổi: ");
  a = parseInt(a); 
  checkAge(a);

//Qiuzz 0 : 
let sum = 0;
for (let i = 1; i <= 50; i++) {
  sum += i;
}
console.log("Tổng các số từ 1 đến 50 là:" sum);

//Qiuzz 1 : 
let sochan = 0;
for (let b = -10; b <= 50; b++) {
  if (b % 2 === 0) { 
    sochan += b;
  }
}
console.log("Tổng các số chẵn từ -10 đến 50 là:" sochan);

//Qiuzz 2 : 