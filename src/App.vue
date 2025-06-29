<template>
  <div>
    <h2>Categories:</h2>
    <pre>{{ JSON.stringify(categories, null, 2) }}</pre>
    <h2>Error:</h2>
    <pre>{{ errorMessage }}</pre>
  </div>
</template>

<script setup lang="ts">
import supabaseClient from './plugin/supaBaseClient'
import { ref, onMounted } from 'vue'

const categories = ref([])
const errorMessage = ref('')

onMounted(async () => {
  try {
    console.log('Fetching categories...')
    const { data, error } = await supabaseClient.from('categories').select('*')

    if (error) {
      console.error('Supabase error:', error)
      errorMessage.value = JSON.stringify(error, null, 2)
    } else {
      console.log('Data received:', data)
      categories.value = data || []
    }
  } catch (err) {
    console.error('General error:', err)
    errorMessage.value = JSON.stringify(err, null, 2)
  }
})
</script>

<style scoped></style>
