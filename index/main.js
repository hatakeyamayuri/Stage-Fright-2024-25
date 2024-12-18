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

function openCart() {
    document.getElementById("shopping_cart").style.width = "100%";
    document.getElementById("shopping_cart").style.display = "block";
}
function closeCart() {
    document.getElementById("shopping_cart").style.width = "0%";
    document.getElementById("shopping_cart").style.display = "none";
    console.log("here")
}


function add_THoodie() {
    document.getElementById('THoodie').click();
}
function add_ERSweat() {
    document.getElementById('ERSweat').click();
}
function add_ERVinyl() {
    document.getElementById('ERVinyl').click();
}
function add_ERCD() {
    document.getElementById('ERCD').click();
}

function load_done() {
    document.getElementById("loading-placeholder").style.display = "none";
    restore()
}

//const cards = document.querySelectorAll('.card');
const cart = document.getElementById('cart');
const add_onshop = document.querySelectorAll('.add_onshop');
const totalElement = document.getElementById('total'); 
const totalElement_2 = document.getElementById('true_total'); 
const selectedItems = {};
var click_list = [0,  0, 0, 0, 0, 0,  0, 0, 0, 0, 0,  0, 0, 0, 0];

function handleCardClick(event) {
    const check = event.currentTarget;
    const itemId = String(check.id) +'_0';
    console.log(itemId)
    const content = document.getElementById(itemId);
    const itemName = content.querySelector('h4').textContent;
    const itemPrice = parseFloat(content.querySelector('.price').textContent); 
    const name = String(content.getAttribute("name"))
    console.log(click_list)

    const temp = Number(click_list[name])+1
    click_list.splice(name, 1, temp)
    console.log(click_list)
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

//window.onload = restore;
//window.onload = updateCart;

function restore_click() {
    console.log("test 2")
    console.log(localStorage.getItem('click_list'))
    click_list = JSON.parse(localStorage.getItem('click_list'));
    perm_list = JSON.parse(localStorage.getItem('click_list'));
    console.log(perm_list)
    return perm_list
}

function restore() {
    //var click_list = [0,  0, 0, 0, 0, 0,  0, 0, 0, 0, 0,  0, 0, 0, 0];
    //console.log(click_list)
    //var load = localStorage.cart;
    //document.getElementById("cart").innerHTML = load;
    //document.querySelector('ETVinyl').click();
    
    if (window.location.pathname === '/index/shop.html') {
        var firstTime = localStorage.getItem("first_time");
        //console.log(click_list)
        if(!firstTime) {
            //is first time
            console.log("idiot")
            localStorage.setItem("first_time","1");
            //var perm_list = [0,  0, 0, 0, 0, 0,  0, 0, 0, 0, 0,  0, 0, 0, 0];
        } else {
            console.log("okay...")
            const perm_list = restore_click(); 
            for (let step = 0; step < perm_list[6]; step++) {
                document.getElementById('THoodie').click();
            }
            for (let step = 0; step < perm_list[10]; step++) {
                document.getElementById('Beanie').click();
            }
            for (let step = 0; step < perm_list[11]; step++) {
                document.getElementById('Hat').click();
            }
            for (let step = 0; step < perm_list[12]; step++) {
                document.getElementById('Bottle').click();
            }
            for (let step = 0; step < perm_list[13]; step++) {
                document.getElementById('Keychain').click();
            }
            for (let step = 0; step < perm_list[14]; step++) {
                document.getElementById('Tote').click();
            }
    
    
            for (let step = 0; step < perm_list[0]; step++) {
                document.getElementById('ERVinyl').click();
            }
            for (let step = 0; step < perm_list[3]; step++) {
                document.getElementById('ERCD').click();
            }
            for (let step = 0; step < perm_list[7]; step++) {
                document.getElementById('ERSweat').click();
            }
    
    
            for (let step = 0; step < perm_list[1]; step++) {
                document.getElementById('CVinyl').click();
            }
            for (let step = 0; step < perm_list[4]; step++) {
                document.getElementById('CCD').click();
            }
            for (let step = 0; step < perm_list[8]; step++) {
                document.getElementById('CSweat').click();
            }
    
    
            for (let step = 0; step < perm_list[2]; step++) {
                document.getElementById('BVinyl').click();
            }
            for (let step = 0; step < perm_list[5]; step++) {
                document.getElementById('BCD').click();
            }
            for (let step = 0; step < perm_list[9]; step++) {
                document.getElementById('BSweat').click();
            } 
            console.log("why here")
        }
        //const perm_list = click_list;

        if (localStorage.total === "undefined") {
            totalElement.textContent = "Subtotal: $0.00";
        } else {
            totalElement.textContent = `Subtotal: $${localStorage.total}.00`;
        }
        click_list = perm_list
        console.log(click_list)

    } else if (window.location.pathname === '/index/checkout.html') {
        const click_list = restore_click()
        console.log("yay here")
        console.log(click_list)


        const form = document.getElementById('checkout_form');
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const data = new FormData(form);
            const action = e.target.action;
            fetch(action, {
                method: 'POST',
                body: data,
            })
            /*
            const bought = document.getElementById("checkout_cart")
            const bought_data = new FormData(bought)
            fetch(action, {
                method: 'POST',
                body: bought_data,
            })
            */
            .then(() => {
                window.location.replace("/index/purchased.html");
            })
        });


        //for (let i = 0; i < (click_list.length); i++) {
            console.log(click_list)
            if ((click_list[6] != null) && (click_list[6] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 6))
                product_sold.setAttribute("name", "items")
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Exit Stage Right Tour Hoodie: ";
                product_price.textContent = " $52.00 - "
                product_num.textContent = click_list[6]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_6").appendChild(product_price);
                document.getElementById("append_id_6").appendChild(product_num);
                console.log('once')
            } 
            if ((click_list[10] != null) && (click_list[10] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 10))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Stage Fright Beanie: ";
                product_price.textContent = " $25.00 - "
                product_num.textContent = click_list[10]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_10").appendChild(product_price);
                document.getElementById("append_id_10").appendChild(product_num);
            } 
            if ((click_list[11] != null) && (click_list[11] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 11))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Stage Fright Hat: ";
                product_price.textContent = " $22.00 - "
                product_num.textContent = click_list[11]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_11").appendChild(product_price);
                document.getElementById("append_id_11").appendChild(product_num);
            } 
            if ((click_list[12] != null) && (click_list[12] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 12))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Stage Fright Bottle: ";
                product_price.textContent = " $31.00 - "
                product_num.textContent = click_list[12]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_12").appendChild(product_price);
                document.getElementById("append_id_12").appendChild(product_num);
            } 
            if ((click_list[13] != null) && (click_list[13] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 13))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Stage Fright Keychain: ";
                product_price.textContent = " $9.00 - "
                product_num.textContent = click_list[13]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_13").appendChild(product_price);
                document.getElementById("append_id_13").appendChild(product_num);
            } 
            if ((click_list[14] != null) && (click_list[14] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 14));
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Stage Fright Tote Bag: ";
                product_price.textContent = " $17.00 - "
                product_num.textContent = click_list[14]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_14").appendChild(product_price);
                document.getElementById("append_id_14").appendChild(product_num);
            } 




            if ((click_list[0] != null) && (click_list[0] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 0));
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Exit Right Vinyl: ";
                product_price.textContent = " $24.00 - "
                product_num.textContent = click_list[0]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_0").appendChild(product_price);
                document.getElementById("append_id_0").appendChild(product_num);
            } 

            if ((click_list[3] != null) && (click_list[3] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 3));
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Exit Right CD: ";
                product_price.textContent = " $20.00 - "
                product_num.textContent = click_list[3]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_3").appendChild(product_price);
                document.getElementById("append_id_3").appendChild(product_num);
            } 

            if ((click_list[7] != null) && (click_list[7] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 7));
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Exit Right Sweatshirt: ";
                product_price.textContent = " $43.00 - "
                product_num.textContent = click_list[7]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_7").appendChild(product_price);
                document.getElementById("append_id_7").appendChild(product_num);
            } 



            if ((click_list[1] != null) && (click_list[1] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 1))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Conquer Vinyl: ";
                product_price.textContent = "$24.00 - "
                product_num.textContent = click_list[1]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_1").appendChild(product_price);
                document.getElementById("append_id_1").appendChild(product_num);
            } 

            if ((click_list[4] != null) && (click_list[4] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 4))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Conquer CD: ";
                product_price.textContent = "$20.00 - "
                product_num.textContent = click_list[4]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_4").appendChild(product_price);
                document.getElementById("append_id_4").appendChild(product_num);
            } 

            if ((click_list[8] != null) && (click_list[8] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 8))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Conquer Sweatshirt: ";
                product_price.textContent = "$43.00 - "
                product_num.textContent = click_list[8]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_8").appendChild(product_price);
                document.getElementById("append_id_8").appendChild(product_num);
            } 



            if ((click_list[2] != null) && (click_list[2] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 2))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Butterflies Vinyl: ";
                product_price.textContent = "$18.00 - "
                product_num.textContent = click_list[2]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_2").appendChild(product_price);
                document.getElementById("append_id_2").appendChild(product_num);
            } 

            if ((click_list[5] != null) && (click_list[5] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 5))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Butterflies CD: ";
                product_price.textContent = "$12.00 - "
                product_num.textContent = click_list[5]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_5").appendChild(product_price);
                document.getElementById("append_id_5").appendChild(product_num);
            } 

            if ((click_list[9] != null) && (click_list[9] > 0)) {
                let product_sold = document.createElement('p');
                product_sold.setAttribute("id", ("append_id_" + 9))
                let product_price = document.createElement('span');
                let product_num = document.createElement('span');
                product_sold.textContent = "Butterflies Sweatshirt: ";
                product_price.textContent = "$43.00 - "
                product_num.textContent = click_list[9]
                document.getElementById("cart").appendChild(product_sold);
                document.getElementById("append_id_9").appendChild(product_price);
                document.getElementById("append_id_9").appendChild(product_num);
            } 
        //}
        if (localStorage.total === "undefined") {
            totalElement.textContent = "Subtotal: $0.00";
            totalElement_2.textContent = "Total: $0.00";
        } else {
            totalElement.textContent = `Subtotal: $${localStorage.total}.00`;
            totalElement_2.textContent = `Total: $${(localStorage.total * 1.0825).toFixed(2)}`
        }
    }
    console.log("yes here")
}

