function drawSpiral(a, b, spins) {

    let x = centerX,
        y = centerY;
    for (i = 0; i < spins; i++) {
        angle = 0.1 * i;
        x2 = centerX + (a + b * angle) * Math.cos(angle);
        y2 = centerY + (a + b * angle) * Math.sin(angle);
        line(x, y, x2, y2);
        x = x2;
        y = y2;
    }
}

function drawSpinningSpiral(a, b, spins, offset) {
    stroke(255, 255, 255); // White
    let x = centerX,
        y = centerY;
    for (i = 0; i < spins; i++) {
        angle = 0.2 * i;
        x2 = centerX + (a + b * angle) * Math.cos(angle + offset * PI / 5)
        y2 = centerY + (a + b * angle) * Math.sin(angle + offset * PI / 2);
        line(x, y, x2, y2);
        x = x2;
        y = y2;
    }
}