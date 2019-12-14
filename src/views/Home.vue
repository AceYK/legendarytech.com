<template lang='pug'>
#home
  img.absolute.mt-3(src="/image/logo.png" style='width: 200px')
  i.hidden.md-flex.absolute.fab.fa-facebook-f.text-white.border.rounded-full.flex-col.justify-center(style='top: 45%')
  i.hidden.md-flex.absolute.far.fa-envelope.text-white.border.rounded-full.flex-col.justify-center(style='top: 55%')
  #landing.h-screen
    .flex.justify-center.items-center.h-full.m-auto
      #title.homemade_apple.md-mx-32(style='font-size: 36px') Create your own customized webpage now!
</template>

<style lang="sass">
i
  left: 3%
  font-size: 30px
  width: 50px
  height: 50px
  &:hover
    color: black
    background: white
    border-color: white
#title
  &:hover
    color: white
    background: black
</style>

<script>
</script>
