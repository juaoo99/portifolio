<script setup>
import Carousel from 'primevue/carousel';
import { ref } from 'vue';
import call1 from '../../assets/images/call1.png';
import call2 from '../../assets/images/call2.png';
import call3 from '../../assets/images/call3.png';

import key from '../../assets/images/keypad.png';
import op from '../../assets/images/options.png';
import reg from '../../assets/images/reg.png';

// Defina as opções responsivas do carrossel
const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '576px',
        numVisible: 1,
        numScroll: 1
    }
]);

const products = ref([
    {
        image: reg
    },
    {
        image: op
    },
    {
        image: key
    },
    {
        image: call1
    },
    {
        image: call2
    },
    {
        image: call3
    }
]);
</script>
<template>
    <div class="lg:px-20 px-10 gap-20 min-h-dvh">
        <div class="items-center lg:w-1/2 mb-20 justify-center" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
            <span class="text-4xl font-bold uppercase text-center">Journey</span>
            <p class="font-light text-lg text-pretty mt-5">A programação se tornou parte da minha vida, não so profissionalmente. Fora do escritório busco conhecimento, experiencia e inspiração.</p>
        </div>
        <div class="lg:flex w-full lg:items-center lg:justify-around gap-20">
            <div class="imga w-full" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                <Carousel :value="products" circular :autoplayInterval="5000" :showIndicators="false" :showNavigators="true" :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                        <div class="rounded m-2 p-4">
                            <div class="mb-4">
                                <div class="relative mx-auto">
                                    <img :src="slotProps.data.image" alt="Project Image" class="w-full h-auto max-w-xs mx-auto lg:rounded-lg rounded-sm" />
                                </div>
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<style scoped>
.imga {
    padding: 10px;
    background-color: rgba(178, 178, 178, 0.111);
    border-radius: 5px;
}
</style>
