function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    angleMode(RADIANS);
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var vertex_X = x + cos(a) * radius;
        var vertex_Y = y + sin(a) * radius;
        vertex(vertex_X, vertex_Y);
    }
    endShape(CLOSE);
}