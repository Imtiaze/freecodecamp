const calculate = (e) => {

  const value = document.querySelector("#numbers").value;
    console.log(value)
}



document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  calculate();
});
