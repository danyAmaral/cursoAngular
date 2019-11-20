const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1)


console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}

Array.prototype.first = function(){
    return this[0];
}


console.log([1,3,5,76,32].first())
console.log(['aa','bb','fff'].first())