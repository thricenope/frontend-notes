<template>
  <div>login</div>
  <button @click="goHome"> go back to Welcome</button>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()
const goHome = () => router.push('/welcome')

</script>

<style scoped>

</style>
