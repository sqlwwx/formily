import { resolve } from 'path'
export default {
  mode: 'site',
  logo: '//img.alicdn.com/imgextra/i2/O1CN01Kq3OHU1fph6LGqjIz_!!6000000004056-55-tps-1141-150.svg',
  title: 'Reactive',
  hash: true,
  favicon:
    '//img.alicdn.com/imgextra/i3/O1CN01XtT3Tv1Wd1b5hNVKy_!!6000000002810-55-tps-360-360.svg',
  outputPath: './doc-site',
  navs: {
    'en-US': [
      {
        title: 'Guide',
        path: '/guide',
      },
      {
        title: 'API',
        path: '/api',
      },
      {
        title: 'Home Site',
        path: 'https://formilyjs.org',
      },
      {
        title: 'GITHUB',
        path: 'https://github.com/alibaba/formily',
      },
    ],
    'zh-CN': [
      {
        title: '指南',
        path: '/zh-CN/guide',
      },
      {
        title: 'API',
        path: '/zh-CN/api',
      },
      {
        title: '主站',
        path: 'https://formilyjs.org',
      },
      {
        title: 'GITHUB',
        path: 'https://github.com/alibaba/formily',
      },
    ],
  },
  headScripts: [
    `
    function loadAd(){
      var header = document.querySelector('.__dumi-default-layout-content .markdown h1')
      if(header && !header.querySelector('#_carbonads_js')){
        var script = document.createElement('script')
        script.src = '//cdn.carbonads.com/carbon.js?serve=CEAICK3M&placement=formilyjsorg'
        script.id = '_carbonads_js'
        script.classList.add('head-ad')
        header.appendChild(script)
      }
    }
    var request = null
    var observer = new MutationObserver(function(){
      cancelIdleCallback(request)
      request = requestIdleCallback(loadAd)
    })
    document.addEventListener('DOMContentLoaded',function(){
      loadAd()
      observer.observe(
        document.body,
        {
          childList:true,
          subtree:true
        }
      )
    })
    `,
  ],
  styles: [
    `.__dumi-default-navbar-logo{
      background-size: 140px!important;
      background-position: center left!important;
      background-repeat: no-repeat!important;
      padding-left: 150px!important;/*可根据title的宽度调整*/
      font-size: 22px!important;
      color: #000!important;
      font-weight: lighter!important;
    }
    .__dumi-default-navbar{
      padding: 0 28px !important;
    }
    .__dumi-default-layout-hero{
      background-image: url(//img.alicdn.com/imgextra/i4/O1CN01ZcvS4e26XMsdsCkf9_!!6000000007671-2-tps-6001-4001.png);
      background-size: cover;
      background-repeat: no-repeat;
      padding: 120px 0 !important;
    }
    .__dumi-default-layout-hero h1{
      color:#45124e !important;
      font-size:80px !important;
      padding-bottom: 30px !important;
    }
    .__dumi-default-dark-switch {
      display:none
    }
    nav a{
      text-decoration: none !important;
    }
    #carbonads * {
      margin: initial;
      padding: initial;
    }
    #carbonads {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,
        sans-serif;
    }
    #carbonads {
      display: flex;
      max-width: 330px;
      background-color: hsl(0, 0%, 98%);
      box-shadow: 0 1px 4px 1px hsla(0, 0%, 0%, 0.1);
      z-index: 100;
      float:right;
    }
    #carbonads a {
      color: inherit;
      text-decoration: none;
    }
    #carbonads a:hover {
      color: inherit;
    }
    #carbonads span {
      position: relative;
      display: block;
      overflow: hidden;
    }
    #carbonads .carbon-wrap {
      display: flex;
    }
    #carbonads .carbon-img {
      display: block;
      margin: 0;
      line-height: 1;
    }
    #carbonads .carbon-img img {
      display: block;
    }
    #carbonads .carbon-text {
      font-size: 13px;
      padding: 10px;
      margin-bottom: 16px;
      line-height: 1.5;
      text-align: left;
    }
    #carbonads .carbon-poweredby {
      display: block;
      padding: 6px 8px;
      background: #f1f1f2;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
      font-size: 8px;
      line-height: 1;
      border-top-left-radius: 3px;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    `,
  ],
  menus: {
    '/guide': [
      {
        title: 'Introduction',
        path: '/guide',
      },
      { title: 'Concept', path: '/guide/concept' },
      {
        title: 'Best Practice',
        path: '/guide/best-practice',
      },
    ],
    '/api': [
      {
        title: '@formily-x/reactive',
        children: [
          {
            title: 'observable',
            path: '/api/observable',
          },
          {
            title: 'autorun',
            path: '/api/autorun',
          },
          {
            title: 'reaction',
            path: '/api/reaction',
          },

          {
            title: 'batch',
            path: '/api/batch',
          },
          {
            title: 'action',
            path: '/api/action',
          },
          {
            title: 'define',
            path: '/api/define',
          },
          {
            title: 'model',
            path: '/api/model',
          },
          {
            title: 'observe',
            path: '/api/observe',
          },
          {
            title: 'markRaw',
            path: '/api/mark-raw',
          },
          {
            title: 'markObservable',
            path: '/api/mark-observable',
          },
          {
            title: 'raw',
            path: '/api/raw',
          },
          {
            title: 'toJS',
            path: '/api/to-js',
          },
          {
            title: 'untracked',
            path: '/api/untracked',
          },
          {
            title: 'hasCollected',
            path: '/api/has-collected',
          },
          {
            title: 'Tracker',
            path: '/api/tracker',
          },
          {
            title: 'Type Chekcer',
            path: '/api/type-checker',
          },
        ],
      },
      {
        title: '@formily-x/reactive-react',
        children: [
          {
            title: 'observer',
            path: '/api/react/observer',
          },
        ],
      },
      {
        title: '@formily-x/reactive-vue',
        children: [
          {
            title: 'observer',
            path: '/api/vue/observer',
          },
        ],
      },
    ],
    '/zh-CN/guide': [
      {
        title: '介绍',
        path: '/zh-CN/guide',
      },
      { title: '核心概念', path: '/zh-CN/guide/concept' },
      {
        title: '最佳实践',
        path: '/zh-CN/guide/best-practice',
      },
    ],
    '/zh-CN/api': [
      {
        title: '@formily-x/reactive',
        children: [
          {
            title: 'observable',
            path: '/zh-CN/api/observable',
          },
          {
            title: 'autorun',
            path: '/zh-CN/api/autorun',
          },
          {
            title: 'reaction',
            path: '/zh-CN/api/reaction',
          },

          {
            title: 'batch',
            path: '/zh-CN/api/batch',
          },
          {
            title: 'action',
            path: '/zh-CN/api/action',
          },
          {
            title: 'define',
            path: '/zh-CN/api/define',
          },
          {
            title: 'model',
            path: '/zh-CN/api/model',
          },
          {
            title: 'observe',
            path: '/zh-CN/api/observe',
          },
          {
            title: 'markRaw',
            path: '/zh-CN/api/mark-raw',
          },
          {
            title: 'markObservable',
            path: '/zh-CN/api/mark-observable',
          },
          {
            title: 'raw',
            path: '/zh-CN/api/raw',
          },
          {
            title: 'toJS',
            path: '/zh-CN/api/to-js',
          },
          {
            title: 'untracked',
            path: '/zh-CN/api/untracked',
          },
          {
            title: 'hasCollected',
            path: '/zh-CN/api/has-collected',
          },
          {
            title: 'Tracker',
            path: '/zh-CN/api/tracker',
          },
          {
            title: 'Type Chekcer',
            path: '/zh-CN/api/type-checker',
          },
        ],
      },
      {
        title: '@formily-x/reactive-react',
        children: [
          {
            title: 'observer',
            path: '/zh-CN/api/react/observer',
          },
        ],
      },
      {
        title: '@formily-x/reactive-vue',
        children: [
          {
            title: 'observer',
            path: '/zh-CN/api/vue/observer',
          },
        ],
      },
    ],
  },
}
