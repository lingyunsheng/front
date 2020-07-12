# 盒模型 标准盒模型和低版本的IE盒模型区别

(1) 两种盒子模型：IE盒模型(border-box)、W3C标准盒模型(content-box)
(2) 盒模型：分为内容(content)、填充(padding)、边界(margin)、边框(border)四个部分

IE盒模型和W3C标准盒模型的区别：
(1) W3C标准盒模型：属性width，height只包含content，不包含border和padding
(2) IE盒模型：属性width，height包含content、border和padding，指的是content+padding+border

在IE8+浏览器中使用哪个盒模型可以由box-sizing(css新增的属性控制的)默认值为content-box，标准盒模型。box-sizing设为border-box则使用的是IE盒模型，如果在IE6,7,8中Doctype缺失，盒模型为IE盒模型

**答案**

盒模型都是由四个部分组成的，分别是margin、border、padding和content。

标准盒模型和IE盒模型的区别在于设置width和height时，所对应的范围不同。标准盒模型的width和height属性的
范围只包含了content，而IE盒模型的width和height属性的范围包含了border、padding和content。

一般来说，我们可以通过修改元素的box-sizing属性来改变元素的盒模型。