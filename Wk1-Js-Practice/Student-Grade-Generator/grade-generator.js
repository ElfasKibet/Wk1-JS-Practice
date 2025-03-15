function generateGrade() {
    let marks = document.getElementById('marksInput').value;
    let result = '';
  
    if (marks > 79) result = 'Grade: A';
    else if (marks >= 60) result = 'Grade: B';
    else if (marks >= 49) result = 'Grade: C';
    else if (marks >= 40) result = 'Grade: D';
    else result = 'Grade: E';
  
    document.getElementById('result').innerText = result;
  }
  