let input = prompt("What is your score?") ;
function checkScore(score) {
    if(score < 4) {
        document.write("Đạt loại Yếu");
    } else if (score < 6) {
        document.write("Đạt loại Trung bình");
    }    else if (score < 8) {
            document.write("Đạt loại Khá");
     }    else if (score < 9.5) {
            document.write("Đạt loại giỏi");
    } else {
        document.write("Đạt loại Xuất sắc");
    }
}

checkScore(input);

const divList = document.getElementsByTagName("div");
console.log(divList);

const classList = document.getElementsByClassName("one");
console.log(classList);
const one1 = document.getElementById(".one");
console.log(one1);

const idItem = document.getElementById("two");
console.log(idItem);
const two1 = document.getElementById("#two");
console.log(two1);

const div1 = document.querySelector("div");
console.log(div1);

const divList1 = document.querySelector("div");
console.log(divList1);