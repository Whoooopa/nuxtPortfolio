<template>
<div class="h-screen flex flex-col justify-center items-center gap-10">
    <h1 class="md:text-6xl text-4xl font-bold">Hi, I'm Gabriel!</h1>
    <p class="md:text-xl text-lg md:px-0 px-10">I would love to take a footstep into the software development world</p>
    <div class="flex flex-row gap-10 w-1/2 justify-center">
        <UButton class="w-24 flex justify-center hover:animate-pulse"
        @click="scrollToSection('skills')">Skills</UButton>
        <UButton class="w-24 flex justify-center hover:animate-pulse"
        @click="scrollToSection('projects')">Projects</UButton>
    </div>
</div>
</template>

<script lang="ts" setup>
const { scrollToSection } = useSections();
</script>

<style>

</style>