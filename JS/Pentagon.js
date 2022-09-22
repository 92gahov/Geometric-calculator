var side_a = document.getElementById("side_a");
var round = document.getElementById("round");
var faceResult = document.getElementById("face_result");
var circumferenceResult = document.getElementById("circumference_result");

function calcPentagon() {
    let a = 10 * Math.sqrt(5);
    let b = Math.sqrt(25 + a) / 4;
    let pentagonFace = b * Math.pow(Number(side_a.value), 2);
    let pentagoncircumference = 5 * Number(side_a.value);
    faceResult.value = pentagonFace.toFixed(round.value);
    circumferenceResult.value = pentagoncircumference.toFixed(round.value);
};

function calculate(e) {
    if (side_a.value === "") {
        document.getElementById("err").innerHTML = "Empty field! *";
        e.preventDefault();
    } else {
        document.getElementById("err").innerHTML = "";
    }
    calcPentagon();
};

document.getElementById("reset").addEventListener("click", () => {
    side_a.value = "";
    round.value = 2;
    faceResult.value = "";
    circumferenceResult.value = "";
});