<template>
  <div></div>
</template>


<script>
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

let map{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  props: {
    accessToken: {
      type: String,
      required: true{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    options: {
      type: Object,
      required: true,
      validator (value) {
        return !!value.style{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}
  },

  ready () {
    mapboxgl.accessToken = this.accessToken{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    this.options.container = this.$el{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    map = new mapboxgl.Map(this.options){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    map.addControl(new mapboxgl.NavigationControl()){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>


<style scoped>
div {
  height: 100%;
}
</style>
