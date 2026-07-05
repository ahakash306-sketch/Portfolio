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
      <a href="mailto:ahakash306@gmail.com?subject=Hey%2C%20" class="connect-btn connect-btn--mail">Write a Mail</a>
      <div class="footer-icons">
        <a href="https://www.behance.net/akashhossain" target="_blank" class="social-icon" aria-label="Behance">
          <img src="images/Behance.svg" alt="Behance" width="35" height="35" />
        </a>
        <a href="https://www.linkedin.com/in/akash-h-11946b16b" target="_blank" class="social-icon" aria-label="LinkedIn">
          <img src="images/LinkedIN_white.svg" alt="LinkedIn" width="35" height="35" />
        </a>
        <a href="404.html" class="social-icon" aria-label="Portfolio">
          <img src="images/Vector.svg" alt="Portfolio" width="35" height="35" />
        </a>
      </div>
    </div>
  `;
})();
