<script setup lang="ts">
import TechniqueCard from './TechniqueCard.vue'
import useTechniqueStore from '../../stores/technique'
const store = useTechniqueStore();
const techniques = store.getAllTechniques;
</script>

<template>
  <div>
    <h1>Techniques</h1>
    <div v-for="(technique, id) in techniques" :key="id">
      <TechniqueCard :technique="technique" />
    </div>
  </div>
</template>
