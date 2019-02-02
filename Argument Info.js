function ArgumentInfo(){
    let  firstArgument = arguments[0]
    let summary = {};
    for (let i = 0; i< arguments.length; i++) {
      let obj = arguments[i];
        let type = typeof obj;
        console.log(`${type} : ${obj}`)
        if(!summary[type]){
            summary[type]=1;
        }else{
            summary[type]++;
        }
        
    }
    let sorted =[];
    for (let current in summary){
        sorted.push([current,summary[current]])
    
     }
     sorted.sort(function(a,b){
         return b[1] - a[1]
     })
     console.log('-------------')
    sorted.forEach(function(e){
        console.log(`${e[0]} = ${e[1]}`)
    }
    )
}
ArgumentInfo('cat', 42, function () { console.log('Hello world!'); },'hellow',2,3)
