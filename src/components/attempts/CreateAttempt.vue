<template>
  <div>
    <div v-if="technique">
      <h3>{{technique.name}}</h3>
      <p>Success?</p>
      <input type="checkbox" v-model="isSuccessfull" />
      <p>Notes</p>
      <textarea v-model="notes"/>
      <button @click="save">Save</button>
    </div>
    
    <div v-if="!technique">
      <p>technique not found</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useTechniqueStore from '../../stores/technique'
const techniqueStore = useTechniqueStore();

const props = defineProps(['techniqueId']);

const technique = techniqueStore.getTechnique(props.techniqueId);

const isSuccessfull = ref(false);
const notes = ref('');

async function save() {
  if(!technique) return;
  if(!technique.attempts) technique.attempts = [];
  technique.attempts.push({isSuccessfull: isSuccessfull.value, notes: notes.value, created: new Date()})
  await techniqueStore.editTechnique(technique);
}

</script>