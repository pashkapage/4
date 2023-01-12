let btn = document.querySelectorAll('.btn__elem');

btn.forEach((elem) => {
    elem.onclick = function(){ 
        for(let i = 0; i < btn.length; i++){
            if (btn[i].className == 'btn__elem btn__elem--active'){
                btn[i].setAttribute('class','btn__elem')
            } 
        }
        this.setAttribute('class','btn__elem btn__elem--active');
    }
})
    