'use strict';

let numberFromUser = +prompt('Input number');

for (let i = numberFromUser;;){
    if (i <= 1){
        console.log(NaN);
        break;
    }
        for(let j = 2; j <= i; j++){
            if(i % j == 0){
                console.log(`${j} - наименьший делитель числа ${numberFromUser}`);
                break;
            }
    }
    break;
}