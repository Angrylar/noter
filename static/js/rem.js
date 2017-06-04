function oresize(){
    var ohtml = document.getElementById('html-layout');
    var width=document.documentElement.clientWidth || document.body.clientWidth;
    var p= width/1080;
    var sum = p*30;
    ohtml.style.fontSize=sum+'px';
}
window.onresize=function () {
    oresize();
};
oresize();
