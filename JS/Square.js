var side_a = document.getElementById("side_a");
var round = document.getElementById("round");
var faceResult = document.getElementById("face_result");
var circumferenceResult = document.getElementById("circumference_result");

function calcSquare() {
    let squareFace = Math.pow(Number(side_a.value), 2);
    let squareCircumference = 4 * Number(side_a.value);
    faceResult.value = squareFace.toFixed(round.value);
    circumferenceResult.value = squareCircumference.toFixed(round.value);
};

function calculate(e) {
    if (side_a.value === "") {
        document.getElementById("err").innerHTML = "Empty field! *";
        e.preventDefault();
    } else {
        document.getElementById("err").innerHTML = "";
    }
    calcSquare();
};

document.getElementById("reset").addEventListener("click", () => {
    side_a.value = "";
    round.value = 2;
    faceResult.value = "";
    circumferenceResult.value = ""
});