<script setup lang="ts">
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';
import AboutMe from '@/components/landing/AboutMe.vue';
import Exeperiencies from '@/components/landing/Exeperiencies.vue';
import FirstProject from '@/components/landing/FirstProject.vue';
import FirstSection from '@/components/landing/FirstSection.vue';
import SecondProject from '@/components/landing/SecondProject.vue';
import Skills from '@/components/landing/Skills.vue';
import ThirdPtoject from '@/components/landing/ThirdPtoject.vue';

function smoothScroll(id) {
    document.body.click();
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
</script>

<template>
    <div class="bg-surface-0 dark:bg-surface-900">
        <div id="home" class="landing-wrapper overflow-hidden relative">
            <div class="navbar py-6 px-6 mx-0 hidden lg:flex items-center justify-between lg:fixed rounded-lg w-full fixed top-0 z-50 sm:hidden">
                <div class="items-center justify-between flex w-full z-20 rounded-border">
                    <div>
                        <a @click="smoothScroll('first')" class="text-3xl text-muted-color pl-20" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-2000' }"> João Pedro</a>
                    </div>
                    <div class="pr-20">
                        <ul class="list-none p-0 m-0 flex justify-around select-none flex-row cursor-pointer gap-14 w-full">
                            <li v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }">
                                <a @click="smoothScroll('features')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                                    <span>Features Projects</span>
                                </a>
                            </li>
                            <li v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-2000' }">
                                <a @click="smoothScroll('aboutme')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                                    <span>About Me</span>
                                </a>
                            </li>
                            <li v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-3000' }">
                                <a @click="smoothScroll('connect')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                                    <span>Contact Me</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <FloatingConfigurator />
            </div>
            <div id="first">
                <FirstSection />
            </div>
            <div id="features" class="mt-40">
                <FirstProject />
            </div>
            <div id="s" class="mt-40">
                <SecondProject />
            </div>

            <div id="t" class="mt-40">
                <ThirdPtoject />
            </div>
            <div id="aboutme" class="mt-40">
                <AboutMe />
            </div>
            <div id="experiencies" class="mt-40">
                <Exeperiencies />
            </div>
            <div id="capabilities" class="mt-40">
                <Skills />
            </div>
            <div id="connect" class="mt-40">
                <Connect />
            </div>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    background-color: rgba(128, 128, 128, 0.033);
    backdrop-filter: blur(20px);
}
</style>
