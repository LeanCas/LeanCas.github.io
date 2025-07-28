<script>
  import { onMount } from 'svelte';
  import { init, register, locale } from 'svelte-i18n';
  import Terminal from './components/Terminal.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import MainContent from './components/MainContent.svelte';
  import Responsive from './components/Responsive.svelte';
  import { fade, fly } from 'svelte/transition';
  import { sidebarOpen, sidebarStayOpen, sidebarIsInert } from './stores.js';
  
  let showTerminal = true;
  let showLogo = false;
  let showMainContent = false;
  let isDarkMode = false;
  let currentLocale = 'en';

  // Initialize i18n
  register('en', () => import('./locales/en.json'));
  register('fr', () => import('./locales/fr.json'));
  
  onMount(async () => {
    await init({
      initialLocale: 'en',
      fallbackLocale: 'en'
    });
  });

  function handleEnterSite() {
    showTerminal = false;
    showLogo = true;
    setTimeout(() => {
      showLogo = false;
      showMainContent = true;
    }, 1000);
  }

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
  }

  function toggleLocale() {
    currentLocale = currentLocale === 'en' ? 'fr' : 'en';
    locale.set(currentLocale);
  }
</script>

<svelte:head>
  <title>Algoseed Labs</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
  <link rel="icon" href="/Assets/ICON BLACK AND WHITE.png" type="image/png">
</svelte:head>

{#if showTerminal}
  <div in:fade={{ duration: 500 }}>
    <Terminal onComplete={handleEnterSite} />
  </div>
{:else if showLogo}
  <div class="logo" in:fade={{ duration: 500 }}>
    <img src="/Assets/without background.png" alt="Algoseed Labs Logo">
    <button class="btn btn-dark" on:click={handleEnterSite}>Enter Site</button>
    <span class="onbutton-hover">We don't use cookies <i class="fas fa-cookie"></i></span>
  </div>
{:else if showMainContent}
  <!-- Debug info -->
  <div class="debug" style="position: fixed; top: 0; right: 0; background: rgba(0,0,0,0.5); color: white; padding: 5px; z-index: 9999;">
    Sidebar open: {$sidebarOpen ? 'YES' : 'NO'} | Stay open: {$sidebarStayOpen ? 'YES' : 'NO'} | Viewport width: <span id="viewport-width"></span>px
  </div>
  
  <!-- Use the Responsive component to manage sidebar state based on screen size -->
  <Responsive />
  
  <div class="layout-container" class:sidebar-open={$sidebarOpen} in:fade={{ duration: 500 }}>
    <Sidebar />
    <MainContent />
    
    <div class="toggle-container">
      <div class="tdnn" class:day={!isDarkMode}>
        <div class="moon" class:sun={!isDarkMode} on:click={toggleDarkMode}></div>
      </div>
    </div>

    <div class="language-toggle">
      <button on:click={toggleLocale}>{currentLocale === 'en' ? 'FR' : 'EN'}</button>
    </div>
  </div>
{/if}

<script context="module">
  // Add viewport width tracking script for debugging
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateViewportWidth);
    window.addEventListener('load', updateViewportWidth);
    
    function updateViewportWidth() {
      const el = document.getElementById('viewport-width');
      if (el) el.textContent = window.innerWidth;
    }
  }
</script>

<style>
  :global(body) {
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .layout-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  .logo img {
    width: 100%;
    max-width: 400px;
  }

  .btn {
    margin-top: 20px;
    padding: 12px 24px;
    font-size: 18px;
    cursor: pointer;
    background-color: white;
    color: black;
    border: 2px solid #000000;
    box-shadow: 0 0 10px #000000;
    transition: background-color 0.3s, color 0.3s;
  }

  .btn:hover {
    background-color: black;
    color: white;
  }

  .onbutton-hover {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease;
    font-size: 14px;
    margin-top: 10px;
  }

  .logo:hover .onbutton-hover {
    visibility: visible;
    opacity: 1;
  }

  :global(body.dark-mode) {
    background-color: #121212;
    color: white;
  }

  :global(body.dark-mode .btn) {
    background-color: #121212;
    color: white;
    border-color: white;
  }
</style> 