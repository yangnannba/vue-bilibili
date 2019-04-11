<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>
/* 公共库 */
body,
div,
ol,
ul,
li,
dl,
dt,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
p,
form,
fieldset,
legend,
input,
button,
figcaption,
figure,
textarea,
img {
  margin: 0;
  padding: 0;
  border: 0;
}

html {
  width: 100%;
  margin: 0 auto;
  outline: 0;
  -webkit-text-size-adjust: none;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

a img {
  border: none;
}

a > img {
  vertical-align: bottom;
}

/* 页面主代码 */
body {
  font-family: 'Heiti SC', 'Microsoft YaHei', "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333333;
  background: #fff;
  overflow-y: scroll;
  overflow-x: hidden;
  *overflow-y: auto !important;
  max-width: 640px;
  margin: 0 auto;
  font-size: 0.55rem;
	line-height: 1.5em;
}

#app{
	padding:0.4rem;
}
</style>
