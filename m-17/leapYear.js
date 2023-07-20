function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
      return "yes";
    } else {
      return "no";
    }
  }
  
  const yr = leapYear(0);
  console.log(yr);
  