window.onbeforeunload = save;
    

function save() {
    /*
    //localStorage.cart = cart.innerHTML; 
    if (document.getElementById('num_need_THoodie_0') !== null){
        let span = document.getElementById('num_need_THoodie_0');
        click_list.splice(6, 1, span.textContent); 
    } else {
        click_list.splice(6, 1, 0); 
    }

    if (document.getElementById('num_need_Beanie_0') !== null){
        let span = document.getElementById('num_need_Beanie_0');
        click_list.splice(10, 1, span.textContent); 
    } else {
        click_list.splice(10, 1, 0); 
    }

    if (document.getElementById('num_need_Hat_0') !== null){
        let span = document.getElementById('num_need_Hat_0');
        click_list.splice(11, 1, span.textContent); 
    } else {
        click_list.splice(11, 1, 0); 
    }

    if (document.getElementById('num_need_Bottle_0') !== null){
        let span = document.getElementById('num_need_Bottle_0');
        click_list.splice(12, 1, span.textContent); 
    } else {
        click_list.splice(12, 1, 0); 
    }

    if (document.getElementById('num_need_Keychain_0') !== null){
        let span = document.getElementById('num_need_Keychain_0');
        click_list.splice(13, 1, span.textContent); 
    } else {
        click_list.splice(13, 1, 0); 
    }




    if (document.getElementById('num_need_ERVinyl_0') !== null){
        let span = document.getElementById('num_need_ERVinyl_0');
        click_list.splice(0, 1, span.textContent); 
    } else {
        click_list.splice(0, 1, 0); 
    }

    if (document.getElementById('num_need_ERCD_0') !== null){
        let span = document.getElementById('num_need_ERCD_0');
        click_list.splice(3, 1, span.textContent); 
    } else {
        click_list.splice(3, 1, 0); 
    }

    if (document.getElementById('num_need_ERSweat_0') !== null){
        let span = document.getElementById('num_need_ERSweat_0');
        click_list.splice(7, 1, span.textContent); 
    } else {
        click_list.splice(7, 1, 0); 
    }



    if (document.getElementById('num_need_CVinyl_0') !== null){
        let span = document.getElementById('num_need_CVinyl_0');
        click_list.splice(1, 1, span.textContent); 
    } else {
        click_list.splice(1, 1, 0); 
    }

    if (document.getElementById('num_need_CCD_0') !== null){
        let span = document.getElementById('num_need_CCD_0');
        click_list.splice(4, 1, span.textContent); 
    } else {
        click_list.splice(4, 1, 0); 
    }

    if (document.getElementById('num_need_CSweat_0') !== null){
        let span = document.getElementById('num_need_CSweat_0');
        click_list.splice(8, 1, span.textContent); 
    } else {
        click_list.splice(8, 1, 0); 
    }



    if (document.getElementById('num_need_BVinyl_0') !== null){
        let span = document.getElementById('num_need_BVinyl_0');
        click_list.splice(2, 1, span.textContent); 
    } else {
        click_list.splice(2, 1, 0); 
    }

    if (document.getElementById('num_need_BCD_0') !== null){
        let span = document.getElementById('num_need_BCD_0');
        click_list.splice(5, 1, span.textContent); 
    } else {
        click_list.splice(5, 1, 0); 
    }

    if (document.getElementById('num_need_BSweat_0') !== null){
        let span = document.getElementById('num_need_BSweat_0');
        click_list.splice(9, 1, span.textContent); 
    } else {
        click_list.splice(9, 1, 0); 
    }
    */
    console.log("test 3")
    console.log(click_list)
    const num_click = JSON.stringify(click_list);

    localStorage.setItem(
        "click_list", 
        num_click
    );
    console.log(localStorage.getItem(click_list))
    /*
    for (let i = 0; i < 14; i++) {
        delete selectedItems[i];
    }*/
}

