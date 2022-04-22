# HTTP 报文结构

HTTP 在传输的时候是 header + body 的结构
起始行 + 头部 + 空行 + 实体



### 起始行 (由空格隔开)
1. 请求报文
GET /home HTTP/1.1
方法 + 路径 + http 版本

2. 响应报文
HTTP/1.1 200 OK
也叫状态行。由 http 版本、状态码和原因三部分组成。



格式：
1. 字段名不区分大小写
2. 字段名不允许出现空格，不可以出现下划线 _。
3. 字段名后面必须紧接着  :


请求行 Method URL Version
请求头 Field Name: Field Value
请求头 Field Name: Field Value
请求头 ...
空行 

状态行 Version Status Code Reason
响应头 Field Name: Field Value
响应头 Field Name: Field Value
响应头 ...
空行

空行是用来区分 头部 和 实体的。



### 实体
就是数据部分，也就是 body 部分。请求报文对应请求体，响应报文对应 响应体。

