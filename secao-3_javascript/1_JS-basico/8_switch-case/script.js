function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
        }
        
}
const data = new Date('1996-12-08 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);


// diaSemana = 7;




/* if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto ='Segunda-Feira';
} else if (diaSemana == 2) {
    diaSemanaTexto ='Terça-Feira';
} else if (diaSemana == 3) {
    diaSemanaTexto ='Quarta-Feira';
} else if (diaSemana == 4) {
    diaSemanaTexto ='Quinta-Feira';
} else if (diaSemana == 5) {
    diaSemanaTexto ='Sexta-Feira';
} else if (diaSemana == 6) {
    diaSemanaTexto ='Sábado';
} else {
    diaSemanaTexto = '';
} */
