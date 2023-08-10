---
date: 2023-08-10
title: macOS常用配置
category:
  - 计算机基础
tag:
  - 操作系统
---

## 常用系统快捷键

> 完整的系统快捷键参考 [apple官方文档](https://support.apple.com/zh-cn/HT201236)

获取当前文件的绝对路径：option+command+c 

展示当前文件绝对路径：option+command+p 

打开和关闭 隐藏文件显示： cmd+shirft+.

打开新的窗口： cmd+N

打开聚焦：command+空格

## 经常用到的配置文件

>.npmrc、.zshrc等文件名带rc的解释: [链接](https://www.cnblogs.com/hhddd-1024/p/16138103.html)
>
>.bashrc .bash_profile 和 .profile之间的区别：[链接](https://zhuanlan.zhihu.com/p/513257481)

**/etc/hosts**：hosts映射配置文件，例如  127.0.0.1	localhost

**/etc/profile**：所有用户共用的环境配置

**~/.bash_profile**：当前用户的bash配置  优先级：~/.bash_profile > ~/.profile

**~/.profile** : 主要用来配置环境变量

**~/.bashrc**:  保存个人的一些个性化设置，如命令别名、路径,一般会在.bash_profile中引入该文件

**~/.zshrc**: 计算机每次启动自动执行source ~/.zshrc,一般会在~/.zshrc中添加source ~/.bash_profile，以确保.bash_profile中的修改永久生效

**~/.gitconfig**: 全局的git配置文件，可以配置默认用户名密码等

**~/.npmrc**: npm镜像源配置

**~/.ssh**: 主要用作管理 git ssh秘钥

## 系统目录介绍

**/bin**：bin是binary的简写，主要是一些系统必备的工具比如，cp,ls,mv,rm,sh等

**/sbin**：是管理员用于管理系统的一些必备命令，比如常用的，ifconfig,mount,reboot,shutdown等

**/usr**： 目录下面的基本都是系统自带第三方和用户安装的第三方软件的安装目录

**/usr/bin**：用户和管理员都需要用到的一些第三方软件

**/usr/local/**: 用户自己安装的一些第三方软件所在位置

**/usr/local/bin**: 此目录下一般都是用户自己安装的一些软件的二进制文件入口，比如用homebrew安装的nginx,他的执行文件软连就在此目录，例如：nginx@ -> ../Cellar/nginx/1.15.8/bin/nginx。可以看到他就是执行homebrew安装的软件位置。放在这里的原因主要是在系统变量里面 echo $PATH 已经配置/usr/local/bin 目录，软件软连到此目录后，命令行上直接输入命令就能执行了。方便软件的管理

**/usr/local/etc**: 一些第三方软件的配置信息，比如之前说的nginx，就在此目录：/usr/local/etc/nginx

**/etc**: 用于存放系统配置文件的地方，如用户密码文件/etc/passwd，目录指向的实际目录是：/private/etc

**/tmp**: 临时文件存放目录，其权限为所有人任意读写。目录指向的实际目录是 /private/tmp 

**/var**: 存放经常变化的文件，如日志文件，目录指向的实际目录是 /private/var

**/Applications**: 基本一些常规应用程序都在此目录

**/Users**: 用户目录，存放用户的一些文档，资料信息

**/System**: 只包含一个名为Library的目录，这个子目录中存放了系统的绝大部分组件，如各种framework，以及内核模块，字体文件等等

**/Library**: 系统的数据文件、帮助文件、文档等等

## 常用工具介绍

**Homebrew**：用来管理很多在终端下操作的程序以及软件包的依赖

**Command Line Tools**： 很多环境和软件都会使用到和依赖它，git、Carthage、python3

**Bash（Zsh）**：zsh是一种`shell`语言，兼容`bash`，提供强大的命令行功能，比如tab补全，自动纠错功能等

**Node**: 是一个基于Chrome V8 引擎、能够在服务器端运行JavaScript的开放源代码、跨平台JavaScript 运行环境

**npm**: JavaScript 包管理工具

**vi(vim)**: vi 是 visual interface 的缩写，vim 是 vi IMproved(增强版的vi)

**Git**: 代码管理工具

## 终端命令

Mac有上千条命令，每条命令还有许多可选参数和具体的使用方式，但是你却不需要记住这些命令。你只需要记住一个：man，查看具体的命令说明，想要推出直接键入q即可。

#### 教程&命令大全手册推荐

> 没有好的macos的命令手册，但是大部分主要命令和linux一样，下边给的是好用的linux命令手册

- [菜鸟教程](https://www.runoob.com/linux/linux-command-manual.html)
- [ipcmen](https://ipcmen.com/category/shell-course)： 有导航、可搜索，可以用来学习
- [git开源项目](https://jaywcjlove.gitee.io/linux-command/)： 可搜索，命令的中文介绍和示例最详细

#### 一些有用的命令

临时允许chrome打开非安全端口

```shell
open -a 'Google Chrome' --args --explicitly-allowed-ports=10080
```

开启一个允许跨域的chrome

```shell
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=/Users/nick_xu/MyChromeDevUserData/
```

## 常用快捷键

> 完整的快捷键可以参考 [apple官方文档](https://support.apple.com/zh-cn/guide/terminal/trmlshtcts/mac)

**将光标移动到行首**：control + a

**将光标移动到行尾**：control + e

**清除屏幕**：control + l

**搜索以前使用命令**：control + r

**清除当前行**：control + u

**清除至当前行尾**：control + k

**单词为单位移动**：option + 方向键

**自动补全**：tab

**终止命令**：control + C

**查看历史命令**：history

**浏览历史命令**：上、下键