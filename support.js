fetch('support.html')
  .then(res => res.text())
  .then(html => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    document.body.appendChild(wrapper);

    initSupport();
  });

function initSupport(){

  const toggle = document.getElementById('support-toggle');
  const windowEl = document.getElementById('support-window');
  const close = document.getElementById('support-close');

  const input = document.getElementById('support-text');
  const send = document.getElementById('support-send');
  const messages = document.getElementById('support-messages');

  toggle.onclick = () => {
  windowEl.classList.toggle('open');
  };

  close.onclick = () => {
    windowEl.classList.remove('open');
  };

  function sendMessage(){
    const text = input.value.trim();
    if(!text) return;

    const msg = document.createElement('div');
    msg.className = 'msg user';
    msg.textContent = text;
    messages.appendChild(msg);

    input.value = '';

    setTimeout(() => {
      const reply = document.createElement('div');
      reply.className = 'msg bot';
      reply.textContent = 'Support will answer soon...';
      messages.appendChild(reply);
    }, 500);

    messages.scrollTop = messages.scrollHeight;
  }

  send.onclick = sendMessage;

  input.addEventListener('keypress', e => {
    if(e.key === 'Enter') sendMessage();
  });
}