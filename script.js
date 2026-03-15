// Canvas Setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const nameInput = document.getElementById("nameInput");

// Image Loading
const template = new Image();
template.src = "template.png";

template.onload = function() {
    canvas.width = template.width;
    canvas.height = template.height;
    ctx.drawImage(template, 0, 0);
};

// Generate Certificate Function
function generateCertificate() {
    const name = nameInput.value.trim() || 'Your Name';

    // Redrawing clears the previous name
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(template, 0, 0);

    // Initial Font Setup
    let fontSize = 80;
    const maxWidth = canvas.width - 100; // 50px padding on each side
    const nameY = canvas.height / 2 + 120; // Easily tweakable Y coordinate

    ctx.font = `${fontSize}px 'Great Vibes', cursive`;
    ctx.fillStyle = "black";
    ctx.textAlign = "center";

    // Auto-scale font size if name is too long
    while (ctx.measureText(name).width > maxWidth && fontSize > 10) {
        fontSize -= 2;
        ctx.font = `${fontSize}px 'Great Vibes', cursive`;
    }

    // Centered horizontally based on canvas width
    ctx.fillText(name, canvas.width / 2, nameY);
}

// Download Certificate Function
function downloadCertificate() {
    const link = document.createElement("a");
    // Export as PNG
    link.download = "certificate.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}