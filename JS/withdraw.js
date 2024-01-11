// console.log("with");
document.getElementById("with-btn").addEventListener("click", function () {
  console.log("w clk");
  //inputFld of DEP
  const withField = document.getElementById("with-input-field");
  if (withField.value >= 0) {
    const withFieldStr = withField.value;
    //   convert to num
    const withFieldNum = parseFloat(withFieldStr);
    console.log(withFieldNum);
    withField.value = "";
    //   set
    const withTotal = document.getElementById("with-total");
    const withTotalStr = withTotal.innerText;
    const withTotalNum = parseFloat(withTotalStr);
    console.log(withTotalNum);
    //   calculate
    const withCalculate = withFieldNum + withTotalNum;
    withTotal.innerText = withCalculate;
    console.log(withTotal);

    //balance steps
    const balanceTotal = document.getElementById("bal-total");
    const balanceTotalStr = balanceTotal.innerText;
    const balanceTotalNum = parseFloat(balanceTotalStr);

    //    balance-cal
    const balCalculate = balanceTotalNum - withFieldNum;
    balanceTotal.innerText = balCalculate;
  } else {
    alert("type positive value");
  }
});
