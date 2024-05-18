const opt = document.getElementById('vall')
const optt = document.getElementById('valll')
const opttt = document.getElementById('vallll')
const optttt = document.getElementById('valllll')
const opttttt = document.getElementById('val')
const ope = document.getElementById('mod')
const clos = document.getElementById('mode')
const modal = document.getElementById('modal')
const nott = document.getElementById('none')
const amm = document.getElementById('amount')
const sell = document.getElementById('sel')
const pay = document.getElementById('pay')
const doo = document.getElementById('done')
const puter = document.getElementById('puter')



console.log(doo);

doo.addEventListener('click', (e) => {
    e.preventDefault()
    modal.showModal()
    nott.style.display = 'none'



})

pay.addEventListener('click', (event) => {
    event.preventDefault
    puter.style.display = 'block'

    if ( puter.style.display == 'block') {
        console.log('fuck you');
        pay.addEventListener('click', () => {

            alert('MAKE PAYMENT FIRST')

        })
    }
} )
optt.addEventListener('click', () => {
    amm.value = optt.value
})
clos.addEventListener('click', () => {
    modal.close()
    console.log('dooo');
    nott.style.display = 'block'
})



// (function ($) {
//     "use strict";

    
//     /*==================================================================
//     [ Validate ]*/
//     var input = $('.validate-input .input100');

//     $('.validate-form').on('submit',function(){
//         var check = true;

//         for(var i=0; i<input.length; i++) {
//             if(validate(input[i]) == false){
//                 showValidate(input[i]);
//                 check=false;
//             }
//         }

//         return check;
//     });


//     $('.validate-form .input100').each(function(){
//         $(this).focus(function(){
//            hideValidate(this);
//         });
//     });

//     function validate (input) {
//         if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//                 return false;
//             }
//         }
//         else {
//             if($(input).val().trim() == ''){
//                 return false;
//             }
//         }
//     }

//     function showValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).addClass('alert-validate');
//     }

//     function hideValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).removeClass('alert-validate');
//     }
    
    

// })(jQuery);


