<template>
<Layout :title="'Projects'">
    <div class="flex md:flex-row md:flex-wrap flex-col-reverse gap-8 justify-center md:mb-0 mb-20">
        <ProjectCard v-for="(project, index) in projects"
        :name="project.name"
        :description="project.desc"
        :nerdDesc="project.nerdDesc"
        :code="project.github"
        :link="project.liveLink"
        :tags="project.tags"
        :img="project.img"
        :demo="project.demoID"
        :buttons="'true'" 
        class="opacity-5"
        :style="activeSection === 'Projects' ? { 'animation': `fadeIn 1s ease-in-out ${index * 0.2}s both`, 'opacity': '0.1'} : { 'animation': `fadeOut 1s ease-in-out ${(projects.length - index) * 0.2}s both`, 'opacity': '1'} "/>
    </div>
</Layout>
</template>

<script lang="ts" setup>
const projects = [
    {
        name: 'Map + Geoguessr Clone',
        desc: 'Personal project in order to explore google map API with NuxtJS. This project have 2 apps, a simple google map with basic functionality and the famous game Geoguessr\'s clone. Not hosted because this API charges real money after certain limit',
        nerdDesc: 'Vue\'s state management module, Pinia is used to manage states like Geoguessr\' total points, progress, array of coordinates to show in gameover\'s screen. NuxtJS server side rendering is set to false, so basically this can be done with just Vue too.',
        github: 'https://github.com/Whoooopa/googlemapsapi',
        tags: ['Maps API','Nuxt','Vue'],
        img: '/map.png',
        demoID: 'eEwx9vHEYY4'
    },
    {
        name: 'Turtle Gobble',
        desc: 'Play as a turtle, attack enemies and grow bigger!. Made with html canvas and vanilla javascript',
        github: 'https://github.com/Whoooopa/Turtle_Gobble',
        liveLink: 'https://whoooopa.github.io/',
        tags: ['HTML Canvas','Javascript'],
        img: '/turtlegobble.png'
    },
    {
        name: 'Chess Piece Image Recognition',
        desc: 'I have created a basic Convolutional Neural Network model to classify chess pieces, My group\'s paper has been accepted and published by AiDAS Conference 2023',
        github: 'https://github.com/Whoooopa/Chess-Piece-Recognition-Convolutional-Neural-Network',
        liveLink: 'https://ieeexplore.ieee.org/document/10284718',
        tags: ['Python','PyTorch','Tensor Flow'],
        img: '/chessfinal6.jpg'
    }
]

const { activeSection } = useSections();
</script>

<style>

@keyframes fadeIn {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }

@keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }
</style>