<template>
  <div>
    <AppHeader />
    <div class="offset">
      <slot />
    </div>
   
    <AppFooter />
  </div>
</template>

<style>
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0-modified | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* make sure to set some focus styles for accessibility */
:focus {
  outline: 0;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type="search"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical;
}

/**
 * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.
 */

audio,
canvas,
video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  max-width: 100%;
}

/**
 * Prevent modern browsers from displaying `audio` without controls.
 * Remove excess height in iOS 5 devices.
 */

audio:not([controls]) {
  display: none;
  height: 0;
}



[hidden] {
  display: none;
}



html {
  font-size: 100%; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -ms-text-size-adjust: 100%; /* 2 */
}


img {
  border: 0; /* 1 */
  -ms-interpolation-mode: bicubic; /* 2 */
}


figure {
  margin: 0;
}

/**
 * Correct margin displayed oddly in IE 6/7.
 */

form {
  margin: 0;
}

/**
 * Define consistent border, margin, and padding.
 */

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/**
 * 1. Correct color not being inherited in IE 6/7/8/9.
 * 2. Correct text not wrapping in Firefox 3.
 * 3. Correct alignment displayed oddly in IE 6/7.
 */

legend {
  border: 0; /* 1 */
  padding: 0;
  white-space: normal; /* 2 */
  *margin-left: -7px; /* 3 */
}

/**
 * 1. Correct font size not being inherited in all browsers.
 * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,
 *    and Chrome.
 * 3. Improve appearance and consistency in all browsers.
 */

button,
input,
select,
textarea {
  font-size: 100%; /* 1 */
  margin: 0; /* 2 */
  vertical-align: baseline; /* 3 */
  *vertical-align: middle; /* 3 */
}

/**
 * Address Firefox 3+ setting `line-height` on `input` using `!important` in
 * the UA stylesheet.
 */

button,
input {
  line-height: normal;
}

/**
 * Address inconsistent `text-transform` inheritance for `button` and `select`.
 * All other form control elements do not inherit `text-transform` values.
 * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.
 * Correct `select` style inheritance in Firefox 4+ and Opera.
 */

button,
select {
  text-transform: none;
}

/**
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
 *    and `video` controls.
 * 2. Correct inability to style clickable `input` types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *    `input` and others.
 * 4. Remove inner spacing in IE 7 without affecting normal text inputs.
 *    Known issue: inner spacing remains in IE 6.
 */

button,
html input[type="button"], /* 1 */
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button; /* 2 */
  cursor: pointer; /* 3 */
  *overflow: visible; /* 4 */
}

/**
 * Re-set default cursor for disabled elements.
 */

button[disabled],
html input[disabled] {
  cursor: default;
}

/**
 * 1. Address box sizing set to content-box in IE 8/9.
 * 2. Remove excess padding in IE 8/9.
 * 3. Remove excess padding in IE 7.
 *    Known issue: excess padding remains in IE 6.
 */

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
  *height: 13px; /* 3 */
  *width: 13px; /* 3 */
}

/**
 * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.
 * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome
 *    (include `-moz` to future-proof).
 */

input[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box; /* 2 */
  box-sizing: content-box;
}

/**
 * Remove inner padding and search cancel button in Safari 5 and Chrome
 * on OS X.
 */

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * Remove inner padding and border in Firefox 3+.
 */

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/**
 * 1. Remove default vertical scrollbar in IE 6/7/8/9.
 * 2. Improve readability and alignment in all browsers.
 */

textarea {
  overflow: auto; /* 1 */
  vertical-align: top; /* 2 */
}

/**
 * Remove most spacing between table cells.
 */

table {
  border-collapse: collapse;
  border-spacing: 0;
}

html,
button,
input,
select,
textarea {
  color: #222;
}

::-moz-selection {
  background: #b3d4fc;
  text-shadow: none;
}

::selection {
  background: #b3d4fc;
  text-shadow: none;
}

