<template>
    <div class="flex flex-row w-full h-20 justify-center items-center bg-gray-50">
        <span class="p-1">{{text}}</span>
        <span class="p-1">&copy; {{year}}</span>
    </div>
</template>
<script>
export default {
    name: 'Footer',
    props: {
        text: {
            required: true,
            type: String
        }
    },
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