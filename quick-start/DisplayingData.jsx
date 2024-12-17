// 在jsx的标签中显示数据，jsx中使用 {} ，表示里面包含的是一段js代码
function Name() {
  const user = {
      name: "niko"
  }

  return (
      // 页面上将会显示 "niko"
      <div>{user.name}</div>
  )
}