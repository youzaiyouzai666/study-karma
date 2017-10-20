window.__karma__.start = function () {//window.__karma__.start Karma框架调用，它是执行测试的入口
    window.__karma__.info({//window.__karma__.info 测试代码调用这个函数去通知Karma一些测试信息，例如总是用例的总数。
        total: 2
    })

    testCase1()
    testCase2()

    window.__karma__.complete()//window.__karma__.complete 测试代码调用这个函数去通知Karma测试完成了
}


var testCase1 = function() {
    var sum = add(1, 3)
    if (sum === 4) {
        window.__karma__.result({//window.__karma__.result 测试代码调用这个函数去通知Karma一条测试的结果
            id: 1,
            description: '1 + 3 = 4',
            suite: ['leon'],
            log: ['OK'],
            success: true,
            skipped: false
        })
    } else {
        console.log('Error')
    }
}

var testCase2 = function() {
    var sum = sub(5, 2)
    if (sum === 3) {
        console.log('Success')
    } else {
        window.__karma__.result({//window.__karma__.result 测试代码调用这个函数去通知Karma一条测试的结果
            id: 2,
            description: '5 - 2 = ' + sum,
            suite: ['leon'],
            log: ['OK'],
            success: false,
            skipped: false
        })
    }
}



