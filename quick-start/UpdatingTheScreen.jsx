import { useState } from 'react'

function MyButton() {
  // count 是当前状态，setCount 是更新状态的函数
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    // 页面初始会显示 0，点击后会显示 1，再点击会显示 2，以此类推
    <button onClick={handleClick}>Clicked {count} times</button>
  )
}

// 由于每个按钮的count是独立的（在组件内部），所以如果这个组件被创建了多次，那么每个按钮的count都是独立的，互不干扰
