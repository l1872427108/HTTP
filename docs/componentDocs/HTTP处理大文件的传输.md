# HTTP 处理大文件的传输
对于很大的文件，多达几个G，如果一次性传输的话，会有大量的等待时间，验证影响用户的体验。HTTP 针对这种情况，采用了范围请求的解决方案。允许客户端仅仅请求一个资源的一部分。

服务器要支持范围请求，需要加上响应头.
Accept-Ranges: none；

来告知客户端是否支持范围请求。

# Range 字段
对于客户端，需要请求哪部分，需要使用 Range 这个请求头字段确定，格式为 bytes=x-y. 
- 0-499 表示从开始到第499个字节。
- 500- 表示从500字节到文件终点。
- -100 表示文件的最后 100 个字节。

服务器收到请求后，首先研制范围的合法性，如果越界了就返回 416 错误码，否则读取了对应的片段，返回 206 状态码。

同时，服务器需要添加 Content-Range 字段，这个字段的格式根据请求头中 Range 字段的不同而有所差异。

请求 单段数据和请求多段数据，响应头是不一样的。

// 单个数据
Range: bytes=0-9
// 多段数据
Range: bytes=0-9, 30-39

# 单段数据
对于单段数据的请求, 返回的格式
HTTP/1.1 206 Partial Content
Content-Length: 10
Accept-Range: bytes
Content-Range: bytes 0-9/100

0-9 表示请求的返回，100 表示资源的总大小。


# 多段数据
HTTP/1.1 206 Partial Content
Content-Type:multipart/byteranges;boundary=0000010101
Accept-Ranges: bytes;

--0000010101
Content-Type: text/plain
Content-Range: bytes 0-9/96

....

--0000010101--

Content-Type: multipart/byteranges;boundary=00000010101 表示的是：
1. 请求一定是多段数据请求。
2. 响应体中的分割符是 00000010101

因此，各段数据之间会由分割符分开，而且在最后的分割符末尾添上 -- 表示结束。