---
title: The Box Model
slug: the-box-model
keywords: [box-model]
---

# The Box Model

記錄盒模型的定義與相關知識

## 定義

網頁是由一個又一個的 HTML 元素形成，而元素又是由 content, padding, border 與 margin 形成，而這四個 property 合在一起，稱為一個盒模型。
盒模型又分為 Outer Display 和 Inner Display。

Outer Display 主要限制元素本身的行為，而 Inner Display 限制元素底下子元素的行為。

Outer Display 分為三種：

1. `block`
2. `inline`
3. `inline-block`

## `block`

-   The box will break onto a new line. 會換行
-   The box will extend in the inline direction to fill the space available in its container. In most cases this means that the box will become as wide as its container, filling up 100% of the space available. 會佔據父元素的所有寬度
-   The width and height properties are respected. 可以設定寬度與高度
-   Padding, margin and border will cause other elements to be pushed away from the box. 邊距、邊界和邊框能夠影響其它元素

## `inline`

-   The box will not break onto a new line. 不會換行
-   The width and height properties will not apply. 不能設定寬度與高度
-   Vertical padding, margins, and borders will apply but will not cause other inline and block boxes to move away from the box. 可以設定上下邊距、邊界與邊框但不會影響其它元素
-   Horizontal padding, margins, and borders will apply and will cause other inline boxes to move away from the box. 可以設定左右邊距、邊界與邊框，且會影響其它元素

## `inline-block`

-   the width and height properties are respected 可以設定寬度與高度
-   padding, margin, and border will cause other elements to be pushed away from the box 邊距、邊界與邊框會影響其它元素
-   The box will not break onto a new line. 不會換行

## Inner Display

Inner Display 指 `flex` 或 `grid`，`flex` 的 container 預設是 `block` 元素，可以使用 `inline-flex` 讓 container 變成 inline-element。

## Margin Collapsing

當兩個元素皆設置同一方向的 margin 時，會依照數值的正負來影響最終結果。

1. 兩個都是正數時，取最大值
2. 一正一負，正減負
3. 兩個都是負數時，取最小值。

## Padding

padding 不能設定負數
