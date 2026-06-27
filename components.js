(function () {
  const path = window.location.pathname;
  const onIndex = path.endsWith('index.html') || path.endsWith('/') || path.endsWith('/akash_portfolio/');
  const base = onIndex ? '' : 'index.html';

  document.querySelector('nav').innerHTML = `
    <ul class="nav-links">
      <li><a href="${base}#experience">Experiences</a></li>
      <li><a href="${base}#journey">Journey so far</a></li>
      <li><a href="${base}#skills">Skills I learnt</a></li>
    </ul>
    <a href="${base}#connect" class="nav-cta">Connect</a>
  `;

  document.querySelector('footer').innerHTML = `
    <div class="footer-copy">Copyright &copy; Akash Hossain 2026</div>
    <div class="footer-right">
      <a href="mailto:" class="connect-btn connect-btn--mail">Write a Mail</a>
      <a href="https://www.behance.net/" target="_blank" class="social-icon" aria-label="Behance">
        <img src="images/Behance.svg" alt="Behance" width="35" height="35" />
      </a>
      <a href="https://wa.me/" target="_blank" class="social-icon" aria-label="WhatsApp">
        <img src="images/WhatsApp.svg" alt="WhatsApp" width="35" height="35" />
      </a>
      <a href="https://www.instagram.com/" target="_blank" class="social-icon" aria-label="Instagram">
        <img src="images/Instagram_white.svg" alt="Instagram" width="35" height="35" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" class="social-icon" aria-label="LinkedIn">
        <img src="images/LinkedIN_white.svg" alt="LinkedIn" width="35" height="35" />
      </a>
    </div>
  `;
})();
