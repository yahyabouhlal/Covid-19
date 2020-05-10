const start = document.querySelector(".start");
const stepers = document.querySelectorAll(".stepers");
const preambule = document.querySelector(".Preambule");
const contentQuestion = document.querySelector(".test");
const questionnes = document.querySelectorAll(".questionnes");
const next = document.querySelector(".next");
const precedent = document.querySelector(".precedent");
const barProgress = document.querySelector(".w3-blue");
const vraisChoix = document.querySelectorAll(".vrais");
const fauxChoix = document.querySelectorAll(".faux");
const btnResule = document.querySelector(".rslBtn");
const questionProgres = document.querySelector(".progres");
const resultFinal = document.querySelector(".rsltMsg");
// console.log(questionnes);

// console.log(stepers);
// console.log(stepers[0]);

start.addEventListener("click", firstStep);

function firstStep() {
    start.style.display = "none";
    stepers[0].classList.remove("shadow");
    stepers[1].classList.add("shadow");
    preambule.style.display = "none";
    contentQuestion.classList.remove("hide");
    questionnes.classList.add('remove1');
    // presedentButton();
}
// for( i=0; i < questionnes.length;i++ ){
//     next.addEventListener("click", () => {

//         if (i < questionnes.length) {

//             questionnes[i].classList.remove("remove");
//             // questionnes[i-1].classList.add("remove");
//             // next.disabled = true;
//             // if (i === 21) {
//             //     nextBtn.innerText = "Terminer le test";
//             //     nextBtn.classList.add("result");
//             //     let resultBtn = document.querySelector(".result");
//             //     resultBtn.addEventListener("click", Results);
//             // } else {

//             }
//         });

// }

// const i = 0;
// do {
//     next.addEventListener("click", () => {
//         if (i < questionnes.length) { 
//             questionnes[i].classList.remove("remove");
//             // questionnes[i-1].classList.add("remove");
//             // next.disabled = true;
//             // if (i === 21) {
//             //     nextBtn.innerText = "Terminer le test";
//             //     nextBtn.classList.add("result");
//             //     let resultBtn = document.querySelector(".result");
//             //     resultBtn.addEventListener("click", Results);
//             // } else {

//             }
//         });

//         i++;
// } while (i < questionnes.length);
// function startReponse() {
//     if(){
//         for (i = 0; i <= questionnes.length; i++) {
//             console.log(i);
//             next.addEventListener("click", startReponse);
//             questionnes[i].classList.remove("remove");
//             questionnes[i - 1].classList.add("remove");
//             console.log([i - 1]);
//         }
//     }

// }

// nextBtn.addEventListener("click", () => {
//     if (currentQuestionIndex < 21) {
//         currentQuestionIndex++;
//         showQuestion(questions[currentQuestionIndex]);
//         folowProgress(currentQuestionIndex);
//         hideprevious();

//         nextBtn.disabled = true;
//         if (currentQuestionIndex === 21) {
//             nextBtn.innerText = "Terminer le test";
//             nextBtn.classList.add("result");
//             let resultBtn = document.querySelector(".result");
//             resultBtn.addEventListener("click", Results);
//         } else {
//             nextBtn.innerText = "Suivant";
//         }
//     }
// });
// next.addEventListener("click", function (event) {
//     var value = event.target.questionnes;
//         if ( i = 0 && next.addEventListener('click')) {

//         }
// });



//     // questionnes.forEach(element => {
//     //     i = 0;
//     //     if (i < questionnes.length) {
//     //         questionnes[0].classList.remove("remove");
//     //         i++
//     //     }
//     // })
//     // questionnes.forEach(function(item){
//     //     console.log(item)
//     // });
// }

// questionnes.forEach(element => {
//     next.onclick = function () {
//         for (i = 0; i <= questionnes.length; i++) {
//             console.log(i);
//             questionnes[i].classList.remove("remove");
//             // questionnes[i - 1].classList.add("remove");
//             // console.log([i - 1]);

//         }
//     }
// })

// next.addEventListener('click',e =>{

//     if(e.target.classList === 'remove'){
//        e.target.classList.remove("remove");
//     //    localStorage[''] = list.innerHTML
//     }

//  });

// function hdiud() {
//     for (i = 0; i < questionnes.length; i++) {

//         next.addEventListener("click", () => {
//             if (i === 0) {

//                 questionnes[i].classList.remove('remove');

//             } else {

//                 questionnes[i].classList.remove('remove');
//                 questionnes[i - 1].classList.add('remove');

//             }
//         })
//     }
// }
// function presedentButton(){
//     if (i === 0) {
//         precedent.classList.add("remove");
//     } else {
//         precedent.classList.remove("remove");
//     }
// }

let i = 1;
next.addEventListener("click", () => {
    if (i === 0) {
        questionnes[i].classList.remove('remove');
    } else if (i === questionnes.length){
        next.style.display="none";
        precedent.style.display="none";
        btnResule.classList.remove('hide');
    }else {
        questionnes[i].classList.remove('remove');
        questionnes[i - 1].classList.add('remove');
        precedent.classList.remove('hide');

    }
   
    i++;
    progress(i-1) 
})
console.log(i);
precedent.addEventListener("click", () => {
        questionnes[i].classList.add('remove');
        questionnes[i - 1].classList.remove('remove');
    i--;
    if(i === 0){
        precedent.classList.add('hide');
    }
    progress(i-1) 
})

function progress(number) {
    const numberProgres = number + 1;
    questionProgres.innerText = numberProgres;
    barProgress.style.width = `calc(${numberProgres} * calc(100% / 5))`;

}


// function barProgress(number) {

//     const currentNmber = number + 1
//     barProgress.style.width = `calc(${currentNmber} * calc(100% / 22))`

// }
// const anserStock = [];
// vraisChoix.addEventListener('click', () =>{
//     anserStock.push(vrais)
// })

// function answer(){
//     for(i=0 ; i<=anserStock ; i++){

//     }
// }
// let ansrrr = [];

// function jikko(){
//     for(i=0;i<=vraisChoix.length;i++){
//         vraisChoix[i].addEventListener("click", ()=>{
//             const Ansewr = ansrrr.push("vrais");
//         })
//     }
// }

// jikko()
// const answer = [];
// let a = 0;
// vraisChoix[a].addEventListener('click', () => {
//     // console.log(vraisChoix[a]);
//     if (a === 0) {
//         vraisChoix[a].classList.add('yaya');
//     } else {
//         vraisChoix[a].classList.add('yaya');
//     }
//     // console.log(Answers);
//     a++;
//     // vraisChoix[a].classList.add('yaya');
//     // a++;
// });

// console.log(a);


// // function result(){
// //     if(answer.length === questionnes.length){
// //         sdhshdhsfhjsdhkj
// //     }else if(answer.length === 3){
// //         dssdjncsdkld
// //     }else if(answer.length < 3){
// //         jhsdhshdshfs
// //     }
// // }
// var a = 0;
// function addByOne(e) {
//     a++
// }


// var elMsg = document.getElementById('count');
// var el = document.getElementById('selection');
// vraisChoix.addEventListener('click', function (e) {
//     addByOne(e);
//     vraisChoix[a].classList.add('yaya');
// }, false);

btnResule.addEventListener("click" , ()=>{
    stepers[1].classList.remove("shadow");
    stepers[2].classList.add("shadow");
        contentQuestion.classList.add("hide");
        resultFinal.classList.remove("hide");
        resultFinal.innerHTML=`<div>Appelez le 114 est rester chez vous</div>`
    
})