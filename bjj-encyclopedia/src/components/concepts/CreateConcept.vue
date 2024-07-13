

<template>
  <div>
    <div>
      <p>Name</p>
      <input v-model="name">
      <p>Description</p>
      <textarea v-model="description"/>

      <p>Tags</p>
      <div v-for="(tag, id) in tags" :key="id">
        <input v-model="tags[id]" />
      </div>
      <button @click="addTag">
        New tag
      </button>
      <button @click="create">Create</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useConceptStore from '../../stores/concept'
const store = useConceptStore();

const name = ref('');
const coach = ref('');
const description = ref('');
const tags = ref(['']);

function addTag() {
  tags.value.push('');
}

async function create() {
  await store.addConcept({name: name.value, description: description.value, tags: tags.value})
}
</script>