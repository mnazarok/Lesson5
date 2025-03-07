// let averageGrade = Math.floor(Math.random() * 101);
// console.log("Оцінка студента" + "=" + averageGrade);

let averageGrade = 101; //використовувати для перевірки

checkGrade(averageGrade);


function checkGrade(grade) {
    switch(true){
        case grade >=1 && grade < 60:
            console.log("Незадовільно");
            break;
        case grade >=60 && grade <= 70:
            console.log("Задовільно");
            break;
        case grade >=71 && grade <=80:
            console.log("Добре");
            break;
        case grade >=81 && grade <=90:
            console.log("Дуже добре");
            break;
        case grade >=91 && grade <=100:
            console.log("Відмінно");  
            break;  
        case grade <=0 || grade >=101:
            console.log( "Не валідне значення!!!"); //перевірка для не валідних значень якщо  0 і менше, також якщо 101 і більше    
            break;
    }
}