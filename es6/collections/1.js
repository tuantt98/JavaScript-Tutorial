let a = new Map([[1, 'a'], [2, 'b']])
let b = new Map([[1, 'a'], [2, 'b']])
a.set(3, 'c')
console.log(a)
a.set(3, 'd')
console.log(a)
console.log(a.get(1))
console.log(a.size)
console.log('------------------------------------------')
for(let item of a){
    console.log(item[1])
}
console.log('------------------------------------------')
console.log(a.has('a'))
console.log('------------------------------------------')
a.delete(3)
console.log(a)
console.log('------------------------------------------')
console.log(a.keys())
