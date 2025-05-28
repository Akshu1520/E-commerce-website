    //  navlist all set's in bars //
    const list = document.querySelector(".navlist");
const hamburger = document.querySelector(".fa-bars");

     hamburger.addEventListener("click", ()=>{
    
        hamburger.classList.toggle("fa-x");
        list.classList.toggle("navlist-active");
        
    })


// Smooth scroll for navbar links
document.querySelectorAll('.navlist .link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor jump

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});




