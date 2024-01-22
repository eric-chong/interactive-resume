<template>
  <header class="page-header">
    <div class="page-header__logo" @mouseover="logoHover = true" @mouseleave="logoHover = false">
      <Transition name="logo-fade">
        <div class="page-header__logo-wrap" v-if="!logoHover" key="1">
          <h2 class="page-header__logo--name">Cire</h2>
          <div class="page-header__logo--sub">.reverse()</div>
        </div>
        <div class="page-header__logo-wrap" v-else key="2">
          <h2 class="page-header__logo--name">Eric</h2>
          <div class="page-header__logo--sub">chong</div>
        </div>
      </Transition>
    </div>
    <div class="page-header__overview">
      <div class="page-header__overview--links">
        <div class="theme-switch">
          <v-switch
            v-model="currentTheme"
            density="compact"
            true-value="dark"
            false-value="light"
            color="primary"
            :true-icon="mdiDarkTheme"
            :false-icon="mdiLightTheme"
            hide-details
            @update:model-value="themeChange"
          />
        </div>
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
import { useTheme } from 'vuetify'
import {
  mdiGithub,
  mdiLinkedin,
  mdiWeatherNight as mdiDarkTheme,
  mdiWeatherSunny as mdiLightTheme
} from '@mdi/js'

const logoHover = ref(false)

const theme = useTheme()
const currentTheme = ref('dark')

function themeChange(themeValue: string | null) {
  theme.global.name.value = themeValue || 'dark'
}
</script>

<style lang="scss" scoped>
.page-header {
  padding: 1rem;
  padding-bottom: 0;
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
.page-header__logo-wrap {
  position: absolute;
}
.logo-fade-enter-active,
.logo-fade-leave-active {
  transition: opacity 0.5s ease;
}

.logo-fade-enter-from,
.logo-fade-leave-to {
  opacity: 0;
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
.page-header__overview--links {
  display: flex;
  justify-content: right;
  .theme-switch {
    margin-right: 16px;
  }
  a {
    position: relative;
    top: 4px;
  }
}
</style>
