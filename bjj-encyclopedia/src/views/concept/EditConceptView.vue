<script setup lang="ts">
import EditConcept from '../../components/concepts/EditConcept.vue'

const props = defineProps(['id'])

</script>

<template>
  <main>
    <EditConcept :id="props.id" />
  </main>
</template>
