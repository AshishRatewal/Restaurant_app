let dishBlankArray = [],
    first_Span = document.querySelector(".first_span"),
    second_span = document.querySelector(".second_span"),
    third_span = document.querySelector(".third_span"),
    last_span = document.querySelector(".last_span"),
    first_page = document.querySelector(".first_page"),
    mealSelect = document.getElementById("mealSelect"),
    noPeople = document.getElementById("noPeople"),
    second_page = document.querySelector(".second_page"),
    selectRest = document.getElementById("selectRest"),
    third_page = document.querySelector(".third_page"),
    selectDish = document.getElementById("selectDish"),
    selectSer = document.getElementById("selectSer"),
    last_page = document.querySelector(".last_page"),
    review_page = document.querySelector(".review_page"),
    breakfastRest = ["Mc Donalds", "Vege Deli", "Olive Garden"],
    lunchRest = ["Mc Donalds", "Taco Bell", "Vege Deli", "Pizzeria", "Panda Express", "Olive Garden"],
    dinnerRest = ["Mc Donalds", "Taco Bell", "BBQ Hut", "Vege Deli", "Pizzeria", "Panda Express", "Olive Garden"],
    breakfastMcDonalds = ["Egg Muffin"],
    breakfastVegeDeli = ["Coleslaw Sandwich", "Grilled Sandwich"],
    breakfastOliveGarden = ["Garlic Bread"],
    lunchMcDonalds = ["Chicken Burger", "Ham Burger", "Cheese Burger", "Fries"],
    lunchTacoBell = ["Burrito", "Tacos", "Quesadilla"],
    lunchVegeDeli = ["Vegan Bento", "Veg. Salad", "Fruit Salad", "Corn Soup", "Tomato Soup", "Minestrone Soup"],
    lunchPizzeria = ["Pepperoni Pizza", "Hawaiian Pizza", "Seafood Pizza"],
    lunchPandaExpress = ["Chow Mein", "Mapo Tofu", "Kung Pao", "Wontons"],
    lunchOliveGarden = ["Garlic Bread", "Rigatoni Spaghetti", "Fettucine Pasta"],
    dinnerMcDonalds = ["Chicken Burger", "Ham Burger", "Cheese Burger", "Fries"],
    dinnerTacoBell = ["Burrito", "Tacos", "Quesadilla"],
    dinnerBBQHut = ["Steak", "Yakitori", "Nankotsu", "Piman"],
    dinnerVegeDeli = ["Veg. Salad", "Fruit Salad", "Corn Soup", "Tomato Soup", "Minestrone Soup"],
    dinnerPizzeria = ["Pepperoni Pizza", "Hawaiian Pizza", "Seafood Pizza", "Deep Dish Pizza"],
    dinnerPandaExpress = ["Chow Mein", "Mapo Tofu", "Kung Pao", "Wontons"],
    dinnerOliveGarden = ["Garlic Bread", "Ravioli", "Rigatoni Spaghetti", "Fettucine Pasta"];
