## vue-cnode.js
本项目是一个非常适合新手学习(Vue)的项目

- 本项目是一个简易版的conde社区

## 使用技术
```
"vue": "^2.6.10",
"vue-router": "^3.1.6",
"element-ui": "^2.13.0",
"ui-framed": "0.0.12", 自己写的框架库感兴趣的同学可以去看看[传送门](https://github.com/zhoubopro/ui-framed)
"axios": "^0.19.0",
"moment": "^2.24.0",
```

## 目录结构
```bash
.
├── src
│   ├── main.js                          # 程序入口
│   ├── App.vue                          # 组件入口
│   ├── api                              # 接口
│   │   ├── index.js                     # api接口方法
│   │   ├── config.js                    # api配置参数
│   │   └── http.js                      # 封装axios
│   ├── assets                           # 资源目录
│   ├── components
│   │   ├── p-header
│   │   │   └── p-header.vue             # 头部
│   │   └── p-sidebar
│   │       └── p-sidebar.vue            # 侧边栏
│   ├── router
│   │   └── index.js                     # 路由配置
│   └── views
│       ├── 404                          # 404
│       ├── about                        # 关于页
│       ├── portal                       # 首页(话题列表页)
│       ├── article                      # 话题详情页
│       └── user                         # 用户详情页/个人主页
├── vue.config.js                        # vue-cli 配置文件
```


## 启动程序
``` bash
# install dependencies
yarn or npm install

# serve with hot reload at localhost:8080
yarn serve or npm run serve

# build for production with minification
yarn build or npm run build

```

----
