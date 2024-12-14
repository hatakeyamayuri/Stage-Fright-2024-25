function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("nav_sns_menu").style.display = "block";
    document.getElementById("copyright1").style.display = "block";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("nav_sns_menu").style.display = "none";
    document.getElementById("copyright1").style.display = "none";
}

function openExitRight() {
    document.getElementById("myExitRight").style.display = "block";
}
function closeExitRight() {
    document.getElementById("myExitRight").style.display = "none";
}

function openConquer() {
    document.getElementById("myConquer").style.display = "block";
}
function closeConquer() {
    document.getElementById("myConquer").style.display = "none";
}

function openButterflies() {
    document.getElementById("myButterflies").style.display = "block";
}
function closeButterflies() {
    document.getElementById("myButterflies").style.display = "none";
}



const cards = document.querySelectorAll('.card');
const cart = document.getElementById('cart');
const add_onshop = document.querySelectorAll('.add_onshop');
const totalElement = document.getElementById('total'); 
const totalElement_2 = document.getElementById('true_total'); 
const selectedItems = {};
var click_list = [0,  0, 0, 0, 0, 0,  0, 0, 0, 0, 0,  0, 0, 0];

console.log(document.querySelectorAll('.add_onshop'))

function handleCardClick(event) {
    //console.log(event)
    const temp = (event.id +'_0') 
    console.log(temp)
    const card = temp.currentTarget;
    console.log(card)
    const itemId = temp;
    const itemName = card.querySelector('h4').textContent;
    const itemPrice = parseFloat(card.querySelector('.price').textContent); 

    if (selectedItems[itemId]) {
        selectedItems[itemId].count++;
    } else {
        selectedItems[itemId] = {
            name: itemName,
            price: itemPrice,
            count: 1,
        };
    }
        updateCart();
    }
//where is actually clicking. change to butn not whole

window.onload = restore;
window.onload = updateCart;

function restore_click() {
    //console.log(JSON.parse(localStorage.getItem(click_list)))
    click_list = JSON.parse(localStorage.getItem('click_list'));
    return click_list
}

