<script setup lang="ts">
import { ref, defineProps } from 'vue'

const pro = defineProps<{ msg: string }>()
// const pro = defineProps({
//   name: String
// })
// console.log(pro.)
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div>{{ pro.msg }}</div>

  <button
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
