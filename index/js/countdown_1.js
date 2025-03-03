(function(e,i,h,f,c,b,d){
    console.log("e", e,"i",i,"h",h,"f",f,"c",c,"b",b,"d",d)
    d=new Date(),
    h+="?v="+d.getFullYear()+d.getMonth()+d.getDate()+d.getHours(),
    c=e.createElement(i),
    b=e.getElementsByTagName(i)[0];
    if(e.getElementById(f)){
        return}
    c.src=h;
    c.id=f;
    b.parentNode.insertBefore(c,b)
})
(document,"script","/index/js/countdown_2.js","countdown-timer");