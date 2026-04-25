         (function () {
            const toggle = document.getElementById('mobile-toggle');
            const menu = document.getElementById('mobile-menu');
            if (toggle && menu) {
                toggle.addEventListener('click', () => {
                    menu.classList.toggle('open');
                });
                // Close menu when a link is clicked
                menu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => menu.classList.remove('open'));
                });
            }
        })();

 
 const elements = document.querySelectorAll('.fade-in');

 const observer = new IntersectionObserver((entries) => {
     entries.forEach((entry, index) => {
         if (entry.isIntersecting) {
             setTimeout(() => {
                 entry.target.classList.add('visible');
             }, index * 100);

             observer.unobserve(entry.target);
         }
     });
 }, {
     threshold: 0.15
 });

 elements.forEach(el => observer.observe(el));

 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         const targetId = this.getAttribute('href');

         if (targetId === "#") return;

         const target = document.querySelector(targetId);

         if (target) {
             e.preventDefault();

             const top = target.getBoundingClientRect().top + window.scrollY;

             window.scrollTo({
                 top: top,
                 behavior: 'smooth'
             });
         }
     });
 });