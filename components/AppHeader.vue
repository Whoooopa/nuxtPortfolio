<template>
  <div class="w-full flex flex-row justify-center gap-5 px-40 py-6 fixed shadow-md top-0 z-50 bg-white dark:bg-slate-800">
    <div v-for="section in sections" class="cursor-pointer hover:border-b-4 hover:border-b-primary hover:dark:border-b-primary"
    @click="scrollToSection(section.name)"
    :class=" section.selected.value ? 'border-b-4 border-b-primary' : 'border-b-4 border-b-white dark:border-b-transparent'">
      {{ section.name }}
    </div>
  </div>
</template>

<script setup>
const { sections, scrollToSection } = useSections();
</script>

<style>
</style>