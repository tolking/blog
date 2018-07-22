(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{87:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"列举常用的一些es6语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列举常用的一些es6语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 列举常用的一些ES6语法")]),a("h3",{attrs:{id:"_1-const-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-const-命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.const 命令")]),a("ul",[a("li",[t._v("const 声明一个只读的常量。一旦声明，常量的值就不能改变。不可重复声明")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("PI")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3.14")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("PI")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 3.14")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("PI")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// TypeError: Assignment to constant variable")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("PI")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// SyntaxError: Identifier 'PI' has already been declared")]),t._v("\n")])])]),a("ul",[a("li",[t._v("const命令声明的常量不提升，存在暂时性死区，只能在声明的位置后面使用")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("PI")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// ReferenceError")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("PI")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3.14")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("对于复合类型的变量 const 命令只是保证变量名指向的地址不变，并不保证该地址的数据不变")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfoo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prop "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),t._v("\nfoo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prop  "),a("span",{attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\nfoo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v('// TypeError: "foo" is read-only')]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-let-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-let-命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.let 命令")]),a("ul",[a("li",[t._v("let命令所在的代码块内有效。不可重复声明")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\na  "),a("span",{attrs:{class:"token comment"}},[t._v("// ReferenceError: a is not defined.")]),t._v("\nb  "),a("span",{attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 0, 1, 2, 3, 4")]),t._v("\n")])])]),a("ul",[a("li",[t._v("let命令声明的常量不提升，存在暂时性死区，只能在声明的位置后面使用")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("PI")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// ReferenceError")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("PI")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3.14")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-变量的解构赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-变量的解构赋值","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.变量的解构赋值")]),a("ul",[a("li",[t._v("从数组或对象中提取值，数组按照对应位置，对象按照相同的属性名,对变量赋值")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\na  "),a("span",{attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nb  "),a("span",{attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\nc  "),a("span",{attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'aaa'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'bbb'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfoo "),a("span",{attrs:{class:"token comment"}},[t._v('// "aaa"')]),t._v("\nbar "),a("span",{attrs:{class:"token comment"}},[t._v('// "bbb"')]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 字符串被转换成了一个类似数组的对象")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'hello'")]),t._v("\na "),a("span",{attrs:{class:"token comment"}},[t._v('// "h"')]),t._v("\nb "),a("span",{attrs:{class:"token comment"}},[t._v('// "e"')]),t._v("\nc "),a("span",{attrs:{class:"token comment"}},[t._v('// "l"')]),t._v("\nd "),a("span",{attrs:{class:"token comment"}},[t._v('// "l"')]),t._v("\ne "),a("span",{attrs:{class:"token comment"}},[t._v('// "o"')]),t._v("\n")])])]),a("ul",[a("li",[t._v("解构赋值允许指定默认值")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\na  "),a("span",{attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nb  "),a("span",{attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-模版字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-模版字符串","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.模版字符串")]),a("ul",[a("li",[t._v("使用 ` 创建模版字符串。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量(变量名写在${}之中)")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" h "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("h"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v(" World!`")])]),t._v("\nstr  "),a("span",{attrs:{class:"token comment"}},[t._v('// "Hello World!"')]),t._v("\n")])])]),a("ul",[a("li",[t._v("作为标签模板。紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("alert"),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`123`")])]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 等同于")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"_5-函数参数的默认值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-函数参数的默认值","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.函数参数的默认值")]),a("ul",[a("li",[t._v("ES6允许为函数的参数设置默认值")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// es5")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("hello")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  y "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" y "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'World'")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// es6")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("hello")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'World'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("hello")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Hello World")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("hello")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'China'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Hello China")]),t._v("\n")])])]),a("ul",[a("li",[t._v("参数默认值可以与解构赋值的默认值，结合起来使用")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("hello")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'World'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("hello")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Hello World")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("hello")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'China'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Hello China")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n")])])]),a("ul",[a("li",[t._v("函数参数的 rest 参数，将多余的参数放入数组中")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("values"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" val "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" values"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sum "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" val\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\n")])])]),a("h3",{attrs:{id:"_6-扩展运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-扩展运算符","aria-hidden":"true"}},[t._v("#")]),t._v(" 6.扩展运算符")]),a("ul",[a("li",[t._v("扩展运算符 ... 它将一个数组转为用逗号分隔的参数序列")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("values"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" val "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" values"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sum "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" val\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\n\nMath"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 5")]),t._v("\n")])])]),a("ul",[a("li",[t._v("合并数组，生成数组")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\narr1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("arr2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\narr1  "),a("span",{attrs:{class:"token comment"}},[t._v("// [0, 1, 2, 3, 4, 5]")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("first"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("rest"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr1\nfirst "),a("span",{attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nrest "),a("span",{attrs:{class:"token comment"}},[t._v("// [2, 3, 4, 5]")]),t._v("\n")])])]),a("ul",[a("li",[t._v("将字符串转为真正的数组")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),a("span",{attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v('// [ "h", "e", "l", "l", "o" ]')]),t._v("\n")])])]),a("h3",{attrs:{id:"_7-箭头函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-箭头函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 7.箭头函数")]),a("ul",[a("li",[t._v("使用 => 定义函数")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("add")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 相当于")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("add")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);s.default=o.exports}}]);