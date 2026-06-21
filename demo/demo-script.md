# Demo 视频脚本

## 视频时长：5分钟

---

## 开场 (0:00 - 0:30)

**画面**: 项目 Logo 和标题
**旁白**:
"大家好，我们是 [团队名称]，今天为大家展示我们的 CROO Agent Hackathon 参赛作品 - 多 Agent 翻译流水线。"

**字幕**: CROO A2A Agent Chain - 多 Agent 翻译流水线

---

## 项目介绍 (0:30 - 1:30)

**画面**: 项目架构图
**旁白**:
"这个项目展示了如何使用 CROO 协议实现 Agent 间的协作。我们创建了一个翻译流水线，包含三个 Agent：

1. **翻译 Agent**：负责基础翻译
2. **校对 Agent**：检查语法和流畅度
3. **格式化 Agent**：生成最终输出

每个 Agent 都可以独立部署和定价，用户可以按需组合使用。"

**字幕**: 
- A2A 可组合性
- 独立定价和部署
- 按需组合

---

## Agent 注册和配置 (1:30 - 2:30)

**画面**: CROO Dashboard 界面
**旁白**:
"首先，我们在 CROO Dashboard 注册 Agent。"

**步骤演示**:
1. 访问 agent.croo.network
2. 创建 Provider Agent
3. 配置翻译服务
4. 设置价格和 SLA
5. 获取 API Key

**字幕**: 
- 注册 Agent
- 配置服务
- 获取 API Key

---

## A2A 协作演示 (2:30 - 4:00)

**画面**: 终端界面，运行代码
**旁白**:
"现在让我们看看实际的 A2A 协作流程。"

**演示步骤**:
1. 启动 Provider Agent
2. 启动 Requester Agent
3. 发送翻译请求
4. 展示 Agent 间通信
5. 显示支付流程
6. 展示最终结果

**终端输出示例**:
```
🚀 Starting Translation Provider Agent...
✅ Configuration loaded
✅ Translation service initialized
📋 Service Configuration:
{
  "name": "Translation Agent",
  "price": 0.1,
  "sla": "0h 5m"
}

📤 Requesting translation...
Text: "Hello, this is a test of CROO A2A composition."
Target: zh
✅ Translation received
Result: "[中文] Hello, this is a test of CROO A2A composition."
```

**字幕**: 
- Provider 监听订单
- Requester 发起请求
- CAP 协议通信
- USDC 支付结算

---

## 技术亮点 (4:00 - 4:30)

**画面**: 代码片段和技术架构图
**旁白**:
"这个项目的技术亮点包括：

1. **完整的 CAP 协议集成**
2. **USDC 链上支付**
3. **模块化 Agent 设计**
4. **清晰的代码结构**

所有代码都已开源，使用 MIT 许可证。"

**字幕**: 
- CAP 协议集成
- USDC 支付
- 模块化设计
- 开源代码

---

## 总结 (4:30 - 5:00)

**画面**: 项目总结幻灯片
**旁白**:
"总结一下，我们的项目展示了：

1. **创新性**：多 Agent 翻译流水线
2. **技术性**：完整的 CAP 协议集成
3. **实用性**：可扩展的 A2A 组合
4. **商业性**：独立的 Agent 定价

感谢观看！欢迎在 CROO Discord 与我们交流。"

**字幕**: 
- 创新性 ⭐⭐⭐⭐⭐
- 技术性 ⭐⭐⭐⭐⭐
- 实用性 ⭐⭐⭐⭐
- 商业性 ⭐⭐⭐⭐

---

## 结束画面 (5:00)

**画面**: 
- 项目名称和 Logo
- GitHub 仓库链接
- CROO Discord 链接
- 感谢文字

**旁白**:
"谢谢大家！"

**字幕**: 
GitHub: github.com/yourusername/croo-a2a-agent
Discord: discord.gg/y3xHr3t8nx

---

## 技术规格

- **视频格式**: MP4
- **分辨率**: 1920x1080
- **帧率**: 30fps
- **音频**: AAC
- **时长**: 5分钟以内