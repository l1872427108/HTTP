# Cookie

## 生存周期
1. Expires 设置过期时间。
2. Max-Age 用来设置时间段，单位是秒，从浏览器收到报文开始计算。

若 Cookie 过期，则这个 Cookie 会被删除，并不会发送给服务端。

## 作用域
设置 Domain 和 path，给 Cookie 绑定域名和路径，在发送请求之前，如果域名或路径不符合，就不会带上 Cookie。对于 / ，表示域名下的任意路径都可以使用 Cookie。

## 安全性

1. 带上 Secure, 只能在 HTTPS 传输 Cookie。

2. HttpOnly，表示只能通过 HTTP 传输，不能通过 JS 访问， 这也是预防 XSS 的主要手段。

3. SameSite 可以预防 CSRF 攻击。

- Strict 模式下，浏览器将完全的禁止第三方携带 Cookie。 只能够本域名下才能够携带 Cookie。
- Lax 模式下，宽松一些，只能在 get 方法提交表单或者 a 标签发送 get 请求 的情况下携带 Cookie。
- None 模式下，请求会自动携带上 Cookie。


## Cookie 的缺点
1. 容量上。
2. 性能上。
3. 安全缺陷。