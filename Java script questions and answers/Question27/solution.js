// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

function primenum(num) {
    if (num <= 1) {
      console.log("Please enter a number");
      return;
    } else {
      for (let x = 2; x <= num; x++) {
        let isPrime = true;
        for (let i = 2; i * i <= x; i++) {
          if (x % i === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          console.log(x);
        }
      }
    }
  }
  
 primenum(100);