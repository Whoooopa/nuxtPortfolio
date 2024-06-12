<template>
  <Layout :title="'Skills'" :class="'cardContainer'">
      <div class="flex flex-col md:px-10 items-center">
        <div class="flex flex-row flex-wrap md:w-3/4 gap-5 justify-center">
          <div v-for="(skill, index) in skills" :key="skill.name">
            <UPopover>
              <div class="cardhover">
                <UChip size="3xl" inset
                class="cardIn"
                :class="{'animate': skillsAnimated }"
                :style="skillsAnimated ? { '--delay': `${Math.random() * 2}s` } : {}">
                  <UCard class="cursor-pointer shadow-md">
                    <Icon :name="skill.icon" class="w-16 h-16"/>
                    <template #footer>
                      <div class="flex justify-center">
                        {{ skill.name }}
                      </div>
                    </template>
                  </UCard>
    
                  <template #content>
                    <Icon name="i-material-symbols:table-rows-narrow"/>
                  </template>
                </UChip>
              </div>
  
              <template #panel>
                <div class="px-5 py-6 max-w-80 cursor-default text-balance"
                >
                {{ skill.text }}
                </div>
              </template>
            </UPopover>

          </div>
        </div>
      </div>
  </Layout>
</template>

<script setup>
const skills = [
  {
    name: "VueJS",
    icon: "i-logos:vue",
    text: "Have used vue js (usually with Nuxt) more than react or nextjs, and is familiar with vue's state management module Pinia (Specifically, The option store)\n.Vue has 2 APIs, Composition API and Option API.\n I am more familiar with Composition API",
  },
  
  {
    name: "NuxtJS",
    icon: "i-logos:nuxt-icon",
    text: "The vue js server side rendering framework that is used in this website along with Nuxt UI module.\n I have mostly used nuxt for client side rendered app.\n I am still studying the SSR part of nuxt, aswell as Nuxt's server engine 'Nitro'.\n Nitro provides a lot of utilites like creating API endpoints and server middleware"
  },
  
  {
    name: "HTML",
    icon: "i-logos:html-5",
    text: "Sufficient"
  },
  
  
  {
    name: "CSS",
    icon: "i-logos:css-3",
    text: "I can use both pure CSS and tailwind, but prefers tailwind for convenience purpose.\n Unless specific animation is needed"
  },

  {
    name: "Javascript",
    icon: "i-logos:javascript",
    text: "I have used plain javascript for several things like making game with HTML canvas"
  },
  
  {
    name: "Python",
    icon: "i-logos:python",
    text: "I have experience with python and google colab .ipynb files.\n I have made images, sounds, text classification models with PyTorch and Tensorflow.\n I also have some familiarity with Pandas, Scikit-learn, Matplotlib, and OpenCV library."
  },

  {
    name: "AI",
    icon: "i-hugeicons:artificial-intelligence-04",
    text: "I have made several models with PyTorch and Tensorflow.\n I am quite familiar with Convolutional Neural Network and Graph Neural Networks.\n I have used PyTorch Geometric library for graph representation learning for node level classification of insects sound."
  },

  {
    name: "NextJS",
    icon: "i-logos:nextjs-icon",
    text: "Used a bit for my previous portfolio. Because Nuxt is also inspired by Next, there may be a lot of similarities like react's useMemo and vue's computed written in almost similar manner. But i may need time to fully adapt"
  },
]

const { activeSection, skillsAnimated } = useSections();
</script>

<style>
@keyframes cardAppear {
  0% {
    transform: translateX(100vw)
  }

  100% {
    transform: translateX(0%)
  }
}


.cardContainer {
  overflow: hidden;
}

.cardIn {
  position: relative;
  transform: translateX(100vw);
}

.animate {
  animation: cardAppear 1s cubic-bezier(0.19, 1.17, 1, 1) forwards;
  animation-delay: var(--delay);
}


.cardIn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.375rem;
  background: rgba(255, 255, 255, 0.4); 
  z-index: -1; 
  transform: translateX(100vw); 
}

.animate::before {
  animation: cardAppear 0.6s cubic-bezier(0.19, 1, 1, 1) forwards;
  animation-delay: var(--delay);
}

@media(hover: hover) and (pointer: fine) {
  
  .cardhover {
    transition: transform 0.3s ease-in-out;
  }
  .cardhover:hover {
    transform: scale(1.05) rotate(3deg);
  }
}


</style>