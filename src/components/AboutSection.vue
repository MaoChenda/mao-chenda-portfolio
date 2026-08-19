<script setup lang="ts">
const stack = ['Vue', 'React', 'React Native', 'Angular', 'TypeScript', 'Tailwind CSS', 'Git', 'CI/CD']
</script>

<template>
  <section class="about">
    <div class="wrap">
      <div class="section-label">about</div>
      <p>
        Results-driven frontend developer with 8 years across web and mobile,
        currently leading a 5–8 person engineering team as frontend technical
        authority at Mobile C&C. I've shipped enterprise Internet Banking and
        Loan Origination systems, a school management platform used by thousands,
        and fintech tools for SMEs — with a habit of turning one-off solutions
        into reusable components the whole team builds on. B.S. in Computer
        Engineering, Royal University of Phnom Penh.
      </p>
      <div class="chip-row">
        <span v-for="item in stack" :key="item" class="chip">{{ item }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about p { max-width: 64ch; font-size: 15.5px; color: #3C4A54; margin-bottom: 20px; }
.chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
.chip {
  font-family: 'JetBrains Mono'; font-size: 12px; padding: 6px 12px;
  background: var(--card); border: 1px solid var(--line); border-radius: 3px; color: var(--steel);
}
</style>
