
// for decrtease and increase the poeples im romm 1-4
let people =document.getElementById('people');
let people_less=document.getElementById('people_less');
let people_more=document.getElementById('people_more');

let people_index=4;

people_less.addEventListener('click',()=> {
    people_index-=1;
    if (people_index<=0) {
        people_index=1;
        people.value =people_index+'people';
    } 
    else {
        people.value =people_index+'people';
    }
})
people_more.addEventListener('click',()=> {
    people_index +=1;
    if (people_index >= 4) {
        people_index = 4;
        people.value = people_index+'people';
    } 
    else {
        people.value = people_index+'people';
    }
})

// check in check out functionalities

//checkin
//checkin_data
let checkin_data = document.getElementById('checkin_data');
let checkin = document.getElementById('checkin');

checkin.addEventListener('change', () => {
    let checkin_value = checkin.value;
   // console.log(checkin_value);

    let dates = new Date(checkin_value);
    let dates2 = new Date();
   

    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let day = week[dates.getDay()];
    // console.log(day)

    let date = dates.getDate();
    // console.log(date)

    let months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let month = months[dates.getMonth()];

    if (dates < dates2) {
        console.log('No Date');
    } else {
        checkin_data.innerText = day + ', ' + date + ' ' + month;
    }
});

let checkout_data=document.getElementById('checkout_data');
let checkout=document.getElementById('checkout');

checkout.addEventListener('change', () => {
    let checkout_value = checkout.value;
    let checkin_value=checkin.value;
    console.log(checkin_value);

    let dates = new Date(checkout_value);
    let dates2 = new Date(checkin_value);
   

    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let day = week[dates.getDay()];
    // console.log(day)

    let date = dates.getDate();
    // console.log(date)

    let months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let month = months[dates.getMonth()];

    if (dates < dates2) {
        console.log('No Date');
    } else {
        checkout_data.innerText = day + ', ' + date + ' ' + month;
    }
});


const image=[

    "url(imgs/Architecture-Design.jpg)no-repeat center/cover",
    "url(imgs/wp2931974.jpg)no-repeat center/cover",
    "url(imgs/1.jpeg)no-repeat center/cover",
    "url(imgs/Architecture-Design.jpg)no-repeat center/cover"
]


let index = 1;
let h6=document.getElementById('h6');
h6.innerText = "+" + image.length;



let btn_left = document.getElementById('btn_left');
let btn_right = document.getElementById('btn_right');

let style=document.getElementsByClassName('content')[0].style;

btn_left.addEventListener('click',()=>{
    index -= 1;
    if(index<0)
    {
        index = (image.length)-1;
    }
    style.setProperty('--background',image[index]);
})

btn_right.addEventListener('click',()=>{
    index ++;
    if(index > (image.length)-1)
    {
        index = 0; 
    }
    style.setProperty('--background',image[index]);
})
