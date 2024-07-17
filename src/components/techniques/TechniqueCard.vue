

<template>
  <div>
    <div>
      <p>{{ technique.name }} - {{ technique.coach }}</p>
      <p>
        {{ technique.tags }}
      </p>
      <RouterLink :to="`/editTechnique/${technique.id}`">Edit</RouterLink>
      <RouterLink :to="`/createAttempt/${technique.id}`">Attempt</RouterLink>
      <button @click="$emit('deleteItem', deleteItemRequestObject)">Delete</button>
      <button @click="showDetails(true)" v-if="!isShowDetails">open</button>
      <button @click="showDetails(false)" v-if="isShowDetails">hide</button>
    </div>
    <div v-if="isShowDetails">
      <p><b>Description</b></p>
      <p>{{ technique.description }}</p>

      <hr />

      <div v-if="technique.attempts">
        <p><b>Attempts:</b></p>
        <ul>
          <li
            class="technique__attempt"
            :class="{
              'technique__attempt--success': attempt.isSuccessful,
              'technique__attempt--fail': !attempt.isSuccessful
            }"
            v-for="attempt in technique.attempts"
            :key="attempt.created"
          >
            {{ attempt.created }}
            <div v-if="attempt.notes">NOTES TOOLTIP/POPUP</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useTechniqueStore from '../../stores/technique'
import type { deleteItemRequest } from '../../types/deleteItemRequest'

const store = useTechniqueStore()

const props = defineProps(['technique'])

const technique = props.technique

const isShowDetails = ref(false)

const deleteItemRequestObject: deleteItemRequest = {
  id: props.technique.id,
  created: props.technique.created
}

function showDetails(value: boolean) {
  isShowDetails.value = value
}
</script>

<style scoped>
.technique__attempt {
  width: 100%;
  border: 1px solid #ddd;
  padding: 10px;
}

.technique__attempt--success {
  background: rgb(199, 255, 116);
}

.technique__attempt--fail {
  background: rgb(245, 114, 74);
}
</style>