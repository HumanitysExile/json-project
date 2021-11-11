function testGS() {
    const url = "https://script.google.com/macros/s/AKfycbx5cVU1hvjOm8xZz5uBWrJ9joBIQylrqF1iefuicJ5aybfKsxlM3SrAXZBefIioGrSK/exec"
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}

document.getElementById("button").addEventListener("click", testGS);