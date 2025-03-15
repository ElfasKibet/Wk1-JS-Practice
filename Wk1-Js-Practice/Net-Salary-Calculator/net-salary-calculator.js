function calculateNetSalary() {
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);
    const grossSalary = basicSalary + benefits;
  
    // Example tax, NHIF, NSSF deductions (simplified, you can update with real bands/rates)
    const payee = grossSalary * 0.1; // 10% tax
    const nhif = 1700; // Example NHIF fixed amount
    const nssf = 400; // Example NSSF fixed amount
  
    const totalDeductions = payee + nhif + nssf;
    const netSalary = grossSalary - totalDeductions;
  
    document.getElementById('result').innerText =
      `Gross Salary: ${grossSalary}\nPayee (Tax): ${payee}\nNHIF: ${nhif}\nNSSF: ${nssf}\nNet Salary: ${netSalary}`;
  }
  