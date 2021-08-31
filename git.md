# git

```js
git reflog
```

## git 前进后退

- 基于索引值操作(git reset --hard c0300499)
- 使用^符号 git reset --hard HEAD^^^
- 使用~符号 git reset --hard HEAD~n

## reset 命名的三个参数对比

- --soft 参数
  1. 仅仅在本地库移动 HEAD 指针
- --mixed 参数
  1. 在本地库移动 HEAD 指针
  2. 重置暂存区
- --hard 参数
  1. 在本地库移动 HEAD 指针
  2. 重置暂存区
  3. 重置工作区