function updateCart() {
    cart.innerHTML = '';
    localStorage.cart = cart.innerHTML;
    console.log(click_list)
    localStorage.total = 0; 

    for (const itemId in selectedItems) {
        const item = selectedItems[itemId];
        const listItem = document.createElement('li');
        const quantityContainer = document.createElement('div'); 
        const quantityText = document.createElement('span'); 
        quantityText.setAttribute("id", "num_need_" + itemId); 
        const addButton = document.createElement('button');
        addButton.setAttribute("class", "add_sub")
        const subtractButton = document.createElement('button');
        subtractButton.setAttribute("class", "add_sub")


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
    const temp_name = document.getElementById(itemId)
    const name = String(temp_name.getAttribute("name"))
    const temp = Number(click_list[name])+1
    click_list.splice(name, 1, temp)

    updateCart();
}

function removeItem(itemId) {
    if (selectedItems[itemId]) {
        selectedItems[itemId].count--;
        if (selectedItems[itemId].count <= 0) {
            delete selectedItems[itemId];
        }
    }
    const temp_name = document.getElementById(itemId)
    const name = String(temp_name.getAttribute("name"))
    const temp = Number(click_list[name])-1
    click_list.splice(name, 1, temp)

    updateCart();
}

add_onshop.forEach((card) => {
    card.addEventListener('click', handleCardClick);
});



function clearCart() {
    click_list = [0,  0, 0, 0, 0, 0,  0, 0, 0, 0, 0,  0, 0, 0, 0];
    for (const index in click_list) {
        let temp = document.getElementsByName(index);
        let temp_2 = temp.item(0)
        let id_needed = temp_2.getAttribute("id");
        delete selectedItems[id_needed];
        updateCart();
    }
}



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

        document.getElementById(id).innerHTML += days + ' days  ';
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

product.addEventListener('change', function(evt) {
    var val = evt.target.value;
    
    power.innerHTML = '';
    power.appendChild(opts.empty);
    for(var i = 0; i < opts[val].length; ++i) {
        power.appendChild(opts[val][i]);
    }
});