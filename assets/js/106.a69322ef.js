(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{986:function(_,v,t){"use strict";t.r(v);var s=t(14),a=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"第一章-基础知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一章-基础知识"}},[_._v("#")]),_._v(" 第一章 基础知识")]),_._v(" "),t("h2",{attrs:{id:"_1-1-编译和链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-编译和链接"}},[_._v("#")]),_._v(" 1.1 编译和链接")]),_._v(" "),t("p",[_._v("C/C++程序编译流程：预处理→编译→汇编→链接。 具体的是：源代码（source coprede）→预处理器（processor）→编译器（compiler）→汇编程序（assembler）→目标程序（object code）→链接器（Linker）→可执行程序（executables）。")]),_._v(" "),t("ul",[t("li",[_._v("**预处理：**预处理相当于根据预处理指令组装新的 C/C++ 程序。经过预处理，会产生一个没有宏定义、没有条件编译指令、没有特殊符号的输出文件，这个文件的含义同原本的文件无异，只是内容上有所不同。")]),_._v(" "),t("li",[_._v("**编译：**将预处理完的文件进行一系列词法分析、语法分析、语义分析及优化后，产生相应的汇编代码文件 "),t("strong",[_._v(".s")]),_._v("。")]),_._v(" "),t("li",[_._v("**汇编：**将编译完的汇编代码文件翻译成机器指令，并生成可重定位目标程序的 **.obj ** 或 .o 文件，该文件为二进制文件，字节编码是机器指令。")]),_._v(" "),t("li",[_._v("**链接：**通过链接器将一个个目标文件 .obj（或许还会有库文件 "),t("strong",[_._v(".lib")]),_._v(" ）链接在一起生成一个完整的可执行程序 "),t("strong",[_._v(".exe")]),_._v(" 或 .out。")])]),_._v(" "),t("h2",{attrs:{id:"_1-2-原码、反码和补码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-原码、反码和补码"}},[_._v("#")]),_._v(" 1.2 原码、反码和补码")]),_._v(" "),t("p",[_._v("最简单的机器数表示法。最高位表示符号位，1表示负号，0表示正号。其他位存放该数的二进制的绝对值。")]),_._v(" "),t("div",{staticClass:"subtitle"},[t("p",[_._v("反码")])]),t("p",[_._v("为了解决 “正负相加等于0” 的问题，在原码的基础上发明了反码。反码表示方式是用来处理负数的，符号位不变，其余位置按位取反，完美的解决了“正负相加等于0”的问题。")]),_._v(" "),t("p",[_._v("**计算：**正数的反码等于它的原码；负数的反码就是它的原码除符号位外，按位取反。")]),_._v(" "),t("div",{staticClass:"subtitle"},[t("p",[_._v("补码")])]),t("p",[_._v("有两个零（+0 和 -0）存在，我们希望只有一个 0，因此发明了补码，同样是针对负数做处理的，补码的意思是，在原来反码的基础上，仅保留 +0，目标是去掉 -0。")]),_._v(" "),t("p",[_._v("**计算：**正数的补码等于它的原码；负数的补码等于反码 +1。")]),_._v(" "),t("h2",{attrs:{id:"_1-3-预处理命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-预处理命令"}},[_._v("#")]),_._v(" 1.3 预处理命令")]),_._v(" "),t("p",[_._v("使用库函数之前，需要使用 #include 引入对应的头文件。这种以 "),t("code",[_._v("#")]),_._v(" 号开头的命令称为"),t("strong",[_._v("预处理命令")]),_._v("。")]),_._v(" "),t("p",[_._v("预处理命令是 C++ 统一规定的，但是它不是 C++ 本身的组成部分，不能直接对它们进行编译（因为编译程序不能识别它们）。必须在对程序进行通常的编译（包括词法和语法分析、代码生成、优化等）之前，先对程序中这些特殊的命令进行“预处理”，即根据预处理命令对程序作相应的处理。经过预处理后程序不再包括预处理命令了，最后再由编译程序对预处理后的源程序进行通常的编译处理，得到可供执行的目标代码。")]),_._v(" "),t("p",[_._v("C++ 提供的预处理功能主要有以下 3 种：")]),_._v(" "),t("ul",[t("li",[_._v("宏定义；")]),_._v(" "),t("li",[_._v("文件包含；")]),_._v(" "),t("li",[_._v("条件编译。")])]),_._v(" "),t("h3",{attrs:{id:"宏定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#宏定义"}},[_._v("#")]),_._v(" 宏定义")]),_._v(" "),t("h2",{attrs:{id:"_1-5-常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-常量"}},[_._v("#")]),_._v(" 1.5 常量")]),_._v(" "),t("p",[_._v("常量的值是不能改变的，一般从其字面形式即可判别是否为常量。常量包括两大类，即数值型常量（即常数）和字符型常量。")]),_._v(" "),t("h3",{attrs:{id:"整型常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整型常量"}},[_._v("#")]),_._v(" 整型常量")]),_._v(" "),t("p",[_._v("整型常量可以是 "),t("strong",[_._v("十进制")]),_._v("、"),t("strong",[_._v("八进制")]),_._v(" 或 "),t("strong",[_._v("十六进制")]),_._v(" 的常量。前缀指定基数："),t("strong",[_._v("0x 或 0X 表示十六进制，0 表示八进制")]),_._v("，不带前缀则默认表示十进制。")]),_._v(" "),t("p",[_._v("整型常量也可以带一个后缀，后缀是 U 和 L 的组合，"),t("strong",[_._v("U 表示无符号整型（unsigned），L 表示长整型（long）")]),_._v("。后缀可以是大写，也可以是小写，U 和 L 的顺序任意。")]),_._v(" "),t("h3",{attrs:{id:"进制转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进制转换"}},[_._v("#")]),_._v(" 进制转换")]),_._v(" "),t("p",[_._v("::: substitle")]),_._v(" "),t("p",[_._v("二、八、十六进制转换成十进制：按权展开，求和即可")]),_._v(" "),t("p",[_._v(":::")])])}),[],!1,null,null,null);v.default=a.exports}}]);