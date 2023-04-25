<script setup>
import { useDark, useToggle } from '@vueuse/core';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';

const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
});
const toggleDark = useToggle(isDark);
</script>

<template>
    <div class="w-screen h-screen">
        <div class="ml-4 md:ml-6 flex justify-items-end">
            <span class="cursor-pointer mx-2 xl:mx-0" @click="toggleDark()">
                <component :is="isDark ? MoonIcon : SunIcon" class="h-6 w-6" />
            </span>
        </div>
        <router-view></router-view>
    </div>
</template>
