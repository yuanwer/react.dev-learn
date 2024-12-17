// 组件之间共享数据，可以将需要共享的数据，放在包含了这些组件的最近的父组件中

// 子组件接收父组件传递的数据，通过 props 接收，props可以传递任何类型的数据，包括函数
function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>
}

function MyApp() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      {/* 将 count 和 handleClick 作为 props 传递给 MyButton 组件 */}
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  )
}

// 当任何一个按钮被点击时，handleClick 函数都会被调用，count 的值都会增加 1，然后另一个按钮的 count 也会增加 1
