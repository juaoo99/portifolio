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
    <div class="flex flex-col mt-20 lg:flex-row w-full min-h-dvh lg:items-center lg:justify-around gap-5">
        <div class="w-full text-center lg:w-1/2 lg:text-left" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-2000' }">
            <p class="text-7xl font-bold">hi, i am <br />João Pedro.</p>
            <p class="font-light text-lg text-pretty mt-5 px-5 lg:px-0">
                Sou desenvolvedor formado e com experiência tem aplicações mobile e web. Buscando oportunidades desafiadoras para aplicar minhas skills em programação e desenvolvimento de aplicações de alta performance.
            </p>

            <div class="flex flex-wrap justify-center lg:justify-start gap-2 mt-6 px-5 lg:px-0">
                <div class="flex items-center bubbles gap-4" style="border-radius: 50px" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                    <p class="t"><a @click="smoothScroll('connect')">Contact Me</a></p>
                </div>
                <div class="lg:flex lg:items-center gap-2 p-3 rounded-xl" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-santos-4b234a1b1/" target="_blank"><i class="pi pi-linkedin" style="font-size: 2.2rem; color: #0966c2"></i></a>
                </div>
                <div class="lg:flex lg:items-center gap-2 p-3" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                    <a href="https://github.com/juaoo99" target="_blank"><i class="pi pi-github" style="font-size: 2.2rem"></i></a>
                </div>
            </div>
        </div>

        <div class="flex items-center p-5 lg:p-0" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }">
            <img src="../../assets/images/more/p2.png" alt="Image" width="400" class="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out" />
        </div>
    </div>
</template>
<style>
.contact {
    background-color: #d3e97a;
    border-radius: 20px;
}
.linkdin {
    background-color: rgba(0, 36, 128, 0.234);
    border-radius: 20px;
}

.github {
    background-color: rgba(110, 110, 110, 0.133);
    border-radius: 20px;
}
/* From Uiverse.io by nikk7007 */
.bubbles {
    --c1: #212121;
    --c2: #d3e97a;
    --size-letter: 1.2rem;
    padding: 0.3em 1em;
    font-size: var(--size-letter);

    background-color: transparent;
    border: calc(var(--size-letter) / 6) solid var(--c2);
    border-radius: 0.2em;
    cursor: pointer;

    overflow: hidden;
    position: relative;
    transition: 300ms cubic-bezier(0.83, 0, 0.17, 1);
}

.bubbles > .t {
    font-weight: 700;
    color: var(--c2);
    position: relative;
    z-index: 1;
    transition: color 700ms cubic-bezier(0.83, 0, 0.17, 1);
}

.bubbles::before {
    top: 0;
    left: 0;
}

.bubbles::after {
    top: 100%;
    left: 100%;
}

.bubbles::before,
.bubbles::after {
    content: '';
    width: 150%;
    aspect-ratio: 1/1;
    scale: 0;
    transition: 1000ms cubic-bezier(0.76, 0, 0.24, 1);

    background-color: var(--c2);
    border-radius: 50%;

    position: absolute;
    translate: -50% -50%;
}

.bubbles:hover {
    & > p {
        color: #ffffff;
    }
    &::before,
    &::after {
        scale: 1;
    }
}

.bubbles:active {
    scale: 0.98;
    filter: brightness(0.9);
}
</style>
