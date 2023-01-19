<template>
  <div>
    <div class="card" style="width: 18rem">
        <!-- <span>{{ filename }}</span> -->
      <img :src="filename" class="card-img-top" alt="..." />
      <!-- <img src="..." class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <p class="card-text">
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props:['filename', 'content']
};
</script>

<style lang="scss" scoped></style>
