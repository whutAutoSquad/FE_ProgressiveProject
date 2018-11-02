import ErrorPage from './error'

const iComponents = {
  install: function (Vue) {
    Vue.component('ErrorPage', ErrorPage)
  }
}

export default iComponents
