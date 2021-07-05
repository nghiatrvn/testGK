let arr = ["MJMAM", "IOT", "ONEPO", "SAMBA"];

function test(text) {
    for (let i = 0; i < text.length / 2; i++) {
      if (text[i] === text[text.length - i - 1]) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  for (let i = 0; i < arr.length; i++) {
    console.log(test(arr[i]));
  }