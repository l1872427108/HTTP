# HTTP 处理表单数据的提交

在 http 中，主要有两种表单提交的方式，体现在不同的 Content-Type 取值。
1. application/x-www-form-urlencoded 
2. multipart/form-data

一般都是 POST 请求，默认将提交的数据放在请求体中。

## application/x-www-form-urlencoded
1. 其中的数据会被编码为以 & 分隔的健值对。
2. 字符以URL编码方式编码。

{a: 1, b: 2} -> a=1&b=2 -> 'a%3D1%26b%3D2'


## multipart/form-data
1. 请求头中的 Content-Type 字段会包含 boundary, 且boundary的值有浏览器默认指定.
Content-Type:multipart/form-data;boundary=---WebkitForm....
2. 数据被分为多个部分，每两个部分之间通过分隔符来分隔，每部分均有 HTTP 头部描述子包体。



multipart/form-data 格式最大的特点在于：每一个表单元素都是独立的资源表述。因为有 boundary 的存在，处理起来也比较麻烦。

对于图片等文件的上传，基本采用 multipart/form-data。因为没有必要做 URL 编码，带来巨大耗时的同时也占用了更多的空间。