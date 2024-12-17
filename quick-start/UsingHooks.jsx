// React中，use开头的函数叫做hooks（钩子），useState是状态钩子，是React内置的，也可以编写自己的钩子

// Hooks 函数只能在组件的顶层使用，不能在条件语句中使用，不能在循环中使用，不能在函数组件之外使用

// 如果要在条件语句或者循环中使用hooks，就要提取一个新的组件，然后在新组件的顶层使用hooks

import { useState } from 'react'

// 正确的使用方式
function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>当前计数: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  )
}

// 错误示例 - 不能在条件语句中使用 hooks
function WrongCounter() {
  if (true) {
    // 这样是错误的!
    const [count, setCount] = useState(0)
  }
  return <div>错误示例</div>
}

// 正确示例 - 将使用 hooks 的逻辑提取到新组件
function ListItem() {
  // 在组件顶层使用 hooks
  const [isComplete, setIsComplete] = useState(false)
  return (
    <li>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={e => setIsComplete(e.target.checked)}
      />
      任务项
    </li>
  )
}

function TodoList() {
  const items = ['任务1', '任务2', '任务3']
  return (
    <ul>
      {items.map((item, index) => (
        // 每个列表项都是一个新的组件实例
        <ListItem key={index} />
      ))}
    </ul>
  )
}
