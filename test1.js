function bar(a, b, c) {
    // console.log(arguments.split(''));
    console.log(Array.from(arguments))
    console.log(Array.prototype.slice.call(arguments))
}

bar(1,2,3)