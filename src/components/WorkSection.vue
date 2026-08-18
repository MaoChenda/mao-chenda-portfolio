<script setup lang="ts">
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section id="work">
    <div class="wrap">
      <div class="section-label">selected work</div>
      <ProjectCard v-for="p in projects" :key="p.title" :project="p" />
    </div>
  </section>
</template>
