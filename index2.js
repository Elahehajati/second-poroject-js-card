let _i = document.createElement('i')
_i.setAttribute('class' , 'bi bi-x')
_i.style.animation='animenav2 forwards  linear 1.1s'
let ll =0

function _click(a){
console.log(ll)
if(ll%2==0){
a.children[0].style.animation='animenav1 forwards linear  1s'
a.appendChild(_i)
a.parentElement.style.right='150px'
document.querySelector('li:nth-of-type(1)').style.top='-140%'
document.querySelector('li:nth-of-type(1)').style.opacity='1'
document.querySelector('li:nth-of-type(1)').style.transition='.5s 1.3s ease-in-out'
document.querySelector('li:nth-of-type(2)').style.left='-140%'
document.querySelector('li:nth-of-type(2)').style.opacity='1'
document.querySelector('li:nth-of-type(2)').style.transition='.5s 1s ease-in-out'
document.querySelector('li:nth-of-type(3)').style.right='-140%'
document.querySelector('li:nth-of-type(3)').style.opacity='1'
document.querySelector('li:nth-of-type(3)').style.transition='.5s 1.6s ease-in-out'
document.querySelector('li:nth-of-type(4)').style.bottom='-140%'
document.querySelector('li:nth-of-type(4)').style.opacity='1'
document.querySelector('li:nth-of-type(4)').style.transition='.5s 1.9s ease-in-out'
}else{
    a.parentElement.style.right='10px'
    a.removeChild(_i)
    a.children[0].style.animation='animenav11 forwards linear  1s'
    document.querySelector('li:nth-of-type(1)').style.top='0'
     document.querySelector('li:nth-of-type(1)').style.opacity='0'
     document.querySelector('li:nth-of-type(1)').style.transition='.3s .6s ease-in-out'
     document.querySelector('li:nth-of-type(2)').style.left='0'
     document.querySelector('li:nth-of-type(2)').style.opacity='0'
     document.querySelector('li:nth-of-type(2)').style.transition='.3s .9s ease-in-out'
    document.querySelector('li:nth-of-type(3)').style.right='0'
    document.querySelector('li:nth-of-type(3)').style.opacity='0'
    document.querySelector('li:nth-of-type(3)').style.transition='.3s  ease-in-out'
    document.querySelector('li:nth-of-type(4)').style.bottom='0'
    document.querySelector('li:nth-of-type(4)').style.opacity='0'
    document.querySelector('li:nth-of-type(4)').style.transition='.3s .3s ease-in-out'
}
ll++
}

