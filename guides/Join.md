# 加入我们  
我们欢迎所有期望加入翻译行动的玩家  
如果您发现有漏翻译或错翻的地方，请向```iagoing@foxmail.com```指出  
- [加入我们](#加入我们)
  - [邮件要求](#邮件要求)
  - [附件要求](#附件要求)
  - [文档规范](#文档规范)
  - [链接](#链接)
    - [内部链接](#内部链接)
    - [外部链接](#外部链接)
  - [任务列表](#任务列表)
  - [代码高亮 Highlighting](#代码高亮-highlighting)
  - [Code Fence Options](#code-fence-options)
  - [代码框中某行高亮显示](#代码框中某行高亮显示)
  - [Adding Vue Mixin](#adding-vue-mixin)
  - [使用 Mermaid](#使用-mermaid)
  - [HTML in Markdown](#html-in-markdown)

## 邮件要求
如果您想参与翻译计划，您的邮件请遵循以下要求：  
1、您的署名  
2、您的网站、主页等链接（非必须，用以悬挂致谢）  
3、翻译的网址  
4、翻译的内容附件（markdown格式）
5、图片等其他附件 (路径请与网站路径一致)
6、附件整体打包为压缩包
## 附件要求
附件应遵循以下规则：
附件的所有图片名称应当与官网相同，具体步骤：
按F12打开网页控制台，点击控制台左上角的箭头，再点击目标图片，您会找到图片的标签代码如：
```
<a href="/Inventory" title="Inventory"><img alt="Inventory Nav Icon.png" src="/images/7/70/Inventory_Nav_Icon.png" decoding="async" width="32" height="32"></a>
```
其中Inventory_Nav_Icon.png就是本图片的名称。  
图片应当统一放在images文件夹下，在markdown中调用链接应当为
```
[示例图片](/images/7/70/Inventory_Nav_Icon.png)
```
  
我们遵循统一的命名规则以确保网页的连贯性。


## 文档规范

文档应以 Markdown 格式展现:

```markdown
# 标题

内容填在这里...
```

如果你不知道它是什么，请查阅 [Markdown](https://daringfireball.net/projects/markdown/)。

## 链接

### 内部链接

内部链接会转换为 `<router-link>` 进行 SPA 式导航。

__输入__：

```markdown
- [首页](/zh/) <!-- 展示首页 -->
- [在 Markdown 中使用 Vue](/zh/guide/use-vue-in-markdown) <!-- 展示其他页面 -->
- [查看 `title` 选项](../options.md#title) <!-- 甚至是链接到一个内部 Markdown 文件 -->
```

__输出__：

- [首页](/zh/) <!-- 展示首页 -->
- [在 Markdown 中使用 Vue](/zh/guide/use-vue-in-markdown) <!-- 展示其他页面 -->
- [查看 `title` 选项](../options.md#title) <!-- 甚至是链接到一个内部 Markdown 文件 -->

### 外部链接

外部链接会自动添加 HTML 属性 `target="_blank" rel="noopener noreferrer"`，例如：

__输入__：

```markdown
- [Docute website](https://docute.org)
- [Docute repo](https://github.com/egoist/docute)
```

__输出__：

- [Docute website](https://docute.org)
- [Docute repo](https://github.com/egoist/docute)

## 任务列表

__输入__:

```markdown
- [ ] Rule the web
- [x] Conquer the world
- [ ] Learn Docute
```

__输出__:

- [ ] Rule the web
- [x] Conquer the world
- [ ] Learn Docute

## 代码高亮 Highlighting

代码框使用 [Prism.js](https://prismjs.com/) 高亮显示，示例代码：

```js
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
```

默认支持的语言：

```
markup
xml
html
mathml
svg
css
clike
javascript
js
```

## Code Fence Options

Next to the code fence language, you can use a JS object to specify options:

````markdown
```js {highlightLines: [2]}
function foo() {
  console.log('foo')
}
```
````

Available options:

- `highlightLines`: [Line Highlighting in Code Fences](#line-highlighting-in-code-fences)
- `mixin`: [Adding Vue Mixin](#adding-vue-mixin)

## 代码框中某行高亮显示

__输入：__

````markdown
```js {highlight:[3,'5-7',12]}
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```
````

__输出：__

```js {highlight:[3,'5-7',12]}
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```

## Adding Vue Mixin

Adding a Vue mixin to the Markdown component:

````markdown
<button @click="count++">{{ count }}</button> people love Docute.

```js {mixin:true}
{
  data() {
    return {
      count: 1000
    }
  }
}
```
````

<button @click="count++">{{ count }}</button> people love Docute.

```js {mixin:true}
{
  data() {
    return {
      count: 1000
    }
  }
}
```

## 使用 Mermaid

[Mermaid](https://mermaidjs.github.io/) 是一种纯文本撰写图表的方法，你可以使用简单的 Docute 插件来添加对 Mermaid 的支持：

```html
<script src="https://unpkg.com/docute@4/dist/docute.js"></script>
<!-- Load mermaid -->
<script src="https://unpkg.com/mermaid@8.0.0-rc.8/dist/mermaid.min.js"></script>
<!-- Load the mermaid plugin -->
<script src="https://unpkg.com/docute-mermaid@1/dist/index.min.js"></script>

<!-- Use the plugin -->
<script>
new Docute({
  // ...
  plugins: [
    docuteMermaid()
  ]
})
</script>
```

## HTML in Markdown

You can write HTML in Markdown, for example:

```markdown
__FAQ__:

<details><summary>what is the meaning of life?</summary>

some say it is __42__, some say it is still unknown.
</details>
```

__FAQ__:

<details><summary>what is the meaning of life?</summary>

some say it is __42__, some say it is still unknown.
</details>

<br>

<Note>In fact you can even use Vue directives and Vue components in Markdown too, learn more about it [here](./use-vue-in-markdown.md).</Note>
