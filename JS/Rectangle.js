var side_a = document.getElementById("side_a");
var side_b = document.getElementById("side_b");
var round = document.getElementById("round");
var faceResult = document.getElementById("face_result");
var circumferenceResult = document.getElementById("circumference_result");

function calcBySides() {
    let rectangleFace = Number(side_a.value) * Number(side_b.value);
    let rectangleCircumference = 2 * (Number(side_a.value) + Number(side_b.value));
    faceResult.value = rectangleFace.toFixed(round.value);
    circumferenceResult.value = rectangleCircumference.toFixed(round.value);
};

function calculate(e) {
    if (side_a.value === "" || side_b.value === "") {
        document.getElementById("err").innerHTML = "Empty fields! *";
        e.preventDefault();
    } else {
        document.getElementById("err").innerHTML = "";
    }
    calcBySides();
};

document.getElementById("reset").addEventListener("click", () => {
    side_a.value = "";
    side_b.value = "";
    round.value = 2;
    faceResult.value = "";
    circumferenceResult.value = ""
});