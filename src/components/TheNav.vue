<script setup lang="ts"></script>

<template>
  <nav>
    <div class="wrap nav-inner">
      <div class="nav-brand">Mao Chenda</div>
      <div class="nav-links">
        <a href="#work">work</a>
        <a href="#experience">experience</a>
        <a href="#skills">skills</a>
        <a href="#contact">contact</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: sticky; top: 0; z-index: 10;
  background: rgba(246, 244, 239, 0.92);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid var(--line);
}
.nav-inner { display: flex; justify-content: space-between; align-items: center; height: 64px; }
.nav-brand { font-family: 'Space Grotesk'; font-weight: 700; font-size: 15px; }
.nav-links { display: flex; gap: 28px; font-size: 13px; }
.nav-links a { color: var(--steel); font-family: 'JetBrains Mono'; text-transform: lowercase; }
.nav-links a:hover { color: var(--ink); }

@media (max-width: 520px) {
  .nav-links a:nth-child(3) { display: none; }
}
</style>
