# 使用 github 的 Github Action 生成 Nuxt3 项目可访问的仓库网站链接

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## 创建项目

`npx nuxi@latest init <project-name>`

## github 上创建仓库

在 Github 上面新建一个跟项目同名的远程仓库，按照说明将本地项目代码提交到远程仓库，我们的示例的项目名是 nuxt3-github-pages

注意：从 2021 年 8 月 13 日开始，在对 Git 操作进行身份验证时不再接受帐户密码，并将要求使用基于令牌（token）的身份验证。因此需要在 github 上创建 token，创建步骤参考文章 https://blog.csdn.net/qq_40843427/article/details/137479224

把 token 直接添加远程仓库链接中，这样就可以避免同一个仓库每次提交代码都要输入 token 了，本示例项目（token: `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`）设置案例：
`git remote set-url origin https://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@github.com/lei1992/nuxt3-github-pages.git`
