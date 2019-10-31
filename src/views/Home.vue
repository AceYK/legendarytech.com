<template lang='pug'>
.flex.flex-col.h-screen
  .overlay.absolute.z-10.h-full.w-full(v-if='pop')
    .flex.flex-col.justify-center.items-center.h-full
      .main
        .flex.flex-col.justify-center.items-center.h-full.relative
          img.w-8.absolute(src="image/cross.png" style='top: 20px; right: 20px' @click='close')
          .homemade_apple.text-3xl Updating
  .flex.justify-between.nav_font.skyblue.py-1
    div.hidden.md-block
      a.nav_item(href='#home') Homepage
      a.nav_item(href='#website') Website
      a.nav_item(href='#service') Service
      a.nav_item(href='#contact') Contact Us
    .nav_item legendarytech.co
    //- button.px-3.py-2.border.rounded.md-hidden(@click="toggle")
    //-   svg(class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg")
    //-     title Menu
    //-     path(d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z")
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
            li Personal Interactive Website
            li Landing Page
      div
        .hidden.md-flex.flex.flex-col.justify-center.items-center.relative(style='height: 400px')
          img.inline-block(src='/image/computer.jpg' style='width: 200px')
          p.absolute.rye.img_word Medium website
        .flex.md-justify-center
          ul(style='list-style: square inside none;')
            li Single Page Website
            li Marketing Webpage
      div
        .hidden.md-flex.flex-col.justify-center.items-center.relative(style='height: 400px')
          img.inline-block(src='/image/computer.jpg' style='width: 250px')
          p.absolute.rye.img_word Huge website
        .flex.md-justify-center
          .flex(style='flex: 2')
            ul(style='list-style: square inside none;')
              li Social Platform
              li E-Commerce
              li Blog
          .hidden.md-flex(style='flex: 2')
            ul
              li (Realtime Chatbox)
              li (Payment Gateway)
              li (CMS)
      div
        .hidden.md-flex.flex-col.justify-center.items-center.relative(style='height: 400px')
          img.inline-block(src='/image/computer.jpg' style='width: 300px')
          p.absolute.rye.img_word Corporate website
        .flex.md-justify-center
          .flex(style='flex: 2')
            ul(style='list-style: square inside none;')
              li Enterprise Webapp
          .hidden.md-flex(style='flex: 2')
            ul
              li (End-to-end Features)
  #service.flex.text-xl
    .flex.flex-col.relative.p-10(style='flex: 2')
      img.absolute(src='/image/service_desktop.png' style='width: 100px')
      img.absolute(src='/image/service_storage.png' style='width: 100px; top: 100%')
      img.absolute(src='/image/service_network.png' style='width: 100px; top: 187%')
    .flex.flex-col.justify-center.p-10.pb-0.relative(style='flex: 2')
      .font_lemon.text-xl(style='color: rgba(28, 56, 130, 0.68)') Your One Stop Solution For Webpage Is Here !
      img.mx-20(src='/image/stroke.png' style='width: 150px')
  .flex.text-xl
    .flex.justify-center.items-center.skyblue.mr-5(style='flex: 2;clip-path: polygon(100% 0, 100% 66%, 0 100%, 0% 100%);')
      div(style='flex: 2')
      .font-bold.italic.text-4xl(style='flex: 2') Services
    div(style='flex: 2')
      .service.flex.justify-center
        ul.inline-block.p-10(style='list-style: square inside none; background: rgba(0, 0, 0, 0.7)')
          li Website Development
          li Website Design
          li Website Tracking and Analytic
          li Websit Maintence
          li Mobile Responsive
          li Unlimited Webpages
          li SSL Security
          li SEO Optimisation
          li Customized Domain Name
          li Customized Email
          li Payment Gateway
          li Content Management System
  #contact.h-screen.mt-10
    .w-full.skyblue.p-24.absolute(style='clip-path: polygon(100% 0, 15% 0, 100% 100%);')
      .font-bold.italic.text-4xl.text-right Contact Us
    .flex.flex-col.p-10.pt-24
      .flex.items-center.text-2xl
        i.mx-5(class="far fa-envelope")
        .text-left aceyk12@gmail.com
      .flex.items-center.text-2xl
        i.mx-5(class="fab fa-whatsapp")
        .text-left +6013-338 6813
    .flex.flex-col.items-center.p-10.px-20.text-left
      .paper.skyblue.p-5(style='width: 100%; max-width: 500px')
        div.py-10
          .inline-block.text-2xl Leave Us A Message
          .inline-block.pl-2 -- or let us contact you !
        p Name
        input(v-model='name')
        p Phone Number
        input(v-model='phone')
        p Email
        input(v-model='mail')
        p Type of Business
        input(v-model='type')
        p Message
        textarea.w-full(v-model='msg')
        .flex.flex-row-reverse.my-5
          button.hover-bg-blue.hover-text-white.py-2.px-4.border.hover-border-transparent.rounded-full(@click='sendMail') Submit
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      pop: true,
      name: '',
      phone: '',
      mail: '',
      type: '',
      msg: ''
    }
  },
  methods: {
    sendMail () {
      window.open(`mailto:aceyk12@gmail.com?subject=Legendary%20Tech&body=Name:%20${this.name}%0D%0A%0D%0APhone:%20${this.phone}%0D%0A%0D%0AEmail:%20${this.mail}%0D%0A%0D%0ABusiness%20Type:%20${this.type}%0D%0A%0D%0A${this.msg}`)
    },
    close () {
      this.pop = !this.pop
      document.body.style.overflow = 'auto'
    }
  },
  mounted () {
    document.body.style.overflow = 'hidden'
  }
  // destroyed () {
  //   // document.body.style.overflow = 'auto'
  //   if (window.$STORE.modalCount === 0) {
  //     document.body.style.overflow = 'auto'
  //     document.querySelector('html').style.overflow = 'auto'
  //   }
  // }
}
</script>

<style lang="sass">
.overlay
  background: rgba(0,0,0,0.7)
.main
  top: 0
  left: 50%
  width: 300px
  height: 300px
  border-radius: 50px
  background: white
.skyblue
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
  background-image: url("/image/office.jpeg")
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
textarea
  height: 120px
</style>
