document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const destino = document.querySelector(this.getAttribute('href'));

            if(destino){
                destino.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const destino = document.querySelector(this.getAttribute('href'));

            if(destino){
                destino.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});



