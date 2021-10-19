<template>
    <div class="flex w-full h-20">
        <span>{{text}}</span>
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
    }
}
</script>