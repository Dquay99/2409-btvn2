// 1. In ra dãy số từ 1 đến 500
for (let i = 1; i <= 500; i++) {
  console.log(i);
}

// 2. In ra các số chia hết cho 2 và 3 từ 1 đến 300
for (let i = 1; i <= 300; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
      console.log(i);
  }
}

// 3. Tính tổng các số chẵn trong đoạn [-30, 50]
let sumEven = 0;
for (let i = -30; i <= 50; i++) {
  if (i % 2 === 0) {
      sumEven += i;
  }
}
console.log("Tổng các số chẵn từ -30 đến 50:", sumEven);

// 4. Nhập vào số n. Tính giai thừa của số n
let n = parseInt(prompt("Nhập vào số n:"));
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(`Giai thừa của ${n}:`, factorial);

// 5. Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x
let a = parseInt(prompt("Nhập vào số a:"));
let b = parseInt(prompt("Nhập vào số b (a < b):"));
let x = parseInt(prompt("Nhập vào số x:"));
let minDivisible = -1;
for (let i = a; i <= b; i++) {
  if (i % x === 0) {
      minDivisible = i;
      break;
  }
}
console.log(`Số nhỏ nhất trong khoảng [${a}, ${b}] chia hết cho ${x} là:`, minDivisible);

// 6. Nhập vào số n (n >= 2). Tính S = 1/(1.2) + 1/(2.3) + ... + 1/(n(n+1))
n = parseInt(prompt("Nhập vào số n (n >= 2):"));
let S = 0;
for (let i = 1; i <= n; i++) {
  S += 1 / (i * (i + 1));
}
console.log("Giá trị của biểu thức S:", S);

// 7. Nhập vào số n. In ra số ước của n
n = parseInt(prompt("Nhập vào số n:"));
let divisors = [];
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
      divisors.push(i);
  }
}
console.log(`Các ước của ${n} là:`, divisors);

// 8. Nhập vào số n. Kiểm tra xem n có phải số nguyên tố không
n = parseInt(prompt("Nhập vào số n:"));
let isPrime = n > 1;
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
      isPrime = false;
      break;
  }
}
console.log(`${n} có phải số nguyên tố không?`, isPrime);

// 9. Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l
let s = prompt("Nhập vào chuỗi s (chỉ gồm chữ số):");
let l = parseInt(prompt("Nhập vào số l:"));
while (s.length < l) {
  s = '0' + s;
}
console.log("Chuỗi s sau khi thêm '0':", s);

// 10. Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất và bội chung nhỏ nhất của m và n
let m = parseInt(prompt("Nhập vào số m (m > 0):"));
n = parseInt(prompt("Nhập vào số n (n > 0):"));
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
let ucln = gcd(m, n);
let bcnn = (m * n) / ucln;
console.log(`Ước chung lớn nhất của ${m} và ${n} là:`, ucln);
console.log(`Bội chung nhỏ nhất của ${m} và ${n} là:`, bcnn);

// 11. Trò chơi đoán số
let correct = Math.floor(Math.random() * 20) + 1;
let attempts = 0;
let answer;
do {
  answer = parseInt(prompt("Nhập một số từ 1 đến 20:"));
  attempts++;
  if (answer === correct) {
      console.log("Đoán đúng!");
      break;
  } else {
      console.log("Đoán sai! Thử lại.");
  }
} while (attempts < 5);
if (answer !== correct) {
  console.log("Bạn đã thua cuộc");
}

// 12. Nhập vào số n (2 <= n <= 10). In ra bảng cửu chương của số n
n = parseInt(prompt("Nhập vào số n (2 <= n <= 10):"));
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}
