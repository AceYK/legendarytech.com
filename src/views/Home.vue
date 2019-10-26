<template lang='pug'>
.flex.flex-col.h-screen
  .flex.justify-between.nav_font.skyblue.py-1
    div.hidden.md-block
      a.nav_item(href='#home') Homepage
      a.nav_item(href='#website') Website
      a.nav_item(href='#service') Service
      a.nav_item(href='#contact') Contact Us
    .nav_item legendarytech.co
    button.px-3.py-2.border.rounded.md-hidden(@click="toggle")
      svg(class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg")
        title Menu
        path(d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z")
  #home.flex.justify-around.flex-wrap.items-center
    img.inline-block.m-5(src="/image/logo.png" style='width: 300px')
    .inline-block.m-5.homemade_apple.md-text-left(style='font-size: 36px; max-width: 600px;') Create your own customized webpage now!
  #website.skyblue.p-10
    .font-bold.italic.text-4xl.text-left What can we build?
    .flex.flex-col.md-flex-row.justify-around.flex-wrap
      div
        .hidden.md-flex.flex-col.justify-center.items-center.relative(style='height: 400px')
          img.inline-block(src='/image/computer.jpg' style='width: 150px')
          p.absolute.rye.img_word Small website
        .flex.md-justify-center
          ul(style='list-style: square inside none;')
            li Personal interactive website
      div
        .hidden.md-flex.flex.flex-col.justify-center.items-center.relative(style='height: 400px')
          img.inline-block(src='/image/computer.jpg' style='width: 200px')
          p.absolute.rye.img_word Medium website
        .flex.md-justify-center
          ul(style='list-style: square inside none;')
            li Professional marketing webpage
      div
        .hidden.md-flex.flex.flex-col.justify-center.items-center.relative(style='height: 400px')
          img.inline-block(src='/image/computer.jpg' style='width: 250px')
          p.absolute.rye.img_word Huge website
        .flex.md-justify-center
          ul(style='list-style: square inside none;')
            li E-commerce
            li Blog
            li Social platform
      div
        .hidden.md-flex.flex.flex-col.justify-center.items-center.relative(style='height: 400px')
          img.inline-block(src='/image/computer.jpg' style='width: 300px')
          p.absolute.rye.img_word Corporate website
        .flex.md-justify-center
          ul(style='list-style: square inside none;')
            li Enterprise webapp
            li Enterprise website
  #service.flex.text-xl
    .flex.justify-center.items-center(style='flex: 2')
      .font-bold.italic.text-4xl Services
    .service.flex.justify-center(style='flex: 2')
      ul.inline-block.m-10(style='list-style: square inside none;')
        li Website Development
        li Website Deisng
        li Website Tracking, Traffice and Analytic
        li Websit Maintence
        li Mobile Responsive
        li Unlimited Webpages
        li SSL Security
        li Search Engine Optimisation (SEO)
        li Customized Domain Name
        li Customized Email
        li Payment Gateway
        li Content Management System
  .flex.flex-col.justify-center.items-center.p-10.relative
    .font_lemon.text-2xl(style='color: rgba(28, 56, 130, 0.68)') Your One Stop Solution For Webpage Is Here !
    img(src='/image/stroke.png' style='width: 100px')
  #contact.h-screen
    .flex.text-xl.justify-center.items-center
      .flex.flex-col.p-10(style='flex: 2')
        .flex.items-center
          i(class="far fa-envelope" style='flex: 2')
          .text-left.text-2xl(style='flex: 2') aceyk12@gmail.com
        .flex.items-center
          i(class="fab fa-whatsapp" style='flex: 2')
          .text-left.text-2xl(style='flex: 2') +6013-338 6813
      .skyblue.flex.justify-center.items-center.p-10(style='flex: 2')
        .font-bold.italic.text-4xl Contact Us
    .flex.flex-col.items-center.p-10.px-20.text-left
      .paper(style='width: 100%; max-width: 500px')
        div.py-10
          .inline-block.text-2xl Leave Us A Message
          .inline-block.pl-2 -- or let us contact you !
        p Name
        input
        p Phone Number
        input
        p Email
        input
        p Type of Business
        input
        p Message
        input
        .flex.flex-row-reverse.my-5
          button.hover-bg-blue.hover-text-white.py-2.px-4.border.hover-border-transparent.rounded-full Submit
</template>

<style lang="sass">
.skyblue
  // background: rgb(255,255,255)
  // background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(157,233,255,1) 35%, rgba(0,212,255,1) 100%)
  background-image: url("/image/sky.png")
  background-position: center
  background-repeat: no-repeat
  background-size: cover
.nav_item
  display: inline-block
  padding: 10px
  margin-left: 15px
  margin-right: 15px
.img_word
  top: 50%
  left: 50%
  transform: translate(-50%, -115%)
  white-space: nowrap
.service
  background-image: url("/image/office.jpg")
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  color: white
ul
  text-align: left
input
  border: 1px solid black
  border-radius: 30px
  margin-top: 20px
  margin-bottom: 20px
  height: 40px
  width: 100%
  padding-left: 20px
</style>