img {
  vertical-align: middle;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

textarea {
  resize: vertical;
}

.chromeframe {
  margin: 0.2em 0;
  background: #ccc;
  color: #000;
  padding: 0.2em 0;
}

@import url("https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;900&display=swap");

html {
  box-sizing: border-box;
}

body {
  color: white;
  font-family: "Exo 2", sans-serif;
  font-size: 14px;
  font-weight: 400;
  --bg-color: #000000a6;
  --orange: #fd953c;
  --blue: #359acbf7;
  --blue2: #308ab6;
  --grey-light: #c9ced0bb;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
/* .price{
  display: none;
} */
header {
  top: 0;
}
section {
  margin-bottom: 100px;
}
a {
  text-decoration: none;
  color: white;
}
a:active,
a:focus,
a:hover {
  outline-style: none !important;
}
img {
  max-width: 100%;
  height: auto;
}
.blue {
  color: var(--blue);
}
.blue-text {
  color: var(--blue) !important;
}
.visible {
  visibility: hidden;
}
.rotate180 {
  transition: 0.5s all;
  transform: rotate(180deg);
}

/*Main start*/

.wrapper {
  max-width: 1110px;
  margin: 0 auto;
}

.main__link-right {
  background: url(../img/svg/slider-menu__left.svg) no-repeat center left;
  width: 55px;
  height: 55px;
  display: inline-block;
}
.main__link-left {
  background: url(../img/svg/slider-menu__button_right.svg) no-repeat center
    left;
  width: 55px;
  height: 55px;
  margin-left: -3px;
  display: inline-block;
}
.main__bottom {
  display: flex;
}
.main__bottom-pic-one {
  display: flex;
  margin-right: 30px;
}
.main__bottom-pic-first {
  display: flex;
}

/*section 2*/

.cards {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}
.card-category {
  position: relative;
  max-width: 300px;
  min-width: 100px;
  transition: 0.5s all;
}
.card-category:hover img,
.card-category:focus img,
.card-category:active img {
  transform: scale(1.03);
  filter: grayscale(0%);
}
.card__desc {
  position: absolute;
  max-width: 255px;
  height: 60px;
  background-color: var(--bg-color);
  color: white;
  bottom: 30px;
  right: 0;
  z-index: 4;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.displaynone {
  display: none;
}
.cards.instrumental {
 

}
.cards.acsess {
  /* grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center; */
}
.offset{
  padding-top: 20px;
}

@media all and (max-width: 1200px) {
  .wrapper {
    padding: 0 30px;
  }
}
@media all and (max-width: 1000px) {
  .wrapper {
    padding: 0 30px;
  }

  .cards.instrumental {
    /* grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center; */
  }
  section {
    margin-bottom: 50px;
  }
}

@media all and (max-width: 800px) {
  .card__desc.card__desc-serv {
    font-size: 14px;
    padding: 0 10px;
  }

  img {
    max-height: 300px;
    min-width: 125px;
  }
  .cards.acsess {
    /* grid-template-columns: 1fr; */
  }
 
  .category {
    margin-bottom: 50px;
  }
  
}



@media all and (max-width: 500px) {
  .wrapper_footer {
    grid-template-columns: 1fr;
    gap: 30px;
    grid-template-rows: 450px 350px;
    justify-items: center;
    padding: 0;
  }
  .title-section {
    font-size: 20px;
    line-height: 1;
    padding-left: 0;
    background-size: 0;
    color: var(--blue);
  }

  .title-box {
    margin-bottom: 30px;
  }
  /* .hiro__title {
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 20px;
  } */
  .hiro__desc {
    margin-bottom: 40px;
    font-size: 15px;
  }


  .category__link {
    font-size: 15px;
  }
  .category__link.category__acces {
    margin-left: 0px;
  }
  .cards.services {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-template-rows: 1fr 1fr 1fr;
  }
  .box-footer {
    padding: 30px 10px;
  }
  section {
    margin-bottom: 50px;
  }
  .cards.instrumental {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

}

@media all and (max-height: 500px) {
  
  
}
@media all and (max-height: 400px) {
  /* .hiro__title {
    font-size: 22px;
    line-height: 22px;
  } */
  .location {
    margin-top: 10px;
    gap: 5px;
  }
  .location-city {
    flex-direction: row;
    gap: 16px;
    margin-top: 5px;
  }
  .hiro__desc {
    font-size: 15px;
  }
}
</style>
