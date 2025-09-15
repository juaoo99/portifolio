<script setup>
import { useLayout } from '@/layout/composables/layout';
import { onMounted } from 'vue';

const { toggleDarkMode, isDarkTheme } = useLayout();
onMounted(() => {
    toggleDarkMode();
});
</script>

<template>
    <div class="fixed flex gap-4 top-5 right-20 z-50" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-3000' }">
        <Button type="button" @click="toggleDarkMode" rounded :icon="isDarkTheme ? 'pi pi-moon' : 'pi pi-sun'" severity="secondary" />
    </div>
</template>
