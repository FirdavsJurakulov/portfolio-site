<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="container mx-auto px-5 md:px-1 md:flex">
    <div
      class="hero-section w-full md:flex md:justify-center pt-10 md:pt-20 mb-[70px] md:mb-0"
    >
      <div
        class="md:fixed md:w-[300px] lg:w-[450px] md:h-[500px] flex flex-col justify-between"
      >
        <div>
          <h1
            class="text-4xl md:text-5xl text-gray-200 font-bold mb-2 tracking-tight"
          >
            Firdavs Jo'raqulov
          </h1>
          <p class="text-xl text-gray-300 mb-2 font-medium tracking-tight">
            Aspiring Software Engineer
          </p>
          <p class="text-md">
            Aspiring full-stack developer passionate about crafting intuitive
            user experiences and growing through real-world projects and
            collaborative learning.
          </p>
          <div class="contacts mt-15 flex items-center gap-x-5 font-medium">
            <a
              href="https://github.com/FirdavsJurakulov"
              class="hover:text-gray-300 transition-colors"
              ><Icon name="streamline-logos:github-logo-2-solid" size="20px"
            /></a>
            <a
              href="mailto:firdavs.jurakulov2006@gmail.com"
              class="hover:text-gray-300 transition-colors"
              ><Icon name="tabler:mail-filled" size="20px"
            /></a>
            <a
              href="https://linkedin.com/in/firdavs-jurakulov-010a4623a"
              class="hover:text-gray-300 transition-colors"
              ><Icon name="streamline-logos:linkedin-logo-block" size="20px"
            /></a>
          </div>
        </div>
        <div
          class="navigation hidden md:flex md:flex-col cursor-pointer gap-3 w-fit"
        >
          <a
            :class="{
              'text-gray-300 font-semibold': activeSection === 'intro',
              'text-gray-500': activeSection !== 'intro',
            }"
            class="transition-all duration-200 hover:text-gray-300 flex items-center gap-2"
            href="#intro"
          >
            <div
              :class="{
                'w-[70px] bg-gray-300': activeSection === 'intro',
                'bg-gray-500': activeSection !== 'intro',
              }"
              class="h-[1px] scale-x-[100%] w-[30px] transition-all origin-left duration-200"
            ></div>
            <span>Intro</span>
          </a>
          <a
            :class="{
              'text-gray-300 font-semibold': activeSection === 'experience',
              'text-gray-500': activeSection !== 'experience',
            }"
            class="transition-all duration-200 hover:text-gray-300 flex items-center gap-2"
            href="#experience"
          >
            <div
              :class="{
                'w-[70px] bg-gray-300': activeSection === 'experience',
                'bg-gray-500': activeSection !== 'experience',
              }"
              class="h-[1px] scale-x-[100%] w-[30px] transition-all origin-left duration-200"
            ></div>
            <span>Experience</span>
          </a>
          <a
            :class="{
              'text-gray-300 font-semibold': activeSection === 'projects',
              'text-gray-500': activeSection !== 'projects',
            }"
            class="transition-all duration-200 hover:text-gray-300 flex items-center gap-2"
            href="#projects"
          >
            <div
              :class="{
                'w-[70px] bg-gray-300': activeSection === 'projects',
                'bg-gray-500': activeSection !== 'projects',
              }"
              class="h-[1px] scale-x-[100%] w-[30px] transition-all origin-left duration-200"
            ></div>
            <span>Projects</span>
          </a>
        </div>
      </div>
    </div>
    <div class="h-[200vh] w-full md:pt-20 flex flex-col gap-[46px]">
      <div id="intro" ref="introTarget" class="intro-text flex flex-col gap-3">
        <p class="">
          👋 Hello. My name is Firdavs Jo’raqulov - I am a student of Computer
          Science and future full-stack developer living in Tashkent,
          Uzbekistan. I believe that I thrive on a real-world problem by using
          clean and efficient code and intuitive design. Having practical
          experience of Vue.js, Nuxt 3, React.js, and cloud technologies, I was
          able to enhance the user interfaces and resolve the UI bugs during
          internships in Unicon.uz and Besh Tashabbus.
        </p>
        <p class="">
          My experience is a combination of technical and teamwork. Regardless
          of whether it is restructuring dashboards using React or using APIs in
          Nuxt, I aim to provide smooth user experiences. My other passion is
          learning - whether it is learning Pinia to manage the state or
          creating a side project like a screen time tracker and a github
          repository location finder.
        </p>
        <p class="">
          In addition to code, I can also offer leadership and communication
          skills that I have developed as a camp counselor in which I was in
          charge of organizing programs with 35 or more children. In my opinion,
          great software is created by working as a team, being interested, and
          having vision, and these are the values that I bring on board in any
          project.
        </p>
      </div>
      <div id="experience" ref="experienceTarget" class="experience-block">
        <h3 class="text-2xl text-gray-300 mb-7 md:mb-4 font-bold">
          Experience
        </h3>
        <div class="flex flex-col gap-15 md:gap-4">
          <div
            v-for="(workplace, index) in experience"
            :key="index"
            class="flex flex-col gap-2 bg-transparent md:hover:bg-gray-700/20 md:hover:-translate-y-0.5 transition-all md:p-4 rounded-lg cursor-pointer"
          >
            <h3 class="text-xs font-medium text-gray-400">
              {{ workplace.dates }}
            </h3>
            <h3 class="font-medium text-gray-300">
              {{ workplace.position }} @ {{ workplace.company }}
            </h3>
            <p
              v-for="(resp, respIndex) in workplace.resposibilities"
              :key="respIndex"
              class="text-sm"
            >
              - {{ resp }}
            </p>
            <div class="flex flex-wrap gap-2 mt-2">
              <div
                v-for="(skill, skillIndex) in workplace.skillSet"
                :key="skillIndex"
                class="bg-blue-900/30 px-2.5 py-0.5 text-sm text-blue-500 rounded-full"
              >
                <span>
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="projects"
        ref="projectsTarget"
        class="projects-block pb-[100px] lg:pb-0"
      >
        <h3 class="text-2xl text-gray-300 mb-7 md:mb-4 font-bold">Projects</h3>
        <div class="flex flex-col gap-7 md:gap-4">
          <div
            v-for="(project, projectIndex) in projects"
            :key="projectIndex"
            class="flex gap-2 bg-transparent md:hover:bg-gray-700/20 md:hover:-translate-y-0.5 transition-all md:p-4 rounded-lg"
          >
            <div v-if="project.projectImage">
              <img
                :src="project.projectImage"
                alt="project image"
                class="w-24 h-24 object-cover rounded"
              />
            </div>
            <div>
              <h3
                class="text-xl text-gray-300 font-medium hover:text-blue-500 transition-colors"
              >
                <NuxtLink :to="project.projectLink">
                  {{ project.projectName }}
                  <icon name="lucide:arrow-up-right" size="15px" />
                </NuxtLink>
              </h3>
              <h3 class="font-medium">
                {{ project.projectDescription }}
              </h3>
            </div>
          </div>
          <h3>
            <NuxtLink
              to="https://github.com/FirdavsJurakulov?tab=repositories"
              class="flex gap-1 text-gray-700 hover:gap-2 hover:text-blue-500 transition-all"
            >
              <span>All projects </span><span>-></span>
            </NuxtLink>
          </h3>
        </div>
      </div>
      <footer>
        this website was created using vue.js and tailwindcss for styling
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useTitle } from "@vueuse/core";

