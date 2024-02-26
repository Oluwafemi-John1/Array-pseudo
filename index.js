var arr = [2, true, 'boy']
arr.push('Kemi')
arr.push('Femi')
arr.push('Remi')
arr.pop()
// arr.splice(startingIndex, numberOfItemToremove, replacement)
arr.splice(0, arr.length)
console.log(arr);