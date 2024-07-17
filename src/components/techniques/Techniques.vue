<script setup lang="ts">
import TechniqueCard from './TechniqueCard.vue'
import useTechniqueStore from '../../stores/technique'
import { onMounted } from 'vue'
import type { deleteItemRequest } from '../../types/deleteItemRequest'
const store = useTechniqueStore();

onMounted(async () => {
  await store.fetchTechniques();
})

async function deleteItem(request: deleteItemRequest) {
  await store.deleteTechnique(request.id, request.created);
  await store.fetchTechniques();
}
</script>

<template>
  <div>
    <h1>Techniques</h1>
    <div v-for="(technique, id) in store.getAllTechniques" :key="id">
      <TechniqueCard :technique="technique" @delete-item="deleteItem"/>
    </div>
  </div>
</template>
