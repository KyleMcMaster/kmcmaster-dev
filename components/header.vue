<template>
    <header class="w-full bg-black p-2 px-5 shadow-xl text-primary flex">
        <img
            src="https://raw.githubusercontent.com/KyleMcMaster/kmcmaster.dev/feat/v3/public/github-logo.png"
            alt="logo"
            class="mt-1"
        />
        <span class="font-brand text-2xl flex items-center mx-1">
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

<style scoped>
img {
    width: 1%;
    height: 1%;
    overflow: hidden;
    border-radius: 50%;
}
</style>