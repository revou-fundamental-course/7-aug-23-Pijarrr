function hitungluas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);

    if (!isNaN(alas) && !isNaN(tinggi)) {
        var luas = 0.5 * alas * tinggi;
        document.getElementById("hasilLuas").innerHTML = "Luas: " + luas.toFixed(2) + "cm^2";
    } else {
        document.getElementById("hasilLuas").innerHTML = "Masukan input yang benar";
    }
}

function hitungkeliling() {
    var sisia = parseFloat(document.getElementById("sisia").value);
    var sisib = parseFloat(document.getElementById("sisib").value);
    var sisic = parseFloat(document.getElementById("sisic").value);

    if (!isNaN(sisia) && !isNaN(sisib) && !isNaN(sisic)){
        var keliling = sisia + sisib + sisic;
        document.getElementById("hasilKeliling").innerHTML = "Keliling: " + keliling + "cm";
    } else {
        document.getElementById("hasilKeliling").innerHTML = "Masukan input yang benar.";
    }
}

function resetluas(){
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("hasilLuas").innerHTML = "";
}

function resetkeliling(){
    document.getElementById("sisia").value = "";
    document.getElementById("sisib").value = "";
    document.getElementById("sisic").value = "";
    document.getElementById("hasilKeliling").innerHTML = "";
}

    var validasi = document.getElementById("alas");

    validasi.addEventListener("input", function(event) {
        let inputValue = event.target.value;
        inputValue = inputValue.replace(/[^\d.-]/g, "");
        event.target.value = inputValue;
    });

    var validasi = document.getElementById("tinggi");

    validasi.addEventListener("input", function(event) {
        let inputValue = event.target.value;
        inputValue = inputValue.replace(/[^\d.-]/g, "");
        event.target.value = inputValue;
    });

    var validasi = document.getElementById("sisia");

    validasi.addEventListener("input", function(event) {
        let inputValue = event.target.value;
        inputValue = inputValue.replace(/[^\d.-]/g, "");
        event.target.value = inputValue;
    });

    var validasi = document.getElementById("sisib");

    validasi.addEventListener("input", function(event) {
        let inputValue = event.target.value;
        inputValue = inputValue.replace(/[^\d.-]/g, "");
        event.target.value = inputValue;
    });

    var validasi = document.getElementById("sisic");

    validasi.addEventListener("input", function(event) {
        let inputValue = event.target.value;
        inputValue = inputValue.replace(/[^\d.-]/g, "");
        event.target.value = inputValue;
    });