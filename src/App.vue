<template lang='pug'>
  #app
    router-view
</template>

<style lang='sass'>
@tailwind base
@tailwind components
@tailwind utilities
@import url('https://fonts.googleapis.com/css?family=Homemade+Apple&display=swap')
@import url('https://fonts.googleapis.com/css?family=IM+Fell+English+SC&display=swap')
@import url('https://fonts.googleapis.com/css?family=Rye&display=swap')

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.homemade_apple
  font-family: 'Homemade Apple', cursive

.rye
  font-family: 'Rye', cursive

.nav_font
  font-family: 'IM Fell English SC', serif
</style>
