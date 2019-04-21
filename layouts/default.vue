<template>
  <v-app>
    <v-toolbar class="toolbar" :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, i) in items" :key="i" :to="item.to" flat>{{
          item.title
        }}</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-md-and-up"
      width="200"
      fixed
      temporary
    >
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<style>
.toolbar {
  box-shadow: none;
  background-color: #fff !important;
}
</style>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Gallery',
          to: '/gallery'
        },
        {
          title: 'About',
          to: '/about'
        }
      ],
      title: 'Florence Ménage'
    }
  }
}
</script>
