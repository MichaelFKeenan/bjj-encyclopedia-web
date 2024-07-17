

<template>
  <div>
    <div>
      <p>Name</p>
      <input v-model="name">
      <p>Coach</p>
      <input v-model="coach">
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
import useTechniqueStore from '../../stores/technique'
const store = useTechniqueStore();

const name = ref('');
const coach = ref('');
const description = ref('');
const tags = ref(['']);

function addTag() {
  tags.value.push('');
}

async function create() {
  await store.addTechnique({name: name.value, coach: coach.value, description: description.value, tags: tags.value})
}
</script>