Promise.resolve().then(()=>{
    console.log(1)
    setTimeout(()=>{
        console.log(2)
    }, 0)
})

setTimeout(()=>{
    console.log(3)
    Promise.resolve().then(()=>{
        console.log(4)
    })
}, 0)

// 分析：前置知识-Promise的回调函数是放入微任务队列执行，setTimeout函数内容放入宏任务队列
// 1.代码首先顺序执行，遇到第一个Promise将promise的内容放入微任务队列，继续
// 2.遇到第8行的setTimeout将里面的内容放入宏任务队列，顺序执行完
// 3.同步任务执行完开始事件循环，检查微任务队列，将微任务队列执行，即输出1，再执行第三行的setTimeout将任务放进宏任务队列
// 4.微任务队列为空，按照先后顺序执行宏任务，输出3，将10行的promise回调函数then中的执行内容放入微任务队列
// 5.此时微任务队列不为空，故执行微任务队列，即输出4，最后输出宏任务队列中最后一个任务2
// 顺序：1342