/*4-task Uzunlugu 4-e beraber olan elemntleri capa verme*/
/*   1+n*(1+1)=O(2n+1)  */
var arr=["Asif","Kenan","Eli","Arif"];
for(var i=0;i<arr.length;i++){
    if(arr[i].length==4){
        console.log(arr[i]);
    }
}
/*1-ci task araliq ededlerin cemi*/
/*1+1+1+n*1+1=O(4n) */
var num1=parseInt(prompt("1-ci eded daxil ele"));
var num2=parseInt(prompt("2-ci eded daxil ele"));
var cem=0;
var kicikeded,boyukeded;
if(num1<num2){
    kicikeded=num1;
    boyukeded=num2;
}
else{
   kicikeded=num2;
   boyukeded=num1;
}
for (i=kicikeded;i<=boyukeded;i++) {
    cem=cem+i;
}
console.log(kicikeded,boyukeded,cem);

/*2-ci task quvvet ustu*/
/*1+1+log n +1=3+log n */
var m=parseInt(prompt("m ededini daxil edin"));
var n=parseInt(prompt("n ededini daxil edin"));
var result=m**n;
console.log(result);

/*3-cu task mertebe sayi */
/*1+1+n*(1+1)+1=3+2n=O(2n+3) */
var num = parseInt(prompt("Eded daxil edin"));
var reqem = 0;
while (num > 0) {
  reqem += 1;
  num=(num/10)|0;
}
console.log(reqem);



