// composables/useSections.ts
import { ref, onMounted, onUnmounted } from 'vue';

export function useSections() {
  const activeSection = ref('');
  const sections = [
    {
      name: 'Profile',
      selected: ref(false),
    },
    {
      name: 'About',
      selected: ref(false),
    },
    {
      name: 'Skills',
      selected: ref(false),
    },
    {
      name: 'Projects',
      selected: ref(false),
    },
  ];

  function handleActive(sectionName: string) {
    sections.forEach((section) => {
      section.selected.value = section.name === sectionName;
      });
    activeSection.value = sectionName;
  }

  function scrollToSection(sectionName: string) {
    handleActive(sectionName);
    const sectionRef = document.getElementById(sectionName.toLowerCase());
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: 'smooth' });
    }
  }

  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleActive(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
          }
        });
      },
      { threshold: 0.4 } // Adjust threshold as needed
    );

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.name.toLowerCase());
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return {
    sections,
    activeSection,
    handleActive,
    scrollToSection,
  };
}