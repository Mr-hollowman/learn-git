// const emp=[
//     {name:"praveen",city:"madurai",salary:30000 ,
//          Details:{
// otherLanguage:"english,Hindi",FAtherName:"Mayandi",

//          }
// }
// ]
// // let newEmp=emp;
// // console.log('emp',emp);
// // console.log('NEWEMP',newEmp);
// // const [{name}]=emp;
// // console.log('employNAme',name);
// const [{Details : {FAtherName : lifeOfGod}}]=emp;
// console.log( 'realGod',lifeOfGod);

// const  name=
// {

//     fullName: function()
//     {
//         return this.firstname +""+this.lastname;
//     }
    
// }
// const person1=
// {
//     firstname: "Suriya",
//     lastname: 'kumar'
// }
// const person2=
// {
//     firstname:'ajith',
//     lastname:'kumar'
// }
// console.log(name.fullName.call(person2));

// const ether= graduate(5,7);
// console.log("multiplication",ether);
// function graduate(a,b)
// {
//     return (a*b);
// }

// const main=()=>
// {
//     console.log('let he party time');
// }
// setInterval(main,5000);

// const emp=[
//     {name:'Gokul',salary:20000,city:'Madurai'},
//     {name:'Muthukumar',salary:40000,city:'Chennai'},
//     {name:'Praveen',salary:25000,city:'Madurai'},
//     {name:'Suriyakumar',salary:50000,city:'Bangalore'},
//     {name:'Yuhash',salary:30000,city:'Bangalore'},
//     {name:'Selva',salary:100000,city:'Chennai'}
// ];
// count={Madrai:2,Chennai:2,Bangalore:2}

// const cityCount=emp.reduce((count,e)=>{
//     count[e.city]=count[e.city]?count[e.city]+=1:1;
//     return count;
// },{});
// console.log(emp);
// console.log(count0);

// console.log(cityCount);
// new_arr=arr.map(()=>{})
// const emp_city=emp.map((e)=>{return e.city});
// console.log(emp_city);

//newArr=arr.filter(()=>{})

// const empSalHigh=emp.filter(e=>e.salary<=50000 && e.city=='Madurai');
// console.log(empSalHigh);

//arr.reduce((output,everyarrayelement)=>{},initial value of output)

//  const number=[10,20,30,40,50];
//  let sum=0;
//  for(let i=0;i<number.length;i++)
//  {
//      sum+=number[i];//sum=sum+number[i]
//  }
//  console.log('sum of number=',sum);

// const sumOfNumbers=number.reduce((sum,num)=>sum+num,100);
//  console.log('sum of number=',sumOfNumbers);

//IIFE--Immediately Invoked Function Expression 

// (
//     (a,b)=>
// {
//     console.log('IIFE is called',a+b);
// }
// )(10,20);

// display();



// default arguments

// function sum(a,b=100)
// {
//     return a+b;
// }

// function sum(a,b)
// {
//     a=(a===undefined)?100:a;
//     b=(b===undefined)?100:b;

//     return a+b;
//  }

// console.log(sum(10));
//  console.log(sum(10,20));


// function sumOfArgs()
// {
//     let sum=0;
//     for(let i=0;i<arguments.length;i++)
//     {
//      sum+=arguments[i];
    
//     }
//     return sum;
// }   

// console.log(sumOfArgs(10,20,30));
    
//     console.log(sumOfArgs(30,20));
// console.log(sumOfArgs(10,20,5));
// console.log(sumOfArgs(10,20,30,40));


//Rest Parameter

// function sumOfArgs(...values)
// {
//     let sum=0;
//     for(let i=0;i<values.length;i++)
//     {
//      sum+=values[i];
    
//     }
//     return sum;
// }   

// console.log(sumOfArgs(10,20,30,40));

// const launches=fetch('https://api.spacexdata.com/v3/launches').then((l)=>{console.table(l.json())})

// const arr = [
//     {
// Name:"suriyakumar",
// salary:70000,
// taxPercent: 10
// },

// {
//     FatherName:"Kandhasamy",
//     salary:40000,
//     city:'Madurai',
//     taxPercent: 5
// },
// {
//         MotherName:'Vanitha',
//         salary:200000,
//         taxPercent: 15

//     },
//     {
//         sisterName:'PriyaDharshini',
//         salary:10000,
//         taxPercent: 20
//     }
    
// ]
// const newSpace= JSON.parse(JSON.stringify(arr));
// const mental=newSpace.map((e)=>{
//     e.taxPercent =(e.salary>20000 && e.salary<50000)?10:(e.salary>50000 && e.salary<100000)?15: 0;
//     return e.taxPercent;
// } );
// console.table( 'set',newSpace);




// function source()
// {
    // condition=document.getElementById('duck').value;
    // if(condition == 'off')
    // {
    //     document.getElementById('duck').value="on";
    // }
    // else{
    //     document.getElementById('duck').value="off";
    // }
// }


// function source()
// {
//     webpage=document.getElementById('card').value;
//     for(let i=0;i<=webpage.length;i++ )
//     if(i++)
//     {
//         document.getElementById('duck').innerHTML= i ;
//     }
// }

//     function info()
//     {
//          data=document.getElementById('cook').value;
// for(let i=0;i<=data.length;i--)
//          if(i)
//          {
//             document.getElementById('duck').innerHTML= i ;
//          }
//     }











