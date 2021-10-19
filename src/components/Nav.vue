<template>
    <div class="flex w-full h-20">
        <ul id="nav">
            <li href="{{navItem.route}}" v-for="navItem in navItems" :key="navItem.name">
                {{navItem.name}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Nav',
    props: {
        navItems: {
            required: true,
            type: Object
        }
    }   
}
</script>