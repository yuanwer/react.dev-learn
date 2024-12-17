function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    // 绑定事件时，事件处理函数不需要加()，直接写函数名
    <button onClick={handleClick}>Click me</button>
  );
}