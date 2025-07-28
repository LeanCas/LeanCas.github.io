<script>
  import { _ } from 'svelte-i18n';
  import { sidebarOpen, sidebarIsInert, sidebarStayOpen } from '../stores.js';
  import { fly } from 'svelte/transition';
  
  let inert = null;
  $: inert = $sidebarIsInert ? 'inert' : null;
  
  let sidebarStatus = false;
  let ariaHidden = true;
  
  sidebarOpen.subscribe((value) => {
    sidebarStatus = value;
    ariaHidden = !value;
    console.log(`Sidebar status changed: ${value ? 'open' : 'closed'}`);
  });
  
  function toggleSidebar() {
    if (!$sidebarStayOpen) {
      sidebarOpen.update(value => !value);
      sidebarIsInert.update(value => !value);
      console.log(`Toggled sidebar: ${!sidebarStatus ? 'open' : 'closed'}`);
    } else {
      console.log('Sidebar toggle ignored: sidebar is in stay-open mode');
    }
  }
</script>

<button class="sidebar-toggle" class:sidebar-open={sidebarStatus} on:click={toggleSidebar} aria-label="Toggle sidebar" aria-expanded={sidebarStatus}>
  <span class="chevron" class:rotated={!sidebarStatus}>&#x276E;</span>
</button>

{#if sidebarStatus}
<nav class="sidebar" aria-hidden={ariaHidden} {inert} in:fly={{ x: -300, duration: 300 }}>
  <div class="sidebar-header">
    <img src="/Assets/ICON BLACK AND WHITE.png" alt="Algoseed Labs Logo" class="sidebar-logo">
  </div>

  <ul class="components">
    <li class="nav-item">
      <a href="#home">
        <i class="fas fa-home"></i>
        <span class="nav-text">{$_('nav.home')}</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#about">
        <i class="fas fa-question-circle"></i>
        <span class="nav-text">{$_('nav.about')}</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#services">
        <i class="fas fa-clipboard-list"></i>
        <span class="nav-text">{$_('nav.services')}</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#portfolio">
        <i class="fas fa-briefcase"></i>
        <span class="nav-text">{$_('nav.portfolio')}</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#casestudies">
        <i class="fas fa-search"></i>
        <span class="nav-text">{$_('nav.casestudies')}</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#blog">
        <i class="fas fa-edit"></i>
        <span class="nav-text">{$_('nav.blog')}</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#contact">
        <i class="fas fa-envelope"></i>
        <span class="nav-text">{$_('nav.contact')}</span>
      </a>
    </li>
    <li class="sidebar-header">
      <a href="#sygil">
        <img class="sidebar-logo" src="/Assets/without background.png" alt="Algoseed Labs Logo">
      </a>
      <span class="nav-text"> &#x00A9;2024</span>
    </li>
  </ul>
</nav>
{/if}

<style>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    background-color: white;
    border-right: 2px solid #000;
    padding: 20px;
    box-sizing: border-box;
    z-index: 100;
    overflow-x: hidden;
  }

  .sidebar-header {
    text-align: center;
    margin-bottom: 30px;
  }

  .sidebar-logo {
    width: 100px;
    max-width: 100%;
    transition: width 0.3s;
  }

  .sidebar-toggle {
    position: fixed;
    top: 20px;
    z-index: 110;
    background: white;
    border: 2px solid #000;
    border-radius: 5px;
    cursor: pointer;
    font-size: 24px;
    padding: 5px;
    transition: all 0.3s ease;
  }

  .chevron {
    display: inline-block;
    transition: transform 0.3s;
  }

  .chevron.rotated {
    transform: rotate(180deg);
  }

  .components {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-item {
    margin-bottom: 15px;
    border-top: 1px solid #eee;
    padding-top: 15px;
  }

  .nav-item:first-child {
    border-top: none;
    padding-top: 0;
  }

  .nav-item a {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.2s;
  }

  .nav-item a i {
    font-size: 20px;
    margin-right: 15px;
    min-width: 20px;
  }

  [inert] {
    pointer-events: none;
    cursor: default;
  }

  [inert],
  [inert] * {
    opacity: 0.5;
    pointer-events: none;
    cursor: default;
    user-select: none;
  }

  /* Position toggle button differently based on sidebar state */
  @media (min-width: 1025px) {
    .sidebar-toggle {
      left: 20px; /* Default position when sidebar is closed */
      transition: left 0.3s ease;
    }
    
    .sidebar-toggle.sidebar-open {
      left: 250px; /* When sidebar is open, align with sidebar edge */
    }
  }
  
  @media (max-width: 1024px) {
    .sidebar-toggle {
      left: 20px;
    }
  }

  :global(body.dark-mode) .sidebar {
    background-color: #1e1e1e;
    color: white;
    border-color: white;
  }

  :global(body.dark-mode) .sidebar-toggle {
    background-color: #1e1e1e;
    color: white;
    border-color: white;
  }
</style> 