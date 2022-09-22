var side_a = document.getElementById("side_a");
var numbers = document.getElementById("number");
var round = document.getElementById("round");
var faceResult = document.getElementById("face_result");
var circumferenceResult = document.getElementById("circumference_result");

function calcPolygon() {
    let polygonCircumference = Number(numbers.value) * Number(side_a.value);
    let a = Math.tan(Math.PI / Number(numbers.value));
    let b = 2 * a;
    let apothema = Number(side_a.value) / b;
    let polygonFace = (Number(numbers.value) * Number(side_a.value) * apothema) / 2;
    faceResult.value = polygonFace.toFixed(round.value);
    circumferenceResult.value = polygonCircumference.toFixed(round.value);
};

function calculate(e) {
    if (side_a.value === "" || numbers.value === "") {
        document.getElementById("err").innerHTML = "Empty fields! *";
        e.preventDefault();
    } else {
        document.getElementById("err").innerHTML = "";
    }
    calcPolygon();
};

document.getElementById("reset").addEventListener("click", () => {
    side_a.value = "";
    numbers.value = "";
    round.value = 2;
    faceResult.value = "";
    circumferenceResult.value = "";
});