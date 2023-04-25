<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const changeLanguage = () => {
  window.localStorage.setItem('esclocale', locale.value);
};
</script>

<template>
    <span>
        {{ $t('selectLanguage') }}
    </span>
    <select
        v-model="$i18n.locale"
        class="rounded text-black"
        @change="changeLanguage"
    >
        <option v-for="l in $i18n.availableLocales" :key="l">
            {{ l }}
        </option>
    </select>
</template>
