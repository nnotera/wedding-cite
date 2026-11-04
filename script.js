const snow = document.getElementById('snow')
for (let i = 0; i < 1000; i++) {
    const f = document.createElement('span');
    f.className = 'flake';
    f.textContent = '*';
    f.style.left = Math.random()*100+'%';
    f.style.fontSize = (7 + Math.random() * 20) + 'px';
    f.style.animationDuration = (10 + Math.random() * 18) + 's';
    f.style.animationDelay = (-Math.random() * 24) + 's';
    snow.appendChild(f)
}
for(let i=0;i<100;i++){
    const f=document.createElement('span');
    f.className='flake';
    f.textContent='✧';
    f.style.left=Math.random()*100+'%';
    f.style.fontSize=(7+Math.random()*14)+'px';
    f.style.animationDuration=(10+Math.random()*18)+'s';
    f.style.animationDelay=(-Math.random()*24)+'s';
    snow.appendChild(f)
}
document.getElementById('rsvpForm').addEventListener('submit',e=>{
    //e.preventDefault();
    const data = new FormData(e.currentTarget);
    const status = document.getElementById('formStatus');
    status.style.display = 'block';
    status.textContent = 'Спасибо, '+data.get('guestName')+'! Ваш ответ заполнен в этой демонстрации. После подключения формы ответы будут приходить молодожёнам.';
    e.currentTarget.reset()
});