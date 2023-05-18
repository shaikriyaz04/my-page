DOM Assignment 1

Task 1

Change Contact navigation menu to "Projects" name then add new navigation menu after that "Hire Me" and remove fotter social icons.


![TASK1](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/db7ca960-b954-4588-93f4-80bd0bc3de03)


Solution

// change Contact to Projects

let ul = document.querySelector("ul");
ul.lastElementChild.innerHTML = "Projects";

// add Hire Me

let li = document.createElement("li");
li.innerHTML="<a>Hire Me</a>";
let list = document.querySelector("header nav ul");
list.appendChild(li);

// remove footer social icons

let footer = document.querySelector("footer ul");
footer.style.visibility = "hidden";

Task 2

Change input placeholder text to "Search My Project"

![task2](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/c404a5b9-e178-4656-b001-efdf79e6b1d5)


Solution

document.querySelector("input").placeholder = "Search My Project";

Task 3

Change span text and display footer social icons

![task3](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/3ff01464-f654-4aa4-8988-945ad02d2de2)


Solution

// change span text

let element = document.querySelectorAll(".hero-left-section p span"); element[1].innerText = "an Employee"; element[2].innerText = "iNeuron Intelligence Pvt Ltd.";

// display footer social icons

let footer = document.querySelector("footer ul"); footer.style.visibility = "visible";

Task 4

Change hero avtar image

![task4](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/f57d25f5-f4ab-427d-a083-ef94ca1adf53)


Solution

let image = document.querySelector("img"); image.src = "./hiteshsir.jpg"

Task 5

Add "Support Me" Button

![task5](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/a673878d-d03e-4023-8b2c-b423f3fe81b6)


Solution

let btn = document.createElement("button"); btn.innerHTML = "Support Me"; let newbtn = document.querySelector(".hero-right-section-btns"); newbtn.appendChild(btn);
DOM Assignment 2

change all h3 background color and change contact navigation menu to "Projects"

Task 1 // change all h3 background color and change contact navigation menu to "Projects"

![task1 D2](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/e1c6a63e-dccd-4977-ad07-41089d8510a5)


Solution

// change all h3 background color let ul = document.querySelector("ul"); ul.lastElementChild.innerHTML = "Projects"; let nodeList = document.querySelectorAll("h3"); for (let i = 0; i < nodeList.length; i++){ nodeList[i].style.backgroundColor = "#dadaf8"; }

// change contact navigation menu to "Projects"

let ul = document.querySelector("ul"); ul.lastElementChild.innerHTML = "Projects";

// Add h3 with new name "Skills" and also add new paragraph

![task2 D2](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/ab8e780b-c4e8-4892-9a7e-d19baa8d28bb)


Task2

Solution

let element = document.querySelector(".accordian-wrapper"); let div = document.createElement("div"); div.classList.add("accordian"); element.appendChild(div);

// add new h3 "Skills"

let newheading = document.createElement("h3"); newheading.innerHTML = "Skills"; newheading.style.backgroundColor = "#dadaf8"; div.appendChild(newheading);

// add new paragraph

let paragraph = document.createElement("p"); paragraph.innerHTML = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github." div.appendChild(paragraph);

// add click function on new h3

let lastaccordian = document.querySelectorAll(".accordian:last-child h3"); lastaccordian.forEach((element) => { element.addEventListener("click", () => { let para = element.nextElementSibling; if (para.style.display === "block") { para.style.display = "none"; } else { para.style.display = "block"; } }); });
DOM Assignment 3

Task

Change placeholder values

![task1 D3](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/606e7f8d-4966-498c-83e1-2854e14ce246)


Solution

// user output board

document.querySelector(".enterName").placeholder = "FSJS 2.0"; document.querySelector(".enterMail").placeholder = "fsjs@ineuron.ai"; document.querySelector(".enterMessage").placeholder = "Hello World";

// user input board

document.querySelector(".userName").placeholder = "FSJS 2.0"; document.querySelector(".userEmail").placeholder = "fsjs@ineuron.ai"; document.querySelector(".userMessage").placeholder = "Hello World";
DOM Assignment 4

Change background color and text color at the bottom of the cards and change character names

![DOM P1 SS](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/06dcdd17-6b73-4338-82d1-2b70b55c941b)


Solution

// change character names

document.querySelector(".clash-card__level--archer").nextElementSibling.innerHTML = "The Archer"; document.querySelector(".clash-card__level--goblin").nextElementSibling.innerHTML = "The Goblin";

// change background color at the bottom of the cards

document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#eb9a3d"; document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#ed5486"; document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#f58f1f"; document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#80ba35"; document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#50acfd";

// change text color at the bottom of the cards

document.querySelectorAll(".clash-card__unit-stats").forEach((e) => {e.style.color = "#fff"}); document.querySelectorAll(".no-border").forEach((e) => {e.style.color = "#fff"});
DOM Assignment 5

Add "Pro Subscription" button in navbar then add new recipe "Chinese (7)" in recipe list then change h5 and p tags color and add 6th card

![D5](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/363f9cbe-e29c-41ad-a8ea-d77cffba5257)

Solution

// Add "Pro Subscription" button

let newbtn = document.createElement("a"); newbtn.classList.add("btn"); newbtn.innerHTML = "Pro Subscription"; document.querySelector(".btn").parentElement.appendChild(newbtn);

