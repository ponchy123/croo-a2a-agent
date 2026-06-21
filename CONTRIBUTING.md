# 贡献指南

感谢您对 CROO A2A Agent Chain 项目的关注！我们欢迎各种形式的贡献。

## 🚀 如何贡献

### 1. 报告问题

如果您发现了 bug 或有功能建议，请：

1. 检查 [Issues](https://github.com/yourusername/croo-a2a-agent/issues) 确认问题是否已存在
2. 如果没有，请创建新的 Issue，包含：
   - 清晰的问题描述
   - 复现步骤
   - 期望行为和实际行为
   - 环境信息（Node.js 版本、操作系统等）

### 2. 提交代码

1. **Fork** 项目
2. **克隆**您的 Fork：`git clone https://github.com/yourusername/croo-a2a-agent.git`
3. **创建分支**：`git checkout -b feature/amazing-feature`
4. **编写代码**并添加测试
5. **运行测试**：`npm test`
6. **提交更改**：`git commit -m 'Add amazing feature'`
7. **推送分支**：`git push origin feature/amazing-feature`
8. **创建 Pull Request**

### 3. 代码规范

- 使用 TypeScript 严格模式
- 遵循 ESLint 规则
- 编写清晰的注释和文档
- 为新功能添加测试
- 保持代码简洁和可读

### 4. 提交信息规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

- `feat:` 新功能
- `fix:` 修复 bug
- `docs:` 文档更新
- `style:` 代码格式（不影响功能）
- `refactor:` 重构代码
- `test:` 添加测试
- `chore:` 构建过程或辅助工具的变动

示例：
```
feat: 添加翻译服务的多语言支持
fix: 修复 WebSocket 连接断开的问题
docs: 更新 README 中的安装说明
```

### 5. 测试要求

- 所有新功能必须包含测试
- 测试覆盖率应保持在 80% 以上
- 运行 `npm test` 确保所有测试通过

## 📋 开发环境设置

### 前置条件

- Node.js 18+
- npm 或 yarn
- Git

### 安装步骤

```bash
# 克隆项目
git clone https://github.com/yourusername/croo-a2a-agent.git
cd croo-a2a-agent

# 安装依赖
npm install

# 复制环境变量
cp .env.example .env

# 编辑 .env 文件，填入您的 CROO SDK Key

# 运行测试
npm test

# 启动开发服务器
npm run dev
```

### 项目结构

```
croo-a2a-agent/
├── src/               # 源代码
│   ├── provider/      # Provider Agent
│   ├── requester/     # Requester Agent
│   └── shared/        # 共享工具
├── tests/             # 测试文件
├── examples/          # 示例代码
├── docs/              # 文档
└── demo/              # Demo 相关
```

## 🎯 贡献方向

### 优先级高

1. **翻译服务优化**
   - 集成更多翻译 API（DeepL、Google Translate 等）
   - 支持更多语言
   - 改进翻译质量

2. **A2A 组合示例**
   - 添加更多 Agent 类型
   - 创建更复杂的组合流程
   - 优化性能

3. **文档完善**
   - 添加 API 文档
   - 编写使用教程
   - 创建视频教程

### 优先级中

1. **测试覆盖**
   - 添加单元测试
   - 添加集成测试
   - 添加端到端测试

2. **性能优化**
   - 优化内存使用
   - 改进响应时间
   - 添加缓存机制

3. **用户体验**
   - 改进错误处理
   - 添加日志记录
   - 创建监控面板

### 优先级低

1. **新功能**
   - 支持更多文件格式
   - 添加批处理功能
   - 创建 Web 界面

2. **工具链**
   - 添加 CI/CD 配置
   - 创建 Docker 镜像
   - 添加代码质量检查

## 📞 联系方式

- **GitHub Issues**: [项目 Issues](https://github.com/yourusername/croo-a2a-agent/issues)
- **Discord**: [CROO Discord](https://discord.gg/y3xHr3t8nx)
- **Email**: your.email@example.com

## 📄 许可证

贡献的代码将采用与项目相同的 [MIT 许可证](LICENSE)。

---

感谢您的贡献！🙏