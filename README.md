# 仿 [CNode](https://cnodejs.org/) 论坛

## 项目简介

该项目基于 Express 构建，仿照 [CNode](https://cnodejs.org/) 论坛制作，实现了注册、登录、修改个人资料、发布话题、编辑话题、删除话题等功能。以 express-generator 生成器创建项目模版，使用 Mongoose 第三方包操作 MongoDB 数据库实现数据的持久化存储，使用 art-template 模版引擎渲染页面，通过 MD5 加密中间件加密用户密码，通过 express-session 中间件保存用户登录信息。

## 技术栈

- Node.js
- Express
- MongoDB
- Mongoose
- art-template
- Scss
- AJAX
- jQuery

## 启动方法

### 安装依赖包

```bush
npm install
```

### 开启数据库

```bush
mongod
```

### 启动

```bush
DEBUG=express-forum:* npm start
```

## 目录结构

```pre
express-forum
├── bin
│   └── www                                           // 启动入口
├── controllers                                       // 控制器
│   ├── sessionController.js
│   ├── topicController.js  
│   └── userController.js
├── models                                            // 模型层
│   ├── connection.js
│   ├── topic.js
│   └── user.js
├── public                                            // 资源
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes                                            // 路由
│   ├── index.js
│   ├── topic.js
│   └── user.js
├── views                                             // 视图层
│   ├── _layouts
│   │   └── layout.html
│   ├── _partials
│   │   ├── footer.html
│   │   ├── header.html
│   │   ├── pagination.html
│   │   └── sidebar.html
│   ├── about.html
│   ├── create.html
│   ├── delete.html
│   ├── error.html
│   ├── index.html
│   ├── setting.html
│   ├── signin.html
│   ├── signup.html
│   ├── topic.html
│   ├── update.html
│   └── user.html
├── .gitignore
├── app.js                                            // 项目入口
├── filter.js                                         // 模板引擎全局过滤器
├── package.json
└── package-lock.json
```
