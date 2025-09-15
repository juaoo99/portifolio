<template>
    <div class="lg:px-20 px-10 lg:flex w-full lg:items-center lg:justify-around gap-5">
        <div class="items-center lg:w-1/3 justify-center lg:pr-10" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
            <span class="lg:text-7xl text-6xl font-bold mb-8">my capabilities</span>
        </div>
        <div class="items-center lg:w-1/2">
            <p class="font-light text-lg text-pretty mt-5" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">
                Minha atuação vai além do desenvolvimento de código. Eu também gerencio a publicação e o monitoramento de aplicativos tanto na Apple App Store quanto no Google Play Console. Para isso, integro SDKs e utilizo ferramentas de análise de
                dados como o Google Analytics e o Firebase, além de gerenciar relatórios de erros com o Crashlytics.
            </p>
            <p class="font-light text-lg text-pretty mt-5" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">
                Minhas responsabilidades incluem ainda a implementação e o gerenciamento de push notifications com APNs e Firebase Cloud Messaging, garantindo o envio de mensagens e alertas. Essa experiência abrangente, juntamente com minhas
                habilidades de liderança e relações públicas, me permite gerir projetos de forma eficaz e contribuir para o sucesso de equipes de alto desempenho.
            </p>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#f0d92928]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-8 animate-duration-2000', leaveClass: 'animate-leave fade-out-0' }">
                    <p>Java Script</p>
                </div>
                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#45ba852b]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-2000', leaveClass: 'animate-leave fade-out-0' }">
                    <p>VUE</p>
                </div>
                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#ef86633b]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-2000 ', leaveClass: 'animate-leave fade-out-0' }">
                    <p>HTML</p>
                </div>
                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#40bef836]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-3000', leaveClass: 'animate-leave fade-out-0' }">
                    <p>Tailwind</p>
                </div>
                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#c5f02928]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-2000 ', leaveClass: 'animate-leave fade-out-0' }">
                    <p>Express.js</p>
                </div>

                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#55a64738]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-2000 ', leaveClass: 'animate-leave fade-out-0' }">
                    <p>NODE</p>
                </div>
                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#0184c636]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-8 animate-duration-2000 ', leaveClass: 'animate-leave fade-out-0' }">
                    <p>CSS</p>
                </div>
                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#40bef83a]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-r000 ', leaveClass: 'animate-leave fade-out-0' }">
                    <p>Objectve-C</p>
                </div>
                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#ef866336]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-2000 ', leaveClass: 'animate-leave fade-out-0' }">
                    <p>Swift</p>
                </div>
                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#1dd1fe43]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-8 animate-duration-2000 ', leaveClass: 'animate-leave fade-out-0' }">
                    <p>SwiftUI</p>
                </div>
                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#4473b835]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-2000 ', leaveClass: 'animate-leave fade-out-0' }">
                    <p>Xcode</p>
                </div>
                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#ff90193a]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-2000 ', leaveClass: 'animate-leave fade-out-0' }">
                    <p>Firebase</p>
                </div>
                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#1947ff3a]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-2000 ', leaveClass: 'animate-leave fade-out-0' }">
                    <p>SQL</p>
                </div>
                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#3bbaf531]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-8 animate-duration-2000 ', leaveClass: 'animate-leave fade-out-0' }">
                    <p>Flutter + Dart</p>
                </div>
                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#f0d92928]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-8 animate-duration-2000', leaveClass: 'animate-leave fade-out-0' }">
                    <p>Google Cloud</p>
                </div>
                <div class="px-4 py-2 rounded-xl flex justify-center bg-[#45ba852b]" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-2000', leaveClass: 'animate-leave fade-out-0' }">
                    <p>Analytics</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
