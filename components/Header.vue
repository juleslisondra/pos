<template>
    <header class="sticky top-0 z-20 border-t border-transparent backdrop-blur-md shadow-sm">
        <div class="flex items-center justify-between px-4 py-2">
            <div class="space-x-2 flex items-center">
                <NuxtLink to="/">
                    <img class="h-12 w-12 object-cover" src="~assets/cat1.jpg" alt="catImage" />
                </NuxtLink>
                <NuxtLink to="/pos">Pos</NuxtLink>
                <NuxtLink to="/pos/test">test</NuxtLink>
            </div>
            <div class="space-x-2">
                <NuxtLink to="/">Profile</NuxtLink>
                <NuxtLink to="/pos">Logout</NuxtLink>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>