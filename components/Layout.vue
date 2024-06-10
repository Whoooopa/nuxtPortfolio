<template>
<div class="md:h-screen flex flex-col justify-center items-center gap-10 md:mt-0 mt-5">
    <h1 class="md:text-6xl text-4xl font-bold">{{ title }}</h1>
    <div class="w-24 h-1 bg-primary-400"></div>
    <slot />
</div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
})
</script>

<style>

</style>