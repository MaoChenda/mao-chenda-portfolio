<script setup lang="ts">
import { experience } from '../data/experience'
</script>

<template>
  <section id="experience">
    <div class="wrap">
      <div class="section-label">experience</div>
      <div class="pipeline">
        <div v-for="stage in experience" :key="stage.title" class="stage">
          <span class="stage-tag mono">{{ stage.tag }}</span>
          <h3>{{ stage.title }}</h3>
          <div class="role-meta">{{ stage.meta }}</div>
          <p>{{ stage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pipeline { position: relative; padding-left: 26px; }
.pipeline::before { content: ''; position: absolute; left: 5px; top: 6px; bottom: 6px; width: 1px; background: var(--line); }
.stage { position: relative; padding-bottom: 36px; }
.stage:last-child { padding-bottom: 0; }
.stage::before {
  content: ''; position: absolute; left: -26px; top: 4px; width: 11px; height: 11px;
  border-radius: 50%; background: var(--paper); border: 2px solid var(--steel);
}
.stage-tag {
  font-family: 'JetBrains Mono'; font-size: 11px; color: var(--signal);
  background: #EAF1EC; padding: 3px 8px; border-radius: 3px; display: inline-block; margin-bottom: 8px;
}
.stage h3 { font-size: 17px; margin-bottom: 2px; }
.stage .role-meta { font-family: 'JetBrains Mono'; font-size: 12px; color: var(--steel-dim); margin-bottom: 10px; }
.stage p { font-size: 14.5px; color: #3C4A54; max-width: 60ch; }
</style>
