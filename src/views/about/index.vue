<template>
  <div>about, {{ counterStore.count }}</div>
  <div>
    <div
      v-for="item of list"
      :key="item.id"
    >
      {{ item.id }}
    </div>
  </div>
  <button @click="add">
    add
  </button>
</template>

<script lang='ts' setup>
import { onMounted, ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { getLoginInfo } from '@/services/login'
import type { IInfoData } from '@/services/types/login'

const counterStore = useCounterStore()
const list = ref<IInfoData[]>([])

onMounted(async () => {
  const data = await getLoginInfo()
  // console.log(data.data.data)
  console.log(data)
  list.value = data
})

const add = () => {
  counterStore.count++
}
</script>

<style lang="less" scoped>
div {
  color: @testColor;
}
</style>
