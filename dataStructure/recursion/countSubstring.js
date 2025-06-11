let count = 1
function countSubstringsRecursive(str, target) {
    const index = str.indexOf(target)
    console.log(`the ${count++} call and string now: ${str} the slice is: ${str.slice(index + target.length)} and index is : ${str.indexOf(target)}`)
    if (index === -1) {
        return 0;
    }

    return 1 + countSubstringsRecursive(str.slice(index + target.length), target)
}

const strRecursive = "ababab";
const subRecursive = "ab";
console.log(countSubstringsRecursive(strRecursive, subRecursive)); // Output: 4