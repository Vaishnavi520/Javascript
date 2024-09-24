function fibonacciGenerator (n) {
   var n1=0;
   var n2=1;
   var array=[];
     if(n>=1){
        array.push(n1);
     } 
     if(n>=2) {
        array.push(n2);
     }
      for(var i=2;i<n;i++){
        var ans=n1+n2;
        array.push(ans);
         n1=n2;
         n2=ans;
     }
    return array;
}

var output=fibonacciGenerator(2);
console.log(output); 
