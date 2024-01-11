function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);

  if (inputField.value >= 0) {
    const inputFieldStr = inputField.value;
    const inputFieldConvertedNum = parseFloat(inputFieldStr);
    inputField.value = "";
    return inputFieldConvertedNum;
  }
}


document.getElementById("dep-btn").addEventListener("click", function () {
  const inputFieldAmount = getInputFieldValueById("dep-input-field");
});
