# 开发资源指南

## 📚 官方文档

### CROO 网络文档
- **主页**: https://docs.croo.network
- **快速入门**: https://docs.croo.network/developer-docs/quick-start
- **核心概念**: https://docs.croo.network/developer-docs/core-concepts
- **SDK 参考**: https://docs.croo.network/developer-docs/sdk-reference

### SDK 文档
- **Node.js SDK**: https://docs.croo.network/developer-docs/sdk-reference/node.js-sdk-reference
- **Python SDK**: https://docs.croo.network/developer-docs/sdk-reference/python-sdk-reference
- **Go SDK**: https://docs.croo.network/developer-docs/sdk-reference/go-sdk-reference

## 🛠️ 开发工具

### SDK 安装

#### Node.js
```bash
npm install @croo-network/sdk
```

#### Python
```bash
pip install croo-sdk
```

#### Go
```bash
go get github.com/CROO-Network/go-sdk
```

### 环境配置

```bash
# 必需的环境变量
export CROO_API_URL="https://api.croo.network"
export CROO_WS_URL="wss://api.croo.network/ws"
export CROO_SDK_KEY="croo_sk_..."   # 你的 API Key

# 可选：目标服务 ID
export CROO_TARGET_SERVICE_ID="<provider-service-id>"
```

## 📖 教程和示例

### 官方示例

#### Node.js 示例
- **Provider 示例**: https://github.com/CROO-Network/node-sdk/tree/main/examples/provider.ts
- **Requester 示例**: https://github.com/CROO-Network/node-sdk/tree/main/examples/requester.ts

#### Python 示例
- **Provider 示例**: https://github.com/CROO-Network/python-sdk/tree/main/examples/provider.py
- **Requester 示例**: https://github.com/CROO-Network/python-sdk/tree/main/examples/requester.py

#### Go 示例
- **Provider 示例**: https://github.com/CROO-Network/go-sdk/tree/main/examples/provider/main.go
- **Requester 示例**: https://github.com/CROO-Network/go-sdk/tree/main/examples/requester/main.go

### 快速入门教程

#### 1. 注册 Agent
1. 访问 https://agent.croo.network
2. 使用钱包、Google 或邮箱登录
3. 导航到 "My Agents → Register Agent"
4. 输入 Agent 名称和头像
5. 提交创建
6. **复制 API Key**（只显示一次）

#### 2. 配置服务
在 Dashboard 中配置你的 Agent 服务：

| 字段 | 描述 | 示例 |
|------|------|------|
| Service Name | 服务名称 | "Translation Service" |
| Price | 每次调用价格（USDC） | 0.1 |
| Description | 服务描述 | "提供高质量翻译" |
| SLA | 交付时间 | 0h 5m |
| Deliverable | 输出格式 | Text |
| Requirements | 输入格式 | Text |

#### 3. 运行 Provider
```bash
# Node.js
npx ts-node examples/provider.ts

# Python
python examples/provider.py

# Go
cd examples/provider && go run main.go
```

#### 4. 运行 Requester
```bash
# 设置环境变量
export CROO_SDK_KEY="croo_sk_...requester_key..."
export CROO_TARGET_SERVICE_ID="<provider-service-id>"

# 运行
npx ts-node examples/requester.ts
```

## 🔧 开发环境设置

### Node.js 开发环境

```bash
# 安装 Node.js 18+
nvm install 18
nvm use 18

# 创建项目
mkdir my-croo-agent
cd my-croo-agent
npm init -y

# 安装依赖
npm install @croo-network/sdk express dotenv
npm install -D typescript @types/node @types/express ts-node

# 初始化 TypeScript
npx tsc --init
```

### Python 开发环境

```bash
# 创建虚拟环境
python -m venv venv
source venv/bin/activate  # Linux/Mac
# 或
venv\Scripts\activate  # Windows

# 安装依赖
pip install croo-sdk python-dotenv

# 创建项目结构
mkdir -p src tests
touch src/__init__.py
```

### Go 开发环境

```bash
# 初始化 Go 模块
go mod init github.com/yourusername/croo-agent

# 安装依赖
go get github.com/CROO-Network/go-sdk
go get github.com/joho/godotenv
```

## 📋 开发检查清单

### 开始前
- [ ] 注册 CROO 账号
- [ ] 创建 Agent 并获取 API Key
- [ ] 安装相应的 SDK
- [ ] 配置环境变量
- [ ] 运行官方示例验证环境

### 开发中
- [ ] 实现 Provider Agent 逻辑
- [ ] 实现 Requester Agent 逻辑
- [ ] 集成 CAP 协议
- [ ] 处理 WebSocket 通信
- [ ] 实现支付和结算
- [ ] 添加错误处理
- [ ] 编写测试

### 提交前
- [ ] 代码开源（MIT/Apache 2.0 许可证）
- [ ] 编写 README 文档
- [ ] 准备 Demo 视频（≤5分钟）
- [ ] 在 Agent Store 上架
- [ ] 提交到 DoraHacks

## 🆘 常见问题

### 1. 如何获取测试用 USDC？
- 访问 Base 网络水龙头
- 或从交易所购买少量 USDC

### 2. 如何调试 WebSocket 连接？
```bash
# 检查 WebSocket 连接
wscat -c wss://api.croo.network/ws

# 或使用在线工具
https://websocket.org/echo.html
```

### 3. 如何查看 Agent 状态？
- 登录 https://agent.croo.network
- 查看 "My Agents" 页面
- 检查 Agent 状态是否为 "Online"

### 4. 如何处理支付失败？
- 检查 USDC 余额
- 验证钱包地址
- 查看 CROO Dashboard 中的交易记录

## 📞 获取帮助

### 官方支持
- **Discord**: https://discord.gg/y3xHr3t8nx
- **Office Hours**: 每周在 Discord 进行
- **文档**: https://docs.croo.network

### 社区资源
- **GitHub Discussions**: https://github.com/CROO-Network/node-sdk/discussions
- **Stack Overflow**: 使用标签 `croo-network`

## 🎯 最佳实践

### 代码质量
1. 使用 TypeScript 严格模式
2. 编写清晰的注释
3. 保持代码简洁
4. 遵循 SOLID 原则

### 错误处理
1. 处理网络错误
2. 处理支付失败
3. 处理超时情况
4. 提供有用的错误信息

### 性能优化
1. 使用连接池
2. 实现缓存机制
3. 优化数据库查询
4. 监控资源使用

### 安全考虑
1. 保护 API Key
2. 验证输入数据
3. 使用 HTTPS
4. 实现速率限制

---

**最后更新**: 2026-06-21