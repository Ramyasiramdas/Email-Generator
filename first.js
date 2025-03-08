function generateEmail() {
    let sender = document.getElementById("sender").value.trim();
    let recipient = document.getElementById("recipient").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let event = document.getElementById("event").value.trim();
    let instructions = document.getElementById("instructions").value.trim();
    let outputContainer = document.getElementById("output-container");
    let outputBox = document.getElementById("output");
    let generateBtn = document.getElementById("generateBtn");

    if (sender === "" || recipient === "" || event === "" || subject === "") {
        alert("Please enter your name, recipient name, subject, and event name.");
        return;
    }

    generateBtn.disabled = true;
    generateBtn.innerText = "Generating... ⏳";

    let emailTemplate = `Subject: ${subject}\n\nDear ${recipient},\n\nWe are pleased to invite you to the ${event}. ${instructions ? instructions : ""}\n\nBest regards,\n${sender}`;

    outputBox.innerText = "";
    outputContainer.classList.remove("hidden");

    let i = 0;
    function typeEffect() {
        if (i < emailTemplate.length) {
            outputBox.innerText += emailTemplate.charAt(i);
            i++;
            setTimeout(typeEffect, 20);
        } else {
            generateBtn.disabled = false;
            generateBtn.innerText = "⚡ Generate Email";
        }
    }

    typeEffect();
}

function copyToClipboard() {
    let outputBox = document.getElementById("output");
    navigator.clipboard.writeText(outputBox.innerText).then(() => {
        alert("Copied to clipboard! ✅");
    });
}

function clearFields() {
    document.getElementById("sender").value = "";
    document.getElementById("recipient").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("event").value = "";
    document.getElementById("instructions").value = "";
    document.getElementById("charCount").innerText = "0/250";
    document.getElementById("output-container").classList.add("hidden");
}

document.getElementById("instructions").addEventListener("input", function() {
    document.getElementById("charCount").innerText = `${this.value.length}/250`;
});