document.querySelector(".nextBtn_one").addEventListener("click", () => {
    if (
        ("" == mealSelect.value || null == mealSelect.value
            ? alert("Please Select a Meal!")
            : "" == noPeople.value || null == noPeople.value
            ? alert("Please Select Number of People!")
            : noPeople.value >= 1 && noPeople.value <= 5
            ? (first_page.classList.add("hide"), second_page.classList.remove("hide"), first_Span.classList.remove("color_class"), second_span.classList.add("color_class"))
            : alert("Please Select In Between 1 to 5"),
        (document.getElementById("selectRest").innerHTML = ""),
        "breakFast" == mealSelect.value)
    )
        for (var e = 0; e < breakfastRest.length; e++) {
            let t = document.createElement("option"),
                l = (t.setAttribute("value", `${breakfastRest[e]}`), document.createTextNode(`${breakfastRest[e]}`));
            t.appendChild(l), selectRest.appendChild(t);
        }
    else if ("lunch" == mealSelect.value)
        for (var t = 0; t < lunchRest.length; t++) {
            let e = document.createElement("option"),
                l = (e.setAttribute("value", `${lunchRest[t]}`), document.createTextNode(`${lunchRest[t]}`));
            e.appendChild(l), selectRest.appendChild(e);
        }
    else
        for (var l = 0; l < dinnerRest.length; l++) {
            let e = document.createElement("option"),
                t = (e.setAttribute("value", `${dinnerRest[l]}`), document.createTextNode(`${dinnerRest[l]}`));
            e.appendChild(t), selectRest.appendChild(e);
        }
    var a = document.createElement("option");
    a.setAttribute("selected", "true"), a.setAttribute("disabled", "false"), a.setAttribute("value", "");
    var n = document.createTextNode("---");
    a.appendChild(n), selectRest.prepend(a);
}),
    document.querySelector(".secondBtnNext").addEventListener("click", () => {
        if (
            ("" == selectRest.value || selectRest.null
                ? alert("Please Select One of them!")
                : (second_page.classList.add("hide"), third_page.classList.remove("hide"), second_span.classList.remove("color_class"), third_span.classList.add("color_class")),
            (document.querySelector("#selectDish").innerHTML = ""),
            "breakFast" == mealSelect.value && "Mc Donalds" == selectRest.value)
        )
            for (var e = 0; e < breakfastMcDonalds.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${breakfastMcDonalds[e]}`), document.createTextNode(`${breakfastMcDonalds[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        else if ("breakFast" == mealSelect.value && "Vege Deli" == selectRest.value)
            for (e = 0; e < breakfastVegeDeli.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${breakfastVegeDeli[e]}`), document.createTextNode(`${breakfastVegeDeli[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        else if ("breakFast" == mealSelect.value && "Olive Garden" == selectRest.value)
            for (e = 0; e < breakfastOliveGarden.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${breakfastOliveGarden[e]}`), document.createTextNode(`${breakfastOliveGarden[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        else if ("lunch" == mealSelect.value && "Mc Donalds" == selectRest.value)
            for (e = 0; e < lunchMcDonalds.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${lunchMcDonalds[e]}`), document.createTextNode(`${lunchMcDonalds[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        else if ("lunch" == mealSelect.value && "Taco Bell" == selectRest.value)
            for (e = 0; e < lunchTacoBell.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${lunchTacoBell[e]}`), document.createTextNode(`${lunchTacoBell[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        else if ("lunch" == mealSelect.value && "Vege Deli" == selectRest.value)
            for (e = 0; e < lunchVegeDeli.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${lunchVegeDeli[e]}`), document.createTextNode(`${lunchVegeDeli[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        else if ("lunch" == mealSelect.value && "Pizzeria" == selectRest.value)
            for (e = 0; e < lunchPizzeria.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${lunchPizzeria[e]}`), document.createTextNode(`${lunchPizzeria[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        else if ("lunch" == mealSelect.value && "Panda Express" == selectRest.value)
            for (e = 0; e < lunchPandaExpress.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${lunchPandaExpress[e]}`), document.createTextNode(`${lunchPandaExpress[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        else if ("lunch" == mealSelect.value && "Olive Garden" == selectRest.value)
            for (e = 0; e < lunchOliveGarden.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${lunchOliveGarden[e]}`), document.createTextNode(`${lunchOliveGarden[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        else if ("dinner" == mealSelect.value && "Mc Donalds" == selectRest.value)
            for (e = 0; e < dinnerMcDonalds.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${dinnerMcDonalds[e]}`), document.createTextNode(`${dinnerMcDonalds[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        else if ("dinner" == mealSelect.value && "Taco Bell" == selectRest.value)
            for (e = 0; e < dinnerTacoBell.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${dinnerTacoBell[e]}`), document.createTextNode(`${dinnerTacoBell[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        else if ("dinner" == mealSelect.value && "BBQ Hut" == selectRest.value)
            for (e = 0; e < dinnerBBQHut.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${dinnerBBQHut[e]}`), document.createTextNode(`${dinnerBBQHut[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        else if ("dinner" == mealSelect.value && "Vege Deli" == selectRest.value)
            for (e = 0; e < dinnerVegeDeli.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${dinnerVegeDeli[e]}`), document.createTextNode(`${dinnerVegeDeli[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        else if ("dinner" == mealSelect.value && "Pizzeria" == selectRest.value)
            for (e = 0; e < dinnerPizzeria.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${dinnerPizzeria[e]}`), document.createTextNode(`${dinnerPizzeria[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        else if ("dinner" == mealSelect.value && "Panda Express" == selectRest.value)
            for (e = 0; e < dinnerPandaExpress.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${dinnerPandaExpress[e]}`), document.createTextNode(`${dinnerPandaExpress[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        else
            for (e = 0; e < dinnerOliveGarden.length; e++) {
                let t = document.createElement("option"),
                    l = (t.setAttribute("value", `${dinnerOliveGarden[e]}`), document.createTextNode(`${dinnerOliveGarden[e]}`));
                t.appendChild(l), selectDish.appendChild(t);
            }
        var t = document.createElement("option");
        t.setAttribute("selected", "true"), t.setAttribute("disabled", "false"), t.setAttribute("value", "");
        var l = document.createTextNode("---");
        t.appendChild(l), selectDish.prepend(t);
        let a = document.querySelector("#selectDish").children;
        for (e = 1; e < a.length; e++) {
            var n = a[e].getAttribute("value");
            dishBlankArray.push(n);
        }
        console.log(dishBlankArray);
    }),
    document.querySelector(".secondBtnPrev").addEventListener("click", () => {
        second_page.classList.add("hide"), first_page.classList.remove("hide"), second_span.classList.remove("color_class"), first_Span.classList.add("color_class");
    }),
    document.querySelector(".thirdNextBtn").addEventListener("click", () => {
        "" == selectDish.value || null == selectDish.value
            ? alert("Please Select Any Dish")
            : "" == selectSer.value || null == selectSer.value
            ? alert("Please Select No of Servings")
            : selectSer.value >= 1 && selectSer.value <= 5
            ? (third_page.classList.add("hide"), last_page.classList.remove("hide"), third_span.classList.remove("color_class"), last_span.classList.add("color_class"))
            : alert("Please Enter Between 1 to 5");
    }),
    document.querySelector(".addMore_btn").addEventListener("click", () => {
        let e = dishBlankArray.length;
        alert("Array me " + e + " element hai");
        let t = selectDish.cloneNode();
        for (var l = 0; l < dishBlankArray.length; l++) {
            let a = document.querySelector("#selectDish").value,
                n = dishBlankArray.indexOf(a);
            if ((console.log(a), console.log(n), dishBlankArray.splice(n, 1), console.log(dishBlankArray), e > 1)) {
                let e = document.createElement("option");
                e.setAttribute("value", `${dishBlankArray[l]}`);
                let a = document.createTextNode(`${dishBlankArray[l]}`);
                e.appendChild(a), t.appendChild(e);
            } else alert("not enough item!!");
        }
        if (e > 1) {
            let e = document.createElement("input");
            e.setAttribute("type", "number"), e.setAttribute("min", "1"), e.setAttribute("max", "5"), document.querySelector(".sameSelect").append(t), document.querySelector(".sameSelect").append(e);
        }
    }),
    document.querySelector(".thirdPrevBtn").addEventListener("click", () => {
        third_page.classList.add("hide"), second_page.classList.remove("hide"), third_span.classList.remove("color_class"), second_span.classList.add("color_class");
    }),
    document.querySelector(".lastNextBtn").addEventListener("click", () => {
        last_page.classList.add("hide"), review_page.classList.remove("hide");
    }),
    document.querySelector(".lastPrevBtn").addEventListener("click", () => {
        last_page.classList.add("hide"), third_page.classList.remove("hide"), third_span.classList.add("color_class"), last_span.classList.remove("color_class");
    });
