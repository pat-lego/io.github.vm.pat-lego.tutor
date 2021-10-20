<template>
    <footer class="flex flex-row w-full h-20 justify-center items-center bg-gray-50 border-black border-t-2">
        <span class="p-1">Courses by <a target="_blank" class="underline" href="https://www.pat-lego.com">pat-lego</a></span>
        <span class="p-1">&copy; {{year}}</span>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
    data() {
        return {
            year: undefined
        }
    },
    mounted() {
        this.year = new Date().getFullYear()
    },
}
</script>