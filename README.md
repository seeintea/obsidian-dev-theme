### DSAA_CODE

🍈随缘刷题，数据结构 & 各种各样不会的算法

我想大概率都是暴力法吧 嘤嘤嘤



##### 项目信息

<code>rollup^2.36.0</code> + <code>typescript^4.1.3</code> + <code>jest^26.6.3</code>



##### 运行命令

```bash
# 安装依赖
$ yarn install
# 项目打包
$ yarn build
# 单元测试
$ yarn test
```



##### 目录结构

```
├─ .gitignore
├─ README.md
├─ coverage	// jest测试覆盖率文件
├─ dist	// rollup打包文件目录
├─ jest.config.js	// jest配置文件
├─ node_modules
├─ package.json
├─ rollup.config.js	// rollup配置文件
├─ src	// 项目代码目录
│    ├─ index.ts	// 项目模块
│    ├─ sort	// 子类别目录
│    │    ├─ ...	// 子类别代码
│    │    └─ index.ts	// 子类别模块
│    └─ ...
├─ test	// jest测试目录
│    └─ *.test.js
├─ tsconfig.json	// typescript配置文件
└─ yarn.lock
```



> 写到这里发现没做性能测试 😓 
>
> 先这样吧 来日方长～