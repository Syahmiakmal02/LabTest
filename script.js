function calculateAge(dob) {
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

document.getElementById("submitButton").addEventListener("click", function() {
    // Get values from the form
    var name = document.getElementById("nama").value;
    var height = parseFloat(document.getElementById("tinggi").value);
    var weight = parseFloat(document.getElementById("berat").value);
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="jantina"]:checked').value;

    // Calculate BMI
    var bmi = weight / (height * height);

    // Determine BMI status
    var status;
    if (bmi <= 20) {
        status = "underweight";
    } else if (bmi > 20 && bmi <= 24.5) {
        status = "normal";
    } else {
        status = "overweight";
    }

    // Calculate age
    var age = calculateAge(dob);

    // Determine eligibility
    var eligibility;
    if (height > 1.35 && status.trim().toLowerCase() === "normal" && age >= 13 && age < 17) {
        if (gender === "Lelaki") {
            eligibility = "Tahniah anda layak untuk menyertai pasukan bola tampar lelaki";
        } else if (gender === "Perempuan") {
            eligibility = "Tahniah anda layak untuk menyertai pasukan bola tampar perempuan";
        }
    } else {
        eligibility = "Maaf, anda tidak layak untuk menyertai pasukan bola tampar";
    }

    // Display results using alert box
    alert(
        "Nama: " + name + "\n" +
        "Umur: " + age + " tahun\n" +
        "Tinggi: " + height + " m\n" +
        "BMI: " + bmi.toFixed(2) + "\n" +
        "Status BMI: " + status + "\n" +
        "Kelayakan: " + eligibility
    );
});