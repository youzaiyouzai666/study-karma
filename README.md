# study-karma
学习karma及前端测试

## 参考
[karma如何与测试框架合作](https://segmentfault.com/a/1190000011204373)
[开始](https://segmentfault.com/a/1190000009325409)


## Karma如何和测试用例沟通

    window.__karma__.start Karma框架调用，它是执行测试的入口
    window.__karma__.complete 测试代码调用这个函数去通知Karma测试完成了
    window.__karma__.result 测试代码调用这个函数去通知Karma一条测试的结果
    window.__karma__.info 测试代码调用这个函数去通知Karma一些测试信息，例如总是用例的总数。
    window.__karma__.error 测试代码调用去通知Karma出现了一个错误

