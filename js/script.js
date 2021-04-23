// global veriable
let dishBlankArray = [];
let checkPreviousItemValue;
var e;
// let checkOptions;
// btns
let first_Span = document.querySelector(".first_span");
let second_span = document.querySelector(".second_span");
let third_span = document.querySelector(".third_span");
let last_span = document.querySelector(".last_span");
// first page
let first_page = document.querySelector(".first_page");
let mealSelect = document.getElementById("mealSelect");
let noPeople = document.getElementById("noPeople");
// second-page
let second_page = document.querySelector(".second_page");
let selectRest = document.getElementById("selectRest");
// third page
let third_page = document.querySelector(".third_page");
let selectDish = document.getElementById("selectDish");
let selectSer = document.getElementById("selectSer");
// last-page
let last_page = document.querySelector(".last_page");
// review_page
let review_page = document.querySelector(".review_page");
// all rest
let breakfastRest = ['Mc Donalds','Vege Deli','Olive Garden'];
let lunchRest = ['Mc Donalds','Taco Bell','Vege Deli','Pizzeria','Panda Express','Olive Garden'];
let dinnerRest = ['Mc Donalds','Taco Bell','BBQ Hut','Vege Deli','Pizzeria','Panda Express','Olive Garden'];
// all dishes bt rest
let breakfastMcDonalds = ['Egg Muffin'];
let breakfastVegeDeli = ['Coleslaw Sandwich','Grilled Sandwich'];
let breakfastOliveGarden = ['Garlic Bread'];
let lunchMcDonalds = ['Chicken Burger','Ham Burger','Cheese Burger','Fries'];
let lunchTacoBell = ['Burrito','Tacos','Quesadilla'];
let lunchVegeDeli = ['Vegan Bento','Veg. Salad','Fruit Salad','Corn Soup','Tomato Soup','Minestrone Soup'];
let lunchPizzeria = ['Pepperoni Pizza','Hawaiian Pizza','Seafood Pizza'];
let lunchPandaExpress = ['Chow Mein','Mapo Tofu','Kung Pao','Wontons'];
let lunchOliveGarden = ['Garlic Bread','Rigatoni Spaghetti','Fettucine Pasta'];
let dinnerMcDonalds = ['Chicken Burger','Ham Burger','Cheese Burger','Fries'];
let dinnerTacoBell = ['Burrito','Tacos','Quesadilla'];
let dinnerBBQHut = ['Steak','Yakitori','Nankotsu','Piman'];
let dinnerVegeDeli = ['Veg. Salad','Fruit Salad','Corn Soup','Tomato Soup','Minestrone Soup'];
let dinnerPizzeria = ['Pepperoni Pizza','Hawaiian Pizza','Seafood Pizza','Deep Dish Pizza'];
let dinnerPandaExpress = ['Chow Mein','Mapo Tofu','Kung Pao','Wontons'];
let dinnerOliveGarden = ['Garlic Bread','Ravioli','Rigatoni Spaghetti','Fettucine Pasta'];
// implimentation for first page
    
