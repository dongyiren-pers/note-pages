(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1010:function(t,a,s){"use strict";s.r(a);var v=s(14),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第1章-docker-基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第1章-docker-基础"}},[t._v("#")]),t._v(" 第1章 Docker 基础")]),t._v(" "),s("h2",{attrs:{id:"_1-1-初识-docker-与容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-初识-docker-与容器"}},[t._v("#")]),t._v(" 1.1 初识 Docker 与容器")]),t._v(" "),s("h3",{attrs:{id:"什么是-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-docker"}},[t._v("#")]),t._v(" 什么是 Docker")]),t._v(" "),s("p",[t._v("Docker 的构想是要实现 “Build，Ship and Run Any App，Anywhere”，即通过对应用的封装（Packaging）、分发（Distribution）、部署（Deployment）、运行（Runtime）生命周期进行管理，达到应用组件级别的 “一次封装，到处运行”。")]),t._v(" "),s("p",[t._v("Docker 并非 “从石头缝里蹦出来的”，而是站在前人的肩膀上。其中最重要的就是 Linux 容器（Linux Containers, LXC）技术。IBM DeveloperWorks 网站关于容器技术的描述十分准确：“"),s("strong",[t._v("容器")]),t._v(" 有效地将由单个操作系统管理的资源划分到孤立的组中，以更好地在孤立的组之间平衡有冲突的资源使用需求。与虚拟化相比，这样既不需要指令级模拟，也不需要即时编译。容器可以在核心 CPU 本地运行指令，而不需要任何专门的解释机制。此外，也避免了准虚拟化（para-virtualization）和系统调用替换中的复杂性。”")]),t._v(" "),s("p",[t._v("在 LXC 的基础上，Docker 进一步优化了容器的使用体验，让它进人寻常百姓家。首先，Docker 提供了各种 "),s("strong",[t._v("容器管理工具（如分发、版本、移植等）")]),t._v("，让用户无须关注底层的操作，更加简单明了地管理和使用容器；其次，Docker 通过引入 "),s("strong",[t._v("分层文件系统")]),t._v(" 构建和 "),s("strong",[t._v("高效的镜像机制")]),t._v("，降低了迁移难度，极大地改善了用户体验。用户操作 Docker 容器就像操作应用自身一样简单。")]),t._v(" "),s("p",[t._v("简单地讲，我们可以将 Docker 容器理解为 "),s("strong",[t._v("一种轻量级的沙盒（sandbox）。每个容器内运行着一个应用，不同的容器相互隔离，容器之间也可以通过网络互相通信")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"为什么要使用-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用-docker"}},[t._v("#")]),t._v(" 为什么要使用 Docker")]),t._v(" "),s("p",[t._v("在开发和运维过程中， Docker 具有如下几个方面的优势：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("更快速的交付和部署")]),t._v("。使用 Docker，开发人员可以使用镜像来快速构建一套标准的开发环境；开发完成之后，测试和运维人员可以直接使用完全相同的环境来部署代码。只要是开发测试过的代码，就可以确保在生产环境无缝运行。Docker 可以快速创建和删除容器，实现快速迭代，节约开发、测试、部署的大量时间。并且，整个过程全程可见，使团队更容易理解应用的创建和工作过程。")]),t._v(" "),s("li",[s("strong",[t._v("更高效的资源利用")]),t._v("。运行 Docker 容器不需要额外的虚拟化管理程序（Virtual Machine  Manager，VMM，以及 Hypervisor） 的支持，Docker 是内核级的虚拟化，可以实现更高的性能，同时对资源的额外需求很低。")]),t._v(" "),s("li",[s("strong",[t._v("更轻松的迁移和扩展")]),t._v("。 Docker 容器几乎可以在任意的平台上运行，包括物理机、虚拟机、公有云、私有云、个人电脑、服务器等，同时支持主流的操作系统发行版本。 这种兼容性让用户可以在不同平台之间轻松地迁移应用。")]),t._v(" "),s("li",[s("strong",[t._v("更简单的更新管理")]),t._v("。使用 Dockerfile, 只需要小小的配置修改，就可以替代以往大量 的更新工作。所有修改都以增量的方式被分发和更新，从而实现自动化并且高效的容器管理。")])]),t._v(" "),s("p",[t._v("Docker 容器技术与传统虚拟机技术的比较：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("特性")]),t._v(" "),s("th",[t._v("容器")]),t._v(" "),s("th",[t._v("虚拟机")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("启动速度")]),t._v(" "),s("td",[t._v("秒级")]),t._v(" "),s("td",[t._v("分钟级")])]),t._v(" "),s("tr",[s("td",[t._v("性能")]),t._v(" "),s("td",[t._v("接近原生")]),t._v(" "),s("td",[t._v("较弱")])]),t._v(" "),s("tr",[s("td",[t._v("内存代价")]),t._v(" "),s("td",[t._v("很小")]),t._v(" "),s("td",[t._v("较多")])]),t._v(" "),s("tr",[s("td",[t._v("硬盘使用")]),t._v(" "),s("td",[t._v("一般为 MB")]),t._v(" "),s("td",[t._v("一般为 GB")])]),t._v(" "),s("tr",[s("td",[t._v("运行密度")]),t._v(" "),s("td",[t._v("单机支持上千个容器")]),t._v(" "),s("td",[t._v("一般几十个")])]),t._v(" "),s("tr",[s("td",[t._v("隔离性")]),t._v(" "),s("td",[t._v("安全隔离")]),t._v(" "),s("td",[t._v("完全隔离")])]),t._v(" "),s("tr",[s("td",[t._v("迁移性")]),t._v(" "),s("td",[t._v("优秀")]),t._v(" "),s("td",[t._v("一般")])])])]),t._v(" "),s("h3",{attrs:{id:"docker-与虚拟化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-与虚拟化"}},[t._v("#")]),t._v(" Docker 与虚拟化")]),t._v(" "),s("p",[t._v("在计算机技术中，"),s("strong",[t._v("虚拟化")]),t._v(" 是一种资源管理技术，是将计算机的各种实体资源，如服务器、网络、内存及存储等，予以抽象、转换后呈现出来，打破实体结构间的不可切割的障碍，使用户可以用比原本的组态更好的方式来应用这些资源。")]),t._v(" "),s("p",[t._v("传统方式是在硬件层面实现虚拟化，需要有额外的虚拟机管理应用和虚拟机操作系统层。"),s("strong",[t._v("Docker 容器是在操作系统层面上实现虚拟化，直接复用本地主机的操作系统，因此更加轻量级。")])]),t._v(" "),s("h2",{attrs:{id:"_1-2-核心概念与安装引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-核心概念与安装引擎"}},[t._v("#")]),t._v(" 1.2 核心概念与安装引擎")]),t._v(" "),s("h3",{attrs:{id:"核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[t._v("#")]),t._v(" 核心概念")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"镜像"}},[t._v("镜像")]),s("p",[t._v("Docker 镜像类似于虚拟机镜像，可以将它理解为一个只读的模板。")]),t._v(" "),s("p",[t._v("例如，一个镜像可以包含一个基本的操作系统环境，里面仅安装了 Apache 应用程序（或用户需要的其他软件）。可以把它称为一个 Apache 镜像。")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"容器"}},[t._v("容器")]),s("p",[t._v("Docker 容器类似千一个轻量级的沙箱， Docker 利用容器来运行和隔离应用。")]),t._v(" "),s("p",[s("strong",[t._v("容器是从镜像创建的应用运行实例")]),t._v("。它可以启动、开始、停止、删除，而这些容器都是彼此 "),s("strong",[t._v("相互隔离、互不可见的。")])]),t._v(" "),s("blockquote",[s("p",[t._v("镜像自身是只读的。容器从镜像启动的时候，会在镜像的最上层创建一个可写层。")])]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"仓库"}},[t._v("仓库")]),s("p",[t._v("Docker 仓库类似于代码仓库，是 Docker 集中存放镜像文件的场所。")]),t._v(" "),s("h3",{attrs:{id:"安装-docker-引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-引擎"}},[t._v("#")]),t._v(" 安装 Docker 引擎")]),t._v(" "),s("p",[t._v("Docker 引擎是使用 Docker 容器的核心组件，可以在主流的操作系统和云平台上使用。")]),t._v(" "),s("p",[t._v("我们可以访问 Docker 官网的 "),s("a",{attrs:{href:"https://www.docker.com/get-docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("Get Docker"),s("OutboundLink")],1),t._v(" 页面，查看获取 Docker 的方式，以及 Docker 支持的平台类型")]),t._v(" "),s("p",[t._v("我们可以使用官方提供的 shell 脚本来在 Linux 系统上安装 Docker 的最新正式 版本，该脚本会自动检测系统信息并进行相应配置：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://get.docker.com/ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n")])])]),s("p",[t._v("或者：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -qO- https://get.docker.com/ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n")])])]),s("h2",{attrs:{id:"_1-3-使用-docker-镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-使用-docker-镜像"}},[t._v("#")]),t._v(" 1.3 使用 Docker 镜像")]),t._v(" "),s("h3",{attrs:{id:"获取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取镜像"}},[t._v("#")]),t._v(" 获取镜像")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"pull-命令"}},[t._v("pull 命令")]),s("p",[t._v("镜像是运行容器的前提，官方的 Docker Hub 网站已经提供了数十万个镜像供我们开放下载。")]),t._v(" "),s("p",[t._v("使用 docker [image] pull 命令从 Docker Hub 镜像源来下载镜像：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" pull NAME "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":TAG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("其中，NAME 是镜像仓库名称，TAG 是镜像的标签。")]),t._v(" "),s("p",[t._v("例如，获取一个 Ubuntu 18.04 系统的基础镜像可以使用如下的命令：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull ubuntu:18.04 \n")])])]),s("blockquote",[s("p",[t._v("严格地讲，镜像的仓库名称中还应该添加仓库地址（即 registry，注册服务器）作为前缀，只是默认使用的是官方 Docker Hub 服务，该前缀可以忽略。")])]),t._v(" "),s("h3",{attrs:{id:"查看镜像信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看镜像信息"}},[t._v("#")]),t._v(" 查看镜像信息")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"images-命令"}},[t._v("images 命令")]),s("p",[t._v("使用 "),s("code",[t._v("docker images")]),t._v(" 或 "),s("code",[t._v("docker image ls")]),t._v(" 命令可以列出本地主机上已有镜像的基本信息：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" images\n")])])]),s("div",{staticClass:"anchor",attrs:{id:"inspect-命令"}},[t._v("inspect 命令")]),s("p",[t._v("使用 "),s("code",[t._v("docker [image] inspect")]),t._v(" 命令可以获取该镜像的详细信息，包括制作者、适应架构、各层的数字摘要等：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("docker inspect ubuntu:18.04 \n")])])]),s("div",{staticClass:"anchor",attrs:{id:"history-命令"}},[t._v("history 命令")]),s("p",[t._v("使用 "),s("code",[t._v("docker history")]),t._v(" 命令，列出镜像各层的创建信息：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("docker history ubuntu:18.04 \n")])])]),s("h3",{attrs:{id:"删除和清理镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除和清理镜像"}},[t._v("#")]),t._v(" 删除和清理镜像")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"rmi-命令"}},[t._v("rmi 命令")]),s("p",[t._v("使用 "),s("code",[t._v("docker rmi")]),t._v(" 或 "),s("code",[t._v("docker image rm")]),t._v(" 命令可以删除镜像，命令格式为 "),s("code",[t._v("docker rmi IMAGE [IMAGE...]")]),t._v("，其中 IMAGE 可以为标签或 ID。")]),t._v(" "),s("p",[t._v("支持选项：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("-f, --force")]),t._v(": 强制删除镜像，即使有正在使用该镜像的容器。")]),t._v(" "),s("li",[s("code",[t._v("--no-prune")]),t._v(": 删除镜像时不移除与其相关的标签或镜像。")])]),t._v(" "),s("p",[t._v("例如，要删除掉 ubuntu:latest 镜像，可以使用如下命令：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" rmi ubuntu:latest\n")])])]),s("p",[t._v("使用 Docker 一段时间后，系统中可能会遗留一些临时的镜像文件，以及一些没有被使 用的镜像，可以通过 "),s("code",[t._v("docker image prune")]),t._v(" 命令来进行清理。")]),t._v(" "),s("h3",{attrs:{id:"创建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建镜像"}},[t._v("#")]),t._v(" 创建镜像")]),t._v(" "),s("p",[t._v("创建镜像的方法主要有三种：基于已有镜像的容器创建、基于本地模板导入、基于 Dockerfile 创建。")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"基于已有容器创建"}},[t._v("基于已有容器创建")]),s("p",[t._v("使用 "),s("code",[t._v("docker commit")]),t._v(" 命令创建一个新的镜像，该镜像是从容器的当前状态创建的。")]),t._v(" "),s("p",[t._v("命令格式为 "),s("code",[t._v("docker [container] commit [OPTIONS] CONTAINER [REPOSITORY [:TAG]]")]),t._v("。")]),t._v(" "),s("p",[t._v("以下是该命令支持的选项：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('-a, --author=""')]),t._v(": 作者信息。")]),t._v(" "),s("li",[s("code",[t._v("-c, --change=[]")]),t._v(": 提交的时候执行 Dockerfile 指令。")]),t._v(" "),s("li",[s("code",[t._v('-m, --message=""')]),t._v(": 提交消息。")]),t._v(" "),s("li",[s("code",[t._v("-p, --pause=true")]),t._v(": 在提交时暂停容器的运行，以确保容器处于一致的状态。")])]),t._v(" "),s("p",[t._v("假设我们有一个名为 "),s("code",[t._v("my_container")]),t._v(" 的容器正在运行，并且我们想要将其状态保存为一个新的镜像，同时指定作者信息和提交消息。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --author "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe <john.doe@example.com>"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --message "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Added custom configurations"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  my_container "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  my_custom_image:latest\n")])])]),s("p",[t._v("这个命令将创建一个名为 my_custom_image 的新镜像，基于容器 my_container 的当前状态，并且指定了作者信息和提交消息。")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"基于本地模板导入"}},[t._v("基于本地模板导入")]),s("p",[t._v("使用 "),s("code",[t._v("docker import")]),t._v(" 命令从本地文件系统导入一个文件或归档（如 "),s("code",[t._v(".tar")]),t._v(" 文件）作为一个本地镜像。")]),t._v(" "),s("p",[t._v("命令格式为 "),s("code",[t._v("docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]")])]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"基于-dockerfile-创建"}},[t._v("基于 Dockerfile 创建")]),s("p",[t._v("基于 Dockerfile 创建镜像是一种常见的方式，它允许我们根据自定义的配置和需求构建镜像。Dockerfile 是一个文本文件，其中包含一系列指令，描述了如何构建一个 Docker 镜像。我们可以使用 Dockerfile 中的指令来定义基础镜像、安装软件、复制文件、设置环境变量等操作。")]),t._v(" "),s("p",[t._v("创建一个名为 "),s("code",[t._v("Dockerfile")]),t._v(" 的文本文件，并在其中编写构建镜像所需的指令。例如：")]),t._v(" "),s("div",{staticClass:"language-dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用官方的 Ubuntu 20.04 作为基础镜像")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" ubuntu:20.04")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装必要的软件包")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" apt-get update && apt-get install -y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n    software-properties-common "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n    && rm -rf /var/lib/apt/lists/*")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Node.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" curl -sL https://deb.nodesource.com/setup_14.x | bash -")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" apt-get install -y nodejs")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置工作目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /app")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拷贝应用程序文件到镜像中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" . .")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装应用程序依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm install")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 暴露端口")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 3000")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动应用程序")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" ["),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),t._v("]")]),t._v("\n")])])]),s("p",[t._v("然后，在 Dockerfile 所在的目录中打开终端，然后运行以下命令来构建镜像：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" build -t my_custom_image "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),s("h3",{attrs:{id:"存出和载入镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存出和载入镜像"}},[t._v("#")]),t._v(" 存出和载入镜像")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"save-命令"}},[t._v("save 命令")]),s("p",[t._v("如果要导出镜像到本地文件，可以使用 "),s("code",[t._v("docker [image] save")]),t._v(" 命令。该命令支持 "),s("code",[t._v("-o、-output")]),t._v(" 参数，导出镜像到指定的文件中。")]),t._v(" "),s("p",[t._v("例如，导出本地的 ubuntu:18.04 镜像为文件 ubuntu_18.04.tar，如下所示：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("docker save -o ubuntu_18.04.tar ubuntu:18.04\n")])])]),s("div",{staticClass:"anchor",attrs:{id:"load-命令"}},[t._v("load 命令")]),s("p",[t._v("使用 "),s("code",[t._v("docker [image] load")]),t._v(" 将导出的 tar 文件再导入到本地镜像库。支持 "),s("code",[t._v("-i、-input")]),t._v(" 选项，从指定文件中读入镜像内容。")]),t._v(" "),s("p",[t._v("例如，从文件 ubuntu_18.04.tar 导入镜像到本地镜像列表，如下所示：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" load -i ubuntu_18.04.tar\n")])])]),s("h3",{attrs:{id:"上传镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传镜像"}},[t._v("#")]),t._v(" 上传镜像")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"push-命令"}},[t._v("push 命令")]),s("p",[t._v("使用 "),s("code",[t._v("docker [image] push")]),t._v(" 命令上传镜像到仓库，默认上传到 Docker Hub 官方仓库（需要登录）。")]),t._v(" "),s("p",[t._v("命令格式为 "),s("code",[t._v("docker [image] push NAME [:TAG] | [REGISTRY_HOST [REGISTRY_PORT]/]NAME [TAG]")]),t._v(" 。")]),t._v(" "),s("p",[t._v("我们在 Docker Hub 网站注册后可以上传自制的镜像。")]),t._v(" "),s("p",[t._v("例如，上传本地的 "),s("code",[t._v("test:latest")]),t._v(" 镜像，可以先添加新的标签 "),s("code",[t._v("user/test:latest")]),t._v("，然后用使用"),s("code",[t._v("docker [image] push")]),t._v(" 命令上传镜像：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" tag test:latest user/test:latest\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" push user/test:latest\n")])])]),s("p",[t._v("第一次上传时，会提示输入登录信息或进行注册，之后登录信息会记录到本地 ~/.docker 目录下。")]),t._v(" "),s("h2",{attrs:{id:"_1-4-操作-docker-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-操作-docker-容器"}},[t._v("#")]),t._v(" 1.4 操作 Docker 容器")]),t._v(" "),s("p",[t._v("容器是 Docker 的另一个核心概念。简单来说，容器是镜像的一个运行实例。不同的是，镜像是静态的只读文件，而容器带有运行时需要的可写文件层，同时，容器中的应用进程处于运行状态。")]),t._v(" "),s("p",[t._v("如果认为虚拟机是模拟运行的一整套操作系统（包括内核、应用运行态环境和其他系统环境）和跑在上面的应用。那么 Docker 容器就是 "),s("strong",[t._v("独立运行的一个（或一组）应用，以及它们必需的运行环境。")])]),t._v(" "),s("h3",{attrs:{id:"创建容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建容器"}},[t._v("#")]),t._v(" 创建容器")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"create-命令"}},[t._v("create 命令")]),s("p",[t._v("使用 "),s("code",[t._v("docker [container] create")]),t._v(" 命令新建一个容器，例如：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" create -it ubuntu:latest\n")])])]),s("p",[t._v("使用 "),s("code",[t._v("docker [container] create")]),t._v(" 命令新建的容器处于停止状态，使用 "),s("code",[t._v("docker [container] start")]),t._v(" 命令来启动它。")]),t._v(" "),s("p",[t._v("由于容器是整个 Docker 技术栈的核心， create 命令和后续的 run 命令支持的选项都十分复杂，主要包括如下几大类：与容器运行模式相关、与容器环境配置相关、与容器资源限制和安全保护相关。")]),t._v(" "),s("p",[t._v("与容器运行模式相关的选项：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("选项")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--name")]),t._v(" "),s("td",[t._v("为容器指定一个名称")])]),t._v(" "),s("tr",[s("td",[t._v("--detach, -d")]),t._v(" "),s("td",[t._v("在后台模式下创建容器")])]),t._v(" "),s("tr",[s("td",[t._v("--interactive, -i")]),t._v(" "),s("td",[t._v("创建交互式容器")])]),t._v(" "),s("tr",[s("td",[t._v("--tty, -t")]),t._v(" "),s("td",[t._v("为容器分配一个虚拟终端")])]),t._v(" "),s("tr",[s("td",[t._v("--rm")]),t._v(" "),s("td",[t._v("容器退出时自动删除容器")])]),t._v(" "),s("tr",[s("td",[t._v("--privileged")]),t._v(" "),s("td",[t._v("给容器提供特权访问")])]),t._v(" "),s("tr",[s("td",[t._v("--net")]),t._v(" "),s("td",[t._v("指定容器使用的网络模式（如 "),s("code",[t._v("bridge")]),t._v(", "),s("code",[t._v("host")]),t._v(", "),s("code",[t._v("none")]),t._v(" 等）")])]),t._v(" "),s("tr",[s("td",[t._v("--user")]),t._v(" "),s("td",[t._v("指定容器的用户名或UID")])]),t._v(" "),s("tr",[s("td",[t._v("--hostname")]),t._v(" "),s("td",[t._v("设置容器的主机名")])]),t._v(" "),s("tr",[s("td",[t._v("--restart")]),t._v(" "),s("td",[t._v("指定容器退出时的重启策略")])])])]),t._v(" "),s("p",[t._v("与容器环境配置相关的选项：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("选项")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-e, --env")]),t._v(" "),s("td",[t._v("设置环境变量")])]),t._v(" "),s("tr",[s("td",[t._v("--env-file")]),t._v(" "),s("td",[t._v("从文件中读取环境变量")])]),t._v(" "),s("tr",[s("td",[t._v("--workdir, -w")]),t._v(" "),s("td",[t._v("设置容器的工作目录")])]),t._v(" "),s("tr",[s("td",[t._v("--volume, -v")]),t._v(" "),s("td",[t._v("绑定挂载宿主机目录到容器")])]),t._v(" "),s("tr",[s("td",[t._v("--mount")]),t._v(" "),s("td",[t._v("更为灵活的挂载方式，可以指定挂载类型和参数")])]),t._v(" "),s("tr",[s("td",[t._v("--add-host")]),t._v(" "),s("td",[t._v("向容器的 "),s("code",[t._v("/etc/hosts")]),t._v(" 文件中添加额外的主机信息")])]),t._v(" "),s("tr",[s("td",[t._v("--label")]),t._v(" "),s("td",[t._v("为容器添加元数据标签")])]),t._v(" "),s("tr",[s("td",[t._v("--expose")]),t._v(" "),s("td",[t._v("暴露容器的端口到宿主机")])])])]),t._v(" "),s("p",[t._v("与容器资源限制和安全保护相关的选项：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("选项")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--cpu-shares")]),t._v(" "),s("td",[t._v("设置容器的CPU份额")])]),t._v(" "),s("tr",[s("td",[t._v("--cpu-period")]),t._v(" "),s("td",[t._v("设置CPU周期")])]),t._v(" "),s("tr",[s("td",[t._v("--cpu-quota")]),t._v(" "),s("td",[t._v("设置CPU配额")])]),t._v(" "),s("tr",[s("td",[t._v("--cpuset-cpus")]),t._v(" "),s("td",[t._v("为容器指定CPU核心")])]),t._v(" "),s("tr",[s("td",[t._v("--memory, -m")]),t._v(" "),s("td",[t._v("设置容器的内存限制")])]),t._v(" "),s("tr",[s("td",[t._v("--memory-swap")]),t._v(" "),s("td",[t._v("设置容器的交换空间限制")])]),t._v(" "),s("tr",[s("td",[t._v("--memory-swappiness")]),t._v(" "),s("td",[t._v("设置容器内存交换的倾向性")])]),t._v(" "),s("tr",[s("td",[t._v("--ulimit")]),t._v(" "),s("td",[t._v("设置容器的资源限制（如文件描述符数、内存等）")])]),t._v(" "),s("tr",[s("td",[t._v("--security-opt")]),t._v(" "),s("td",[t._v("设置容器的安全选项（如 apparmor, seccomp 等）")])]),t._v(" "),s("tr",[s("td",[t._v("--cap-add")]),t._v(" "),s("td",[t._v("向容器添加特权")])]),t._v(" "),s("tr",[s("td",[t._v("--cap-drop")]),t._v(" "),s("td",[t._v("从容器中删除特权")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("更多的命令选项可以通过 man docker-run 命令来查看。")])]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"start-命令"}},[t._v("start 命令")]),s("p",[t._v("使用 "),s("code",[t._v("docker [container] start")]),t._v(" 命令来启动一个已经创建的容器。例如，启动刚创建的 ubuntu 容器：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("docker start af\n")])])]),s("p",[t._v("此时，通过 "),s("code",[t._v("docker ps")]),t._v(" 命令，可以查看到一个运行中的容器。")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"run-命令"}},[t._v("run 命令")]),s("p",[s("code",[t._v("docker [container] run")]),t._v(" 等价于先执行  "),s("code",[t._v("docker [container] create")]),t._v(" 命令，再执行 "),s("code",[t._v("docker [container] start")]),t._v(" 命令。")]),t._v(" "),s("p",[t._v("当使用 "),s("code",[t._v("docker [container] run")]),t._v(" 来创建并启动容器时， Docker 在后台运行的标准操作如下：")]),t._v(" "),s("ul",[s("li",[t._v("检查本地是否存在指定的镜像，不存在就从公有仓库下载；")]),t._v(" "),s("li",[t._v("利用镜像创建一个容器，并启动该容器；")]),t._v(" "),s("li",[t._v("分配一个文件系统给容器，并在只读的镜像层外面挂载一层可读写层；")]),t._v(" "),s("li",[t._v("从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中去；")]),t._v(" "),s("li",[t._v("从网桥的地址池配置一个 IP 地址给容器；")]),t._v(" "),s("li",[t._v("执行用户指定的应用程序；")]),t._v(" "),s("li",[t._v("执行完毕后容器被自动终止。")])]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"logs-命令"}},[t._v("logs 命令")]),s("p",[t._v("要获取容器的输出信息，可以通过 "),s("code",[t._v("docker [container] :logs")]),t._v(" 命令。")]),t._v(" "),s("h3",{attrs:{id:"停止容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#停止容器"}},[t._v("#")]),t._v(" 停止容器")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"pause-命令"}},[t._v("pause 命令")]),s("p",[t._v("使用 "),s("code",[t._v("docker [container] pause CONTAINER [CONTAINER...]")]),t._v(" 命令来暂停一个运行中的容器。")]),t._v(" "),s("p",[t._v("处于 paused 状态的容器，可以使用"),s("code",[t._v("docker [container] unpause CONTAINER [CONTAINER...]")]),t._v("  命令来恢复到运行状态。")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"stop-命令"}},[t._v("stop 命令")]),s("p",[t._v("可以使用 "),s("code",[t._v("docker [container] stop")]),t._v(" 来终止一个运行中的容器。")]),t._v(" "),s("p",[t._v("命令格式为 "),s("code",[t._v("docker [container] stop [-t|--time[=10]] [CONTAINER...]")]),t._v("。")]),t._v(" "),s("p",[t._v("该命令会首先向容器发送 SIGTERM 信号，等待一段超时时间后（默认为 10 秒），再发送 SIGKILL 信号来终止容器。")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"kill-命令"}},[t._v("kill 命令")]),s("p",[t._v("此外，还可以通过 "),s("code",[t._v("docker [container] kill")]),t._v(" 直接发送 SIGKILL 信号来强行终止容器。")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"prune-命令"}},[t._v("prune 命令")]),s("p",[t._v("执行 "),s("code",[t._v("docker container prune")]),t._v(" 命令，会自动清除掉所有处于停止状态的容器。")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"restart-命令"}},[t._v("restart 命令")]),s("p",[s("code",[t._v("docker [container] restart")]),t._v("  命令会将一个运行态的容器先终止，然后再重新启动。")]),t._v(" "),s("h3",{attrs:{id:"进入容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入容器"}},[t._v("#")]),t._v(" 进入容器")]),t._v(" "),s("p",[t._v("在使用 "),s("code",[t._v("-d")]),t._v(" 参数时，容器启动后会进入后台，用户无法看到容器中的信息，也无法进行操作。")]),t._v(" "),s("p",[t._v("这个时候如果需要进人容器进行操作，推荐使用官方的 attach 或 exec 命令。")]),t._v(" "),s("div",{staticClass:"anchor",attrs:{id:"attach-命令"}},[t._v("attach 命令")])])}),[],!1,null,null,null);a.default=e.exports}}]);