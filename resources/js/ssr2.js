import './bootstrap';
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const vuetify = createVuetify({
    ssr: true,
})

createServer(page =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props),
      })
      .use(plugin)
      .use(ZiggyVue, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location),
      })
      .use(vuetify)
    },
  }),
)
