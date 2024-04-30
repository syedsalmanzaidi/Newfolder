// 1
// let intro={
//     name : 'salman'
//     , email: "zaidi3@GMAIL.COM"
//     , PASSWORD : '121XSACSA2@#@#ZAS'
// }
// for (let key in intro)
// {
//     console.log(key , intro[key])
// }

// 2
// let RandomNum = 25
// let user = prompt("Enter the number to guess a correct number")


// while(user != RandomNum)
// {
//      user =prompt("You enter wrong number")
// }
// console.log("Congratulation , you entered correct number")

// 3

// let str = "salman"
// let str2={
//     name : "salman",
//     email : "fasf@gmail.com",
//     pass : "sdsad"
// }


// for (let key of str) {
//     console.log(key)
// }

// arrays are Immutable , we cannot change it directly

// var name = 'syed salman ahmad zaidi'
// console.log(name.slice(10 , 20))

// let str = 'salman'
// let str2=' zaidi'
// let res =str.concat(str2)
// console.log(res)


// let name = 'hellow'

// res= name.replace('h' , 'y')
// console.log(res)







// let username = prompt("Enter your name ")
// console.log("@",username ,username.length)

// arrays are mutable , we can change it directly and we are useing looping on array
// let str = ["salman", 'zaidi' , 'salman zaidi']
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }

// for (const str1 of str) {
//     console.log(str1)

// }


// pracitce 
// let marks = [10 , 20 , 300000 , 4000]

// let sum = 0
// for (const mark of marks)
// {
//     sum += mark
// }
// console.log("sum is "  ,sum)
// let avg = sum/marks.length
// console.log('avg is ' , avg)





//practice
let prices = [250 , 645 , 300 , 900 , 50]
// let indx = 0;
// for (const val of prices) {
//     console.log(`value Before offer ${indx} = ${val}`)
//     let offer = val / 10
//     prices[indx] = prices[indx] - offer
//     console.log(`value after offer = ${prices[indx]}`)
//     indx++;

//     }

    // for (let i = 0; i < prices.length; i++) {
    //     let offer = prices[i] / 10
    //     prices[i] -= offer
  

    // }
    // console.log(prices)


    // let marvel = ['spiderman' , 'ironman ' , 'thor']
    // let dc = ['superman', 'batman']
    // let heros = marvel.concat(dc)
    // console.log(heros)

    // let companies = ['BlomeBerg' , 'MicroSoft' , "Uber" , 'Google' , 'IBM', 'Netflix']
    // companies.splice(2 , 1 , 'OLA')
    // console.log(companies)




//  const vovel = (str)=>{
//     count = 0
//     for(let vol of str){
//         if(vol === 'a' || vol === 'e' || vol === 'i' || vol === 'o' || vol === 'u'){
//             count++
//         }
//     }
//     console.log(count)
//  }



//for each (higer order function / higer order method )
// let arr = [0 , 1 , 2, 4 ,5]
// arr.forEach(function myfun(arr){
//     console.log(arr)

// })

// three param are in foreach first is val and then index and last one is array
// let cities = ['lahore', 'karachi', 'islamabad']
// cities.forEach((val , indx , city)=>{
//     console.log(val.toUpperCase() , indx , city)

// })

// practice
// let num =[1, 2, 3, 4, 5]
// num.forEach((val1)=>{
//     let val2 = val1*val1
//     console.log(`The square of  ${val1} is :` , val2)
// })

// map is similar to foreach which go on all objects and perform something but map return newArray
// let num = ['hello' ,'hello2']
// let newarray = num.map((nums)=>{
//     // console.log(nums)
//     return nums
// })
// console.log(newarray)


// filter us use to filter a specific value in arr
// let arr= [1 , 3 ,2 ,4 ,5, 6]
// let even = arr.filter((val)=>{
//     return val % 2 === 0
// })
// console.log(even)

// Reduce is use to reduce and return a single value like find a average
// let num = [1 , 2 , 3 , 4]
// let sum = num.reduce((val1 , val2)=>{
//     return val1 + val2
// })
// console.log(sum)
// pract
// let num =  [5 , 78 ,98 ,87878 ,787009]
// let greter = num.reduce((prev , curre)=>{
//     return prev > curre ? prev : curre
// })
// console.log( `the greatest number in (${num}) = ` , greter)

// practice
// let marks = [90 , 78 , 78 , 67 , 98 , 99]
// let pass = marks.filter((val)=>{
//     return val > 90
// })
// console.log(pass)
 
// practice
// let promp = prompt('Enter the number n')
// let arr = []
// for (let i = 1; i <= promp; i++) {  
//     arr[i - 1] = i  
// }
// console.log(arr)

// let sumall = arr.reduce((prev , curr)=>{
//     return prev*curr
// })
// console.log(`the factorial of ${arr } = ` ,sumall  )

 

// let div = document.querySelector('div')
// console.log(div)

// div.style.backgroundColor = ' black'
// div.style.color = ' blue'
// div.innerText = 'hello'
// let btn = document.createElement('button')
// btn.innerText="Click me"
// let div = document.querySelector('div')
// div.append(btn)
// let div = document.querySelector('div')
// div.before(btn)

// let newheading = document.createElement('h1')
// newheading.innerHTML = '<i>Hi , i ma here ! </i>' 
// document.querySelector('body').before(newheading)


// let p = document.createElement('p')
// p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tenetur.'
// document.querySelector('body').before(p)
// let para = document.querySelector('p')
// p.remove()

// let button = document.createElement('button')
// button.innerText="Click me"
// button.style.backgroundColor = 'red'
// button.style.color = 'white'

// document.querySelector('body').after(button)
// let styl = document.querySelector('button')

// let para = document.querySelector('p')
// para.style.color = 'red'
// para.style.backgroundColor = 'yellow'
// para.classList.add('newClass')

// let buttons = document.createElement('button')
// buttons.innerText = 'Click me '
// buttons.style.backgroundColor = 'yellow'
// document.querySelector('body').append(buttons)
// buttons.setAttribute('onClick' , "console.log('The button was clicked');alert('hello')")

// let button2= document.createElement('button')
// button2.innerText = 'double click me '
// button2.style.backgroundColor = 'red'
// document.querySelector('body').after(button2)
// button2.setAttribute('ondblclick' , "console.log('The button2 was double clicked')" )


// let p = document.createElement('p')
// p.innerText = 'hello how are you am good how about you'
// document.querySelector('body').prepend(p)
// p.onmouseover=(e,msg)=>{
//     console.log('the mouse is inside')
//     console.log(e.target , 'target')
//     console.log(e.type , 'type')
//     msg={
//         name : 'slaman',
//         class : '12year'
//     }
//     console.log(msg)
// }

// this is better method because we can multiple task perform by using same addListner use
// p.addEventListener("mouseover" , ()=>{
//     console.log('The mouse is inside by using addListner')
// })


let toggle = document.createElement("button")
toggle.innerText = 'darkmode'
document.querySelector('body').append(toggle)
// toggle.addEventListener('click' , ()=>{
//     console.log('The button was click')
//     toggle.style.backgroundColor = 'black'
//     toggle.style.color = 'white'

// })
let mode = 'light'
toggle.addEventListener('click' , ()=>{
    if(mode === 'light'){
        mode = 'dark'
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
       toggle.innerText='light-mode'
    }
    else{
        mode='light'
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        toggle.innerText='dark-mode'

    }
    console.log(mode)
  
})

let btn1 = document.querySelector('button')

btn1.style.backgroundColor = 'red'