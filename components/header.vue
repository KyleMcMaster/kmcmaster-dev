<template>
    <header class="w-full bg-black p-3 px-5 shadow-xl text-primary flex">
        <span class="font-brand text-2xl flex items-center">
            <NuxtLink to="/">Kyle McMaster</NuxtLink>
        </span>
        <div class="flex-grow"></div>
        <ThemeToggle />
        <span class="inline-flex px-2">
            <NuxtLink to="/blogs">blog</NuxtLink>
        </span>
        <span class="inline-flex px-2" v-for="link in links">
            <a :href="link.url">{{ link.name }}</a>
        </span>
    </header>
</template>

<script lang="ts" setup>
import ThemeToggle from './themeToggle.vue';
const links: { name: string, url: string }[] =
    [
        { name: "github", url: "https://github.com/kylemcmaster" },
        { name: "linkedin", url: "https://www.linkedin.com/in/kylerobertmcmaster/" },
        { name: "twitter", url: "https://twitter.com/kylemcmaster" }
    ];
</script> 