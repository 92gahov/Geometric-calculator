var side_a = document.getElementById("side_a");
var round = document.getElementById("round");
var faceResult = document.getElementById("face_result");
var circumferenceResult = document.getElementById("circumference_result");

function calcHexagon() {
    let a = (3 * Math.sqrt(3)) / 2;
    let hexagonFace = a * Math.pow(Number(side_a.value), 2);
    let hexagonCircumference = 6 * Number(side_a.value);
    faceResult.value = hexagonFace.toFixed(round.value);
    circumferenceResult.value = hexagonCircumference.toFixed(round.value);
};

function calculate(e) {
    if (side_a.value === "") {
        document.getElementById("err").innerHTML = "Empty field! *";
        e.preventDefault();
    } else {
        document.getElementById("err").innerHTML = "";
    }
    calcHexagon();
};

document.getElementById("reset").addEventListener("click", () => {
    side_a.value = "";
    round.value = 2;
    faceResult.value = "";
    circumferenceResult.value = "";
});