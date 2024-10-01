let dinero = 0;

function ganarDinero(){
    dinero += 10;
    console.log("Ha ganado usted 10 mnoedas. Total:" + dinero + "monedas");
}
        document.addEventListener('Keydown' , function(event){

            if(event.key ==='ArrowUp' || event.Key === 'ArrowDown' || event.Key === 'ArrowLeft' || event.Key === 'ArrowRight'){
                ganarDinero();
            }
        });
