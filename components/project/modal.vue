<template>
  <div class="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] z-40 flex justify-center items-center">
    <div class="lg:w-[60rem] lg:h-[30rem] md:w-[40rem] w-80 rounded-md shadow-md flex flex-row bg-slate-500 pr-2 mx-5">
        <ClientOnly v-if="!isMobile">
          <div class="w-min m-2  h-full flex justify-center items-center" >

            <ProjectCard 
            :name="name"
            :code="code"
            :tags="tags"
            :img="img"
            />
          </div>
          
        </ClientOnly>
        <div class="w-max flex flex-col rounded-md relative">
          <div class="md:h-2/3 h-[45%] bg-slate-100 dark:bg-slate-700 my-2 ml-2 rounded-t-md">
            
            <div class="flex justify-center py-5">
              <ClientOnly>
                <div class="lg:w-[35rem] lg:h-64 relative">
                  <iframe id="player" type="text/html" :class="'w-full h-full'"
                  :src="`http://www.youtube.com/embed/${demo}?enablejsapi=1`"
                  frameborder="0"
                  class="rounded-md"
                  allowfullscreen></iframe>

                  </div>
                  <template #fallback>
                    <USkeleton class="w-full h-full"/>
                  </template>
              </ClientOnly>
            </div>
            <Icon name="i-material-symbols:cancel-rounded" class="w-8 h-8 absolute top-2 right-0 text-slate-400 cursor-pointer"
            @click="$emit('close-modal')"/>
          </div>
          <div class="lg:h-1/3 md:h-1/2 bg-slate-100 dark:bg-slate-700 lg:my-2 ml-2 rounded-b-lg lg:p-3 p-2 lg:pb-0 pb-10 lg:mb-1 mb-2">
              <span v-if="nerdOpen" class="md:text-base">
                {{ nerdDesc }}
              </span>
              <span v-else>
                {{ desc }}
              </span>
              <UButton 
              class="absolute bottom-3 right-2"
              @click="nerdOpen = !nerdOpen"
              v-if="nerdDesc"> 
              {{ nerdOpen ? 'Show regular desc' : 'Show nerd desc' }}
              </UButton>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
    name: String,
    desc: String,
    nerdDesc: String,
    code: String,
    link: {
        type: String,
        required: false,
    },
    demo: {
        type: String,
        required: false,
    },
    img: String,
    tags: Array,
    buttons: String,
})


const nerdOpen = ref(false);
const windowWidth = ref(); 
const isMobile = computed(()=> windowWidth.value < 768);
onMounted(()=>{
  if(window){
    windowWidth.value = window.innerWidth;
  }
})

</script>

<style>

</style>