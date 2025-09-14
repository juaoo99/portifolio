<script setup>
import Carousel from 'primevue/carousel';
import { ref } from 'vue';
// Importe todas as imagens
import brands from '../../assets/images/more/brands.jpeg';
import google from '../../assets/images/more/gemini.jpeg';
import office from '../../assets/images/more/office.jpeg';
import totem2 from '../../assets/images/more/totem2.jpeg';

const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '576px',
        numVisible: 1,
        numScroll: 2
    }
]);

const products = ref([
    {
        image: brands,
        title: 'Gramado Summit',
        subtitle:
            'Minha participação no Gramado Summit, o maior polo de brainstorming da América Latina, foi uma experiência de aprendizado e visibilidade profissional. Neste evento, tive a chance de atuar como expositor, apresentando duas aplicações cruciais do meu portfólio: o Softphone Whitelabel e o GuestLink.'
    },
    {
        image: totem2,
        title: 'Gramado Summit',
        subtitle:
            'Participar do evento como expositor me permitiu não apenas mostrar o valor técnico dos meus projetos, mas também trocar conhecimentos e fazer networking com líderes da indústria, empreendedores e investidores. Foi uma oportunidade de validação do meu trabalho, que me inspirou a continuar inovando e buscando soluções que façam a diferença no mercado.'
    },
    {
        image: office,
        title: 'Dia a Dia',
        subtitle:
            'Minha formação em Análise e Desenvolvimento de Sistemas foi a base para a minha carreira, mas a minha jornada de aprendizado se estende muito além da sala de aula. No meu dia a dia, a busca por conhecimento é contínua e orientada por objetivos práticos. Cada novo projeto é uma oportunidade para aprofundar minhas habilidades e pesquisar novas soluções. Eu aplico constantemente o que aprendo, testando novas tecnologias e frameworks para aprimorar as aplicações em que trabalho. Essa combinação de conhecimento acadêmico e prática diária me permite construir soluções eficientes e inovadoras, sempre buscando a melhor maneira de resolver os desafios que surgem.'
    },
    {
        image: google,
        title: 'Fã de Tecnologia',
        subtitle:
            'A tecnologia, para mim, é uma jornada de constante descoberta e aprimoramento, e não apenas uma carreira. Impulsionado pela curiosidade, busco sempre aprender e explorar novas ferramentas para criar soluções digitais que sejam, ao mesmo tempo, intuitivas para o usuário e sólidas em sua execução técnica. É essa mentalidade de crescimento que me permite transformar ideias em realidade e estar preparado para os desafios do futuro.'
    }
]);
</script>

<template>
    <div class="lg:px-20 px-10 gap-20 min-h-dvh">
        <div class="items-center lg:w-1/2 mb-20 justify-center" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
            <span class="text-4xl font-bold uppercase text-center">Journey</span>
            <p class="font-light text-lg text-pretty mt-5">A programação se tornou parte da minha vida, não so profissionalmente. Fora do escritório busco conhecimento, experiencia e inspiração.</p>
        </div>
        <div class="lg:flex w-full lg:items-center lg:justify-around">
            <div class="imga w-full" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                <Carousel :value="products" circular :autoplayInterval="30000" :showIndicators="false" :showNavigators="true" :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                        <div class="lg:m-2 lg:p-4 lg:flex items-center justify-center gap-8">
                            <div class="mb-4">
                                <div class="relative mx-auto">
                                    <img :src="slotProps.data.image" :alt="slotProps.data.title" class="w-full h-auto max-w-xs mx-auto rounded-lg" />
                                </div>
                            </div>
                            <div class="lg:w-1/2 h-auto">
                                <p class="text-xl">{{ slotProps.data.title }}</p>
                                <div class="flex">
                                    <p class="font-light text-lg text-pretty mt-5 text-justify">{{ slotProps.data.subtitle }}</p>
                                    <p class="font-light text-lg text-pretty mt-5 text-justify">{{ slotProps.data.subtitle2 }}</p>
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
    background-color: rgba(128, 128, 128, 0.111);
    border-radius: 5px;
}
</style>
