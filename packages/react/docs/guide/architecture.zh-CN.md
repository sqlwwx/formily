# 核心架构

@formily-x/react 的架构相比于@formily-x/core 并不复杂，先看架构图：

![](https://img.alicdn.com/imgextra/i1/O1CN013jbRfk1l5n6N7jYH8_!!6000000004768-55-tps-2200-1637.svg)

从这张架构图中我们可以看到，@formily-x/react 支持了两类用户，一类就是纯源码开发用户，他们只需要使用 Field/ArrayField/ObjectField/VoidField 组件。另一类就是基于 JSON-Schema 做动态开发的用户，他们依赖的主要是 SchemaField 组件，但是，这两类用户都需要使用一个 FormProvider 的组件来统一下发上下文。然后是 SchemaField 组件，它内部其实是依赖的 Field/ArrayField/ObjectField/VoidField 组件。
