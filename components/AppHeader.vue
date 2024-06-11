<template>
  <div class="w-full flex flex-row justify-center gap-5 px-40 py-6 fixed shadow-md top-0 z-50 bg-white dark:bg-slate-800">
    <div v-for="section in sections" class="cursor-pointer section"
    @click="scrollToSection(section.name)"
    :class="section.selected.value ? 'active' :''"
    >
      {{ section.name }}
      <div class="w-full h-1 overflow-hidden">
        <div class="h-full w-full bg-primary underlineIn animateBlock"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { sections, scrollToSection } = useSections();

onMounted(()=>{
  setInterval(()=>{
    const elements = document.querySelectorAll('.underlineIn');
  
    elements.forEach(element => {
      element.classList.remove('animateBlock');
    });
  }, 10);

})
</script>

<style>

@keyframes underlineAppear {
  0% {
    transform: translateX(-110%)
  }

  10% {
    transform: translateX(-90%)
  }

  100% {
    transform: translateX(0%)
  }
}

@keyframes underlineDisappear {
  0% {
    transform: translateX(0%)
  }

  100% {
    transform: translateX(-110%)
  }
} 

.underlineIn {
  animation: underlineDisappear 1s cubic-bezier(0.09, 0.91, 0.58, 1) forwards;
}

.animateBlock {
  animation-duration: 0s !important;
}

.underlineIn:not(.active) {
  transform: translateX(-110%);
}

.section:hover .underlineIn {
  animation: underlineAppear 1s cubic-bezier(0.09, 0.91, 0.58, 1) forwards;
}

.active .underlineIn {
  transform: translateX(0%);
  animation: underlineAppear 1s cubic-bezier(0.09, 0.91, 0.58, 1) forwards;
}
</style>