function terreno(lar,prof){
    let area = lar * prof
    if(area <= 1200){
        alert("Sobrado")
    }else if(area <= 1600){
        alert("Comercial")
    }else if(area <= 2000){
        alert("Padrão")
    }else(area <= 10000){
        alert("Mansão")
    }
}