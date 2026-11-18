
function calculateBill() {

    let bill = parseFloat(document.getElementById("bill").value);

    let tip = parseFloat(document.getElementById("tip").value);

    let people = parseInt(document.getElementById("people").value);

    let error = document.getElementById("error");
    let result = document.getElementById("result");

    error.innerHTML = "";
    result.innerHTML = "";

  
    if (isNaN(bill) || bill <= 0 || isNaN(people) || people < 1) {

        error.innerHTML = "Please enter a valid bill and number of people.";

        return;
    }

  
    let tipAmount = bill * tip / 100;

    let totalBill = bill + tipAmount;

    let eachPerson = totalBill / people;

    result.innerHTML =
        "Tip amount: Rs. " + tipAmount.toFixed(2) + "<br>" +

        "Total bill: Rs. " + totalBill.toFixed(2) + "<br>" +

        "Each person pays: Rs. " + eachPerson.toFixed(2);
}
