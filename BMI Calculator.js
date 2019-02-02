function BMI (name,age,weight,height){
  
    let BMIresult = +weight  / ((+height/100) * (+height/100))  ;
    let human = {};
    human['name']=name;
    human['personInfo']={'age':age,'weight':weight,'height':height}

   console.log(human)
    console.log(Math.round(BMIresult));
}

BMI('Ani', 21, 60, 160)