// add new recipe "Chinese (7)"

let list = document.createElement("a"); list.innerHTML = "Chinese (7)"; let recipe = document.querySelector(".tags-container div").appendChild(list);

// change h5 and p tags color

document.querySelectorAll(".recipe-name").forEach((e) => {e.style.color = "#8A2BE2"}); document.querySelectorAll(".recipe-disp").forEach((e) => {e.style.color = "#8A2BE2"});

// add 6th card

let card = document.querySelector(".recipe-gallery"); let newCard = document.createElement("div"); newCard.classList.add("card"); card.appendChild(newCard);

let selectcard = document.querySelector(".card:last-child"); let cardImage = document.createElement("img"); cardImage.src = "./img/recipe-5.jpeg"; cardImage.classList.add("recipe-img"); selectcard.appendChild(cardImage);

let heading = document.createElement("h5"); heading.textContent = "Ice-Cream"; heading.classList.add("recipe-name"); selectcard.appendChild(heading);

let paragraph = document.createElement("p"); paragraph.textContent = "Prep : 15min | Cook : 30min"; paragraph.classList.add("recipe-disp"); selectcard.appendChild(paragraph);
DOM Assignment 6

Add Ineuron logo then change price to $10/month and add "linkedin" font awesome icon at end of the footer

![D6](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/289a273a-e60f-4433-8fd8-44f02175de8c)

Add Ineuron logo

Task6

Solution

document.querySelector(".logo").src = "./assets/ineuron-logo.png";

change price to $10/month and add "linkedin" font awesome icon at end of the footer

![D6 task2](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/8321d643-093e-4f17-b686-994b02ac560b)

Solution

// change price to $10/month

document.querySelector(".app_price > span").innerHTML = "$10";

// add "linkedin" font awesome icon at end of the footer

let socialmedia = document.querySelector(".footer_social"); let div = document.createElement("div"); div.innerHTML = ''; socialmedia.appendChild(div);
DOM Assignment 7

Remove the languages that have 2.0 in their name Use Javscript to write something in the input box and submit the form. This should refresh the page and languages in the left card should come back.

Remove the languages that have 2.0 in their name

![d7 task1](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/ea3cd974-72ed-46dc-bbd4-708a2fb53fe9)


Task7

Solution

let course = document.querySelectorAll(".main__languages a"); for(let i= 0; i < course.length; i++){ if(course[i].innerHTML.includes("2.0")){ course[i].style.display = "none"; } }

Task 2

Use Javscript to write something in the input box and submit the form. This should refresh the page and languages in the left card should come back.

![D7 task2](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/c198d959-1dc1-4d4d-941d-4b3c751fa26c)

Solution

let inputBox = document.querySelector(".main__form-input"); inputBox.disabled = false;

let submitBtn = document.querySelector(".main__form-btn"); submitBtn .disabled = false;

submitBtn.addEventListener("click",(event) =>{

for(let i= 0; i < course.length; i++){

    if(course[i].innerHTML.includes("2.0")){
       course[i].style.display = "inline";
       
    } 

}  
});

DOM Assignment 8

Remove navbar add horizontal line and p tag then add red color border to the div and add vertical scrollbar then add background color to white and add responsive navbar toggle button

<img width="770" alt="d8" src="https://github.com/shaikriyaz04/webdevelopment/assets/119100052/cd81e176-3bac-4f67-a4a9-fd2b25ca7fef">


Remove navbar and add horizontal line and h3 tag then add red color border to the div and add vertical scrollbar

Task1

Solution

// remove navbar

document.querySelector(".navbar-brand").innerHTML = ""; document.querySelector(".navbar-nav").innerHTML = "";

// add red color border to the div

document.querySelector(".col-lg-4").style.border = "3px solid red";

// add vertical scrollbar

let list = document.querySelector("aside"); let newscrollbar = document.querySelector(".new"); newscrollbar.style.overflowY = "scroll";

// add horizontal line

let aside = document.querySelector(".hr-line"); aside.overflow = "auto"; list.appendChild(aside);

// add h3

let heading = document.querySelector(".new-head"); heading.innerHTML = "This is my custom heading"; list.appendChild(heading);

Task 2

add background color to white

![d8  task2](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/af2b492f-cd55-4453-96af-f4d31276f17f)


Solution

let bgc = document.querySelector("body"); bgc.style.background = "#fff";

Task 3

add responsive navbar toggle button

![d8 task3](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/e5ae691b-a671-423b-8369-c196cf7fc063)


Solution

let navbartogglebutton = document.querySelector(".navbar-toggler"); navbartogglebutton.addEventListener("click", function(){ document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse"); })
DOM Assignment 9

Chnage h3 color and change button color when mouse over

Task 1

change h3 color

![d9](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/dc8fe1b9-8fd6-4706-afe5-e46e51c520fc)


Solution

document.querySelector(".caption .title").style.color = "#dc143c";

Task 2

change button color when mouse over

![d9 task2](https://github.com/shaikriyaz04/webdevelopment/assets/119100052/2ea7cbf2-9a83-4f17-af17-944ebcccb691)


Solution

let test = document.querySelector(".add-to-cart"); test.addEventListener("mouseover",() => {
test.style.backgroundColor = "#da123a"; }) test.addEventListener("mouseout",() => {
test.style.backgroundColor = "hsl(158, 36%, 37%)"; })
