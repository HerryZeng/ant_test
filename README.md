# ant_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### 解除Ubuntu系统的文件句柄限制
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

### 手动安装nvm
wget https://github.com/nvm-sh/nvm/archive/v0.37.0.tar.gz
tar zxvf v0.37.0.tar.gz
cd nvm-0.37.0
./install.sh

重新登录之后
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node/
nvm install 10.16.0
nvm list

### 设置npm 安装源
npm config set registry https://registry.npm.taobao.org/

### 手动安装依赖包
npm install

### 全局安装vue-cli和cnpm
npm -g install @vue/cli
npm -g install cnpm