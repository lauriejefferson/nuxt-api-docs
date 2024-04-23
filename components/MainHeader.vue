<script setup>

</script>

<template>
    <nav class="nav">
        <div class="nav__logo">
            <h1>Nuxt API Docs</h1>
        </div>
        <ul role="list" class="nav__links">
            <li class="nav__link">About </li>
            <li class="nav__link">Contact</li>
        </ul>
    </nav>
</template>

<style scoped>
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
}

.nav__links {
    display: flex;
    gap: 1em;
}
</style>