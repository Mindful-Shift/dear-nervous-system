// FAQ
function faq(el) {
  const ans = el.nextElementSibling;
  const ico = el.querySelector('.faq-ico');
  const open = ans.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-ico').forEach(i => i.classList.remove('open'));
  if (!open) { ans.classList.add('open'); ico.classList.add('open'); }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});