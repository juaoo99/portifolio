<template>
    <div class="lg:px-20 px-10 lg:flex w-full lg:items-center lg:justify-around gap-5">
        <div class="items-center lg:w-1/3 justify-center" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
            <span class="text-7xl font-bold mb-5">about me</span>
            <div class="w-full flex item-center pt-10" style="width: 300px">
                <img src="../../assets/images/aboutme.png" alt="" class="rounded-lg" />
            </div>
        </div>
        <div class="items-center lg:w-1/2">
            <!--<p class="text-4xl font-bold py-10" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">Desenvolvedor Full-Stack & Analista de Tecnologia .</p>-->
            <p class="font-light text-lg text-pretty mt-5 text-justify" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">
                <span class="text-2xl font-bold py-10">Atualmente </span> moro no Rio Grande do Sul e a três anos faço parte do time de desenvolvimento da Flux Tecnologia. Casado e pai de uma linda menina. Adoro cinema, música e ler. De Attack on
                Titan ao cinema do Denis Villanueve, de Rachmaninoff ao Kendrik Lamar, e das documentações intermináveis das linguagens e ferramentas que uso até Dostoiévski.
            </p>
            <p class="font-light text-lg text-pretty mt-5 text-justify" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">
                Meu inglês me permite ter uma comunicação excelente, tenho experiência e contato com nativos americanos que sempre me ajudam a melhorar essa skill importante nesse meio como desenvolvedor.
            </p>
            <p class="font-light text-lg text-pretty mt-5 text-justify" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">
                Tenho um trabalho voluntário junto a comunidade religiosa do qual faço parte, junto com minha esposa, como líderes do berçário, cuidando das crianças mais pequenas.
            </p>
        </div>
    </div>
</template>

<style></style>
