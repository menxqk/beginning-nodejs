function first(data, cb) {
    console.log('Executing first');
    setTimeout(cb, 1000, data);
}

function second(data, cb) {
    console.log('Executing second');
    setTimeout(cb, 1000, data);
}

function third(data, cb) {
    console.log('Executing third');
    setTimeout(cb, 1000, data)
}

function handleThird(text3) {
    console.log('done:', text3);
}

function handleSecond(text2) {
    third(text2, handleThird);
}

function handleFirst(text1) {
    second(text1, handleSecond);
}

first('data', handleFirst);