function restore() {
    //var load = localStorage.cart;
    //document.getElementById("cart").innerHTML = load;
    //document.querySelector('ETVinyl').click();



    if (window.location.pathname === '../index/shop.html') {
        var firstTime = localStorage.getItem("first_time");
        if(!firstTime) {
            //is first time
            localStorage.setItem("first_time","1");
        } else {
            restore_click()
            click_list = restore_click()
        }


        for (let step = 0; step < click_list[6]; step++) {
            document.getElementById('TourHoodie').click();
        }
        for (let step = 0; step < click_list[10]; step++) {
            document.getElementById('Beanie').click();
        }
        for (let step = 0; step < click_list[11]; step++) {
            document.getElementById('Hat').click();
        }
        for (let step = 0; step < click_list[12]; step++) {
            document.getElementById('Bottle').click();
        }
        for (let step = 0; step < click_list[13]; step++) {
            document.getElementById('Keychain').click();
        }


        for (let step = 0; step < click_list[0]; step++) {
            document.getElementById('ExitRightVinyl').click();
        }
        for (let step = 0; step < click_list[3]; step++) {
            document.getElementById('ExitRightCD').click();
        }
        for (let step = 0; step < click_list[7]; step++) {
            document.getElementById('ExitRightSweat').click();
        }


        for (let step = 0; step < click_list[1]; step++) {
            document.getElementById('ConquerVinyl').click();
        }
        for (let step = 0; step < click_list[4]; step++) {
            document.getElementById('ConquerCD').click();
        }
        for (let step = 0; step < click_list[8]; step++) {
            document.getElementById('ConquerSweat').click();
        }


        for (let step = 0; step < click_list[2]; step++) {
            document.getElementById('ButterfliesVinyl').click();
        }
        for (let step = 0; step < click_list[5]; step++) {
            document.getElementById('ButterfliesCD').click();
        }
        for (let step = 0; step < click_list[9]; step++) {
            document.getElementById('ButterfliesSweat').click();
        }

        if (localStorage.total === "undefined") {
            totalElement.textContent = "Subtotal: $0.00";
        } else {
            totalElement.textContent = `Subtotal: $${localStorage.total}.00`;
        }


    } else {
        click_list = restore_click()
        for (let i = 0; i < (click_list.length); i++) {
            
            if ((i == 6) && (click_list[6] != null) && (click_list[6] != 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + i))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Exit Stage Right Tour Hoodie: ";
                product_price.textContent = " $52.00 - "
                product_num.textContent = click_list[6]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_6").appendChild(product_price);
                document.getElementById("append_id_6").appendChild(product_num);
            } 
            if ((i == 10) && (click_list[10] != null) && (click_list[10] != 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + i))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Stage Fright Beanie: ";
                product_price.textContent = " $25.00 - "
                product_num.textContent = click_list[10]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_10").appendChild(product_price);
                document.getElementById("append_id_10").appendChild(product_num);
            } 
            if ((i == 11) && (click_list[11] != null) && (click_list[11] != 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + i))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Stage Fright Hat: ";
                product_price.textContent = " $22.00 - "
                product_num.textContent = click_list[11]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_11").appendChild(product_price);
                document.getElementById("append_id_11").appendChild(product_num);
            } 
            if ((i == 12) && (click_list[12] != null) && (click_list[12] != 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + i))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Stage Fright Bottle: ";
                product_price.textContent = " $31.00 - "
                product_num.textContent = click_list[12]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_12").appendChild(product_price);
                document.getElementById("append_id_12").appendChild(product_num);
            } 
            if ((i == 13) && (click_list[13] != null) && (click_list[13] != 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + i))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Stage Fright Keychain: ";
                product_price.textContent = " $9.00 - "
                product_num.textContent = click_list[13]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_13").appendChild(product_price);
                document.getElementById("append_id_13").appendChild(product_num);
            } 




            if ((i == 0) && (click_list[0] != null) && (click_list[0] != 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + i))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Exit Right Vinyl: ";
                product_price.textContent = " $24.00 - "
                product_num.textContent = click_list[0]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_0").appendChild(product_price);
                document.getElementById("append_id_0").appendChild(product_num);
            } 

            if ((i == 3) && (click_list[3] != null) && (click_list[3] != 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + i))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Exit Right CD: ";
                product_price.textContent = " $20.00 - "
                product_num.textContent = click_list[3]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_3").appendChild(product_price);
                document.getElementById("append_id_3").appendChild(product_num);
            } 

            if ((i == 7) && (click_list[7] != null) && (click_list[7] != 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + i))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Exit Right Sweatshirt: ";
                product_price.textContent = " $43.00 - "
                product_num.textContent = click_list[7]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_7").appendChild(product_price);
                document.getElementById("append_id_7").appendChild(product_num);
            } 



            if ((i == 1) && (click_list[1] != null) && (click_list[1] != 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + i))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Conquer Vinyl: ";
                product_price.textContent = "$24.00 - "
                product_num.textContent = click_list[1]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_1").appendChild(product_price);
                document.getElementById("append_id_1").appendChild(product_num);
            } 

            if ((i == 4) && (click_list[4] != null) && (click_list[4] != 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + i))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Conquer CD: ";
                product_price.textContent = "$20.00 - "
                product_num.textContent = click_list[4]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_4").appendChild(product_price);
                document.getElementById("append_id_4").appendChild(product_num);
            } 

            if ((i == 8) && (click_list[8] != null) && (click_list[8] != 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + i))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Conquer Sweatshirt: ";
                product_price.textContent = "$43.00 - "
                product_num.textContent = click_list[8]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_8").appendChild(product_price);
                document.getElementById("append_id_8").appendChild(product_num);
            } 



            if ((i == 2) && (click_list[2] != null) && (click_list[2] != 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + i))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Butterflies Vinyl: ";
                product_price.textContent = "$18.00 - "
                product_num.textContent = click_list[2]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_2").appendChild(product_price);
                document.getElementById("append_id_2").appendChild(product_num);
            } 

            if ((i == 5) && (click_list[5] != null) && (click_list[5] != 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + i))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Butterflies CD: ";
                product_price.textContent = "$12.00 - "
                product_num.textContent = click_list[5]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_5").appendChild(product_price);
                document.getElementById("append_id_5").appendChild(product_num);
            } 

            if ((i == 9) && (click_list[9] != null) && (click_list[9] != 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + i))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Butterflies Sweatshirt: ";
                product_price.textContent = "$43.00 - "
                product_num.textContent = click_list[9]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_9").appendChild(product_price);
                document.getElementById("append_id_9").appendChild(product_num);
            } 

        }
        if (localStorage.total === "undefined") {
            totalElement.textContent = "Subtotal: $0.00";
            totalElement_2.textContent = "Total: $0.00";
        } else {
            totalElement.textContent = `Subtotal: $${localStorage.total}.00`;
            totalElement_2.textContent = `Total: $${(localStorage.total * 1.0825).toFixed(2)}`
        }
        
    }
}

