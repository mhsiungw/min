---
title: What are stages in JS?
slug: what-are-stages
keywords: [javascript]
---

# What are stages in JS?

> 每次看到 stages 時，模模糊糊有個概念是 JS feature 發展階段的意思，但一直都沒有一個完整概念，今天要來好好整理一下。

暸解 stages 以前，我們要先了解 JavaScript 是 ECMAScript 標準的實現 (JavaScript is an implementation of ECMAScript standard) 這句話。

ECMASript 標準是由 ECMA 組織底下的 TC39 委員會制定，並在每年六月釋出，再由各家瀏覽器按照標準實作 JavaScript 的功能。

## ECMAScript

ECMAScript 從 1997 年開始發表，到目前為止總共累積了 11 種版本：

1. June 1997
2. June 1998
3. December 1999
4. Abandoned (last draft 30 June 2003)
5. December 2009 / 5.1 June 2011
6. June 2015
7. June 2016
8. June 2017
9. June 2018
10. June 2019[15]
11. June 2020[16]
12. June 2021[9]

## TC39

TC39 (Technical Committee 39) 是 ECMA 組織下負責定義、開發與維護 ECMAScript 的委員會，每年會按照以下流程發布 ECMAScript。

1. February 1: Candidate Draft is produced.
2. February - March: 60 day royalty-free opt-out period.
3. March TC39 Meeting: stage 4 proposals are incorporated, final semantics are approved, and the new spec version is branched from master. Only editorial changes are accepted from this point forward.
4. April-June: ECMA CC and ECMA GA review period.
5. July: Approval of new standard by the ECMA General Assembly

## Five Stages

最後，在了解了 TC39, ECMAScript 之後，可以來好好理解一下何謂 stages，
在 ECMAScript 發布以前，會經過五個階段，示意圖如下：
TC39 > stage 0 > stage 1 > stage 2 > stage 3 > stage 4 > ECMAScript

根據 [TC39 文件](https://tc39.es/process-document/) 的解釋，ECMAScript 的改變都會經過這五個階段，最後才會發布。

以上
