var side_a = document.getElementById("side_a");
var side_b = document.getElementById("side_b");
var side_c = document.getElementById("side_c");
var ha = document.getElementById("ha");
var round = document.getElementById("round");
var faceResult = document.getElementById("face_result");
var circumferenceResult = document.getElementById("circumference_result");

function calcBySides() {
    let triangleFace = (Number(side_a.value) * Number(ha.value)) / 2;
    let triangleCircumference = Number(side_a.value) + Number(side_b.value) + Number(side_c.value);
    faceResult.value = triangleFace.toFixed(round.value);
    circumferenceResult.value = triangleCircumference.toFixed(round.value);
};

function calculate(e) {
    if (side_a.value === "" || side_b.value === "" || side_c.value === "" || ha.value === "") {
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
    ha.value = "";
    round.value = 2;
    faceResult.value = "";
    circumferenceResult.value = ""
});
