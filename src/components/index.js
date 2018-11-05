import ErrorPage from './error'
import Divider from './divider'

const iComponents = {
  install: function (Vue) {
    Vue.component('ErrorPage', ErrorPage)
    Vue.component('Divider', Divider)
  }
}

export default iComponents
