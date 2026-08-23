const header=document.getElementById("header");
const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("nav");
document.getElementById("year").textContent=new Date().getFullYear();

const updateHeader=()=>header.classList.toggle("scrolled",window.scrollY>24);
updateHeader();
window.addEventListener("scroll",updateHeader,{passive:true});

menuToggle.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded","false");
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
