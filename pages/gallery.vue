<template>
  <v-layout justify-space-around align-center wrap>
    <img
      v-for="(image, i) in images"
      :key="i"
      :src="image.src"
      :alt="image.alt"
      class="gallery-image"
    />
  </v-layout>
</template>

<style>
.gallery-image {
  width: 320px;
  height: 250px;
  object-fit: cover;
  margin: 40px 20px;
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
        },
        {
          alt: 'serviettes brodées',
          src: '/broderies/serviettes_brodees.jpg'
        },
        {
          alt: 'quilt',
          src: '/patchworks/quilt1.jpg'
        },
        {
          alt: 'serviettes brodées',
          src: '/broderies/serviettes_brodees.jpg'
        },
        {
          alt: 'quilt',
          src: '/patchworks/quilt1.jpg'
        },
        {
          alt: 'serviettes brodées',
          src: '/broderies/serviettes_brodees.jpg'
        },
        {
          alt: 'quilt',
          src: '/patchworks/quilt1.jpg'
        },
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
