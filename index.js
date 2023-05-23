var container = document.querySelector('.container');
var color = document.querySelector('input');

var defaultColor='#fff2';
container.style.backgroundColor = `${defaultColor}`;

function onChangeBg(){
    container.style.backgroundColor=`${color.value}`;
}