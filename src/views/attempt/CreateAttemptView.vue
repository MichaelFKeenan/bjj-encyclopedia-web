<script setup lang="ts">
import CreateAttempt from '../../components/attempts/CreateAttempt.vue'

const props = defineProps(['techniqueId'])

</script>

<template>
  <main>
    <CreateAttempt :technique-id="props.techniqueId" />
  </main>
</template>
