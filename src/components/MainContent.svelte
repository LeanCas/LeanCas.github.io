<script>
  import { _ } from 'svelte-i18n';
  import { fly } from 'svelte/transition';
  import { sidebarOpen, sidebarStayOpen } from '../stores.js';
  
  let currentSection = 'home';
  
  function handleScroll(event) {
    const sections = document.querySelectorAll('.content-section');
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop - sectionHeight / 3) {
        currentSection = section.id;
      }
    });
  }
</script>

<svelte:window on:scroll={handleScroll}/>

<div class="content" class:sidebar-open={$sidebarOpen} class:sidebar-stay-open={$sidebarStayOpen}>
  <!-- Home Section -->
  <section id="home" class="content-section" in:fly={{ y: 50, duration: 500 }}>
    <div class="home-left">
      <h2>{$_('home.title')}</h2>
      <p>{$_('home.description')}</p>
      <button class="cta">{$_('home.getStarted')}</button>
    </div>
    <div class="home-right">
      <img src="/Assets/without background.png" alt="Innovative Solutions" id="home-image">
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="content-section" in:fly={{ y: 50, duration: 500 }}>
    <h2>{$_('services.title')}</h2>
    <h3>{$_('services.subtitle')}</h3>
    <div class="cards">
      <div class="card">
        <h3>{$_('services.service1.title')}</h3>
        <p>{$_('services.service1.description')}</p>
      </div>
      <div class="card">
        <h3>{$_('services.service2.title')}</h3>
        <p>{$_('services.service2.description')}</p>
      </div>
      <div class="card">
        <h3>{$_('services.service3.title')}</h3>
        <p>{$_('services.service3.description')}</p>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="content-section" in:fly={{ y: 50, duration: 500 }}>
    <div class="contact-left">
      <h2>{$_('contact.title')}</h2>
      <p>{$_('contact.description')}</p>
    </div>
    <div class="contact-right">
      <form>
        <div class="form-group">
          <label for="name">{$_('contact.form.name')}</label>
          <input type="text" id="name" name="name">
        </div>
        <div class="form-group">
          <label for="email">{$_('contact.form.email')}</label>
          <input type="email" id="email" name="email">
        </div>
        <div class="form-group">
          <label for="message">{$_('contact.form.message')}</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">{$_('contact.form.send')}</button>
      </form>
    </div>
  </section>
</div>

<style>
  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    overflow-y: auto;
    padding: 20px;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }

  /* Desktop styles */
  @media (min-width: 1025px) {
    .content {
      left: 0;
      width: 100%;
    }
    .content.sidebar-open {
      left: 250px; /* Sidebar width */
      width: calc(100% - 250px);
    }
    .content.sidebar-stay-open {
      left: 250px; /* Sidebar width */
      width: calc(100% - 250px);
    }
  }

  /* Mobile styles */
  @media (max-width: 1024px) {
    .content {
      left: 0;
      width: 100%;
    }
  }

  .content-section {
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    scroll-snap-align: start;
  }

  /* Home section specific layout */
  #home {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  /* Make home section responsive */
  @media (max-width: 768px) {
    #home {
      flex-direction: column;
    }
    
    .home-left, .home-right {
      max-width: 100% !important;
      text-align: center;
    }
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .home-left {
    max-width: 50%;
  }

  .home-right {
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #home-image {
    max-width: 100%;
    transition: transform 0.2s ease;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1400px;
    gap: 30px;
  }

  .card {
    flex: 1;
    padding: 30px;
    border: 1px solid transparent;
    transition: border-color 0.3s;
    box-sizing: border-box;
  }

  .card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .card p {
    font-size: 1rem;
  }

  .card:hover {
    border-color: black;
  }

  .contact-left, .contact-right {
    width: 100%;
    max-width: 600px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  form label {
    display: block;
    margin-bottom: 8px;
    font-size: 1.1rem;
    font-weight: bold;
  }

  form input, form textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  form textarea {
    min-height: 150px;
  }

  form button {
    padding: 12px 24px;
    font-size: 1.1rem;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  form button:hover {
    background-color: #333;
  }

  .cta {
    padding: 12px 24px;
    font-size: 1.1rem;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 20px;
  }

  .cta:hover {
    background-color: #333;
  }

  :global(body.dark-mode) .card:hover {
    border-color: white;
  }

  :global(body.dark-mode) form input,
  :global(body.dark-mode) form textarea {
    background-color: #1e1e1e;
    color: white;
    border-color: white;
  }
</style> 