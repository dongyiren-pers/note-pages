(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1096:function(e,s,r){"use strict";r.r(s);var t=r(14),v=Object(t.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"第5章-rocketmq-高级特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第5章-rocketmq-高级特性"}},[e._v("#")]),e._v(" 第5章 RocketMQ 高级特性")]),e._v(" "),t("h2",{attrs:{id:"_5-1-顺序消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-顺序消息"}},[e._v("#")]),e._v(" 5.1 顺序消息")]),e._v(" "),t("h3",{attrs:{id:"消息的有序性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消息的有序性"}},[e._v("#")]),e._v(" 消息的有序性")]),e._v(" "),t("p",[e._v("消息有序指的是一类消息消费时，能按照发送的顺序来消费。例如：一个订单产生了三条消息分别是订单创建、订单付款、订单完成。消费时要按照这个顺序消费才能有意义，但是订单之间是可以并行消费的。RocketMQ 可以严格的保证消息有序。")]),e._v(" "),t("p",[t("strong",[e._v("顺序消息分为全局顺序消息与部分顺序消息，全局顺序是指某个 Topic 下的所有消息都要保证顺序；部分顺序消息只要保证每一组消息被顺序消费即可。")])]),e._v(" "),t("p",[e._v("如果想要实现全局顺序消息，那么只能使用一个队列，以及单个生产者，这是会严重影响性能。")]),e._v(" "),t("p",[t("img",{attrs:{src:r(888),alt:"image-20230810173832265"}})]),e._v(" "),t("p",[e._v("因此，我们常说的顺序消息通常是只的部分顺序消息，就上面的例子来说，我们不用管不同的订单 ID 的消息之间的总体消费顺序，只需要保证同样订单 ID 的消息能按照订单创建、订单付款、订单完成这个顺序消费就可以了。")]),e._v(" "),t("p",[e._v("顺序消费实际上有两个核心点，一个是 "),t("strong",[e._v("生产者有序发送")]),e._v("，另一个是 "),t("strong",[e._v("消费者有序消费")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"生产者有序发送"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产者有序发送"}},[e._v("#")]),e._v(" 生产者有序发送")]),e._v(" "),t("p",[e._v("RocketMQ 中生产者生产的消息会放置在某个队列中，基于队列先进先出的特性天然的可以保证存入队列的消息顺序和拉取的消息顺序是一致的，因此，我们 "),t("strong",[e._v("只需要保证一组相同的消息按照给定的顺序存入同一个队列中")]),e._v("，就能保证生产者有序发送。")]),e._v(" "),t("p",[e._v("普通发送消息的模式下，生产者采用轮询的方式将消费均匀的分发到不同的队列中，然后被不同的消费者消费，因为一组消息在不同的队列，此时就无法保证消息有序性了。")]),e._v(" "),t("p",[t("img",{attrs:{src:r(889),alt:"image-20230810174303560"}})]),e._v(" "),t("p",[e._v("这个问题很好解决。"),t("strong",[e._v("RocketMQ 支持生产者投放消息时自定义投放策略")]),e._v("，实现 "),t("strong",[e._v("MessageQueueSelector 接口")]),e._v("，使用 "),t("strong",[e._v("Hash 取模法")]),e._v(" 来保证同一个订单在同一个队列中。即通过 "),t("code",[e._v("订单 ID % 队列数量")]),e._v(" 得到该 ID 的订单投放的队列在队列列表中的索引，然后该订单的所有消息都会被投放到这个队列中。")]),e._v(" "),t("p",[e._v("生产者发送消息的方法中就有一些添加队列选择器的方法，保证消息发送顺序。")]),e._v(" "),t("p",[e._v("比如只有两个队列，那么订单 ID 为 1、2、3 的三组消息中，1、3 组消息存放于第一个队列，而 2 组消息存放于第二个队列，如下图是一种消息可能的消息存放顺序：")]),e._v(" "),t("p",[t("img",{attrs:{src:r(890),alt:"image-20230810180403182"}})]),e._v(" "),t("p",[e._v("这个方法可以实现一组消息被顺序的存放，不同组的消息之间的顺序无法保证，这就是部分顺序。")]),e._v(" "),t("p",[e._v("另外，"),t("strong",[e._v("顺序消息必须使用同步发送的方式才能保证生产者发送的消息有序")]),e._v("。")]),e._v(" "),t("p",[e._v("实际上，采用队列选择器的方法不能保证消息的严格顺序，我们的目的是将消息发送到同一个队列中，如果某个 Broker 挂了，那么队列就会减少一部分，如果采用取余的方式投递，将可能导致同一个业务中的不同消息被发送到不同的队列中，导致同一个业务的不同消息被存入不同的队列中，短暂的造成部分消息无序。同样的，如果增加了服务器，那么也会造成短暂的造成部分消息无序。")]),e._v(" "),t("h3",{attrs:{id:"消费者有序消费"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消费者有序消费"}},[e._v("#")]),e._v(" 消费者有序消费")]),e._v(" "),t("p",[e._v("RockerMQ 的 MessageListener 回调函数提供了两种消费模式，有序消费模式 MessageListenerOrderly 和并发消费模式 MessageListenerConcurrently。")]),e._v(" "),t("p",[e._v("消费时，消费者 "),t("strong",[e._v("注册 MessageListenerOrderly 类型的回调接口")]),e._v(" 实现顺序消费，如果消费者采用 Concurrently 并行消费，则仍然不能保证消息消费顺序。")]),e._v(" "),t("p",[e._v("实际上，每一个消费者的的消费端都是采用线程池实现多线程消费的模式，即消费端是多线程消费。虽然 MessageListenerOrderly 被称为有序消费模式，但是仍然是使用的线程池去消费消息。")]),e._v(" "),t("p",[e._v("MessageListenerConcurrently 是拉取到消息之后就提交到线程池去消费，而 "),t("strong",[e._v("MessageListenerOrderly 则是通过加分布式锁和本地锁保证同时只有一条线程去消费一个队列上的数据。")])]),e._v(" "),t("p",[e._v("即顺序消费模式使用三把锁来保证消费的顺序性：")]),e._v(" "),t("div",{staticClass:"anchor",attrs:{id:"broker-的分布式锁"}},[e._v("Broker 的分布式锁")]),t("p",[e._v("在 Rebalance 的处理新分配队列的 updateProcessQueueTableInRebalance 方法，以及 ConsumeMessageOrderlyService 服务启动时的 start 方法中，都会尝试向 Broker 申请当前 Consumer 分配到的 messageQueue 的分布式锁。")]),e._v(" "),t("p",[e._v("Broker 端的分布式锁存储结构为 "),t("code",[e._v("ConcurrentMap<String consumerGroup, ConcurrentHashMap<MessageQueue, LockEntry>>")]),e._v("，"),t("strong",[e._v("该分布式锁保证同一个 consumerGroup 下同一个 messageQueue 只会被分配给一个 consumerClient。")])]),e._v(" "),t("p",[e._v("获取到的 Broker 端的分布式锁在 client 端的表现形式为 processQueue.locked 属性为 true，且该分布式锁在 Broker 端默认 60s 过期，在 client 端默认 30s 过期，因此 ConsumeMessageOrderlyService#start 会启动一个定时任务，每过 20s 向 Broker 申请分布式锁，刷新过期时间。")]),e._v(" "),t("p",[e._v("Broker 端的分布式锁最先被获取到，如果没有获取到，那么在 Rebalance 的时候就不会创建 processQueue 了也不会提交对应的消费请求了。")]),e._v(" "),t("div",{staticClass:"anchor",attrs:{id:"messagequeue-的本地-synchronized-锁"}},[e._v("messageQueue 的本地 synchronized 锁")]),t("p",[e._v("在执行消费任务的开头，便会获取该 messageQueue 的本地锁对象 objLock，它是一个 Object 对象，然后通过 synchronized 实现锁定。")]),e._v(" "),t("p",[e._v("这个锁的锁对象存储在 MessageQueueLock.mqLockTable 属性中，结构为"),t("code",[e._v("ConcurrentMap<MessageQueue，Object>")]),e._v("，一个 MessageQueue 对应一个锁，不同的 MessageQueue 有不同的锁。")]),e._v(" "),t("p",[t("strong",[e._v("因为顺序消费同样是通过线程池消费的，这个 synchronized 锁用来保证同一时刻对于同一个队列只有一个线程去消费它。")])]),e._v(" "),t("div",{staticClass:"anchor",attrs:{id:"proccessqueue-的本地-consumelock"}},[e._v("proccessQueue 的本地 consumeLock")]),t("p",[e._v("在获取到 Broker 端的分布式锁以及 messageQueue 的本地 synchronized 锁的之后，在执行真正的消息消费的逻辑 messageListener#consumeMessage 之前，会获取 proccessQueue 的 consumeLock，这个本地锁是一个 ReentrantLock。")]),e._v(" "),t("p",[e._v("这把锁的作用："),t("strong",[e._v("防止在消费消息过程中，该消息队列因为发生 Rebalance 而被分配给其他 Consumer，进而导致的两个 Consumer 重复消费消息的行为。")])]),e._v(" "),t("p",[e._v("Rebalance 时，如果某个队列 C 被分配给了新的 Consumer，那么当前 Consumer 需要对该队列进行释放，它会调用 removeUnnecessaryMessageQueue 方法对该队列 C 请求 Broker 端分布式锁的解锁。而在请求 Broker 分布式锁解锁的时候，一个重要的操作就是首先尝试获取这个 messageQueue 对应的 proccessQueue 的本地 consumeLock。只有获取了这个锁，才能尝试请求 Broker 端对该 messageQueue 的分布式锁解锁。如果 consumeLock 加锁失败，表示当前消息队列正在被消费，不能解锁。那么本次就放弃解锁了，移除消息队列失败，只有等待下次重新分配消费队列时，再进行移除。")]),e._v(" "),t("p",[e._v("如果没有这把锁，假设该消息队列因为 Rebalance 而被分配给其他客户端 B，但是由于客户端 A 正在对于拉取的一批消费消息进行消费，还没有提交消费点位，如果此时客户端 A 能够直接请求 Broker 对该 messageQueue 解锁，这将导致客户端 B 获取该 messageQueue 的分布式锁，进而消费消息，而这些没有 commit 的消息将会发送重复消费。")]),e._v(" "),t("h2",{attrs:{id:"_5-2-消息事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-消息事务"}},[e._v("#")]),e._v(" 5.2 消息事务")]),e._v(" "),t("h3",{attrs:{id:"是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[e._v("#")]),e._v(" 是什么")]),e._v(" "),t("p",[e._v("RocketMQ 是基于半消息机制实现分布式事务：")]),e._v(" "),t("p",[t("strong",[e._v("事务消息")]),e._v("：MQ 提供类似 X/Open XA 的分布事务功能，通过事务消息能达到分布式事务的最终一致。")]),e._v(" "),t("p",[t("strong",[e._v("半消息")]),e._v("：暂不能投递的消息，发送方已经将消息成功发送到了 MQ 服务端，但是服务端未收到生产者对该消息的二次确认，此时该消息被标记成“暂不能投递”状态，处于该种状态下的消息即半消息。")]),e._v(" "),t("p",[t("strong",[e._v("半消息回查")]),e._v("：由于网络闪断、生产者应用重启等原因，导致某条事务消息的二次确认丢失，MQ 服务端通过扫描发现某条消息长期处于“半消息”时，需要主动向消息生产者询问该消息的最终状态（Commit 或是 Rollback），该过程即消息回查。")]),e._v(" "),t("h3",{attrs:{id:"流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[e._v("#")]),e._v(" 流程")]),e._v(" "),t("p",[t("img",{attrs:{src:r(891),alt:"img"}})]),e._v(" "),t("ul",[t("li",[e._v("步骤1：发送方向 MQ 服务端发送消息。")]),e._v(" "),t("li",[e._v("步骤2：MQ Server 将消息持久化成功之后，向发送方 ACK 确认消息已经发送成功，此时消息为半消息。")]),e._v(" "),t("li",[e._v("步骤3：发送方开始执行本地事务逻辑。")]),e._v(" "),t("li",[e._v("步骤4：发送方根据本地事务执行结果向 MQ Server 提交二次确认（Commit 或是 Rollback），MQ Server 收到 Commit 状态则将半消息标记为可投递，订阅方最终将收到该消息；MQ Server 收到 Rollback 状态则删除半消息，订阅方将不会接受该消息。")]),e._v(" "),t("li",[e._v("步骤5：在断网或者是应用重启的特殊情况下，上述步骤4 提交的二次确认最终未到达 MQ Server，经过固定时间后 MQ Server 将对该消息发起消息回查。")]),e._v(" "),t("li",[e._v("步骤6：发送方收到消息回查后，需要检查对应消息的本地事务执行的最终结果。")]),e._v(" "),t("li",[e._v("步骤7：发送方根据检查得到的本地事务的最终状态再次提交二次确认，MQ Server 仍按照步骤 4 对半消息进行操作。")])])])}),[],!1,null,null,null);s.default=v.exports},888:function(e,s,r){e.exports=r.p+"assets/img/image-20230810173832265.081c78a6.png"},889:function(e,s,r){e.exports=r.p+"assets/img/image-20230810174303560.207a9d36.png"},890:function(e,s,r){e.exports=r.p+"assets/img/image-20230810180403182.60cebe65.png"},891:function(e,s,r){e.exports=r.p+"assets/img/584866-20210913111931895-2068700802.6d7f63ed.png"}}]);