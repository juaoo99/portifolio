<script setup>
import Carousel from 'primevue/carousel';
import { ref } from 'vue';

import alert from '../../assets/images/guestweb/alert.png';
import chat from '../../assets/images/guestweb/chat.png';
import home from '../../assets/images/guestweb/home.png';
import order from '../../assets/images/guestweb/order.png';
import ramal from '../../assets/images/guestweb/ramal.png';
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
        image: home
    },
    {
        image: chat
    },
    {
        image: alert
    },
    {
        image: order
    },
    {
        image: ramal
    }
]);
</script>
<template>
    <div class="lg:px-20 px-10">
        <div class="lg:flex w-full lg:items-center lg:justify-around gap-20 mt-10">
            <div class="imga w-full lg:w-1/2" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                <p class="font-light text-xl text-pretty text-center lg:text-left">GuestLink Management</p>
                <Carousel :value="products" circular :autoplayInterval="5000" :showIndicators="false" :showNavigators="true" :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                        <div class="rounded m-2 p-4">
                            <div>
                                <div class="relative mx-auto">
                                    <img :src="slotProps.data.image" alt="Project Image" class="w-full max-w-xs mx-auto lg:rounded-lg rounded-sm" />
                                </div>
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>

            <div class="items-center lg:w-1/2" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                <p class="font-semibold text-4xl text-pretty mt-5">GuestLink Management</p>
                <p class="font-light text-lg text-pretty mt-5 text-justify">
                    Complementando o aplicativo iOS do Guestlink, desenvolvi um portal de gerenciamento web para a equipe do hotel. Essa plataforma é a central de operações que otimiza a comunicação e os serviços. Através dela, os funcionários podem
                    monitorar e responder ao chat dos hóspedes, gerenciar pedidos de serviço de forma organizada e configurar os ramais de forma simples e eficaz. O portal web, portanto, não apenas complementa o aplicativo, mas transforma a gestão
                    diária, fornecendo à equipe as ferramentas necessárias para oferecer um serviço excepcional.
                </p>
                <p class="font-semibold text-lg text-pretty mt-5 uppercase">Project Info</p>
                <Divider />
                <div class="lg:flex justify-between">
                    <p class="font-light text-lg text-pretty mt-5">Year</p>
                    <p class="font-light text-lg text-pretty mt-5">2024 - 2025</p>
                </div>
                <Divider />
                <div class="lg:flex justify-between">
                    <p class="font-light text-lg text-pretty mt-5">Role</p>
                    <p class="font-light text-lg text-pretty mt-5">Web Developer Full-Stack</p>
                </div>
                <Divider />
                <div class="lg:flex justify-between">
                    <p class="font-light text-lg text-pretty mt-5">Langagues/Frameworks</p>
                    <p class="font-light text-lg text-pretty mt-5 flex items-center gap-5">JavaScript <i class="pi pi-circle-fill" style="font-size: 0.5rem"></i> VUE <i class="pi pi-circle-fill" style="font-size: 0.5rem"></i> Tailwind CSS</p>
                </div>
                <Divider />
            </div>
        </div>
    </div>
</template>

<style scoped>
.imga {
    padding: 20px;
    background-color: rgba(128, 128, 128, 0.111);
    border-radius: 5px;
}
</style>
