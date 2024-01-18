<template>
  <div class="info-row">
    <div class="info-row__icon">
      <slot name="icon"></slot>
    </div>
    <div
      class="info-row__details"
      :class="{
        highlighted: isRowHighlighted
      }"
    >
      <h3 class="info-row__details--title"><slot name="title"></slot></h3>
      <div class="info-row__details--subtitle">
        <div class="info-row__details--subtitle-text"><slot name="subtitle"></slot></div>
        <div class="info-row__details--period"><slot name="period"></slot></div>
      </div>

      <ul class="info-row__details--list-items">
        <li
          v-for="(item, index) in listItems"
          :key="index"
          :class="{
            highlighted: isItemHighlighted(item),
            muted: isItemMuted(item)
          }"
        >
          {{ item.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useExperiencesStore } from '@/stores/useExperiencesStore'
import type { Achievement } from '@/types'

const { listItems, isRowHighlighted } = defineProps<{
  listItems: Array<Achievement>
  isRowHighlighted: boolean
}>()

const { highlightSkills } = useExperiencesStore()

function isItemHighlighted(achievement: Achievement) {
  return (
    highlightSkills.length > 0 &&
    highlightSkills.filter((highlightSkill) => achievement.skills?.includes(highlightSkill))
      .length === highlightSkills.length
  )
}

function isItemMuted(achievement: Achievement) {
  if (!achievement.skills) return false
  const isHighlighted = isItemHighlighted(achievement)
  return highlightSkills.length > 0 && !isHighlighted
}
</script>

<style scoped lang="scss">
.info-row {
  display: flex;
  position: relative;
  margin-top: 0;
  padding: 15px 20px 15px 90px;
}

$logo-top-position: 15px;
$logo-left-position: 25px;
$logo-width: 50px;
$logo-height: 50px;

.info-row__icon {
  top: $logo-top-position;
  left: $logo-left-position;
  position: absolute;
}

.info-row:before {
  content: ' ';
  border-left: 1px solid rgb(var(--v-theme-border-light-1));
  position: absolute;
  left: $logo-left-position + ($logo-width / 2);
  top: 0;
  height: $logo-top-position;
}

.info-row:after {
  content: ' ';
  border-left: 1px solid rgb(var(--v-theme-border-light-1));
  position: absolute;
  left: $logo-left-position + ($logo-width / 2);
  top: $logo-top-position + $logo-height;
  height: calc(100% - $logo-top-position - $logo-height);
}

.info-row:first-of-type:before {
  display: none;
}

.info-row:last-of-type:after {
  display: none;
}
.info-row__details.highlighted {
  color: rgb(var(--v-theme-primary));
}
.info-row__details--subtitle {
  display: flex;
  gap: 8px;
}
.info-row__details--subtitle-text {
  font-size: 14px;
  font-style: italic;
}
.info-row__details--period {
  font-size: 13px;
  font-style: italic;
}
.info-row__details {
  &:not(.highlighted) {
    .info-row__details--period {
      color: rgb(var(--v-theme-text-color-grey));
    }

    .info-row__details--list-items {
      li.highlighted {
        color: rgb(var(--v-theme-primary));
      }
      li.muted {
        color: rgb(var(--v-theme-text-color-muted));
      }
    }
  }
}
.info-row__details--list-items {
  margin-top: 16px;
  margin-left: 16px;
  font-size: 14px;
}
</style>
