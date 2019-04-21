<template>
  <v-layout row justify-center align-center wrap>
    <v-flex>
      <div class="img-container">
        <img
          v-for="(image, i) in images"
          :key="i"
          :src="image.src"
          :alt="image.alt"
          class="home-image"
        />
      </div>
    </v-flex>
  </v-layout>
</template>

<style>
.img-container {
  display: flex;
  justify-content: space-between;
}

.home-image {
  max-width: 49%;
  max-height: 470px;
  object-fit: cover;
}
</style>

<script>
export default {
  data() {
    return {
      images: [
        {
          alt: 'serviettes brodées',
          src: '/broderies/serviettes_brodees.jpg'
        },
        {
          alt: 'quilt',
          src: '/patchworks/quilt1.jpg'
        }
      ]
    }
  }
}
</script>
