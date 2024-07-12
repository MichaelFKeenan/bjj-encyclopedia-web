

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
      <button @click="$emit('deleteItem', deleteItemRequestObject)">Delete</button>
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
import { deleteItemRequest } from '../../types/deleteItemRequest'

const store = useTechniqueStore();

const props = defineProps(['technique'])

const technique = props.technique;

const isShowDetails = ref(false);

const deleteItemRequestObject: deleteItemRequest = {
  id: props.technique.id,
  created: props.technique.created
}

function showDetails(value: boolean) {
  isShowDetails.value = value;
}
</script>