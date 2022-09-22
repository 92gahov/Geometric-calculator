var radius = document.getElementById("raidus");
var diameter = document.getElementById("diameter");
var round = document.getElementById("round");
var faceResult = document.getElementById("face_result");
var circumferenceResult = document.getElementById("circumference_result");

function calcCircle() {
    diameter.value = 2 * Number(radius.value);
    let circleFace = Number(Math.PI * (Math.pow(radius.value, 2)));
    let circleCircumference = Number(2 * (Math.PI * (radius.value)));
    faceResult.value = circleFace.toFixed(round.value);
    circumferenceResult.value = circleCircumference.toFixed(round.value);
};


function calculate(e) {
    if (radius.value === "") {
        document.getElementById("err").innerHTML = "Empty field! *";
        e.preventDefault();
    } else {
        document.getElementById("err").innerHTML = "";
    }
    calcCircle();
};

document.getElementById("reset").addEventListener("click", () => {
    radius.value = "";
    diameter.value = "";
    round.value = 2;
    faceResult.value = "";
    circumferenceResult.value = "";
});



