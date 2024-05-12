// function convertclick() {
//     const decimalnum = document.getElementById("ip").value;

//     const hexa = convert(decimalnum, 16);
//     const bin = convert(decimalnum, 2);
//     const oct = convert(decimalnum, 8);

//     document.getElementById("op").innerHTML = `
//         Binary: ${bin}<br>
//         Hexadecimal: ${hexa}<br>
//         Octal: ${oct}
//     `;
// }

// function convert(decimal, format) {
//     return parseInt(decimal, 10).toString(format).toUpperCase();
// }

rand=function(min,max){
    if(min==null&&max==null){
        return 0;
    }
    if(max==null){
        max=min;
        min=0;
    }
  return min+Math.floor(Math.random()*(max-min+1));
}
console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());

