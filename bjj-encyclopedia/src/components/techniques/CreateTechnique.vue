

<template>
  <div>
    <div>
      <p>Name</p>
      <input v-model="name">
      <p>Coach</p>
      <input v-model="coach">
      <p>Tags</p>
      <div v-for="(tag, id) in tags" :key="id">
        <input v-model="tags[id]" />
      </div>
      <button @click="addTag">
        New tag
      </button>
      <button @click="create">Create</button>
    </div>
    <div v-if="isShowDetails">
      {{ result.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const name = ref('');
const coach = ref('');
const tags = ref(['']);

function addTag() {
  tags.value.push('');
}

function create() {
  alert(`Create ${name.value}, ${coach.value}, !`);
}
</script>