window.onbeforeunload = save;
    
function save() {
    //localStorage.cart = cart.innerHTML; 
    if (document.getElementById('num_need_TourHoodie') !== null){
        let span = document.getElementById('num_need_TourHoodie');
        click_list.splice(6, 1, span.textContent); 
    } else {
        click_list.splice(6, 1, 0); 
    }

    if (document.getElementById('num_need_Beanie') !== null){
        let span = document.getElementById('num_need_Beanie');
        click_list.splice(10, 1, span.textContent); 
    } else {
        click_list.splice(10, 1, 0); 
    }

    if (document.getElementById('num_need_Hat') !== null){
        let span = document.getElementById('num_need_Hat');
        click_list.splice(11, 1, span.textContent); 
    } else {
        click_list.splice(11, 1, 0); 
    }

    if (document.getElementById('num_need_Bottle') !== null){
        let span = document.getElementById('num_need_Bottle');
        click_list.splice(12, 1, span.textContent); 
    } else {
        click_list.splice(12, 1, 0); 
    }

    if (document.getElementById('num_need_TourHoodie') !== null){
        let span = document.getElementById('num_need_TourHoodie');
        click_list.splice(13, 1, span.textContent); 
    } else {
        click_list.splice(13, 1, 0); 
    }




    if (document.getElementById('num_need_ExitRightVinyl') !== null){
        let span = document.getElementById('num_need_ExitRightVinyl');
        click_list.splice(0, 1, span.textContent); 
    } else {
        click_list.splice(0, 1, 0); 
    }

    if (document.getElementById('num_need_ExitRightCD') !== null){
        let span = document.getElementById('num_need_ExitRightCD');
        click_list.splice(3, 1, span.textContent); 
    } else {
        click_list.splice(3, 1, 0); 
    }

    if (document.getElementById('num_need_ExitRightSweat') !== null){
        let span = document.getElementById('num_need_ExitRightSweat');
        click_list.splice(7, 1, span.textContent); 
    } else {
        click_list.splice(7, 1, 0); 
    }



    if (document.getElementById('num_need_ConquerVinyl') !== null){
        let span = document.getElementById('num_need_ConquerVinyl');
        click_list.splice(1, 1, span.textContent); 
    } else {
        click_list.splice(1, 1, 0); 
    }

    if (document.getElementById('num_need_ConquerCD') !== null){
        let span = document.getElementById('num_need_ConquerCD');
        click_list.splice(4, 1, span.textContent); 
    } else {
        click_list.splice(4, 1, 0); 
    }

    if (document.getElementById('num_need_ConquerSweat') !== null){
        let span = document.getElementById('num_need_ConquerSweat');
        click_list.splice(8, 1, span.textContent); 
    } else {
        click_list.splice(8, 1, 0); 
    }



    if (document.getElementById('num_need_ButterfliesVinyl') !== null){
        let span = document.getElementById('num_need_ButterfliesVinyl');
        click_list.splice(2, 1, span.textContent); 
    } else {
        click_list.splice(2, 1, 0); 
    }

    if (document.getElementById('num_need_ButterfliesCD') !== null){
        let span = document.getElementById('num_need_ButterfliesCD');
        click_list.splice(5, 1, span.textContent); 
    } else {
        click_list.splice(5, 1, 0); 
    }

    if (document.getElementById('num_need_ButterfliesSweat') !== null){
        let span = document.getElementById('num_need_ButterfliesSweat');
        click_list.splice(9, 1, span.textContent); 
    } else {
        click_list.splice(9, 1, 0); 
    }

    let num_click = JSON.stringify(click_list);

    localStorage.setItem(
        "click_list", 
        num_click
    );
}

