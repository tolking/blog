(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{327:function(s,t,n){"use strict";n.r(t);var a=n(3),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("我的需求就是在服务器上安装 nodejs 来跑之前用 nuxt 重构的网站程序，过程不出所料的磕磕碰碰")]),s._v(" "),t("p",[s._v("要来服务器的账号，小心翼翼的输入账号，然后轻轻松松就连接上服务器了，开头可是无比顺利。")]),s._v(" "),t("p",[s._v("输入 node -v 提示没有安装 nodejs 使用 apt-get install ... 安装，心想 ubuntu 居然这么人性，田牌要好好学学。")]),s._v(" "),t("p",[s._v("然后按照指示顺利安装 nodejs，接着是 npm 都这里都是无比顺利。")]),s._v(" "),t("p",[s._v("然后直接 cd 到文件存放目录下安装依赖，直接 npm install 然后就理所当然的遇到了神秘力量，换上局域网版本后，cnpm install 然后报错。")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"An image","data-src":"/img/doubt.jpeg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("what？？？ 居然连 const 都不支持，我之前安装的是 nodejs 吗？")]),s._v(" "),t("p",[s._v("输入 node -v 瞬间傻眼，版本 0.1.14 ，最新的版本不是都到 11.+ 了吗，这难道是 ubunt 专供 nodejs 版本，不，它可能仅仅只是上古版本而已。")]),s._v(" "),t("p",[t("strong",[s._v("垃圾 apt-get 浪费我人生")])]),s._v(" "),t("p",[s._v("接着想用 n 来管理 nodejs版本 可惜 npm cnpm 都安装不了。")]),s._v(" "),t("p",[s._v("查询一番认为下面的比较简单")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" cache clean "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v("     // 如果已经安装了上古版本\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sL")]),s._v(" https://deb.nodesource.com/setup_10.x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-E")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -     // "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(".x 为版本号\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nodejs\n")])])]),t("p",[s._v("然后 node -v 版本就到了 10.15.0")])])}),[],!1,null,null,null);t.default=e.exports}}]);