// creating a blank option in all the filed
document.querySelector(".nextBtn_one").addEventListener("click", () => {
    if(mealSelect.value == "" || mealSelect.value == null){
        alert("Please Select a Meal!");
    }else{
        if(noPeople.value == "" || noPeople.value == null){
            alert("Please Select Number of People!");
        }else if(noPeople.value >= 1 && noPeople.value <= 5){
            first_page.classList.add("hide");
            second_page.classList.remove("hide");
            first_Span.classList.remove("color_class");
            second_span.classList.add("color_class");
        }else{
            alert("Please Select In Between 1 to 5");
        }
    }
    // check wheather there is any option in selectRest
    document.getElementById("selectRest").innerHTML = "";
    // start condition
    if(mealSelect.value == "breakFast"){
        for(var i=0;i<breakfastRest.length;i++){
            let createOption = document.createElement("option");
            let createValue = createOption.setAttribute('value',`${breakfastRest[i]}`);
            let createText = document.createTextNode(`${breakfastRest[i]}`);
            createOption.appendChild(createText);
            selectRest.appendChild(createOption);
        }
    }else if(mealSelect.value == "lunch"){
        for(var j=0;j<lunchRest.length;j++){
            let creatLunchOption = document.createElement("option");
            let createLunchValue = creatLunchOption.setAttribute('value',`${lunchRest[j]}`);
            let createLunchText = document.createTextNode(`${lunchRest[j]}`);
            creatLunchOption.appendChild(createLunchText);
            selectRest.appendChild(creatLunchOption);
        }
    }else{
        for(var k=0;k<dinnerRest.length;k++){
            let createDinnerOption = document.createElement("option");
            let createDinnerValue = createDinnerOption.setAttribute('value',`${dinnerRest[k]}`);
            let createDinnerText = document.createTextNode(`${dinnerRest[k]}`);
            createDinnerOption.appendChild(createDinnerText);
            selectRest.appendChild(createDinnerOption);
        }
    }
    var createBlankOption = document.createElement("option");
    createBlankOption.setAttribute("selected","true");
    createBlankOption.setAttribute("disabled","false");
    createBlankOption.setAttribute("value","");
    var createHiffen = document.createTextNode("---");
    createBlankOption.appendChild(createHiffen);
    selectRest.prepend(createBlankOption);
});
// implimentation for second page
// second next page button
document.querySelector(".secondBtnNext").addEventListener("click", () => {
    // validation
    if(selectRest.value == "" || selectRest.null){
        alert("Please Select One of them!");
    }else{
        second_page.classList.add("hide");
        third_page.classList.remove("hide");
        second_span.classList.remove("color_class");
        third_span.classList.add("color_class");
    }
    // check wheather there is any content or not
    //remove all the element (option) if there is , from selectDishes
    document.querySelector("#selectDish").innerHTML = "";
    if(mealSelect.value == "breakFast" && selectRest.value == "Mc Donalds"){
        for(var i=0;i<breakfastMcDonalds.length;i++){
            let createBreakfastMdOption = document.createElement("option");
            let createBreakfastMdValue = createBreakfastMdOption.setAttribute('value',`${breakfastMcDonalds[i]}`);
            let createBreakfastMdText = document.createTextNode(`${breakfastMcDonalds[i]}`);
            createBreakfastMdOption.appendChild(createBreakfastMdText);
            selectDish.appendChild(createBreakfastMdOption);
        }
    }else if(mealSelect.value == "breakFast" && selectRest.value == "Vege Deli"){
        for(var i=0;i<breakfastVegeDeli.length;i++){
            let createBreakfastVdOption = document.createElement("option");
            let createBreakfastVdValue = createBreakfastVdOption.setAttribute('value',`${breakfastVegeDeli[i]}`);
            let createBreakfastVdText = document.createTextNode(`${breakfastVegeDeli[i]}`);
            createBreakfastVdOption.appendChild(createBreakfastVdText);
            selectDish.appendChild(createBreakfastVdOption);
        }
    }else if(mealSelect.value == "breakFast" && selectRest.value == "Olive Garden"){
        for(var i=0;i<breakfastOliveGarden.length;i++){
            let createBreakfastOgOption = document.createElement("option");
            let createBreakfastOgValue = createBreakfastOgOption.setAttribute('value',`${breakfastOliveGarden[i]}`);
            let createBreakfastOgText = document.createTextNode(`${breakfastOliveGarden[i]}`);
            createBreakfastOgOption.appendChild(createBreakfastOgText);
            selectDish.appendChild(createBreakfastOgOption);
        }
    }else if(mealSelect.value == "lunch" && selectRest.value == "Mc Donalds"){
        for(var i=0;i<lunchMcDonalds.length;i++){
            let createLunchMdOption = document.createElement("option");
            let createLunchMdValue = createLunchMdOption.setAttribute('value',`${lunchMcDonalds[i]}`);
            let createLunchMdText = document.createTextNode(`${lunchMcDonalds[i]}`);
            createLunchMdOption.appendChild(createLunchMdText);
            selectDish.appendChild(createLunchMdOption);
        }
    }else if(mealSelect.value == "lunch" && selectRest.value == "Taco Bell"){
        for(var i=0;i<lunchTacoBell.length;i++){
            let createLunchTbOption = document.createElement("option");
            let createLunchTbValue = createLunchTbOption.setAttribute('value',`${lunchTacoBell[i]}`);
            let createLunchTbText = document.createTextNode(`${lunchTacoBell[i]}`);
            createLunchTbOption.appendChild(createLunchTbText);
            selectDish.appendChild(createLunchTbOption);
        }
    }else if(mealSelect.value == "lunch" && selectRest.value == "Vege Deli"){
        for(var i=0;i<lunchVegeDeli.length;i++){
            let createLunchVdOption = document.createElement("option");
            let createLunchVdValue = createLunchVdOption.setAttribute('value',`${lunchVegeDeli[i]}`);
            let createLunchVdText = document.createTextNode(`${lunchVegeDeli[i]}`);
            createLunchVdOption.appendChild(createLunchVdText);
            selectDish.appendChild(createLunchVdOption);
        }
    }else if(mealSelect.value == "lunch" && selectRest.value == "Pizzeria"){
        for(var i=0;i<lunchPizzeria.length;i++){
            let createLunchPOption = document.createElement("option");
            let createLunchPValue = createLunchPOption.setAttribute('value',`${lunchPizzeria[i]}`);
            let createLunchPText = document.createTextNode(`${lunchPizzeria[i]}`);
            createLunchPOption.appendChild(createLunchPText);
            selectDish.appendChild(createLunchPOption);
        }
    }else if(mealSelect.value == "lunch" && selectRest.value == "Panda Express"){
        for(var i=0;i<lunchPandaExpress.length;i++){
            let createLunchPeOption = document.createElement("option");
            let createLunchPeValue = createLunchPeOption.setAttribute('value',`${lunchPandaExpress[i]}`);
            let createLunchPeText = document.createTextNode(`${lunchPandaExpress[i]}`);
            createLunchPeOption.appendChild(createLunchPeText);
            selectDish.appendChild(createLunchPeOption);
        }
    }else if(mealSelect.value == "lunch" && selectRest.value == "Olive Garden"){
        for(var i=0;i<lunchOliveGarden.length;i++){
            let createLunchOgOption = document.createElement("option");
            let createLunchOgValue = createLunchOgOption.setAttribute('value',`${lunchOliveGarden[i]}`);
            let createLunchOgText = document.createTextNode(`${lunchOliveGarden[i]}`);
            createLunchOgOption.appendChild(createLunchOgText);
            selectDish.appendChild(createLunchOgOption);
        }
    }else if(mealSelect.value == "dinner" && selectRest.value == "Mc Donalds"){
        for(var i=0;i<dinnerMcDonalds.length;i++){
            let createDinnerMdOption = document.createElement("option");
            let createDinnerMdValue = createDinnerMdOption.setAttribute('value',`${dinnerMcDonalds[i]}`);
            let createDinnerMdText = document.createTextNode(`${dinnerMcDonalds[i]}`);
            createDinnerMdOption.appendChild(createDinnerMdText);
            selectDish.appendChild(createDinnerMdOption);
        }
    }else if(mealSelect.value == "dinner" && selectRest.value == "Taco Bell"){
        for(var i=0;i<dinnerTacoBell.length;i++){
            let createDinnerTbOption = document.createElement("option");
            let createDinnerTbValue = createDinnerTbOption.setAttribute('value',`${dinnerTacoBell[i]}`);
            let createDinnerTbText = document.createTextNode(`${dinnerTacoBell[i]}`);
            createDinnerTbOption.appendChild(createDinnerTbText);
            selectDish.appendChild(createDinnerTbOption);
        }
    }else if(mealSelect.value == "dinner" && selectRest.value == "BBQ Hut"){
        for(var i=0;i<dinnerBBQHut.length;i++){
            let createDinnerBhOption = document.createElement("option");
            let createDinnerBhValue = createDinnerBhOption.setAttribute('value',`${dinnerBBQHut[i]}`);
            let createDinnerBhText = document.createTextNode(`${dinnerBBQHut[i]}`);
            createDinnerBhOption.appendChild(createDinnerBhText);
            selectDish.appendChild(createDinnerBhOption);
        }
    }else if(mealSelect.value == "dinner" && selectRest.value == "Vege Deli"){
        for(var i=0;i<dinnerVegeDeli.length;i++){
            let createDinnerVdOption = document.createElement("option");
            let createDinnerVdValue = createDinnerVdOption.setAttribute('value',`${dinnerVegeDeli[i]}`);
            let createDinnerVdText = document.createTextNode(`${dinnerVegeDeli[i]}`);
            createDinnerVdOption.appendChild(createDinnerVdText);
            selectDish.appendChild(createDinnerVdOption);
        }
    }else if(mealSelect.value == "dinner" && selectRest.value == "Pizzeria"){
        for(var i=0;i<dinnerPizzeria.length;i++){
            let createDinnerPOption = document.createElement("option");
            let createDinnerPValue = createDinnerPOption.setAttribute('value',`${dinnerPizzeria[i]}`);
            let createDinnerPText = document.createTextNode(`${dinnerPizzeria[i]}`);
            createDinnerPOption.appendChild(createDinnerPText);
            selectDish.appendChild(createDinnerPOption);
        }
    }else if(mealSelect.value == "dinner" && selectRest.value == "Panda Express"){
        for(var i=0;i<dinnerPandaExpress.length;i++){
            let createDinnerPeOption = document.createElement("option");
            let createDinnerPeValue = createDinnerPeOption.setAttribute('value',`${dinnerPandaExpress[i]}`);
            let createDinnerPeText = document.createTextNode(`${dinnerPandaExpress[i]}`);
            createDinnerPeOption.appendChild(createDinnerPeText);
            selectDish.appendChild(createDinnerPeOption);
        }
    }else{
        for(var i=0;i<dinnerOliveGarden.length;i++){
            let createDinnerOgOption = document.createElement("option");
            let createDinnerOgValue = createDinnerOgOption.setAttribute('value',`${dinnerOliveGarden[i]}`);
            let createDinnerOgText = document.createTextNode(`${dinnerOliveGarden[i]}`);
            createDinnerOgOption.appendChild(createDinnerOgText);
            selectDish.appendChild(createDinnerOgOption);
        }
    }
    // creating blank option
    var createBlankOption = document.createElement("option");
    createBlankOption.setAttribute("selected","true");
    createBlankOption.setAttribute("disabled","false");
    createBlankOption.setAttribute("value","");
    var createHiffen = document.createTextNode("---");
    createBlankOption.appendChild(createHiffen);
    selectDish.prepend(createBlankOption);

    // get element of select dish
    let getValuesDish = document.querySelector("#selectDish").children;
    for(var i=1;i<getValuesDish.length;i++){
        var attValue = getValuesDish[i].getAttribute('value');
        dishBlankArray.push(attValue);
    }
    console.log(dishBlankArray);
});
// second previous page button
document.querySelector(".secondBtnPrev").addEventListener("click", () => {
    second_page.classList.add("hide");
    first_page.classList.remove("hide");
    second_span.classList.remove("color_class");
    first_Span.classList.add("color_class");
});
// add more option in third page
document.querySelector(".addMore_btn").addEventListener("click",() => {
    var selectSers = document.querySelectorAll(".selectSers");
    if(selectDish.value == "" || selectDish == null){
        alert("Please Select first dish!");
    }else{
        for(var j = 0; j < selectSers.length; j++){
            var checklastServing = selectSers[j].value;
        }
        if(checklastServing != "" || checklastServing != 0){
            let arrayLengthBlankArray = dishBlankArray.length;
            let createAddDish = selectDish.cloneNode();
            let checkLastClass = document.getElementsByClassName("checkLastClass");
            for(var i=0; i < checkLastClass.length; i++){
                checkPreviousItemValue = checkLastClass[i].value;
                e = checkLastClass[i].childNodes;
                for(var j=0; j< e.length; j++){
                    if(e[j].value != checkPreviousItemValue){
                        e[j].setAttribute("disabled","true");
                    }
                }
            }
            let getIndexPreviousItem = dishBlankArray.indexOf(checkPreviousItemValue);
            dishBlankArray.splice(getIndexPreviousItem, 1);
            if(dishBlankArray.length > 0){
                for(var i=0;i<dishBlankArray.length;i++){
                    if(arrayLengthBlankArray > 0){
                        let createAddMoreOption = document.createElement("option");
                        createAddMoreOption.setAttribute("value",`${dishBlankArray[i]}`);
                        let createAddMoreText = document.createTextNode(`${dishBlankArray[i]}`);
                        createAddMoreOption.appendChild(createAddMoreText);
                        createAddDish.appendChild(createAddMoreOption);
                    }else{
                        alert("not enough item!!");
                    }
                }
            }else{
                alert("not enough item!!");
            }
            if(arrayLengthBlankArray > 1){
                let AddMoreSelectSer = document.createElement("input");
                AddMoreSelectSer.setAttribute("type","number");
                AddMoreSelectSer.setAttribute("class","selectSers");
                AddMoreSelectSer.setAttribute("min","1");
                AddMoreSelectSer.setAttribute("max","5");
                document.querySelector(".sameSelect").append(createAddDish);
                document.querySelector(".sameSelect").append(AddMoreSelectSer);
            }
        }else{
            alert("Please select Number of Servings");
        }
    }
});
//  third page 
document.querySelector(".thirdNextBtn").addEventListener("click", () => {
    if(selectDish.value == "" || selectDish.value == null){
        alert("Please Select Any Dish");
    }else{
        if(selectSer.value == "" || selectSer.value == null){
            alert("Please Select No of Servings");
        }else{
            if(selectSer.value >= 1 && selectSer.value <= 5){
                third_page.classList.add("hide");
                last_page.classList.remove("hide");
                third_span.classList.remove("color_class");
                last_span.classList.add("color_class");   
            }
            else{
                alert("Please Enter Between 1 to 5");
            }
        }
    }

    // review page data showing
    document.querySelector(".putMeal").innerHTML = mealSelect.value;
    document.querySelector(".putNoPeople").innerHTML = noPeople.value;
    document.querySelector(".putRest").innerHTML = selectRest.value;
    checkLastClass = document.getElementsByClassName("checkLastClass");
    var selectSers = document.querySelectorAll(".selectSers");
    let putDishName = document.querySelectorAll(".putDishName");
    let putDishNo = document.querySelectorAll(".putDishNo");
    for(var i=0;i < checkLastClass.length;i++){
        putDishName[i].innerHTML = checkLastClass[i].value; 
    }
    for(var i=0;i < selectSers.length;i++){
        putDishNo[i].innerHTML = selectSers[i].value; 
    }
});
document.querySelector(".thirdPrevBtn").addEventListener("click", () => {
    third_page.classList.add("hide");
    second_page.classList.remove("hide");
    third_span.classList.remove("color_class");
    second_span.classList.add("color_class");
    dishBlankArray.splice(0,dishBlankArray.length);
    var rmvElmt = document.querySelectorAll(".checkLastClass");
    var rmvSer = document.querySelectorAll(".selectSers");
    for(var m = 1; m < rmvElmt.length; m++){
        if(rmvElmt[m] != 1){
            rmvSer[m].remove();
            rmvElmt[m].remove();
        }
    }
});
// last page
document.querySelector(".lastNextBtn").addEventListener("click", () => {
    last_page.classList.add("hide");
    review_page.classList.remove("hide"); 
});
document.querySelector(".lastPrevBtn").addEventListener("click", () => {
    last_page.classList.add("hide");
    third_page.classList.remove("hide");
    third_span.classList.add("color_class");
    last_span.classList.remove("color_class");
});
