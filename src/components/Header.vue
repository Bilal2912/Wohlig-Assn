<template>
    <div class="mb-4">
        <h2 class="fw-normal">{{ title }}</h2>
    </div>
    <!-- <div class="container bg-black text-white rounded-pill w-25 h-25">He</div> -->
    <div class="progress bg-white mb-2">
  <div class="progress-bar rounded-pill bg-primary" role="progressbar" style="width: 6rem; height: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</template>

<script>
    export default {
        name:"Header",
        props:['title']
    }
</script>

<style lang="scss" scoped>

</style>