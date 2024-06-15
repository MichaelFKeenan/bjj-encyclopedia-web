<script setup lang="ts">
import TechniqueCard from './TechniqueCard.vue'
import useTechniqueStore from '../../stores/technique'
const store = useTechniqueStore();
</script>

<template>
  <div>
    <h1>Techniques</h1>
    <div v-for="(technique, id) in store.getAllTechniques" :key="id">
      <TechniqueCard :technique="technique" />
    </div>
  </div>
</template>
