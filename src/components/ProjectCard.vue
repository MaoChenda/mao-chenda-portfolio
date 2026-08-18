<script setup lang="ts">
import type { Project } from '../data/projects'

defineProps<{ project: Project }>()
</script>

<template>
  <div class="project">
    <div class="top-row">
      <h3>{{ project.title }}</h3>
      <div class="links">
        <a v-if="project.caseStudyUrl" :href="project.caseStudyUrl">case study</a>
        <a v-if="project.demoUrl" :href="project.demoUrl">demo</a>
      </div>
    </div>
    <div class="role mono">role: {{ project.role }}</div>
    <ul class="changelog">
      <li v-for="line in project.highlights" :key="line">{{ line }}</li>
    </ul>
  </div>
</template>

<style scoped>
.project {
  background: var(--card); border: 1px solid var(--line); border-radius: 6px;
  padding: 26px; margin-bottom: 20px;
}
.top-row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; flex-wrap: wrap; gap: 8px; }
.project h3 { font-size: 19px; }
.links { font-family: 'JetBrains Mono'; font-size: 12px; display: flex; gap: 14px; }
.links a { color: var(--steel); border-bottom: 1px solid var(--steel-dim); }
.links a:hover { color: var(--gold); border-color: var(--gold); }
.role { font-family: 'JetBrains Mono'; font-size: 12px; color: var(--steel-dim); margin-bottom: 14px; }
.changelog { list-style: none; }
.changelog li { font-size: 14px; color: #3C4A54; padding-left: 20px; position: relative; margin-bottom: 7px; }
.changelog li::before { content: '+'; position: absolute; left: 0; color: var(--signal); font-family: 'JetBrains Mono'; font-weight: 700; }
</style>
