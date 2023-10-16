<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Welcome" />

    <div>
        Hello Laravel + InertiaJS + Vue + Vuetify
    </div>
    <v-color-picker></v-color-picker>
    <v-timeline direction="horizontal">
    <v-timeline-item>
      <template v-slot:opposite>
        Opposite content
      </template>
      <div>
        <div class="text-h6">Content title</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:opposite>
        Opposite content
      </template>
      <div>
        <div class="text-h6">Content title</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:opposite>
        Opposite content
      </template>
      <div>
        <div class="text-h6">Content title</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </v-timeline-item>
  </v-timeline>
    <v-parallax
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">
        Vuetify
      </h1>
      <h4 class="subheading">
        Build your application today!
      </h4>
    </div>
  </v-parallax>
</template>
