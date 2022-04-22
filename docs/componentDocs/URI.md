# 如何理解 URI？

URI，全称为统一资源标识符，用于区分互联网上不同的资源。

URI 它实际包含了 URN 和 URL 两个部分，由于 URL 过于普及，默认将 URI 视为 URL。


# URI 的结构
URI 真正最完整的结构是这样的。

1. scheme 表示协议名，比如 http、https、file 等。 需要在后面使用 :// 连接一起。
2. user:password@ 表示登录主机时的用户信息，但是不安全，一般不会使用。
3. host:port 表示主机和端口。
4. path 表示请求路径，标记资源所在的位置。
5. query 表示查询参数，为 key=val 这种形式。 用 & 隔开。
6. fragment 表示 URI 所定位的资源内的一个锚点，用于跳转到对应的位置。

https://www.baidu.com/s?wd=www&p=1232#113



# URI 编码
URI 使用 ASCII, ASCII 之外的字符不支持显示，还有一部分符号是界定符，不加以处理就会导致解析错误。

URI 引入 编码 机制，将所有非 ASCII 码字符和界定符转为十六进制字节值。在前面加 %.


