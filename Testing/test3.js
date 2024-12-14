
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