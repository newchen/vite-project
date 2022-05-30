<template>
  <div>about, {{ counterStore.count }}</div>
  <button @click="add">
    add
  </button>
</template>

<script lang='ts' setup>
import { useCounterStore } from '@/store/counter'

const counterStore = useCounterStore()

const add = () => {
  counterStore.count++
}
</script>

<style lang="less" scoped>
div {
  color: @testColor;
}
</style>
