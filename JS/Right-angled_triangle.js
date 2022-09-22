var side_a = document.getElementById("side_a");
var side_b = document.getElementById("side_b");
var side_c = document.getElementById("side_c");
var round = document.getElementById("round");
var faceResult = document.getElementById("face_result");
var circumferenceResult = document.getElementById("circumference_result");

function calcBySides() {
    side_c.value = Math.sqrt(Number(Math.pow(side_a.value, 2)) + Number(Math.pow(side_b.value, 2))).toFixed(round.value);
    let rightAngledTriangleFace = Number((side_a.value * side_b.value)) / 2;
    let rightAngledTriangleCircumference = Number(side_a.value) + Number(side_b.value) + Number(side_c.value);
    faceResult.value = rightAngledTriangleFace.toFixed(round.value);
    circumferenceResult.value = rightAngledTriangleCircumference.toFixed(round.value);
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
    side_c.value = "";
    round.value = 2;
    faceResult.value = "";
    circumferenceResult.value = ""
});