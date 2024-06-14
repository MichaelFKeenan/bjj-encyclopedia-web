

<template>
  <div>
    <div>
      <p>
      {{ technique.name }} - {{ technique.coachName }}
      </p>
      <p>
        {{technique.tags}}
      </p>
      <!-- <NuxtLink :to="`/editItem/${result.id}`"><button>Edit</button></NuxtLink> -->
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
const props = defineProps(['technique'])
const technique = props.technique;

const isShowDetails = ref(false);

function deleteItem(id: number) {
  alert(`delete ${id}!`)
}

function showDetails(value: boolean) {
  isShowDetails.value = value;
}
</script>