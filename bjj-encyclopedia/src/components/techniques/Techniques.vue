<script setup lang="ts">
import TechniqueCard from './TechniqueCard.vue'
import useTechniqueStore from '../../stores/technique'
import { onMounted } from 'vue'
const store = useTechniqueStore();

onMounted(async () => {
  await store.fetchTechniques();
})
</script>

<template>
  <div>
    <h1>Techniques</h1>
    <div v-for="(technique, id) in store.getAllTechniques" :key="id">
      <TechniqueCard :technique="technique" />
    </div>
  </div>
</template>
