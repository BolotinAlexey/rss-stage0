import ref from './refs.js';
import onToggleMobile from './onToggleMobile.js';
const { burger, mobile, bg } = ref;

burger.addEventListener('click', onToggleMobile);

bg.addEventListener('click', e => {
  if (e.target === bg) {
    onToggleMobile();
  }
});

mobile.addEventListener('click', e => {
  if (e.target.tagName === 'A') onToggleMobile();
});