const introTarget = ref(null);
const experienceTarget = ref(null);
const projectsTarget = ref(null);
const activeSection = ref("intro");

const currentPage = ref("Home");
const title = useTitle(`Firdavs Jo'raqulov`);

watch(currentPage, (newPage) => {
  title.value = `Firdavs Jo'raqulov - ${newPage}`;
});

const experience = ref([
  {
    dates: "August 2025 – Present",
    position: "Frontend developer intern",
    company: "Unicon.uz",
    companyLink: "",
    resposibilities: [
      "Fix visual inconsistencies and UI bugs in company's product using Vue.js, Nuxt.js, and Element UI",
      "Building user interface for commercial products",
      "Integrating backend APIs with frontend using built-in tools of Nuxt.js",
      "Pinia for global state management in Vue.js applications.",
    ],
    skillSet: [
      "Javascript",
      "Vue",
      "Nuxt.js",
      "Element UI",
      "Git",
      "Jira",
      "Figma",
    ],
  },
  {
    dates: "May 2025 - June 2025",
    position: "Frontend developer intern",
    company: "Besh Tashabbus (5TS)",
    companyLink: "",
    resposibilities: [
      "Restructured and redesigned dashboard/management web application for local digital products startup",
      "Rewrote page structures and styling using React.js and Material UI",
      "Worked with React JSX components and implemented responsive design patterns",
      "Collaborated with team to deliver improved user interface for company's main product",
    ],
    skillSet: ["Javascript", "React", "Material UI", "Git", "Figma"],
  },
]);

const projects = ref([
  {
    projectName: "Github random repo",
    projectLink: "https://github-random-repo-navy.vercel.app/",
    projectDescription: "Random github repository finder for choosen language",
    projectImage: "",
  },
  {
    projectName: "Bash Utils",
    projectLink: "https://github.com/FirdavsJurakulov/SimpleBashUtils",
    projectDescription:
      "Implementation of grep and cat utilities written in C.",
    projectImage: "",
  },
  {
    projectName: "ScreenMindr",
    projectLink: "https://github.com/FirdavsJurakulov/SimpleBashUtils",
    projectDescription: "Screen time tracking app written in python",
    projectImage: "",
  },
]);

function handleScroll() {
  const sections = [
    { id: "intro", ref: introTarget },
    { id: "experience", ref: experienceTarget },
    { id: "projects", ref: projectsTarget },
  ];

  // Get viewport middle point
  const viewportMiddle = window.innerHeight / 3;

  let currentSection = "intro";
  let minDistance = Infinity;

  sections.forEach((section) => {
    const element = section.ref.value as HTMLElement | null;
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementMiddle = rect.top + rect.height / 2;
      const distance = Math.abs(elementMiddle - viewportMiddle);

      // If this section is closer to the viewport middle and is visible
      if (
        distance < minDistance &&
        rect.top < window.innerHeight &&
        rect.bottom > 0
      ) {
        minDistance = distance;
        currentSection = section.id;
      }
    }
  });

  activeSection.value = currentSection;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Removed the debug background colors */
</style>
