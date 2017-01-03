<template>
  <div id="app">
    <Map :access-token="accessToken" :options="options"></Map>
  </div>
</template>


<script>
import Map from './components/Map'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  data () {
    return {
      accessToken: 'pk.eyJ1IjoibWFwZXIiLCJhIjoiY2l4Z3gxaTliMDAxMjJ5dG1iNjAxcmJ3MiJ9.SzNnsW1nwiAraIkhlYlPfA',
      options: {
        style: 'mapbox://styles/mapbox/streets-v9',
        attributionControl: false,
        center: [-74.50, 40],
        zoom: 9{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },

  components: {
    Map{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>


<style>
html, body {
  height: 100%;
}

/** {
  outline: red solid 1px;
}*/
</style>

<style scoped>
#app {
  height: 100%;
}
</style>
