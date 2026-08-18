<script setup lang="ts">
import { skillGroups } from '../data/skills'
</script>

<template>
  <section id="skills">
    <div class="wrap">
      <div class="section-label">skills</div>
      <div class="skills-grid">
        <div v-for="group in skillGroups" :key="group.label" class="skill-group">
          <h4>{{ group.label }}</h4>
          <ul>
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.skill-group h4 {
  font-family: 'JetBrains Mono'; font-size: 12px; text-transform: uppercase;
  letter-spacing: .05em; color: var(--steel); margin-bottom: 10px;
}
.skill-group ul { list-style: none; font-size: 14.5px; color: #3C4A54; }
.skill-group li { padding: 3px 0; }

@media (max-width: 800px) { .skills-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 520px) { .skills-grid { grid-template-columns: 1fr; } }
</style>
