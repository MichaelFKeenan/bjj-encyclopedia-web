<template>
  <div>
    <p v-if="!concept">No concept with this id</p>
    <div v-if="concept">
      <p>Name</p>
      <input v-model="concept.name">
      <p>Description</p>
      <textarea v-model="concept.description"/>
      <p>Tags</p>
      <div v-for="(tag, id) in concept.tags" :key="id">
        <input v-model="concept.tags[id]" />
      </div>
      <button @click="addTag">
        New tag
      </button>
      <button @click="save">Save</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useConceptStore from '../../stores/concept'
const store = useConceptStore();

const props = defineProps(['id']);

const concept = store.getConcept(props.id);

function addTag() {
  if(!concept) return;
  concept.tags.push('');
}

async function save() {
  if(!concept) return;
  await store.editConcept(concept);
}
</script>