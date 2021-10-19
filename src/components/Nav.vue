<template>
    <div class="flex flex-row w-full h-20 bg-green-200">
        <ul class="p-6 flex flex-row items-center" id="nav">
            <li class="p-4 m-4 bg-white rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-11" href="{{navItem.route}}" v-for="navItem in navItems" :key="navItem.name">
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