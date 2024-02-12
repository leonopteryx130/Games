# react_scaffold

从0实现的react脚手架，react目前已经有很成熟的脚手架工具，比如create-react-app，next.js等，但是在做一些非常小的功能的时候，并不需要那么重的脚手架，一些软件的意义就在于能运行就好，所以这个时候就非常适合用自己定义的react脚手架

### 分支说明

- main分支：

    最基础的脚手架分支，所有其他分支必须是由这个分支拓展出来的，所以这个分支应该尽可能的配置简洁，并且只支持最基础的测试代码

- test分支：

    所有分支的测试环境，这个分支应该包含测试代码案例

- release-base：

    基础分支，所有分支里最基础的分支，和main分支有点像，但是他们之间有本质区别

    **支持项**：

    1. js/ts
    2. scss
    3. 各种图片文件
    4.  

- markdown：
    
    记录markdown的分支


### todo

```html-webpack-plugin```打包后，在生成的index.html文件中引用js，是绝对路径，期望是相对路径，不然每次部署比较麻烦