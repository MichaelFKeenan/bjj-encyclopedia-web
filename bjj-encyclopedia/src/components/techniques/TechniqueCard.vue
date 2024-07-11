

<template>
  <div>
    <div>
      <p>
      {{ technique.name }} - {{ technique.coach }}
      </p>
      <p>
        {{technique.tags}}
      </p>
      <RouterLink :to="`/editTechnique/${technique.id}`">Edit</RouterLink>
      <button @click="deleteItem(technique.id)">Delete</button>
      <button @click="showDetails(true)" v-if="!isShowDetails">open</button>
      <button @click="showDetails(false)" v-if="isShowDetails">hide</button>
    </div>
    <div v-if="isShowDetails">
      {{ technique.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useTechniqueStore from '../../stores/technique'

const store = useTechniqueStore();

const props = defineProps(['technique'])

const technique = props.technique;

const isShowDetails = ref(false);

function deleteItem(id: number) {
  store.deleteTechnique(id);
}

function showDetails(value: boolean) {
  isShowDetails.value = value;
}
</script>