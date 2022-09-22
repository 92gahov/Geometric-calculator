var side_a = document.getElementById("side_a");
var side_b = document.getElementById("side_b");
var ha = document.getElementById("ha");
var round = document.getElementById("round");
var faceResult = document.getElementById("face_result");
var circumferenceResult = document.getElementById("circumference_result");

function parallCalc() {
    let parallelogramFace = Number(side_a.value) * Number(ha.value);
    let parallelogramCircumference = 2 * (Number(side_a.value) + Number(side_b.value));
    faceResult.value = parallelogramFace.toFixed(round.value);
    circumferenceResult.value = parallelogramCircumference.toFixed(round.value);
};

function calculate(e) {
    if (side_a.value === "" || side_b.value === "" || ha.value === "") {
        document.getElementById("err").innerHTML = "Empty fields! *";
        e.preventDefault();
    } else {
        document.getElementById("err").innerHTML = "";
    }
    parallCalc();
};

document.getElementById("reset").addEventListener("click", () => {
    side_a.value = "";
    side_b.value = "";
    ha.value = "";
    round.value = 2;
    faceResult.value = "";
    circumferenceResult.value = ""
});