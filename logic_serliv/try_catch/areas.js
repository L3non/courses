function calculateRectangleArea (b, h) {
    if (typeof b != 'number' || typeof h != 'number') {
        throw new Error('calculateRectangleArea just accepts two numbers');
    } else {
        return b * h;
    }
}

function calculateTriangleArea (b, h) {
    if (typeof b != 'number' || typeof h != 'number') {
        throw new Error('calculateTriangleArea just accepts two numbers');
    } else {
        return b * h / 2;
    }
}

function calculateCircleArea (r) {
    if (typeof r != 'number') {
        throw new Error('calculateCircleArea just accepts two numbers');
    } else {
        return Math.PI * r ** 2;
    }
}

try {
    console.log(calculateRectangleArea(2, 8));
} catch (e) {
    alert(`It went bad: ${e.message}`);
}

try {
    let triangleArea = calculateTriangleArea(4, 10);
    document.querySelector('output').innerHTML = triangleArea;
} catch (e) {
    alert(`It went bad: ${e.message}`);
}

try {
    let circleArea = calculateCircleArea(2);
    console.log(circleArea);
} catch (e) {
    console.log(`It went bad: ${e.message}`);
} finally {
    console.log('End of program');
}