# Pdf库

## Git LFS 事项

```cmd
git init

git lfs install
git lfs track "*.pdf" # 跟踪大文件类型
# 这会在仓库中创建一个.gitattributes文件，内容如下：
# filename: .gitattributes
# *.pdf filter=lfs diff=lfs merge=lfs -text
git lfs track "*.epub"

# git add .
git commit -m "Add large PDF files with Git LFS"
```

clone时我记得 lfs 也要加的选项

其他操作就和普通仓库一样了

## 版权说明

仅实验 vuepress框架对于pdf库的支持，请勿下载内容
