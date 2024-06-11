<template>
    <div class="flex flex-col gap-10 w-60 h-[24rem] bg-slate-100 dark:bg-slate-700 rounded-md shadow-xl">
      <div v-if="img" class="flex justify-center pt-2">
        <img :src="img" :alt="name" class="w-56 h-32 rounded-md">
      </div>
      <div class="cursor-default px-4 flex flex-col gap-2 h-full rounded-md">
        <div>
          <h1 class="text-xl font-semibold">{{ name }}</h1>
        </div>
        <div class="flex flex-col flex-grow justify-end">
            <div class="flex flex-row px-4 gap-1" v-if="buttons">
                <a :href="`${code}`" target="_blank" rel="noopener noreferrer">
                    <Icon name="i-ph:code-light" class="w-8 h-8 px-[0.1rem] bg-white rounded-lg text-slate-800 dark:text-slate-800"/>
                </a>
                <a :href="`${link}`" target="_blank" rel="noopener noreferrer" v-if="link">
                    <Icon name="i-teenyicons:top-right-outline" class="w-8 h-8 px-[0.5rem] bg-white rounded-lg text-slate-800 dark:text-slate-800"/>
                </a>
                <UPopover v-if="!demo">
                  <Icon name="i-material-symbols:table-rows-narrow" class="w-8 h-8 px-[0.3rem] bg-white rounded-lg cursor-pointer text-slate-800 dark:text-slate-800"/>

                  <template #panel>
                    <div class="px-5 py-6 w-80 z-50">
                      {{ description }}
                    </div>
                  </template>
                </UPopover>
                <Icon name="i-material-symbols:table-rows-narrow" class="w-8 h-8 px-[0.3rem] bg-white rounded-lg cursor-pointer text-slate-800 dark:text-slate-800"
                @click="moreOpen = true"
                v-else/>
                <Teleport to="body" v-if="demo">
                  <ProjectModal
                  v-if="moreOpen"
                  :name="name"
                  :code="code"
                  :tags="tags"
                  :img="img"
                  :desc='description'
                  :nerdDesc="nerdDesc"
                  :demo="demo"
                  @close-modal="moreOpen = false"/>
                </Teleport>
            </div>
            <div class="bg-slate-300 dark:bg-slate-600 mt-3 rounded-md">
              <div v-if="!buttons" class="pl-3 pb-1 bg-slate-400 rounded-t-md text-slate-800 dark:text-slate-100">Tech Stack:</div>
              <div class="flex flex-row overflow-x-auto gap-2 p-4 rounded-b-md">
                  <div v-for="tag in tags" class="bg-primary tag">
                  {{ tag }}
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
</template>
  
<script setup>
defineProps({
    name: String,
    description: String,
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

const moreOpen = ref(false);
const nerdOpen = ref(false);

</script>

<style scoped>
.tag {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem; /* Rounded-md */
    font-size: 0.875rem; /* Text-sm */
    max-width: max-content;
    white-space: nowrap;
  }

.icon {
  transition: transform 0.2s ease-in-out;
}

.icon:hover {
  transform: scale(1.2);
}
</style>
  