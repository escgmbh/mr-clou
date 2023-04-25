<script setup>
import { useI18n } from 'vue-i18n';
import LanguageChooser from '../components/LanguageChooser.vue';

const { t } = useI18n();

const getDynamicTranslation = () => `${t('greeting.subtitle')}!`;
</script>

<template>
    <div
        class="w-screen h-screen flex items-center justify-center bg-cover bg-base-100 flex-col"
    >
        <h1 class="text-base-200 text-5xl font-lato font-thin">
            {{ $t('greeting.title') }}
        </h1>
        <br />
        <h3 class="text-base-200 font-mono">{{ getDynamicTranslation() }}</h3>
        <LanguageChooser></LanguageChooser>
    </div>
</template>

<style></style>
