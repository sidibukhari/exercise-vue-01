import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEye)
library.add(faEyeSlash)

Vue.component('font-awesome-icon', FontAwesomeIcon)
