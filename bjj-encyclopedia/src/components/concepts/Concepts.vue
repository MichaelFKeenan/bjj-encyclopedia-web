<script setup lang="ts">
import ConceptCard from './ConceptCard.vue'
import useConceptStore from '../../stores/concept'
import { onMounted } from 'vue'
import { deleteItemRequest } from '../../types/deleteItemRequest'
const store = useConceptStore();

onMounted(async () => {
  await store.fetchConcepts();
})

async function deleteItem(request: deleteItemRequest) {
  await store.deleteConcept(request.id, request.created);
  await store.fetchConcepts();
}
</script>

<template>
  <div>
    <h1>Concepts</h1>
    <div v-for="(concept, id) in store.getAllConcepts" :key="id">
      <ConceptCard :concept="concept" @delete-item="deleteItem"/>
    </div>
  </div>
</template>
