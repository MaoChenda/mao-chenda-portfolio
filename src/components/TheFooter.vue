<script setup lang="ts"></script>

<template>
  <footer id="contact">
    <div class="wrap">
      <div class="section-label center">get in touch</div>
      <div class="links">
        <a href="mailto:mao.chenda60@gmail.com">email</a>
        <a href="#">linkedin</a>
        <a href="#">github</a>
      </div>
      <div class="build-note">built with vue + vite · deployed via github actions</div>
    </div>
  </footer>
</template>

<style scoped>
footer { padding: 44px 0 60px; text-align: center; }
.section-label.center { justify-content: center; display: flex; }
.links { display: flex; justify-content: center; gap: 22px; margin-bottom: 18px; font-family: 'JetBrains Mono'; font-size: 13px; }
.links a { color: var(--steel); }
.links a:hover { color: var(--ink); }
.build-note { font-family: 'JetBrains Mono'; font-size: 11.5px; color: var(--steel-dim); }
</style>
