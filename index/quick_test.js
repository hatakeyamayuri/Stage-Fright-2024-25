var click_list = [0, 0, 0];
function l() {
    var click_list = [1, 5, 2];
    return click_list
}
function l2() {
    click_list = l()
}

console.log(click_list);



if (window.location.pathname === '/checkout.html') {
    window.onload = checkout_update();
  }

function checkout_update() {
    console.log(localStorage.getItem('total'))
    console.log(localStorage.getItem('click_list'))
}