let f=0
let _inpt
let turn=0
let _lastl=1
let _lastl1=1
let z=0
let v1=0
let _span=document.querySelectorAll('.card>section:nth-of-type(1)>span')
let _newsp
function _num(self, s){
_inpt=document.querySelectorAll('#details>div>input')
_inpt[turn].focus()
let _length=self.value.length
if(s==0 || s==1 || s==2 || s==3){
if(s==0){
if(_length<=4){
    if(z==-1){
            z=0
        }
        if(f==-1){
            f=0
        }
        if(z>=4){
            z=4
        }
        if(f>=4){
            f=4
        }
    if( _length<_lastl){
        z--
        _span[0].children[z].style.animation='spancard11 .6s forwards'
        _span[0].lastChild.style.animation='spancard22 .7s forwards'
        _span[0].lastChild.remove()
         _lastl=_length
         f--
    }else if(_length==0){

    }else{     
        _span[0].children[z].style.animation='spancard .6s forwards'
        _newsp=document.createElement('span')
        _newsp.style.animation='spancard2 .7s forwards'
        _newsp.innerHTML=self.value[f]
        _span[0].appendChild(_newsp)  
        _lastl=_length 
        z++
        f++
    }
}else{
let s
if(_inpt[turn].value.length=4){
    m=_inpt[turn].value
    s=m.charAt(4)
    _inpt[turn].value=m.substring(0,4)
}
f=0
z=0
turn++
_inpt[turn].focus()
_length=0
_lastl=1
}
}
if(s==1){
    if(_length<=4 && _length>0){
        if(z==-1){
            z=0
        }
        if(f==-1){
            f=0
        }
    if( _length<_lastl){
        z--
        _span[1].children[z].style.animation='spancard11 .6s forwards'
        _span[1].lastChild.style.animation='spancard22 .7s forwards'
        _span[1].lastChild.remove()
         _lastl=_length
         f--
    }else if(_length==0){

    }else{
        _span[1].children[z].style.animation='spancard .6s forwards'
        _newsp=document.createElement('span')
        _newsp.style.animation='spancard2 .7s forwards'
        _newsp.innerHTML=self.value[f]
        _span[1].appendChild(_newsp)  
        _lastl=_length 
        z++
        f++
    }
}else if(_length==0)  {
if( _length<_lastl){
         f=0
         z=0
        _span[1].children[z].style.animation='spancard11 .6s forwards'
        _span[1].lastChild.style.animation='spancard22 .7s forwards'
        _span[1].lastChild.remove()
         _lastl=_length
    }
_lastl=4
_length=4
z=4
f=4
turn--
_inpt[turn].focus()
}else{
let s
if(_inpt[turn].value.length=4){
    m=_inpt[turn].value
    s=m.charAt(4)
    _inpt[turn].value=m.substring(0,4)
}
f=0
z=0
turn++
_inpt[turn].focus()
_length=0
_lastl=1
}
}
if(s==2){
if(_length<=4 && _length>0){
        if(z==-1){
            z=0
        }
        if(f==-1){
            f=0
        }
    if( _length<_lastl){
        z--
        _span[2].children[z].style.animation='spancard11 .6s forwards'
        _span[2].lastChild.style.animation='spancard22 .7s forwards'
        _span[2].lastChild.remove()
         _lastl=_length
         f--
    }else if(_length==0){

    }else{
        _span[2].children[z].style.animation='spancard .6s forwards'
        _newsp=document.createElement('span')
        _newsp.style.animation='spancard2 .7s forwards'
        _newsp.innerHTML=self.value[f]
        _span[2].appendChild(_newsp)  
        _lastl=_length 
        z++
        f++
    }
}else if(_length==0)  {
if( _length<_lastl){
         f=0
         z=0
        _span[2].children[z].style.animation='spancard11 .6s forwards'
        _span[2].lastChild.style.animation='spancard22 .7s forwards'
        _span[2].lastChild.remove()
         _lastl=_length
    }
_lastl=4
_length=4
z=4
f=4
turn--
_inpt[turn].focus()
}else{
let s
if(_inpt[turn].value.length=4){
    m=_inpt[turn].value
    s=m.charAt(4)
    _inpt[turn].value=m.substring(0,4)
}
f=0
z=0
turn++
_inpt[turn].focus()
_length=0
_lastl=1
}
}
if(s==3){
if(_length<=4 && _length>0){
        if(z==-1){
            z=0
        }
        if(f==-1){
            f=0
        }
    if( _length<_lastl){
        z--
        _span[3].children[z].style.animation='spancard11 .6s forwards'
        _span[3].lastChild.style.animation='spancard22 .7s forwards'
        _span[3].lastChild.remove()
         _lastl=_length
         f--
    }else if(_length==0){

    }else{
        _span[3].children[z].style.animation='spancard .6s forwards'
        _newsp=document.createElement('span')
        _newsp.style.animation='spancard2 .7s forwards'
        _newsp.innerHTML=self.value[f]
        _span[3].appendChild(_newsp)  
        _lastl=_length 
        z++
        f++
    }
}else if(_length==0)  {
if( _length<_lastl){
         f=0
         z=0
        _span[3].children[z].style.animation='spancard11 .6s forwards'
        _span[3].lastChild.style.animation='spancard22 .7s forwards'
        _span[3].lastChild.remove()
         _lastl=_length
    }
_lastl=4
_length=4
z=4
f=4
turn--
_inpt[turn].focus()
}else{
   let s
if(_inpt[turn].value.length=4){
    m=_inpt[turn].value
    s=m.charAt(4)
    _inpt[turn].value=m.substring(0,4)
}
document.querySelector('#details>input').focus()
}
}

}
}
let ss=0
function _holder(self){
let _p=document.querySelector('.card>section:nth-of-type(2)>p')
let _spanholder=document.createElement('span')
_spanholder.style.transform='rotate(90deg)'
_spanholder.style.textTransform='capitalize'
_spanholder.style.width='content'
_spanholder.style.animation='holder3 .5s forwards'
_spanholder.style.opacity='0'
_spanholder.style.visibility='hidden'
_spanholder.style.marginLeft='0px'
_spanholder.style.animation='holder3 .5s forwards'
_spanholder.innerHTML=self.value[ss]
let _spanholder1=document.createElement('span')
 _spanholder1.innerHTML='FULL&nbsp; NAME'
 _spanholder1.setAttribute('data-sign' , 'nullnum')
 _spanholder1.style.animation='holder2 1s .9s forwards'
let _len=self.value.length
if(_len>=0){
    if(_len==1){
    if(_p.firstChild.getAttribute('data-sign')=='nullnum'){
        _p.firstChild.style.animation='holder1 .5s forwards'
        _p.firstChild.remove()
    }
}
if(_len=='0'){
if(_p.children.length==1){
    _p.firstChild.style.animation='holder4 .9s forwards'
     _p.firstChild.remove()
    _p.appendChild(_spanholder1)
}
}
    if(_len< _lastl1){
        _p.lastChild.style.animation='holder2 .9s forwards'
        _p.lastChild.remove()
        if(_len==0){
     if(_p.children.length==0){
    _p.appendChild(_spanholder1)
      }
    }
        ss--
        _lastl1=_len
    }else{
    console.log(self.value[ss])
    if(self.value[ss]=''){
        _spanholder.innerHTML='&nbsp;'
        console.log(self.value[ss])
    }
    _p.appendChild(_spanholder)
    ss++
    _lastl1=_len
    }
}else{

}
}
let temp1
let temp2
function _clickopt1(self){
_clickopt4(self)
if(self.value=='Month'){
    temp1=self.value

}else if(temp1==self.value){
    temp1=self.value
}else{
    let cspan=document.createElement('span')
   cspan.style.animation='holder2 .5s  forwards'
   cspan.innerHTML=self.value
    let _span=document.querySelector('.card>section:nth-of-type(3)>span:nth-of-type(1)')
    if(_span.children.length==0){
        _span.innerHTML=''
    }else{
        _span.lastChild.style.animation='month .3s forwards'
        _span.lastChild.remove()
            }
   _span.appendChild(cspan)

   temp1=self.value
}
}
function _clickopt2(self){
_clickopt4(self)
if(self.value=='Year'){
    temp2=self.value

}else if(temp2==self.value){
    temp2=self.value
}else{
    let cspan=document.createElement('span')
   cspan.style.animation='holder2 .5s  forwards'
   cspan.innerHTML=self.value
    let _span=document.querySelector('.card>section:nth-of-type(3)>span:nth-of-type(3)')
    if(_span.children.length==0){
        _span.innerHTML=''
    }else{
        _span.lastChild.style.animation='month .3s forwards'
        _span.lastChild.remove()
            }
   _span.appendChild(cspan)
   temp2=self.value
}
}
function _clickopt3(self){  
_card.style.animation='ccard2 1s ease-in-out  forwards'
}
function _clickopt4(self){  
if(_card.style.animationName=='ccard2'){
_card.style.animation=''
_card.style.animation='ccard22 1s ease-in-out  forwards'
}

}
let ff=''
let sd=1
let ssd=1
let _spancvv=document.querySelector('.card2>div:nth-of-type(2)>span')
function _writecvv(self){
_card.style.transform='perspective(800px)rotateY(180deg)'
let n1=self.value.length
dd=self.value
if(ssd!=0){
if(n1<ssd){
    sd--
    ff=ff.substring(0,sd-1)
    if(document.querySelector('.card2>div:nth-of-type(2)>i:nth-of-type(1)').style.visibility=='hidden'){
    _spancvv.innerHTML=self.value
   }else{
    _spancvv.innerHTML=ff
   }
   ssd=n1
    if(ssd==0){
        ssd=1
        sd=1
    }
}else{
    if(sd<=4 && sd>0){
            ff+='*'
            if(document.querySelector('.card2>div:nth-of-type(2)>i:nth-of-type(1)').style.visibility=='hidden'){
    _spancvv.innerHTML=self.value
   }else{
    _spancvv.innerHTML=ff
   }
        }else{

        }
        if(sd>4){
           self.value=dd.substring(0,4)
           sd--
        }
        sd++
        ssd=n1
    }
}
}
function _lock(self){
_card.style.transform='perspective(800px)rotateY(180deg)'
let ll=document.querySelector('#details>input:nth-of-type(2)')
if(self.getAttribute('data-lock')=='off'){
    document.querySelector('.card2>div:nth-of-type(2)>i:nth-of-type(1)').style.visibility='hidden'
    document.querySelector('.card2>div:nth-of-type(2)>i:nth-of-type(2)').style.visibility='visible'
    _spancvv.innerHTML=ll.value
}
if(self.getAttribute('data-lock')=='on'){
    document.querySelector('.card2>div:nth-of-type(2)>i:nth-of-type(2)').style.visibility='hidden'
    document.querySelector('.card2>div:nth-of-type(2)>i:nth-of-type(1)').style.visibility='visible'
    _spancvv.innerHTML=ff
}
}
function _clickend(self){
_clickopt4(self)
document.getElementById('details').style.animation=''
document.getElementById('details').style.animation='animesecdetails2 1s forwards'
document.getElementById('details').style.with='0px'
document.getElementById('details').style.height='0px'
document.getElementById('details').style.overflow='hidden'
document.getElementsByClassName('card')[0].removeEventListener('mousemove' , (event) ,true )
document.getElementsByClassName('card')[0].removeEventListener('mousemove' , (event)  )
document.getElementsByClassName('card')[0].style.width='450px'
document.getElementsByClassName('card')[0].style.height='300px'
document.getElementsByTagName('main')[0].style.margin='100px auto '
document.getElementsByTagName('main')[0].style.position='relative '
document.getElementsByTagName('body')[0].style.height='100vh'
document.getElementsByTagName('body')[0].style.overflow='hidden'
let _spanend=document.createElement('span')
let _spanend2=document.createElement('span')
_spanend.style.animation='spanend 1s  forwards'
_spanend2.style.animation='spanend2 1s  forwards'
_spanend2.setAttribute('data-end' , 'on')
_spanend.setAttribute('data-end' , 'off')
_spanend.setAttribute('onclick' , '_end(this)')
_spanend2.setAttribute('onclick' , '_end(this)')
_spanend2.innerHTML='<i class="bi bi-chevron-compact-right"></i>'
_spanend.innerHTML='<i class="bi bi-chevron-compact-left"></i>'
document.getElementsByTagName('main')[0].appendChild(_spanend)
document.getElementsByTagName('main')[0].appendChild(_spanend2)

}
function _end(self){
document.getElementsByClassName('card')[0].removeEventListener('mousemove' , (event) ,true )
n=document.querySelector('main>span:nth-of-type(1)')
n2=document.querySelector('main>span:nth-of-type(2)')
console.log(self)
console.log(n)
if(self.getAttribute('data-end')=='on'){
    _clickopt4(self)
    self.style.backgroundColor='rgba(255, 0, 0, 0.73)'
    n.style.backgroundColor='transparent'
}
else if(self.getAttribute('data-end')=='off'){
    _clickopt3(self)
    n2.style.backgroundColor='transparent'
    self.style.backgroundColor='rgba(255, 0, 0, 0.73)'
}
}


