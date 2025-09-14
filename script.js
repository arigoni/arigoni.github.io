// Année automatique dans le footer
document.addEventListener('DOMContentLoaded', () => {
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();
});


// Scroll doux pour la navigation interne
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
const id = this.getAttribute('href').slice(1);
const target = document.getElementById(id);
if (target) {
e.preventDefault();
target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
});
});