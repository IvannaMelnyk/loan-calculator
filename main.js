const loanAmountInput = document.querySelector(".loan-amount"),
  interestRateInput = document.querySelector(".interest-rate"),
  loanTenureInput = document.querySelector(".loan-tenure"),
  loanEMIValue = document.querySelector(".loan-emi .value"),
  totalInterestValue = document.querySelector(".total-interest .value"),
  totalAmountValue = document.querySelector(".total-amount .value"),
  calculateBtn = document.querySelector(".calculate-btn");

let loanAmount = parseFloat(loanAmountInput.value),
  interestRate = parseFloat(interestRateInput.value),
  loanTenure = parseFloat(loanTenureInput.value);

let interest = interestRate / 12 / 100;

const refreshInputValues = () => {
  loanAmount = parseFloat(loanAmountInput.value);
  interestRate = parseFloat(interestRateInput.value);
  loanTenure = parseFloat(loanTenureInput.value);
  interest = interestRate / 12 / 100;
};

const calculateEMI = () => {
  //   checkValues();
  refreshInputValues();
  let emi =
    loanAmount *
    interest *
    (Math.pow(1 + interest, loanTenure) /
      (Math.pow(1 + interest, loanTenure) - 1));

  return emi;
};
const updateData = (emi) => {
  loanEMIValue.innerHTML = Math.round(emi);

  let totalAmount = Math.round(loanTenure * emi);
  totalAmountValue.innerHTML = totalAmount;

  let totalInterestPayable = Math.round(totalAmount - loanAmount);
  totalInterestValue.innerHTML = totalInterestPayable;
};

const init = () => {
  let emi = calculateEMI();
  updateData(emi);
};

init();

calculateBtn.addEventListener("click", init);
