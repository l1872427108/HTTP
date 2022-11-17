(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{431:function(t,h,s){"use strict";s.r(h);var a=s(62),r=Object(a.a)({},(function(){var t=this,h=t.$createElement,s=t._self._c||h;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),s("p",[t._v("HTTP 明文传输，起初设计 HTTP 协议的目的很单纯，就是为了传输超文本文件，没有太强的加密传输的数据需求，所以 HTTP 一直保存着明文传输数据的特征。但这样的话，在传输过程中的每一个环境都可能发生数据窃取或者串改，意味着你和服务器之间可能有一个中间人，你们通信过程中的一切内容都在中间人的掌握中。")]),t._v(" "),s("p",[t._v("具体来讲，在将 HTTP 数据提交给 TCP 层之后, 数据会经过用户电脑, WiFi 路由器、运营商和目标服务器，在这中间的每个环节中，数据都有可能被窃取或篡改。比如用户电脑被黑客安装了恶意软件，那么恶意软件就能抓取和篡改所发出的 HTTP 请求的内容。或者用户一不小心连接上了 WiFi 钓鱼路由器，那么数据也都能被黑客抓取或篡改。")]),t._v(" "),s("img",{attrs:{src:"/http/https1.jpg",width:"800",height:"500"}}),t._v(" "),s("h3",{attrs:{id:"在http协议栈中引入安全层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在http协议栈中引入安全层"}},[t._v("#")]),t._v(" 在HTTP协议栈中引入安全层")]),t._v(" "),s("img",{attrs:{src:"/http/https2.jpg",width:"800",height:"500"}}),t._v(" "),s("h3",{attrs:{id:"使用对称加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用对称加密"}},[t._v("#")]),t._v(" 使用对称加密")]),t._v(" "),s("img",{attrs:{src:"/http/https3.jpg",width:"800",height:"500"}}),t._v(" "),s("h3",{attrs:{id:"使用非对称加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用非对称加密"}},[t._v("#")]),t._v(" 使用非对称加密")]),t._v(" "),s("img",{attrs:{src:"/http/https4.jpg",width:"800",height:"500"}}),t._v(" "),s("h3",{attrs:{id:"对称加密和非对称加密搭配使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对称加密和非对称加密搭配使用"}},[t._v("#")]),t._v(" 对称加密和非对称加密搭配使用")]),t._v(" "),s("img",{attrs:{src:"/http/https5.jpg",width:"800",height:"500"}}),t._v(" "),s("h3",{attrs:{id:"添加数字证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加数字证书"}},[t._v("#")]),t._v(" 添加数字证书")]),t._v(" "),s("p",[t._v("目前存在问题, 比如我们打开普歌官网，但是黑客通过DNS劫持将极客时间官网的IP地址替换成黑客的IP地址。我们访问就是黑客的服务器，黑客就可以在自己的服务器上实现公钥和私钥，而对浏览器来说，它完全不知道现在访问的是黑客的站点。")]),t._v(" "),s("p",[t._v("我们还差一步，需要让服务器向浏览器证明我就是我。")]),t._v(" "),s("img",{attrs:{src:"/http/https6.jpg",width:"800",height:"500"}}),t._v(" "),s("h3",{attrs:{id:"如何申请数字证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何申请数字证书"}},[t._v("#")]),t._v(" 如何申请数字证书")]),t._v(" "),s("img",{attrs:{src:"/http/https8.jpg",width:"800",height:"500"}}),t._v(" "),s("h3",{attrs:{id:"浏览器如何验证数字证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器如何验证数字证书"}},[t._v("#")]),t._v(" 浏览器如何验证数字证书")]),t._v(" "),s("img",{attrs:{src:"/http/https9.jpg",width:"800",height:"500"}}),t._v(" "),s("img",{attrs:{src:"/http/https10.jpg",width:"800",height:"500"}}),t._v(" "),s("h3",{attrs:{id:"浏览器是怎么获取到-ca-公钥的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是怎么获取到-ca-公钥的"}},[t._v("#")]),t._v(" 浏览器是怎么获取到 CA 公钥的？")]),t._v(" "),s("img",{attrs:{src:"/http/https11.jpg",width:"800",height:"500"}}),t._v(" "),s("h3",{attrs:{id:"数字证书链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数字证书链"}},[t._v("#")]),t._v(" 数字证书链")]),t._v(" "),s("p",[t._v("在操作系统中内置了这些 CA 机构的数字证书。")]),t._v(" "),s("p",[t._v("但是 CA 机构那么多，操作系统不能不可能将每家CA的数字证书都内置进操作系统。")]),t._v(" "),s("p",[t._v("一个折中的办法，将办法证书的机构划分为两种类型，根CA和中间CA，通常申请者都是向中间 CA 去申请证书的，而根 CA 作用就是给中间 CA 做认证，一个根 CA 会认证很多中间的 CA，而这些中间 CA 又可以去认证其他的中间 CA。")]),t._v(" "),s("p",[t._v("每个根 CA 机构都维护了一个树状结构，一个根 CA 下面包含多个中间 CA，而中间 CA 又可以包含多个中间 CA。这样就形成了一个证书链，你可以沿着证书链从用户证书追溯到根证书。")]),t._v(" "),s("img",{attrs:{src:"/http/https12.jpg",width:"800",height:"500"}}),t._v(" "),s("h3",{attrs:{id:"如何验证根证书的合法性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何验证根证书的合法性"}},[t._v("#")]),t._v(" 如何验证根证书的合法性")]),t._v(" "),s("p",[t._v("简单地判断这个根证书在不在操作系统里面，如果在，那么浏览器就认为这个根证书是合法的，如果不在，那么就是非法的。")]),t._v(" "),s("p",[t._v("如果某个机构想要成为根 CA，并让它的根证书内置到操作系统中，那么这个机构首先要通过 WebTrust 国际安全审计认证。")])])}),[],!1,null,null,null);h.default=r.exports}}]);