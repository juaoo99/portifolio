<template>
    <div class="flex flex-col mt-20 lg:flex-row w-full min-h-dvh lg:items-center lg:justify-around gap-5">
        <div class="w-full text-center lg:w-1/2 lg:text-left" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-2000' }">
            <p class="text-7xl font-bold">hi, i am <br />João Pedro.</p>
            <p class="font-light text-lg text-pretty mt-5 px-5 lg:px-0">
                Desenvolvedor experiente com habilidades em desenvolvimento web e mobile. Buscando oportunidades desafiadoras para aplicar minha expertise em programação, liderança de equipes e desenvolvimento de aplicações de alta performance.
            </p>

            <div class="flex flex-wrap justify-center lg:justify-start gap-5 mt-6 px-5 lg:px-0">
                <div
                    class="flex items-center w-auto bg-[#D3E97A] px-5 py-2 gap-3"
                    style="border-radius: 50px"
                    v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
                >
                    <i class="pi pi-circle-fill"></i>
                    <p class="font-light text-lg text-pretty">Contact Me</p>
                </div>
                <div class="lg:flex lg:items-center gap-2 p-3 rounded-xl" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-santos-4b234a1b1/" target="_blank"><i class="pi pi-linkedin" style="font-size: 2.2rem; color: #0966c2"></i></a>
                </div>
                <div class="lg:flex lg:items-center gap-2 p-3" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                    <i class="pi pi-github" style="font-size: 2.2rem"></i>
                </div>
            </div>
        </div>

        <div class="items-center p-5 lg:p-0">
            <img src="../../assets/images/first.jpg" alt="Image" width="400" class="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out" />
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
</style>
