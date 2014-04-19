function vb(n) {
    var binary = n.toString(2);
    var expectedLength = Math.ceil(binary.length / 7) * 7; // works
    var sevenByteBlocks = binary.padStart(expectedLength, '0').match(/\d{7}/g);
    var lastElemIdx = sevenByteBlocks.length - 1;
    for (var i = 0; i < lastElemIdx; i++) {
        sevenByteBlocks[i] = '0' + sevenByteBlocks[i];
    }
    sevenByteBlocks[lastElemIdx] = '1' + sevenByteBlocks[lastElemIdx];
    return sevenByteBlocks.join('');
}

function unary(n) {
    return '0'.padStart(n + 1, '1');
}

function gamma(n) {
    var bin = n.toString(2);
    return unary(bin.length - 1) + bin.substring(1, );
}

function fMeasure(p, r) { return 2 * p*r/(p + r); }
function prec(tp, fp) { return tp / (tp + fp); /* fp is what we did return but musn't have */ }
function rec(tp, fn) { return tp / (tp + fn); /* fn is what we must have returned but didn't  */ }

