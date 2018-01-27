# 一、操作节点
1. 方法
appendChild(要插入的节点)              内部末尾插入节点
insertBefore(要插入的节点,参照节点)     外部前边插入节点
replaceChild(要插入到节点,要替换的节点)替换节点(被替换的节点还在文档中,但是在文档中已经没有了自己的位置)
removeChild(要删除的节点) 移除节点(要移除的节点还在文档中,但是在文档中已经没有了自己的位置)

2. 其他方法(所有类型节点都有的)
cloneNode(布尔值:true 深复制,flase 浅复制) 创建副本节点
  {
  true 深复制,复制节点及其整个子节点树
  flase 浅复制,只复制节点本身
  不复制添加到DOM节点中的js属性
  }
normalize() 处理文档树中的文本节点
  调用该方法:后代节点遇到 空文本节点,就删除;遇到多个相邻的文本节点合并为一个文本节点.

# 二、Document类型
Document节点具有特征:
nodeType 的值为 9
nodeName 的值为 "#document"
nodeValue 的值为null
parentNode 的值为null
ownerDocument 的值为null (所有节点都有的属性,表示整个文档的文本节点)
