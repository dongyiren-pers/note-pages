(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{972:function(t,s,a){"use strict";a.r(s);var i=a(14),l=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"二维几何基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二维几何基础"}},[t._v("#")]),t._v(" 二维几何基础")]),t._v(" "),a("h2",{attrs:{id:"记录斜率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记录斜率"}},[t._v("#")]),t._v(" 记录斜率")]),t._v(" "),a("p",[t._v("浮点数类型可能因为精度不够而无法足够精确地表示每一个斜率，因此我们需要换一种方法来记录斜率。")]),t._v(" "),a("p",[t._v("一般情况下，斜率可以表示为 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mtext",{attrs:{mathvariant:"italic"}},[t._v("slope")]),a("mo",[t._v("=")]),a("mstyle",{attrs:{displaystyle:"true",scriptlevel:"0"}},[a("mfrac",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("y")])],1),a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("x")])],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\textit{slope} = \\dfrac{\\Delta y}{\\Delta x}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[t._v("slope")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.0463299999999998em","vertical-align":"-0.686em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.3603299999999998em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault"},[t._v("x")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})])])])])]),t._v(" 的形式，因此可以用 "),a("strong",[t._v("分子和分母组成的二元组")]),t._v(" 来代表斜率。\n但注意到存在形如 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mstyle",{attrs:{displaystyle:"true",scriptlevel:"0"}},[a("mfrac",[a("mn",[t._v("1")]),a("mn",[t._v("2")])],1)],1),a("mo",[t._v("=")]),a("mstyle",{attrs:{displaystyle:"true",scriptlevel:"0"}},[a("mfrac",[a("mn",[t._v("2")]),a("mn",[t._v("4")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\dfrac{1}{2}=\\dfrac{2}{4}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.00744em","vertical-align":"-0.686em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.32144em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("2")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("1")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.00744em","vertical-align":"-0.686em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.32144em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("4")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("2")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})])])])])]),t._v(" 这样两个二元组不同，但实际上两分数的值相同的情况，我们需要将分数 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mstyle",{attrs:{displaystyle:"true",scriptlevel:"0"}},[a("mfrac",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("y")])],1),a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("x")])],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\dfrac{\\Delta y}{\\Delta x}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.0463299999999998em","vertical-align":"-0.686em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.3603299999999998em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault"},[t._v("x")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})])])])])]),t._v(" 化简为最简分数的形式。")],1),t._v(" "),a("p",[t._v("将分子和分母同时除以二者绝对值的最大公约数，可得二元组 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",{attrs:{fence:"false"}},[t._v("(")]),a("mstyle",{attrs:{displaystyle:"true",scriptlevel:"0"}},[a("mfrac",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("x")])],1),a("mrow",[a("mi",[t._v("gcd")]),a("mo",[t._v("⁡")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("x")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("y")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mstyle",{attrs:{displaystyle:"true",scriptlevel:"0"}},[a("mfrac",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("y")])],1),a("mrow",[a("mi",[t._v("gcd")]),a("mo",[t._v("⁡")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("x")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("y")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1),a("mo",{attrs:{fence:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\Big(\\dfrac{\\Delta x}{\\gcd(|\\Delta x|,|\\Delta y|)},\\dfrac{\\Delta y}{\\gcd(|\\Delta x|,|\\Delta y|)}\\Big)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.29633em","vertical-align":"-0.936em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"delimsizing size2"},[t._v("(")])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.36033em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mop"},[a("span",{staticStyle:{"margin-right":"0.01389em"}},[t._v("g")]),t._v("cd")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault"},[t._v("x")]),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mclose"},[t._v(")")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault"},[t._v("x")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.936em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.3603299999999998em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mop"},[a("span",{staticStyle:{"margin-right":"0.01389em"}},[t._v("g")]),t._v("cd")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault"},[t._v("x")]),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mclose"},[t._v(")")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.936em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mord"},[a("span",{staticClass:"delimsizing size2"},[t._v(")")])])])])])]),t._v("。令 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mtext",{attrs:{mathvariant:"italic"}},[t._v("mx")]),a("mo",[t._v("=")]),a("mstyle",{attrs:{displaystyle:"true",scriptlevel:"0"}},[a("mfrac",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("x")])],1),a("mrow",[a("mi",[t._v("gcd")]),a("mo",[t._v("⁡")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("x")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("y")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\textit{mx}=\\dfrac{\\Delta x}{\\gcd(|\\Delta x|,|\\Delta y|)}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[t._v("mx")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.29633em","vertical-align":"-0.936em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.36033em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mop"},[a("span",{staticStyle:{"margin-right":"0.01389em"}},[t._v("g")]),t._v("cd")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault"},[t._v("x")]),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mclose"},[t._v(")")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault"},[t._v("x")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.936em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})])])])])]),t._v("，"),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mtext",{attrs:{mathvariant:"italic"}},[t._v("my")]),a("mo",[t._v("=")]),a("mstyle",{attrs:{displaystyle:"true",scriptlevel:"0"}},[a("mfrac",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("y")])],1),a("mrow",[a("mi",[t._v("gcd")]),a("mo",[t._v("⁡")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("x")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("Δ")]),a("mi",[t._v("y")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\textit{my}=\\dfrac{\\Delta y}{\\gcd(|\\Delta x|,|\\Delta y|)}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[t._v("my")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.2963299999999998em","vertical-align":"-0.936em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.3603299999999998em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mop"},[a("span",{staticStyle:{"margin-right":"0.01389em"}},[t._v("g")]),t._v("cd")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault"},[t._v("x")]),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mord"},[t._v("∣")]),a("span",{staticClass:"mclose"},[t._v(")")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("Δ")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.936em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})])])])])]),t._v("，则上述化简后的二元组为 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mtext",{attrs:{mathvariant:"italic"}},[t._v("mx")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mtext",{attrs:{mathvariant:"italic"}},[t._v("my")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("(\\textit{mx},\\textit{my})")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[t._v("mx")])]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[t._v("my")])]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("。")],1),t._v(" "),a("p",[t._v("此外，因为分子分母可能存在负数，为了防止出现形如 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mstyle",{attrs:{displaystyle:"true",scriptlevel:"0"}},[a("mfrac",[a("mrow",[a("mo",[t._v("−")]),a("mn",[t._v("1")])],1),a("mn",[t._v("2")])],1)],1),a("mo",[t._v("=")]),a("mstyle",{attrs:{displaystyle:"true",scriptlevel:"0"}},[a("mfrac",[a("mn",[t._v("1")]),a("mrow",[a("mo",[t._v("−")]),a("mn",[t._v("2")])],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\dfrac{-1}{2}=\\dfrac{1}{-2}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.00744em","vertical-align":"-0.686em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.32144em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("2")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("−")]),a("span",{staticClass:"mord"},[t._v("1")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.09077em","vertical-align":"-0.7693300000000001em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.32144em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("−")]),a("span",{staticClass:"mord"},[t._v("2")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("1")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.7693300000000001em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})])])])])]),t._v(" 的情况，还需要规定分子为非负整数，如果 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mtext",{attrs:{mathvariant:"italic"}},[t._v("my")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\textit{my}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[t._v("my")])])])])])]),t._v(" 为负数，将二元组中两个数同时取相反数即可。")],1),t._v(" "),a("p",[t._v("特别地，考虑到 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mtext",{attrs:{mathvariant:"italic"}},[t._v("mx")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\textit{mx}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[t._v("mx")])])])])])]),t._v(" 和 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mtext",{attrs:{mathvariant:"italic"}},[t._v("my")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\textit{my}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[t._v("my")])])])])])]),t._v(" 两数其中有一个为 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[t._v("0")])])])])]),t._v(" 的情况，此时两数不存在数学意义上的最大公约数，因此直接特判这两种情况。当 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mtext",{attrs:{mathvariant:"italic"}},[t._v("mx")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\textit{mx}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[t._v("mx")])])])])])]),t._v(" 为 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[t._v("0")])])])])]),t._v(" 时，令 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mtext",{attrs:{mathvariant:"italic"}},[t._v("my")]),a("mo",[t._v("=")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\textit{my}=1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[t._v("my")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[t._v("1")])])])])]),t._v("；当 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mtext",{attrs:{mathvariant:"italic"}},[t._v("my")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\textit{my}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[t._v("my")])])])])])]),t._v(" 为 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[t._v("0")])])])])]),t._v(" 时，令 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mtext",{attrs:{mathvariant:"italic"}},[t._v("mx")]),a("mo",[t._v("=")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\textit{mx}=1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[t._v("mx")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[t._v("1")])])])])]),t._v(" 即可。")],1),t._v(" "),a("p",[t._v("经过上述操作之后，即可得到最终的二元组 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mtext",{attrs:{mathvariant:"italic"}},[t._v("mx")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mtext",{attrs:{mathvariant:"italic"}},[t._v("my")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("(\\textit{mx},\\textit{my})")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[t._v("mx")])]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[t._v("my")])]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("。")],1)])}),[],!1,null,null,null);s.default=l.exports}}]);