<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';
    const snackbar = ref(false)
    const text = "Hello, I'm a snackbar"
</script>

<template>
    <Head title="Welcome" />

    <div>
        Hello Laravel + InertiaJS + Vue + Vuetify in server side rendering
    </div>
    Hover
    <v-hover>
    <template v-slot:default="{ isHovering, props }">
        <v-card
        v-bind="props"
        :color="isHovering ? 'primary' : undefined"
        title="Hover over me"
        text="..."
        ></v-card>
    </template>
    </v-hover>
    <div class="text-center">
        Progress circular
    <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>

    <v-progress-circular
      indeterminate
      color="red"
    ></v-progress-circular>

    <v-progress-circular
      indeterminate
      color="purple"
    ></v-progress-circular>

    <v-progress-circular
      indeterminate
      color="green"
    ></v-progress-circular>

    <v-progress-circular
      indeterminate
      color="amber"
    ></v-progress-circular>
  </div>
    Progress line
    <v-progress-linear model-value="20"></v-progress-linear>
    Snackbar
    <v-btn
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    Color picker
    <v-color-picker></v-color-picker>
    Carousel
    <v-carousel>
    <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
    ></v-carousel-item>

    <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
    ></v-carousel-item>

    <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
    ></v-carousel-item>
    </v-carousel>
    Timeline
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
  Parallax
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
