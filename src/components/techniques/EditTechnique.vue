<template>
  <div>
    <p v-if="!technique">No technique with this id</p>
    <div v-if="technique">
      <p>Name</p>
      <input v-model="technique.name" />
      <p>Coach</p>
      <input v-model="technique.coach" />
      <p>Description</p>
      <textarea v-model="technique.description" />
      <p>Tags</p>
      <div v-if="technique.tags">
        <div v-for="(tag, id) in technique.tags" :key="id">
          <input v-model="technique.tags[id]" />
        </div>
      </div>
      <button @click="addTag">New tag</button>
      <button @click="save">Save</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useTechniqueStore from '../../stores/technique'
const store = useTechniqueStore()

const props = defineProps(['id'])

const technique = store.getTechnique(props.id)

function addTag() {
  if (!technique) return
  if (!technique.tags) {
    technique.tags = []
  }
  technique.tags.push('')
}

async function save() {
  if (!technique) return
  await store.editTechnique(technique)
}
</script>