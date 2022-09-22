var side_a = document.getElementById("side_a");
var side_b = document.getElementById("side_b");
var side_c = document.getElementById("side_c");
var side_d = document.getElementById("side_d");
var height = document.getElementById("h");
var round = document.getElementById("round");
var faceResult = document.getElementById("face_result");
var circumferenceResult = document.getElementById("circumference_result");

function trapCalc() {
    let trapezoidFace = ((Number(side_a.value) + Number(side_c.value)) * Number(height.value)) / 2;
    let trapezoidCircumference = Number(side_a.value) + Number(side_b.value) + Number(side_c.value) + Number(side_d.value);
    faceResult.value = trapezoidFace.toFixed(round.value);
    circumferenceResult.value = trapezoidCircumference.toFixed(round.value);
};

function calculate(e) {
    if (side_a.value === "" || side_b.value === "" || side_c.value === "" || side_d.value === "" || height.value === "") {
        document.getElementById("err").innerHTML = "Empty fields! *";
        e.preventDefault();
    } else {
        document.getElementById("err").innerHTML = "";
    }
    trapCalc();
};

document.getElementById("reset").addEventListener("click", () => {
    side_a.value = "";
    side_b.value = "";
    side_c.value = "";
    side_d.value = "";
    height.value = "";
    round.value = 2;
    faceResult.value = "";
    circumferenceResult.value = ""
});