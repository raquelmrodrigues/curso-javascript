// escreva uma função que receba 2 número s e retorne o maior deles

function max(x, y) {
    if (x > y) {
        return x;
    }
    else {
        return y;
    }
}

function max1(x, y) { 
    if (x > y) return x;
    return y
}

function max2(x, y) {
    return x > y ? x : y;
}

const max3 = (x, y) => {
    return x > y ? x : y;
}

const max4 = (x, y) => x > y ? y : y;