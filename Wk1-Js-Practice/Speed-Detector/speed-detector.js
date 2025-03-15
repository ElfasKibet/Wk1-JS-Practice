function detectSpeed() {
    let speed = document.getElementById('speedInput').value;
    let result = '';
  
    if (speed < 70) {
      result = 'Ok';
    } else {
      let points = Math.floor((speed - 70) / 5);
      if (points > 12) {
        result = 'License suspended';
      } else {
        result = `Points: ${points}`;
      }
    }
  
    document.getElementById('result').innerText = result;
  }