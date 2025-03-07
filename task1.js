let averageGrade = Math.floor(Math.random() * 101);
console.log("Оцінка студента" + "=" + averageGrade);

// let averageGrade = 0; //використовувати для перевірки


function checkGrade(grade) {
    if (grade >=1 && grade < 60) {
        console.log("Незадовільно");
    } else if(grade >=60 && grade <= 70 ) {
        console.log( "Задовільно");
    } else if(grade >=71 && grade <=80) {
        console.log( "Добре");
    } else if(grade >=81 && grade <=90) {
        console.log( "Дуже добре");
    } else if(grade >=91 && grade <=100) {
        console.log( "Відмінно");
    } else if(grade >=0 && grade <=101) {
        console.log( "Не валідне значення!!!"); //перевірка для не валідних значень якщо  0 і менше, також якщо 101 і більше
    } 
}


checkGrade(averageGrade);



