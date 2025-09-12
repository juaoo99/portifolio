<template>
    <div class="lg:px-20 px-10 lg:flex w-full min-h-dvh lg:items-center lg:justify-around gap-5">
        <div class="items-center lg:w-1/3 justify-center pr-10" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
            <span class="text-7xl font-bold">let's connect</span>
            <p class="font-light text-lg text-pretty mt-5">Entre em contato enviando uma um email para <a href="mailto:jpsshome@gmail.com" class="border-b border-[#D3E97A]">jpsshome@gmail.com</a>.</p>

            <button class="flex items-center w-auto bg-[#D3E97A] px-5 py-2 gap-3" style="border-radius: 50px">
                <i class="pi pi-file-pdf"></i>
                <p class="font-light text-lg text-pretty"><a href="../../assets/João_Pedro_Silva_Santos.docx" download>Confira meu currículo.</a></p>
            </button>

            <div class="flex flex-wrap justify-start mt-6">
                <div class="lg:flex lg:items-center p-3" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                    <p>
                        <a href="mailto:jpsshome@gmail.com"><i class="pi pi-envelope" style="font-size: 1.8rem; color: #b74f4f"></i></a>
                    </p>
                </div>
                <div class="lg:flex lg:items-center p-3" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                    <p>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-santos-4b234a1b1/" target="_blank"> <i class="pi pi-linkedin" style="font-size: 2rem; color: #0966c2"></i></a>
                    </p>
                </div>

                <div class="lg:flex lg:items-center gap-2 p-3" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
                    <p><i class="pi pi-github" style="font-size: 2rem"></i></p>
                </div>
            </div>
        </div>
        <div class="items-center w-1/2"></div>
    </div>
</template>

<style></style>
