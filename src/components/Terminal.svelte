<script>
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';
  
  export let onComplete;
  
  let terminalContent = '';
  let currentIndex = 0;
  let isTyping = false;
  
  const messages = [
    'Welcome to Algoseed Labs...',
    'Initializing systems...',
    'Loading interface...',
    'Ready to begin...'
  ];
  
  async function typeText(text) {
    isTyping = true;
    for (let i = 0; i < text.length; i++) {
      terminalContent += text[i];
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    terminalContent += '\n';
    isTyping = false;
  }
  
  async function startTyping() {
    for (const message of messages) {
      await typeText(message);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    setTimeout(onComplete, 1000);
  }
  
  onMount(() => {
    startTyping();
  });
</script>

<div class="terminal">
  <pre id="terminal-content">{terminalContent}</pre>
</div>

<style>
  .terminal {
    width: 80%;
    max-width: 800px;
    background-color: white;
    border: 2px solid #000000;
    padding: 30px;
    box-shadow: 0 0 10px #000000;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: monospace;
    font-size: 1.2rem;
    line-height: 1.6;
  }

  :global(body.dark-mode) .terminal {
    background-color: #1e1e1e;
    color: white;
    border-color: white;
  }

  #terminal-content {
    margin: 0;
    white-space: pre-wrap;
  }

  #terminal-content::after {
    content: '|';
    animation: blink 0.7s steps(2, start) infinite;
    margin-left: 2px;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
</style> 