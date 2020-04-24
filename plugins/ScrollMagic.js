import Vue from 'vue'
import * as ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>true!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

Object.defineProperty(Vue.prototype, '$scrollmagic', { value: ScrollMagic })
