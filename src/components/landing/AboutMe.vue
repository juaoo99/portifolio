<template>
    <div class="lg:px-20 px-10 lg:flex w-full lg:items-center lg:justify-around gap-5">
        <div class="items-center lg:w-1/3 justify-center lg:pr-10" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
            <span class="text-7xl font-bold">about me</span>
        </div>
        <div class="items-center lg:w-1/2">
            <!--<p class="text-4xl font-bold py-10" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">Desenvolvedor Full-Stack & Analista de Tecnologia .</p>-->
            <p class="font-light text-lg text-pretty mt-5 text-justify" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">
                <span class="text-2xl font-bold py-10">Como desenvolvedor full stack, </span>tenho uma abordagem focada em criar soluções completas e de alta performance. Atualmente, aplico essa filosofia em projetos que já estão no mercado. Minhas
                habilidades abrangem todo o ciclo de vida do desenvolvimento, desde a concepção até a entrega e manutenção, sempre com o objetivo de gerar valor.
            </p>
            <p class="font-light text-lg text-pretty mt-5 text-justify" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">
                Minha experiência me permite atuar em diferentes frentes: sou um desenvolvedor versátil, capaz de transitar entre o front-end e o back-end, e também um solucionador de problemas, focado em entregar produtos que funcionam e atendem às
                necessidades do usuário.
            </p>
        </div>
    </div>
</template>

<style></style>
