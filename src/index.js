const argv = require('minimist')(process.argv.slice(2));
const colors = require('colors')

function rand(min, max){
	let randomNum = Math.random() * (max - min) + min;
	return Math.floor(randomNum);
}

function percentage(partialValue, totalValue) {
   return (100 * partialValue) / totalValue;
}

const dice = argv.dice

const sumData = argv.sum
var sum = 0

var subData = argv.sub
var sub = 0

if (typeof(sumData) === 'number'){
   sum += sumData
}

else if ( typeof(sumData) !== 'undefined' ){
   const sumDataArray = sumData.split(',')
   
   for (i = 0; i < sumDataArray.length; i++){
      sum += Number( sumDataArray[i] )
   }

}

if (typeof(subData) === 'number'){
   sub += subData
}

else if ( typeof(subData) !== 'undefined' ){

   const subDataArray = subData.split(',')
   
   for (i = 0; i < subDataArray.length; i++){
      sub += Number( subDataArray[i] )
   }

}

const sort = rand( 1, dice )
const number = sum + sort - sub
const numberPercentage = percentage( number, dice )

if( numberPercentage <= 25 ){ 
   var numberStr = `${ number }`.red.bold
}
else if( numberPercentage <= 50 ){
   var numberStr = `${ number }`.yellow.bold
}
else if ( numberPercentage <= 75 ){
   var numberStr = `${ number }`.blue.bold
}
else if (numberPercentage < 100 ){
   var numberStr = `${ number }`.green.bold
}
else if (numberPercentage === 100){
   var numberStr = `${ number }`.bold
}
else if (numberPercentage > 100){
   var numberStr = `${ number }`.magenta.bold
}
else{
   var numberStr = 'Error, this error need to re reported.'
}

console.log('Roll The Dice!: '.bold + numberStr)
