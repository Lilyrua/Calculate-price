function calculate(){
    const pieces = Number(document.getElementById("pieces").value);
    const items = Number(document.getElementById("items").value);
    let total = 0;
    for (let index = 1; index <= items; index++) {
        total += pieces;
    }
    document.getElementById("result").innerText = total;
}