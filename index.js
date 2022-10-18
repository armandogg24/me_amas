const yes_btn = document.querySelector('#yes_btn');

yes_btn.addEventListener('click',function() {
    alert('Yo también te Amo mi amor 🥺❤️')
});

const no_btn = document.querySelector('#no_btn');

no_btn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    no_btn.style.setProperty('top',randomY+'%');
    no_btn.style.setProperty('left',randomX+'%');
    no_btn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`)
});