(function(){
var h=document.querySelector('header'),b=document.getElementById('bg'),m=document.getElementById('menu');
function sc(){h.classList.toggle('s',scrollY>40)}sc();addEventListener('scroll',sc,{passive:true});
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')});
m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded','false')}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){m.classList.remove('open');b.setAttribute('aria-expanded','false')}});
/* active nav */
var links=[].slice.call(m.querySelectorAll('a'));
var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))});
function act(){var y=scrollY+120,c=0;secs.forEach(function(s,i){if(s&&s.offsetTop<=y)c=i});links.forEach(function(a,i){a.classList.toggle('on',i===c)})}
addEventListener('scroll',act,{passive:true});act();
/* filter */
var chips=[].slice.call(document.querySelectorAll('.chip')),evs=[].slice.call(document.querySelectorAll('#evs .ev')),em=document.getElementById('empty');
function filt(f){var n=0;chips.forEach(function(c){c.setAttribute('aria-pressed',c.dataset.f===f)});evs.forEach(function(e){var s=f==='all'||e.dataset.game===f;e.style.display=s?'':'none';if(s)n++});em.style.display=n?'none':'block'}
chips.forEach(function(c){c.addEventListener('click',function(){filt(c.dataset.f)})});
[].forEach.call(document.querySelectorAll('[data-g]'),function(a){a.addEventListener('click',function(){filt(a.dataset.g)})});
/* reveal */
var r=[].slice.call(document.querySelectorAll('.rv'));
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});r.forEach(function(x){io.observe(x)})}else r.forEach(function(x){x.classList.add('in')});
})();
