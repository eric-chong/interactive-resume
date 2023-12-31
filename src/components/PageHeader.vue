<template>
  <header class="page-header">
    <div class="page-header__logo" @mouseover="logoHover = true" @mouseleave="logoHover = false">
      <div v-if="!logoHover">
        <h2 class="page-header__logo--name">Cire</h2>
        <div class="page-header__logo--sub">.reverse()</div>
      </div>
      <div v-if="logoHover">
        <h2 class="page-header__logo--name">Eric</h2>
        <div class="page-header__logo--sub">chong</div>
      </div>
    </div>
    <div class="page-header__overview">
      <div class="page-header__overview--links">
        <a href="https://www.linkedin.com/in/eric-hc-chong/" target="_blank">
          <v-icon :icon="mdiGithub" />
        </a>
        <a href="https://www.linkedin.com/in/eric-hc-chong/" target="_blank">
          <v-icon :icon="mdiLinkedin" />
        </a>
      </div>
      <div class="page-header__overview--text">
        Dedicated and results-driven Frontend Engineer with a passion for creating seamless,
        visually appealing user experiences.
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { mdiGithub, mdiLinkedin } from '@mdi/js'

const logoHover = ref(false)
</script>

<style lang="scss" scoped>
.page-header {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.page-header__logo {
  width: 90px;
  height: 50px;
  border-left: 2px solid rgb(var(--v-theme-border-light-2));
  padding: 0 8px;
  margin-right: 16px;
  &:hover {
    border-left: 2px solid rgb(var(--v-theme-primary));
  }
}
.page-header__logo--name {
  color: rgb(var(--v-theme-text-color));
  font-size: 30px;
  font-family: Lato;
  line-height: 1;
  font-weight: 500;
  margin-top: 4px;
}
.page-header__logo--sub {
  color: rgb(var(--v-theme-text-color-darken-10));
  font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas,
    monospace;
  font-size: 12px;
  line-height: 1;
}

.page-header__overview {
  flex-grow: 1;
  max-width: 600px;
}
.page-header__overview--text,
.page-header__overview--links {
  text-align: right;
  font-size: 14px;
}
</style>
