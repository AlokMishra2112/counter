let addb=document.getElementById('btna');
let subb=document.getElementById('btns');
let textb=document.getElementById('textb');
integer=0;
addb.addEventListener('click',function(){
    integer+=1;
    textb.value = integer;
})
subb.addEventListener('click',function(){
    integer-=1;
    if(integer<0){
        integer=0;
    }
    textb.value = integer;
})