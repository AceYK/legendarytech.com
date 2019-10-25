<template lang='pug'>
.flex.flex-col.h-screen
  .flex.justify-between.nav_font.skyblue
    div
      .nav_item Homepage
      .nav_item Website
      .nav_item Service
      .nav_item Contact Us
    .nav_item legendarytech.co
  .flex.justify-around.flex-wrap.items-center
    img.inline-block.m-5(src="/image/logo.png" style='width: 300px')
    .inline-block.m-5.homemade_apple(style='font-size: 36px; max-width: 600px;') Create your own customized webpage now!
  .flex.justify-around.flex-wrap.items-center.skyblue
    .relative.inline-block
      img.inline-block.relative(src='/image/computer.jpg' style='width: 150px')
      p.absolute.rye(style='top: 50%; left: 50%; transform: translate(-50%, -115%); white-space: nowrap;') Small website
    .relative.inline-block
      img.inline-block.relative(src='/image/computer.jpg' style='width: 200px')
      .absolute.rye(style='top: 50%; left: 50%; transform: translate(-50%, -115%); white-space: nowrap;') Medium website
    .relative.inline-block
      img.inline-block.relative(src='/image/computer.jpg' style='width: 250px')
      .absolute.rye(style='top: 50%; left: 50%; transform: translate(-50%, -115%); white-space: nowrap;') Huge website
    .relative.inline-block
      img.inline-block.relative(src='/image/computer.jpg' style='width: 300px')
      .absolute.rye(style='top: 50%; left: 50%; transform: translate(-50%, -115%); white-space: nowrap;') Corporate website
</template>

<style lang="sass">
.skyblue
  background: rgb(255,255,255)
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(157,233,255,1) 35%, rgba(0,212,255,1) 100%)
.nav_item
  display: inline-block
  padding: 10px
  margin-left: 15px
  margin-right: 15px
</style>