function updateCart() {
    cart.innerHTML = '';
    localStorage.cart = cart.innerHTML;

    localStorage.total = 0; 

    for (const itemId in selectedItems) {
        const item = selectedItems[itemId];
        const listItem = document.createElement('li');
        const quantityContainer = document.createElement('div'); 
        const quantityText = document.createElement('span'); 
        quantityText.setAttribute("id", "num_need_" + itemId); 
        const addButton = document.createElement('button');
        const subtractButton = document.createElement('button');

        addButton.textContent = '+';
        subtractButton.textContent = '-';

        quantityText.textContent = item.count; 

        addButton.addEventListener('click', () => {
            addItem(itemId);
        });

        subtractButton.addEventListener('click', () => {
            removeItem(itemId);
        });

        const hr = document.createElement('hr');

        quantityContainer.appendChild(subtractButton); 
        quantityContainer.appendChild(quantityText); 
        quantityContainer.appendChild(addButton); 
        quantityContainer.appendChild(hr); 

        listItem.textContent = `${item.name} - $${item.price}`;
        listItem.appendChild(quantityContainer); 
        cart.appendChild(listItem);

        localStorage.total = parseFloat(localStorage.total) + item.price * item.count; 
    }
    if (localStorage.total === "undefined") {
        totalElement.textContent = "Subtotal: $0.00";
    } else {
        totalElement.textContent = `Subtotal: $${localStorage.total}.00`;
    }
}

function addItem(itemId) {
    if (selectedItems[itemId]) {
        selectedItems[itemId].count++;
    }
    updateCart();
}

function removeItem(itemId) {
    if (selectedItems[itemId]) {
        selectedItems[itemId].count--;
        if (selectedItems[itemId].count <= 0) {
            delete selectedItems[itemId];
        }
    }
    updateCart();
}

console.log(cards)
add_onshop.forEach((card) => {
    console.log(card)
    card.addEventListener('click', handleCardClick(card));
});



CountDownTimer('05/15/2025 1:00 PM', 'countdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = days + ' days  ';
        document.getElementById(id).innerHTML += hours + ' hrs  ';
        document.getElementById(id).innerHTML += minutes + ' mins  ';
        document.getElementById(id).innerHTML += seconds + ' secs  ';
    }

    timer = setInterval(showRemaining, 1000);
}





function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  system.perspective.alterDock




   
var product = document.getElementById('product');
var power   = document.getElementById('power');
var allOpts = power.getElementsByTagName('option');
var opts = {
    empty: allOpts[0]
};

for(var i = 1; i < allOpts.length; ++i) {
    var name = allOpts[i].attributes[0].value;
    
    opts[name] = opts[name] || [];
    opts[name].push(allOpts[i]);
}

console.log(opts);

product.addEventListener('change', function(evt) {
    var val = evt.target.value;
    
    power.innerHTML = '';
    power.appendChild(opts.empty);
    for(var i = 0; i < opts[val].length; ++i) {
        power.appendChild(opts[val][i]);
    }
    console.log(evt);
});