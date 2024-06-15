<script setup lang="ts">
import EditTechnique from '../components/techniques/EditTechnique.vue'

const props = defineProps(['id'])

</script>

<template>
  <main>
    <EditTechnique :id="props.id" />
  </main>
</template>
