import 'iview/dist/styles/iview.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'mapbox-gl/dist/mapbox-gl.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import iview from 'iview'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(iview){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
