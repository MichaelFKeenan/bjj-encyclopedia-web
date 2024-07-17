

<template>
  <div>
    <div>
      <p>
        {{ concept.name }} - {{ concept.coach }}
      </p>
      <p>
        {{concept.tags}}
      </p>
      <RouterLink :to="`/editConcept/${concept.id}`">Edit</RouterLink>
      <button @click="$emit('deleteItem', deleteItemRequestObject)">Delete</button>
      <button @click="showDetails(true)" v-if="!isShowDetails">open</button>
      <button @click="showDetails(false)" v-if="isShowDetails">hide</button>
    </div>
    <div v-if="isShowDetails">
      {{ concept.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useConceptStore from '../../stores/concept'
import type { deleteItemRequest } from '../../types/deleteItemRequest'

const store = useConceptStore();

const props = defineProps(['concept'])

const concept = props.concept;

const isShowDetails = ref(false);

const deleteItemRequestObject: deleteItemRequest = {
  id: props.concept.id,
  created: props.concept.created
}

function showDetails(value: boolean) {
  isShowDetails.value = value;
}
</script>