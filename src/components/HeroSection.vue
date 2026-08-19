<script setup lang="ts">
interface StatusRow { k: string; v: string; up?: boolean }

const statusRows: StatusRow[] = [
  { k: 'experience', v: '8 yrs' },
  { k: 'core stack', v: 'Vue · Pinia · TS' },
  { k: 'domain', v: 'banking / fintech' },
  { k: 'title', v: 'Senior Officer, Frontend Dev' },
  { k: 'availability', v: '● open to work', up: true },
]
</script>

<template>
  <header class="hero">
    <div class="wrap hero-grid">
      <div>
        <div class="eyebrow"><span class="dot"></span>senior officer, frontend development · phnom penh</div>
        <h1>Frontend developer<br /><span>for systems that can't afford to break.</span></h1>
        <p>
          8 years building interfaces for internet banking and loan origination
          platforms — from individual contributor to tech lead to team manager.
          Vue, React, and Angular, and a habit of shipping things that hold up under real traffic.
        </p>
        <div class="btn-row">
          <a href="#work" class="btn btn-solid">View work</a>
          <a :href="`${import.meta.env.BASE_URL}Mao_Chenda_Resume.pdf`" class="btn btn-outline">Download resume</a>
        </div>
      </div>

      <div class="status-card">
        <div v-for="row in statusRows" :key="row.k" class="status-row">
          <span class="k">{{ row.k }}</span>
          <span class="v" :class="{ up: row.up }">{{ row.v }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero { padding: 88px 0 64px; }
.hero-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 48px; align-items: start; }
.eyebrow {
  font-family: 'JetBrains Mono'; font-size: 12px; color: var(--steel);
  letter-spacing: .04em; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;
}
.dot { width: 7px; height: 7px; border-radius: 50%; background: var(--signal); display: inline-block; }
.hero h1 { font-size: 44px; line-height: 1.12; margin-bottom: 18px; }
.hero h1 span { color: var(--steel); }
.hero p { font-size: 16px; color: #3C4A54; max-width: 46ch; margin-bottom: 28px; }
.btn-row { display: flex; gap: 14px; }
.btn {
  font-family: 'JetBrains Mono'; font-size: 13px; padding: 11px 20px;
  border-radius: 3px; border: 1px solid var(--ink); transition: all .15s ease;
}
.btn-solid { background: var(--ink); color: var(--paper); }
.btn-solid:hover { background: var(--steel); border-color: var(--steel); }
.btn-outline:hover { background: var(--ink); color: var(--paper); }

.status-card {
  background: var(--card); border: 1px solid var(--line); border-radius: 6px;
  padding: 22px; font-family: 'JetBrains Mono'; font-size: 13px;
}
.status-card .head {
  display: flex; justify-content: space-between; align-items: center;
  padding-bottom: 14px; margin-bottom: 14px; border-bottom: 1px solid var(--line);
  color: var(--steel-dim); font-size: 11px; text-transform: uppercase; letter-spacing: .05em;
}
.status-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed var(--line); }
.status-row:last-child { border-bottom: none; }
.status-row .k { color: var(--steel-dim); }
.status-row .v { color: var(--ink); font-weight: 500; }
.status-row .v.up { color: var(--signal); }

@media (max-width: 800px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero h1 { font-size: 34px; }
}
</style>
