// console.log("deposit");

// add eventLts to dep-btn

// document.getElementById("dep-btn").addEventListener("click", function () {
//   //   console.log("deposit clk");
//   //inputFld of DEP
//   const depField = document.getElementById("dep-input-field");
//   if (depField.value >= 0) {
//     const depFieldStr = depField.value;
//     //   convert to num
//     const depFieldNum = parseFloat(depFieldStr);
//     console.log(depFieldNum);
//     depField.value = "";

//     //   set
//     const depTotal = document.getElementById("depo-total");
//     const depTotalStr = depTotal.innerText;
//     const depTotalNum = parseFloat(depTotalStr);
//     console.log(depTotalNum);

//     //   calculate
//     const depCalculate = depTotalNum + depFieldNum;
//     depTotal.innerText = depCalculate;
//     console.log(depCalculate);

//     //balance steps
//     const balanceTotal = document.getElementById("bal-total");
//     const balanceTotalStr = balanceTotal.innerText;
//     const balanceTotalNum = parseFloat(balanceTotalStr);

//     //   balance-cal
//     const balCalculate = balanceTotalNum + depFieldNum;
//     balanceTotal.innerText = balCalculate;
//   } else {
//     alert("type positive value");
//   }
// });
