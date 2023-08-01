---
date: 2023-07-31
title: 常见的计算机操作系统
category:
  - 计算机基础
tag:
  - 操作系统
---

| name                                              | 类型                 |      |                |
| ------------------------------------------------- | -------------------- | ---- | -------------- |
| [unix](#unix)                                     | 系统内核             | 收费 |                |
| [linux](#linux)                                   | 系统内核             | 免费 |                |
| [GUN](#GUN)                                       | 工具集，GUN/Linux    |      |                |
| [ BusyBox](https://zh.wikipedia.org/wiki/BusyBox) | 工具集，Alpine Linux |      |                |
| BSD                                               | unix发行版           |      | 适合大型服务器 |
| AT&T System v                                     | unix发行版           |      | 适合大型服务器 |
| IBM AIX                                           | unix发行版           |      | 适合大型服务器 |
| Sun Solaris                                       | unix发行版           |      | 适合大型服务器 |
| Minix                                             | unix衍生版           |      | PC             |
| FreeBSD                                           | unix发行版           |      | PC             |
| [RHEL](#RHEL)                                     | linux发行版          | 收费 | 适合服务器     |
| [Ubuntu](#Ubuntu)                                 | linux发行版          |      | 适合服务器     |
| [CentOS](#CentOS)                                 | linux发行版          | 免费 | 适合服务器     |
| [Fedora](#Fedora)                                 | linux发行版          |      | PC             |
| [OpenSUSE](#OpenSUSE)                             | linux发行版          |      | PC             |
| [Windows](#Windows)                               | 独立内核             |      | PC             |
| [MacOS](#macOS)                                   | 类UNIX，又名 OS X    |      | mac            |
| [Darwin](#Darwin)                                 | 类UNIX               |      |                |
| [XUN](#XUN)                                       | 类UNIX,MacOS的内核   |      |                |
| [POSIX](#POSIX)                                   | 可移植操作系统接口   |      |                |
| Alpine Linux                                      | 类UNIX               |      |                |
| iOS                                               | Darwin为基础         |      | iPhone         |
| Android                                           | linux发行版          |      | Moblie         |

## 操作系统发展史

![img](https://img2018.cnblogs.com/blog/1489371/201904/1489371-20190417185144807-2020964720.png)

发展历程：Unix——Minix——Linux——Windows

1.最初的操作系统是Unix

2.在Version 7 Unix推出之后，UNIX源代码私有化并开始收费。有个教授为了给学生上课（收费的Unix不让用），于是就开发了mini-Unix（minix）,但这个教授仅仅用来教学，没有推广。

3.有个哥们儿(linus)发现这个minix比较厉害之后，就买过去自己研究，他采纳了网上的很多人的意见，于是就不断完善，就出现了Linux（Linus+minix）。

所以目前全球最厉害的最核心的操作系统就是Linux和Unix，但Unix收费，而Linux开源（免费），因此用Linux的人也很多。

 4.由于Unix和Linux操作系统有一个问题是，虽然他很高效，但是上手比较难，这个主要是通过输入命令来执行；对于大多数没有接触过电脑的人来说，就很难学；所以就出现了Windows，点击鼠标就可以解决很多问题，并且可视化程度很大。

## UNIX

类Unix操作系统的发展关系如下图所示：

![img](https://picx.zhimg.com/80/v2-a726d606720211b3fbfa96283e04e053_1440w.webp?source=1940ef5c)

### macOS

2011年及之前称 **Mac OS X**，2012年至2015年称 **OS X**，是[苹果公司](https://zh.wikipedia.org/wiki/蘋果公司)推出的使用图形用户界面的操作系统。macOS包含两个主要的部分：名为[Darwin](https://zh.wikipedia.org/wiki/Apple_Darwin)的核心，以[BSD](https://zh.wikipedia.org/wiki/BSD)源代码和[Mach](https://zh.wikipedia.org/wiki/Mach)[微内核](https://zh.wikipedia.org/wiki/微內核)为基础，由苹果公司和独立开发者社群合作开发；及一个由苹果公司开发，名为[Aqua](https://zh.wikipedia.org/wiki/Aqua_(GUI))的[专有](https://zh.wikipedia.org/wiki/专有软件)[图形用户界面](https://zh.wikipedia.org/wiki/圖形使用者介面)。

macOS是UNIX的一种，而且通过了UNIX官方认证。

我们看一下[UNIX认证的产品](https://link.zhihu.com/?target=https%3A//www.opengroup.org/openbrand/register/)。

![img](https://picx.zhimg.com/80/v2-0afe4aeda5e873ecc26a5315cccbb8bd_1440w.webp?source=1940ef5c)

前两个都是macOS。第一个是silicon CPU上运行的macOS，第二个是英特尔CPU上运行的macOS。

### Darwin

**Darwin** 是由[苹果公司](https://zh.wikipedia.org/wiki/蘋果公司)于2000年所发布的一个[开放源代码](https://zh.wikipedia.org/wiki/開放原始碼)[操作系统](https://zh.wikipedia.org/wiki/作業系統)。Darwin 是 [macOS](https://zh.wikipedia.org/wiki/MacOS) 和 [iOS](https://zh.wikipedia.org/wiki/IOS) 操作环境的操作系统部分。Darwin 是一种[类 Unix](https://zh.wikipedia.org/wiki/类_Unix) 操作系统，包含开放源代码的 [XNU](https://zh.wikipedia.org/wiki/XNU) [内核](https://zh.wikipedia.org/wiki/内核)，其以[微核心](https://zh.wikipedia.org/wiki/微核心)为基础的核心架构来实现 [Mach](https://zh.wikipedia.org/wiki/Mach)，而操作系统的服务和[用户空间](https://zh.wikipedia.org/wiki/使用者空間)工具则以 [BSD](https://zh.wikipedia.org/wiki/BSD) 为基础

## linux

又称作GUN/Linux,Linux是一种免费使用和自由传播的类UNIX开源操作系统，其内核由林纳斯·本纳第克特·托瓦兹于1991年10月5日首次发布，它主要受到Minix和Unix思想的启发，是一个基于POSIX和Unix的多用户、多任务、支持多线程和多CPU的操作系统。而Linux发行套件系统才是我们常说的Linux操作系统，也即是由Linux内核与各种常用软件的集合产品，全球大约有数百款的Linux系统版本，每个系统版本都有自己的特性和目标人群，本文我们主要介绍其中应用比较广泛的7个Linux系统版本。

##### GUN

GNU计划，又称革奴计划，是由Richard Stallman在1983年9月27日公开发起的。它的目标是创建一套完全自由的操作系统。GNU是“GNU's Not Unix”的递归缩写，发音为 [ɡəˈnuː]。

由于GNU将要实现UNIX系统的接口标准，因此GNU计划可以分别开发不同的操作系统部件，包含操作系统内核HURD和可自由使用的软件。

1990年，GNU计划已经开发出的软件包括了一个功能强大的文字编辑器Emacs，C语言编译器GCC，以及大部分UNIX系统的程序库和工具。唯一依然没有完成的重要组件就是操作系统的内核(称为HURD)。

1991年，Linus Torvalds编写出了与UNIX兼容的Linux操作系统内核并在GPL条款下发布。Linux之后在网上广泛流传，许多程序员参与了开发与修改。

1992年Linux与其他GNU软件结合，完全自由的操作系统正式诞生。（尽管如此GNU计划自己的内核Hurd依然在开发中，目前已经发布Beta版本。）

### Ubuntu

Ubuntu的名字对于了解Linux系统的人来说可谓是人人皆知。严格来说不能算一个独立的发行版本，Ubuntu是基于 Debian 的 unstable 版本加强而来。Debian衍生出来的产物，简化了安装过程的同时也大大缩小了容量，但是从 Debian 那里继承下来的网络维护的方式仍然为用户提供了大量的软件。这个版本使用 Gnome 作为默认图形界面。

![img](https://ask.qcloudimg.com/http-save/yehe-1289394/1e91d357ac9f742dd3a5d83d6afec0e7.png)

Ubuntu 是一个由社区开发的基于 linux 的操作系统，适用于笔记本电脑、桌面电脑和[服务器](https://cloud.tencent.com/product/cvm?from_column=20421&from=20421)。无论用户是在家庭、学校还是工作时使用，Ubuntu都包含了用户所需的所有程序：无论是文字处理和电子邮件，还是Web服务和编程工具。

### RHEL

Redhat，应该称为Redhat系列，包括

（1）RHEL（Redhat Enterprise Linux，也就是所谓的Redhat Advance Server，收费版本，稳定性非常好，适合服务器使用）            

（2）Fedora Core（由原来的Redhat桌面版本发展而来，免费版本，稳定性较差，最好只用于桌面应用）            

（3）CentOS（RHEL的社区克隆版本，免费版本，稳定性非常好，适合服务器使用）    

Redhat是国内使用人群最多的Linux版本，以至于有的人将Redhat等同于Linux，而有些老手更是只用这一个版本的Linux。所以有什么不明白的地方，很容易找到人来问，而且网上的Linux教程基本都是以Redhat为例来讲解。Redhat系列的包管理方式采用的是基于RPM包和YUM包的管理方式，包分发方式是编译好的二进制文件。

![img](https://ask.qcloudimg.com/http-save/yehe-1289394/a5a50f31a97e6278e6ab8f4bf528468e.png)

### CentOS

社区企业操作系统（Community Enterprise Operating System,Centos）           

来自于Red Hat Enterprise Linux依照开放源代码规定释出的源代码所编译而成。由于出自同样的源代码，因此有些要求高度稳定性的服务器以CentOS替代商业版的Red Hat Enterprise Linux使用。两者的不同，在于CentOS并不包含封闭源代码软件。          

CentOS 是RHEL源代码再编译的产物，而且在RHEL的基础上修正了不少已知的Bug，相对于其他Linux发行版，其稳定性值得信赖。

![img](https://ask.qcloudimg.com/http-save/yehe-1289394/8d51ea9b4585b2eee8e7f643fe6e5ace.png)

### Fedora   

用户可免费体验到最新的技术或工具，而功能成熟后会被加入到RHEL系统中。因此也被称为RHEL系统的“试验田”，如果感兴趣的话，可以多关注此类系统的发展变化及新特性。            由全球社区爱好者构建的面向日常应用的快速且强大的操作系统。它允许任何人自由地使用、修改和重发布，无论现在还是将来。它由一个强大的社群开发，这个社群的成员以自己的不懈努力，提供并维护自由、开源代码的软件和开放的标准。Fedora （第七版以前为Fedora Core）是一款基于 Linux 的操作系统，也是一组维持计算机正常运行的软件集合。其目标是创建一套新颖、多功能并且自由和开源的操作系统。

![img](https://ask.qcloudimg.com/http-save/yehe-1289394/6768bb8bebc9a0a17cdbd65c6657543c.png)

### OpenSUSE    

德国著名的Linux系统，全球范围内有着不错的声誉及市场占有率，发行量在欧洲占第一位。    OpenSUSE对个人来说是完全免费的，包括使用和在线更新。OpenSUSE被评价为最华丽的Linux桌面发行版，甚至超越win7，但它的优势绝不仅仅局限于win7还要绚丽的用户交互界面，其性能也绝不亚于其他Linux桌面发行版！

![img](https://ask.qcloudimg.com/http-save/yehe-1289394/c9797252ea82e55bc048ff5c46d9da14.png)

### Gentoo    

具有极高的自定制性，操作复杂，因此适合有经验的人员使用。它能为几乎任何应用程序或需求自动地作出优化和定制。追求极限的配置、性能，以及顶尖的用户和开发者社区，都是Gentoo体验的标志特点。Gentoo的哲学是自由和选择。得益于一种称为Portage的技术，Gentoo能成为理想的安全服务器、开发工作站、专业桌面、游戏系统、嵌入式解决方案或者别的东西——你想让它成为什么，它就可以成为什么。

### Debian    

应该称为Debian 系列，包括Debian和Ubuntu等。Debian是社区类Linux的典范，是迄今为止最遵循GNU规范的Linux系统。提供了接近十万种不同的开源软件支持，在国外用于很高的认可度和使用率。对于各类内核架构支持性良好，稳定性、安全性强更有免费的技术支持。         

Debian分为三个版本分支(branch):     

（1）unstable，为最新的测试版本，其中包括最新的软件包，但是也有相对较多的bug，适合桌面用户。     

（2）testing，经过unstable中的测试，相对较为稳定，也支持了不少新技术。     

（3）stable，一般只用于服务器，上面的软件包大部分都比较过时，但是稳定和安全性都非常的高。

总体来看，Linux的发行版本可以大体分为两类，一类是商业公司维护的发行版本，一类是社区组织维护的发行版本，前者以著名的Red Hat（RHEL红帽）为代表，后者以Debian为代表。

## Windows

**Microsoft Windows**，有时被译为**微软视窗**或**视窗操作系统**，早期版本的Windows通常被看作仅仅是运行于[MS-DOS](https://zh.wikipedia.org/wiki/MS-DOS)系统中的一个[图形用户界面](https://zh.wikipedia.org/wiki/图形用户界面)，不是操作系统，主要因为它们在MS-DOS上运行并且把它用作[文件系统](https://zh.wikipedia.org/wiki/文件系统)服务。Windows NT系统是独立的操作系统，包括 NT、XP、Vista、7-11等，因为使用的是**新技术（NT）**内核，是独立的内核，不依赖其它操作系统。

## POSIX

可移植操作系统接口（英语：Portable Operating System Interface，缩写为POSIX）是IEEE为要在各种UNIX操作系统上运行软件，而定义API的一系列互相关联的标准的总称，其正式称呼为IEEE Std 1003，而国际标准名称为ISO/IEC 9945。此标准源于一个大约开始于1985年的项目。POSIX这个名称是由理查德·斯托曼（RMS）应IEEE的要求而提议的一个易于记忆的名称。它基本上是Portable Operating System Interface（可移植操作系统接口）的缩写，而X则表明其对Unix API的传承。

Linux基本上逐步实现了POSIX兼容，但并没有参加正式的POSIX认证。[1]

微软的Windows NT声称部分实现了POSIX标准

## 名词解释：

- 内核(kernel)：系统的心脏，是运行程序和管理像磁盘和打印机等硬件设备的核心程序，主要负责控制硬件、管理文件系统、程序进程等，它提供了一个在裸设备与应用程序间的抽象层

- Linux发行版：Linux发行版 (也被叫做 GNU/Linux 发行版) 在内核基础上，加入了桌面环境、办公套件、媒体播放器、数据库等应用软件。

  一个典型的Linux发行版包括：Linux内核，一些GNU程序库和工具，命令行shell，图形界面的X Window系统和相应的桌面环境，如KDE或GNOME，并包含数千种从办公套件，编译器，文本编辑器到科学工具的应用软件。

- GUI：**图形用户界面**（英语：**G**raphical **U**ser **I**nterface，缩写：**GUI**）是指采用图形方式显示的[计算机](https://zh.wikipedia.org/wiki/电子计算机)操作[用户界面](https://zh.wikipedia.org/wiki/用户界面)。与早期计算机使用的[命令行界面](https://zh.wikipedia.org/wiki/命令行界面)相比，除了降低用户的操作负担之外，对于新用户而言，图形界面对于用户来说在[视觉](https://zh.wikipedia.org/wiki/视觉)上更易于接受，学习成本大幅下降，也让电脑的大众化得以实现。

  虽然图形用户界面已经成为现代电脑的主要界面，然而这界面必定要透过在[显示器](https://zh.wikipedia.org/wiki/顯示器)的特定位置，以“各种美观、而不单调的视觉消息”提示用户“状态的改变”，势必得比简单的文字消息呈现，花上更多的[电脑运算](https://zh.wikipedia.org/wiki/電腦運算)能力，计算“要改变显示器哪些光点，变成哪些颜色”，功能命令的设计也比较复杂，现代操作系统的图形复杂程度更远超早期的GUI。

- X86：CPU架构，市面上的CPU分类主要分有两大阵营，一个是[intel](https://baike.baidu.com/item/intel/125450?fromModule=lemma_inlink)、[AMD](https://baike.baidu.com/item/AMD/5905?fromModule=lemma_inlink)为首的[复杂指令集](https://baike.baidu.com/item/复杂指令集/7991706?fromModule=lemma_inlink)CPU，另一个是以[IBM](https://baike.baidu.com/item/IBM/9190?fromModule=lemma_inlink)、[ARM](https://baike.baidu.com/item/ARM/5907?fromModule=lemma_inlink)为首的[精简指令集](https://baike.baidu.com/item/精简指令集/4736552?fromModule=lemma_inlink)CPU。两个不同品牌的CPU，其产品的架构也不相同，例如，Intel、AMD的CPU是[X86架构](https://baike.baidu.com/item/X86架构/7470217?fromModule=lemma_inlink)的，而IBM公司的CPU是[PowerPC](https://baike.baidu.com/item/PowerPC/7381773?fromModule=lemma_inlink)架构，ARM公司是[ARM架构](https://baike.baidu.com/item/ARM架构/9154278?fromModule=lemma_inlink)。



## 参考

- [【Linux基础】Unix与Linux操作系统介绍](https://www.cnblogs.com/badboy200800/p/10724068.html)
- [XNU-维基百科](https://zh.wikipedia.org/wiki/XNU)
- [Darwin-维基百科](https://zh.wikipedia.org/wiki/Darwin_(%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F))
- [MacOS-维基百科](https://zh.wikipedia.org/wiki/MacOS)
- [Microsoft Windows-维基百科](https://zh.wikipedia.org/wiki/Microsoft_Windows)

