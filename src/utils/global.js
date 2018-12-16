import Vue from 'vue'
import router from '@/router/index'
import axios from 'axios'
import moment from 'moment'
import echarts from 'echarts'
import { url } from '@/utils/connectConfig.js'

var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function generateMixed(n) {
  var res = "";
  for (var i = 0; i < n; i++) {
    var id = Math.ceil(Math.random() * 35);
    res += chars[id];
  }
  return res;
}
export default {
  install(Vue, options) {
    /*
     * 此处用于配置Vue.config, 即Vue的全局配置
     * 详见 https://cn.vuejs.org/v2/api/#全局配置
     * 主要是配置一下按键
     * 默认键名有
     *    .enter
     *    .tab
     *    .delete (捕获“删除”和“退格”键)
     *    .esc
     *    .space
     *    .up
     *    .down
     *    .left
     *    .right
     * 注意!!!
     *  camelCase 不可用
     *  mediaPlayPause: 179, // 此设置无效
     *  取而代之的是 kebab-case 且用双引号括起来
     *  "media-play-pause": 179, //采用此设置
     */
    Vue.config.keyCodes = {
      a: 65,
      b: 66,
      c: 67,
      d: 68,
      e: 69,
      f: 70,
      g: 71,
      h: 72,
      i: 73,
      j: 74,
      k: 75,
      l: 76,
      m: 77,
      n: 78,
      o: 79,
      p: 80,
      q: 81,
      r: 82,
      s: 83,
      t: 84,
      u: 85,
      v: 86,
      w: 87,
      x: 88,
      y: 89,
      z: 90,
      num_0: 48,
      num_1: 49,
      num_2: 50,
      num_3: 51,
      num_4: 52,
      num_5: 53,
      num_6: 54,
      num_7: 55,
      num_8: 56,
      num_9: 57,
    }

    /*
     * 将所需的常用工具绑定到Vue实例上,以便于进行随时引用
     *  所有原始包的直接引入,绑定前缀为下划线 _
     * 自定义的方法属性,绑定前缀为$
     */
    Vue.prototype._axios = axios; //axios 全局方法
    Vue.prototype._moment = moment; //moment 全局方法
    Vue.prototype._echarts = echarts ;//echarts 全局方法

    Vue.prototype.$url = url; //url全局配置


    /**
     * path 路径
     * params {}
     * id
     */
    Vue.prototype.routerLink = function() {
      let params = {};
      let path = arguments[0] ? arguments[0] : null;
      params['type'] = arguments[1] ? arguments[1] : null;
      params['id'] = arguments[2] ? arguments[2] : 0;
      params['noce_str'] = generateMixed(7);
      let obj = arguments[3] ? arguments[3] : null;

      if (obj != null) {
        if (typeof obj == "object") {
          for (let key in obj) {
            params[key] = obj[key];
          }
        } else {
          throw new Exception("路由链接函数第四个参数只支持object类型");
        }
      }

      router.push({
        path: path,
        query: params
      })
    }
    //成功全局方法
    Vue.prototype.successMessage = function(value) {
      this.$message({
        showClose: true,
        message: value,
        type: 'success',
        duration: 1000
      });
    }
    Vue.prototype.errorMessage = function(value) {
      this.$message({
        showClose: true,
        message: value,
        type: 'error',
        duration: 2500
      });
    }

    //验证字段
    Vue.prototype.checkType = function(str, type) {
      switch (type) {
        case 'email':
          return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'phone':
          return /^1[3-9][0-9]{9}$/.test(str);
        case 'tel':
          return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'number':
          return /^[0-9]+.?[0-9]*$/.test(str);
        case 'english':
          return /^[a-zA-Z]+$/.test(str);
        case 'text':
          return /^\w+$/.test(str);
        case 'chinese':
          return /^[\u4E00-\u9FA5]+$/.test(str);
        case 'lower':
          return /^[a-z]+$/.test(str);
        case 'upper':
          return /^[A-Z]+$/.test(str);
        default:
          return true;
      }
    }

    //获取月份第一天与最后一天
    Vue.prototype.$getLastMonth = function(date) {

      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = new Date(y, m, 0);
      if (m >= 1 && m <= 9) {
        m = "0" + m;
      }
      let firstDay = y + '-' + m + '-' + '01';
      let lastDay = y + '-' + m + '-' + d.getDate();
      return [firstDay, lastDay];
    }
    //删除localStorage
    Vue.prototype.removeLocalStorage = function(name) {
        if (!name) return;
        window.localStorage.removeItem(name);
      },
      // 存储localStorage
      Vue.prototype.setLocalStorage = function(name, content) {
        if (!name) return;
        if (typeof content !== 'string') {
          content = JSON.stringify(content);
        }
        window.localStorage.setItem(name, content);
      },
      //获取localStorage
      Vue.prototype.getLocalStorage = function(name) {
        if (!name) return;
        return window.localStorage.getItem(name);
      },

      Vue.prototype.$reset = function() {
        window.location.reload();
      }

  }
}
