(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{436:function(t,a,r){"use strict";r.r(a);var o=r(62),e=Object(o.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"http-处理表单数据的提交"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-处理表单数据的提交"}},[t._v("#")]),t._v(" HTTP 处理表单数据的提交")]),t._v(" "),r("p",[t._v("在 http 中，主要有两种表单提交的方式，体现在不同的 Content-Type 取值。")]),t._v(" "),r("ol",[r("li",[t._v("application/x-www-form-urlencoded")]),t._v(" "),r("li",[t._v("multipart/form-data")])]),t._v(" "),r("p",[t._v("一般都是 POST 请求，默认将提交的数据放在请求体中。")]),t._v(" "),r("h2",{attrs:{id:"application-x-www-form-urlencoded"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#application-x-www-form-urlencoded"}},[t._v("#")]),t._v(" application/x-www-form-urlencoded")]),t._v(" "),r("ol",[r("li",[t._v("其中的数据会被编码为以 & 分隔的健值对。")]),t._v(" "),r("li",[t._v("字符以URL编码方式编码。")])]),t._v(" "),r("p",[t._v("{a: 1, b: 2} -> a=1&b=2 -> 'a%3D1%26b%3D2'")]),t._v(" "),r("h2",{attrs:{id:"multipart-form-data"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multipart-form-data"}},[t._v("#")]),t._v(" multipart/form-data")]),t._v(" "),r("ol",[r("li",[t._v("请求头中的 Content-Type 字段会包含 boundary, 且boundary的值有浏览器默认指定.\nContent-Type:multipart/form-data;boundary=---WebkitForm....")]),t._v(" "),r("li",[t._v("数据被分为多个部分，每两个部分之间通过分隔符来分隔，每部分均有 HTTP 头部描述子包体。")])]),t._v(" "),r("p",[t._v("multipart/form-data 格式最大的特点在于：每一个表单元素都是独立的资源表述。因为有 boundary 的存在，处理起来也比较麻烦。")]),t._v(" "),r("p",[t._v("对于图片等文件的上传，基本采用 multipart/form-data。因为没有必要做 URL 编码，带来巨大耗时的同时也占用了更多的空间。")])])}),[],!1,null,null,null);a.default=e.exports}}]);