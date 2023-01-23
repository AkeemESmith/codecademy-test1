console.log("hello world")

const check = (array) => {
    let sum = 0;
    array.forEach(ele => sum += ele)
    console.log(sum)
}
check([1, 2, 3, 4]) 