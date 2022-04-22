# HTTP 怎么传输定长和不定长的数据

## 定长
对于定长的数据，可以使用 Content-Length 来指明包体的长度。

res.setHeader('Content-Length', 10);
res.write('helloworld');

这样子就可以访问到 helloworld.


res.setHeader('Content-Length', 8);
res.write('helloworld');

这样子将访问到 hellowor

res.setHeader('Content-Length', 12);
res.write('helloworld');

这样子将访问到将会无法正常运作，无法显示，Content-Length 对于 http 传输非常的重要。


# 不定长

Transfer-Encoding: chunked

表示分块传输数据，设置之后产生的效果：
1. Content-Length 字段会被忽略。
2. 基于长连接持续推送动态内容。

响应体的结构是：
chunk长度（16禁止的数）
第一个chunk的内容
chunk长度（16禁止的数）
。。。。
0
空行

