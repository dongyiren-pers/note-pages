(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1092:function(v,_,s){"use strict";s.r(_);var t=s(14),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h1",{attrs:{id:"第5章-存储与持久化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第5章-存储与持久化"}},[v._v("#")]),v._v(" 第5章 存储与持久化")]),v._v(" "),s("h2",{attrs:{id:"_5-1-rdb-日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-rdb-日志"}},[v._v("#")]),v._v(" 5.1 RDB 日志")]),v._v(" "),s("blockquote",[s("p",[v._v("RDB 即 Redis DataBase")])]),v._v(" "),s("p",[v._v("RDB 持久化是按照、一定的时间周期策略把内存的数据 "),s("strong",[v._v("以快照形式保存到硬盘的二进制文件")]),v._v("。对应产生的数据文件为 "),s("strong",[v._v("dump.rdb")]),v._v("，通过配置文件中的 save 参数来定义快照的周期。")]),v._v(" "),s("p",[v._v("核心函数：rdbSave（生成 RDB 文件）和 rdbLoad（从文件加载内存）两个函数。")]),v._v(" "),s("p",[v._v("RDB 快照由于保存的是数据，恢复起来会比 AOF 快（AOF 保存的是命令），而且 AOF 是文本文件，RDB 是二进制文件，因此 RDB 快照在网络传输、I/O 效率都比 AOF 好。")]),v._v(" "),s("h3",{attrs:{id:"相关命令和配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关命令和配置"}},[v._v("#")]),v._v(" 相关命令和配置")]),v._v(" "),s("div",{staticClass:"subtitle"},[s("p",[v._v("相关命令")])]),s("p",[s("code",[v._v("bgsave")]),v._v("： 创建子进程，子进程创建快照写入磁盘，主进程继续处理其他命令请求；")]),v._v(" "),s("p",[s("code",[v._v("save")]),v._v("：主线程创建快照写入磁盘，会阻塞其他命令请求，生产环境中比较少用；")]),v._v(" "),s("div",{staticClass:"subtitle"},[s("p",[v._v("redis.conf 文件里的配置")])]),s("p",[s("code",[v._v("save")]),v._v("："),s("code",[v._v("save [时间] [次数]")]),v._v(" 表示在 [时间] 内有 [次数] 写入/更新，就会触发 "),s("code",[v._v("bgsave")]),v._v(" 命令")]),v._v(" "),s("p",[s("code",[v._v("rdbcompression")]),v._v("：是否启用 LZF 算法进行压缩，压缩可以使得 RDB 快照落盘的文件变小，但在压缩时会消耗 CPU 资源。")]),v._v(" "),s("h3",{attrs:{id:"持久化过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#持久化过程"}},[v._v("#")]),v._v(" 持久化过程")]),v._v(" "),s("p",[v._v("将 Redis 中的数据全量保存在文件中，一般会异步使用子进程进行刷盘操作，不阻塞主线程，此时主线程仍然能处理命令。"),s("strong",[v._v("（先全量）")])]),v._v(" "),s("p",[v._v("执行 bgsave 过程中，Redis 依然可以继续处理操作命令的，关键的技术就在于 "),s("strong",[v._v("写时复制技术（Copy-On-Write, COW）")]),v._v("。执行 bgsave 命令的时候，会通过 fork() 创建子进程，此时子进程和父进程是共享同一片内存数据的，因为创建子进程的时候，会复制父进程的页表，但是页表指向的物理内存还是一个，此时如果主线程执行读操作，则主线程和 bgsave 子进程互相不影响。如果主线程执行写操作，则被修改的数据会复制一份副本，然后 bgsave 子进程会把该副本数据写入 RDB 文件，在这个过程中，主线程仍然可以直接修改原来的数据。"),s("strong",[v._v("（后增量）")])]),v._v(" "),s("h2",{attrs:{id:"_5-2-aof-日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-aof-日志"}},[v._v("#")]),v._v(" 5.2 AOF 日志")]),v._v(" "),s("blockquote",[s("p",[v._v("AOF 即 Append Only File")])]),v._v(" "),s("p",[v._v("Redis 会将每一个收到的写命令都通过 Write 函数追加到文件最后，类似于 MySQL 的 binlog。当 Redis 重启时会通过重新执行文件中保存的写命令来在内存中重建整个数据库的内容。每当执行服务器（定时）任务或者函数时，flushAppendOnlyFile 函数都会被调用，这个函数执行以下两个工作：")]),v._v(" "),s("ul",[s("li",[v._v("WRITE：根据条件，将 aof_buf 中的缓存写入到 AOF 文件；")]),v._v(" "),s("li",[v._v("SAVE：根据条件，调用 fsync 或 fdatasync 函数，将 AOF 文件保存到磁盘中。")])]),v._v(" "),s("h3",{attrs:{id:"相关命令和配置-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关命令和配置-2"}},[v._v("#")]),v._v(" 相关命令和配置")]),v._v(" "),s("p",[s("code",[v._v("bgrewriteaof")]),v._v("：Redis 主进程 fork 子进程执行 "),s("strong",[v._v("AOF 重写")]),v._v("。")]),v._v(" "),s("p",[v._v("redis.conf 文件里的配置：")]),v._v(" "),s("p",[s("code",[v._v("appendonly yes")]),v._v("：aof 默认是关闭的，如果要打开，设置成 yes；")]),v._v(" "),s("p",[v._v("同步策略 "),s("code",[v._v("appendfsync")]),v._v("：")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("no")]),v._v("：每次命令只写内存（日志缓冲区），刷盘记日志的操作由操作系统决定，不阻塞主线程，调用 fsync，通常最多 30s；")]),v._v(" "),s("li",[s("strong",[v._v("everysec")]),v._v("（默认）：写命令记录到文件中，"),s("strong",[v._v("默认是每秒同步一次")]),v._v("，如果发生故障，最多会丢失一秒的数据，但使用 AOF 保存的数据文件比 RDB 快照要大；"),s("strong",[v._v("Redis 会使用另外的线程进行刷盘；")])]),v._v(" "),s("li",[s("strong",[v._v("always")]),v._v("：此外 AOF 还能选择每接收一个写命令就追加写入到 AOF 文件中，虽然能避免不丢数据，"),s("strong",[v._v("但每个写命令都是在主线程上完成，且后面都跟着一个刷盘操作")]),v._v("，对机器的负担较大，影响服务性能；")])]),v._v(" "),s("p",[s("code",[v._v("auto-aof-rewrite-percentage 100")]),v._v("：aof 文件的容量超过原来 aof 文件容量一倍的时候，进行 aof 文件的重写，默认100；")]),v._v(" "),s("p",[s("code",[v._v("auto-aof-rewrite-min-size 64mb")]),v._v("：执行 aof 重写时，aof 文件的最小容量，默认64MB；")]),v._v(" "),s("h3",{attrs:{id:"持久化过程-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#持久化过程-2"}},[v._v("#")]),v._v(" 持久化过程")]),v._v(" "),s("p",[v._v("AOF 时，Redis 会 "),s("strong",[v._v("先把命令追加进 AOF 内存缓冲区")]),v._v("，然后根据 "),s("code",[v._v("appendfsync")]),v._v(" 配置的策略 "),s("strong",[v._v("将内存中的数据写入磁盘")]),v._v("。")]),v._v(" "),s("p",[v._v("不同与 MySQL 的 WAL 机制，AOF 是 "),s("strong",[v._v("先执行命令将数据写入内存")]),v._v("，再写入日志。因为 AOF 会记录 Redis 收到的每一条命令，并以文本的形式保存，如果先写日志，并不知道命令是否是正确的，因此先写内存，让系统执行成功后，才会记录到日志中，避免错误命令。")]),v._v(" "),s("h3",{attrs:{id:"aof-重写机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof-重写机制"}},[v._v("#")]),v._v(" AOF 重写机制")]),v._v(" "),s("p",[v._v("随着执行的写操作命令越来越多，AOF 文件的大小会越来越大。AOF 日志文件过大就会带来性能问题，比如重启 Redis 后，需要读 AOF 文件的内容以恢复数据，如果文件过大，整个恢复的过程就会很慢。")]),v._v(" "),s("p",[v._v("Redis 为了避免 AOF 文件越写越大，提供了 "),s("strong",[v._v("AOF 重写机制")]),v._v("，当 AOF 文件的大小超过所设定的阈值后，Redis 就会启用 AOF 重写机制，来压缩 AOF 文件。")]),v._v(" "),s("p",[v._v("AOF 重写机制是在重写时，读取当前数据库中的所有键值对，"),s("strong",[v._v("逐一把内存数据的键值对转换成一条命令")]),v._v(" 记录到新的 AOF 文件，等到全部记录完后，就将新的 AOF 文件替换掉现有的 AOF 文件。")]),v._v(" "),s("div",{staticClass:"subtitle"},[s("p",[v._v("AOF 重写过程")])]),s("p",[v._v("Redis 的 "),s("strong",[v._v("重写 AOF 过程是由后台子进程 bgrewriteaof 来完成的")]),v._v("。")]),v._v(" "),s("p",[v._v("触发重写机制后，主进程就会创建重写 AOF 的子进程，此时父子进程共享物理内存，重写子进程只会对这个内存进行只读，重写 AOF 子进程会读取数据库里的所有数据，并逐一把内存数据的键值对转换成一条命令，再将命令记录到重写日志（新的 AOF 文件）。")]),v._v(" "),s("p",[s("strong",[v._v("重写过程中，主进程依然可以正常处理命令")]),v._v("。Redis 设置了一个 "),s("strong",[v._v("AOF 重写缓冲区")]),v._v("，这个缓冲区在创建 bgrewriteaof 子进程之后开始使用。在重写 AOF 期间，当 Redis 执行完一个写命令之后，它会同时将这个写命令写入到 AOF 缓冲区和 AOF 重写缓冲区。")]),v._v(" "),s("p",[v._v("当子进程完成 AOF 重写工作后，会向主进程发送一条信号。主进程收到该信号后，会调用一个信号处理函数：将 AOF 重写缓冲区中的内容追加到新的 AOF 的文件中，使得新旧两个 AOF 文件所保存的数据库状态一致；新的 AOF 的文件进行改名，覆盖现有的 AOF 文件。")]),v._v(" "),s("h2",{attrs:{id:"_5-3-混合持久化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-混合持久化"}},[v._v("#")]),v._v(" 5.3 混合持久化")]),v._v(" "),s("p",[v._v("RDB 优点是数据恢复速度快，但是快照的频率不好把握。频率太低，丢失的数据就会比较多；频率太高，就会影响性能。")]),v._v(" "),s("p",[v._v("AOF 优点是丢失数据少，但是数据恢复不快。")]),v._v(" "),s("p",[v._v("为了集成了两者的优点， Redis 4.0 提出了 "),s("strong",[v._v("混合使用 AOF 日志和内存快照")]),v._v("，即混合持久化，既保证了 Redis 重启速度，又降低数据丢失风险。")]),v._v(" "),s("h3",{attrs:{id:"持久化过程-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#持久化过程-3"}},[v._v("#")]),v._v(" 持久化过程")]),v._v(" "),s("p",[v._v("混合持久化工作在 "),s("strong",[v._v("AOF 日志重写过程")]),v._v("，当开启了混合持久化时，在 AOF 重写日志时，fork 出来的重写子进程会先将与主线程共享的内存数据以 RDB 方式写入到 AOF 文件，然后主线程处理的操作命令会被记录在重写缓冲区里，重写缓冲区里的增量命令会以 AOF 方式写入到 AOF 文件，写入完成后通知主进程将新的含有 RDB 格式和 AOF 格式的 AOF 文件替换旧的的 AOF 文件。")]),v._v(" "),s("p",[v._v("因此，AOF 文件的 "),s("strong",[v._v("前半部分是 RDB 格式的全量数据，后半部分是 AOF 格式的增量数据")]),v._v("。")])])}),[],!1,null,null,null);_.default=a.exports}}]);