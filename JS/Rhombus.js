var side_a = document.getElementById("side_a");
var height = document.getElementById("height");
var round = document.getElementById("round");
var faceResult = document.getElementById("face_result");
var circumferenceResult = document.getElementById("circumference_result");

function rhombCalc() {
    let rhombusFace = Number(side_a.value) * Number(height.value);
    let rhombusCircumference = 4 * Number(side_a.value);
    faceResult.value = rhombusFace.toFixed(round.value);
    circumferenceResult.value = rhombusCircumference.toFixed(round.value);
};

function calculate(e) {
    if (side_a.value === "" || height.value === "") {
        document.getElementById("err").innerHTML = "Empty fields! *";
        e.preventDefault();
    } else {
        document.getElementById("err").innerHTML = "";
    }
    rhombCalc();
};

document.getElementById("reset").addEventListener("click", () => {
    side_a.value = "";
    height.value = "";
    round.value = 2;
    faceResult.value = "";
    circumferenceResult.value = ""
});