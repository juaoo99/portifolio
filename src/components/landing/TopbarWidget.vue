<script setup>
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
    <div class="items-center justify-between flex w-full z-20 rounded-border">
        <div>
            <p class="text-3xl text-muted-color pl-20" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-2000' }">João Pedro</p>
        </div>
        <div class="pr-20">
            <ul class="list-none p-0 m-0 flex justify-around select-none flex-row cursor-pointer gap-14 w-full">
                <li v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-3000' }">
                    <a @click="smoothScroll('hero')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Home</span>
                    </a>
                </li>
                <li v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-2000' }">
                    <a @click="smoothScroll('features')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Features Projects</span>
                    </a>
                </li>
                <li v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-2000' }">
                    <a @click="smoothScroll('highlights')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>About Me</span>
                    </a>
                </li>
                <li v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-3000' }">
                    <a @click="smoothScroll('pricing')" class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Contact Me</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
