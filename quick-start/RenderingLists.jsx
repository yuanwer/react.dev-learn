const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

// 使用js的for循环或者map函数来渲染列表
function ProductList() {
    const listItems = products.map(product => {
      // 使用key来标识列表中的每一项，key是唯一的，不能重复（在当前列表中）
      // key的作用是React用来识别哪些项发生了变化，比如添加、删除、移动等，方便更新页面
      <li key={product.id}>
        {product.title}
      </li>
    })

    return (
      <ul>{listItems}</ul>
    )
}
