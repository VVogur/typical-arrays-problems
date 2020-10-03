exports.min = function min(array) {
    if (array && array.length != 0) {
        return Math.min.apply(Math, array);
    } else {
        return 0;
    }

}

exports.max = function max(array) {
    if (array && array.length != 0) {
        return Math.max.apply(Math, array);
    } else {
        return 0;
    }
}

exports.avg = function avg(array) {
    if (array && array.length != 0) {
        var total = 0;
        for (var i = 0; i < array.length; i++) {
            total += array[i];
        }
        var avg = total / array.length;
        return avg;
    } else {
        return 0;
    }
}