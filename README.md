
前端纳米学位街机游戏克隆项目
===============================

学生应该用这个[评审标准](https://review.udacity.com/#!/rubrics/499/view))来自我检查自己提交的代码。 确认自己写的函数要是**面向对象的** -  要么是类函数（就像函数 Player 和 Enemy）要么是类的原型链上的函数比如 Enemy.prototype.checkCollisions ， 在类函数里面或者类的原型链函数里面适当的使用关键词 'this' 来引用调用该函数的对象实例。最后保证你的**readme.md**文件要写明关于如何运行和如何玩你的街机游戏的指引。

关于如何开始这个项目的更详细的指导，可以查阅这份[指南](https://gdgdocs.org/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true)。
该项目的简介 街机游戏项目是一款以经典的街机游戏“青蛙过河”为蓝本构建的项目，为了便于构建，在此项目中实现了 原有游戏中最基本的功能。例如玩家和敌人的移动，以及二者的碰撞检测，继而碰撞后返回到系统原先的设置等等。同时为了增强游戏的可玩性，自己也在项目原始要求之外，增加了分数统计，和背景音效，这样可以是玩家在使用过程中更能够体验到真实的感觉，从而觉得自己就好像是身临其境之中。

##怎么使用这个项目

******1. 克隆代码库到本地 git clone https://github.com/18513763652/udacity-p5

******2. 双击打开index.html文件即可运行

******3. 玩家按住键盘上下左右方向键来移动小人在画布场景中移动，并在移动过程中，要躲避从左侧移动过来的 敌人，避免与其发生碰撞，当到达彼岸时，可以为玩家在右上方的计数板上记上一分。 如果玩家可以连续的穿越到对岸，那么就计数板上的数据也会相应累加。

******4. 在移动过程中，如果玩家一旦和敌人（场景中的那些蜘蛛）发生身体接触，那么游戏就立刻终止，并重新返回到 初始化的状态，同时计数板的数据清零。


##完成项目所需要的重要知识点	 
******2. JavaScript作用域和闭包,原型链的使用
this关键字 prototype

******3. 函数和对象(一切皆是对象)
创建对象的方法， 函数声明的提升

******4. call和apply
更改方法的当前作用域

******5. Object.create()
创建一个对象的子类


##一些资源

######JavaScript

JavaScript入门 https://www.udacity.com/course/intro-to-javascript--ud803

JavaScript基础 https://www.udacity.com/course/javascript-basics--ud804


######HTML5 Canvas

 https://www.udacity.com/course/html5-canvas--ud292
 
