# 游戏指令大全
| 命令 | 权限 | 用途说明 | 作弊模式 |
|---------|-------------|--------|--------|
| `/help [<page/command>]` | 玩家 | 列出所有命令或提供特定命令的信息 | |
| `/playtime` | 玩家 | 显示你在服务器上的当前游戏时间 | |
| `/me <action>` | 玩家 | 向整个服务器宣布一个动作 | |
| `/w, /whisper or /pm <player> <message>` | 玩家 | 给另一个玩家发私信 | |
| `/mypermissions` | 玩家 | 显示你的权限级别 | |
| `/die` | 玩家 | 自杀 | |
| `/performance [<includeServer>] [<seconds>]` | 玩家 | 记录服务器性能一段时间并创建结果文件 | |
| `/createteam` | 玩家 | 创建一个新的团队 | |
| `/leaveteam` | 玩家 | 离开当前团队 | |
| `/invite <player>` | 玩家 | 邀请一个玩家加入你的团队 | |
| `/network` | 主机/服务器 | 显示本次会话的网络使用情况 | |
| `/players` | 主机/服务器 | 列出当前在线玩家 | |
| `/playernames` | 主机/服务器 | 列出所有认证及其名称 | |
| `/levels` | 主机/服务器 | 列出当前加载的关卡 | |
| `/save` | 主机/服务器 | 保存所有数据 | |
| `/kick <player> [<message/reason>]` | 主机/服务器 | 将玩家从服务器踢出 | |
| `/say <message>` | 主机/服务器 | 以服务器身份在聊天中发言 | |
| `/mow <range> [<chance>]` | 管理员 | 在范围内以一定几率除去地面上的草 | ✓ |
| `/time <set/add> [<amount>]` | 管理员 | 设置/增加世界时间（可以使用（中）午或（中）夜） | ✓ |
| `/clearall [<global>]` | 管理员 | 清除所有实体 | ✓ |
| `/clearmobs [<global> [<type>]]` | 管理员 | 清除所有怪物或指定类型的怪物（在你的关卡或所有加载的关卡上） | ✓ |
| `/clearevents [<global> [<type>]]` | 管理员 | 清除你的关卡或所有加载的关卡上的所有事件 | ✓ |
| `/tp [<player1>] <player2/home/death/spawn>` | 管理员 | 将玩家1传送到玩家2或其他位置 | ✓ |
| `/print <message>` | 管理员 | 在聊天中打印消息 | |
| `/give [<player>] <item> [<amount>]` | 管理员 | 给玩家物品 | ✓ |
| `/buff [<player>] <buff> [<seconds>]` | 管理员 | 给玩家添加增益效果 | ✓ |
| `/clearbuff [<player>] <buff>` | 管理员 | 移除玩家身上的增益效果 | ✓ |
| `/reveal [<player>]` | 管理员 | 展示客户端当前关卡 | ✓ |
| `/setisland [<player>] <islandX> <islandY> [<dimension>]` | 管理员 | 更改玩家的岛屿 | ✓ |
| `/setdimension [<player>] <dimension>` | 管理员 | 更改玩家的维度 | ✓ |
| `/hp [<player>] <health>` | 管理员 | 设置玩家的生命值 | ✓ |
| `/maxhp [<player>] <health>` | 管理员 | 设置玩家的最大生命值 | ✓ |
| `/mana [<player>] <mana>` | 管理员 | 设置玩家的魔法值 | ✓ |
| `/maxmana [<player>] <mana>` | 管理员 | 设置玩家的最大魔法值 | ✓ |
| `/hunger [<player>] <hunger>` | 管理员 | 设置玩家的饥饿值百分比 | ✓ |
| `/deleteplayer <authentication/fullname>` | 管理员 | 删除玩家在保存玩家文件夹中的文件 | |
| `/settings <list/setting> [<arg>]` | 管理员 | 更改服务器世界设置 | |
| `/difficulty <list/difficulty>` | 管理员 | 更改难度设置 | |
| `/deathpenalty <list/penalty>` | 管理员 | 更改死亡惩罚设置 | |
| `/raids <list/frequency>` | 管理员 | 更改袭击频率设置 | |
| `/pausewhenempty <0/1>` | 管理员 | 启用/禁用玩家离线时暂停游戏设置 | |
| `/maxlatency <seconds>` | 管理员 | 设置客户端超时前的最大延迟 | |
| `/ban <authentication/name>` | 管理员 | 封禁玩家 | |
| `/unban <authentication/name>` | 管理员 | 解除封禁 | |
| `/bans` | 管理员 | 列出所有当前封禁的玩家 | |
| `/rain [<islandX> <islandY> <dimension>] <start/clear>` | 管理员 | 设置关卡的雨 | ✓ |
| `/enchant <clear/set/random> [<slot>] [<enchantID>]` | 管理员 | 清除、设置或随机给予附魔 | ✓ |
| `/copyitem [<slot>]` | 管理员 | 复制物品及其所有数据 | ✓ |
| `/healmobs <health> [<range>] [<filter>]` | 管理员 | 治愈你周围的怪物 | ✓ |
| `/copyplayer <from> <to>` | 管理员 | 复制玩家的物品栏、位置和生命值到另一个玩家 | ✓ |
| `/demo [<player>] [<setup> [<forceNew>]] [<builds>]` | 管理员 | 为玩家设置世界和/或构建 | ✓ |
| `/getteam <player>` | 管理员 | 获取玩家当前的团队 | |
| `/clearteam <player>` | 管理员 | 从当前团队中移除玩家 | |
| `/setteam <player> <team>` | 管理员 | 设置玩家的团队 | |
| `/setteamowner <team> <player>` | 管理员 | 设置团队所有者，新所有者必须已经是团队成员 | |
| `/motd <clear/get/message>` | 管理员 | 设置或清除每日消息 | |
| `/changename <player> <name>` | 管理员 | 更改玩家的名称 | |
| `/sharemap [<from>] <to>` | 管理员 | 将你的地图探索分享给另一个玩家 | ✓ |
| `/stop, /exit or /quit` | Owner | 保存并停止服务器 | |
| `/password [<password>]` | Owner | 设置服务器密码，留空表示没有密码 | |
| `/permissions <list/set/get> [<authentication/name> [<permissions>]]` | Owner | 设置玩家权限 | |
| `/regen [<islandX> <islandY> <dimension>] [<biome>] [<seeded>]` | Owner | 重置整个关卡 | ✓ |
| `/allowcheats` | Owner | 在此世界中启用/允许作弊（不可逆转） | ✓ |
| `/itemgnd [<slot>] <set/get/clear> [<key> [<value>]]` | Owner | 获取或设置物品GND数据 | ✓ |
| `/jobsearchrange <range>` | Owner | 设置定居者的工作搜索范围 | |
| `/language <language>` | Server | 设置服务器语言设置 | |
