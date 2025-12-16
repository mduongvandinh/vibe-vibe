---
title: "9.2 Chạy kiểm thử trong hộp cát — Test Environment và Isolate: `.env.test`, Migration, Data Cleanup"
---

# 9.2 Chạy kiểm thử trong hộp cát — Test Environment và Isolate: `.env.test`, Migration, Data Cleanup

**Nguyên tắc cốt lõi của test environment: Hoàn toàn cách ly với production, mỗi lần chạy test bắt đầu từ trạng thái sạch.**

## Tại sao cần test environment độc lập

```mermaid
graph TB
    subgraph Cách làm sai
        TEST1[Test code] --> PROD_DB[(Production DB)]
        PROD_DB --> DISASTER[Dữ liệu bị ô nhiễm/xóa]
    end

    subgraph Cách làm đúng
        TEST2[Test code] --> TEST_DB[(Test DB)]
        PROD[Production code] --> PROD_DB2[(Production DB)]
    end

    style DISASTER fill:#ff6b6b
    style TEST_DB fill:#6bcb77
```

Tầm quan trọng của test environment isolation:

| Rủi ro | Hậu quả | Giải pháp |
|------|------|---------|
| Test data được ghi vào production DB | Users nhìn thấy test data | Database độc lập |
| Test xóa production data | Mất dữ liệu | Environment variable isolation |
| Test ảnh hưởng tới performance | Service chậm | Separate service instances |
| Parallel tests gây xung đột data | Test không ổn định | Transaction rollback |

## Test Environment Architecture

```
┌─────────────────────────────────────────────────┐
│                  Test Environment Architecture                         │
├─────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐      │
│  │ .env.test │    │ test DB  │    │ mock API │      │
│  └─────┬────┘    └─────┬────┘    └─────┬────┘      │
│        │               │               │           │
│        └───────────────┼───────────────┘           │
│                        │                           │
│                 ┌──────▼──────┐                    │
│                 │  Test Runner  │                    │
│                 │    Jest     │                    │
│                 └─────────────┘                    │
│                                                     │
└─────────────────────────────────────────────────┘
```

## Nội dung chính của phần này

| Phần | Chủ đề | Vấn đề được giải quyết |
|------|------|-----------|
| 9.2.1 | Environment Isolation | Cách cấu hình độc lập test DB và services |
| 9.2.2 | Environment Variables | Cách quản lý test-specific configuration |
| 9.2.3 | Database Migration | Cách khởi tạo test database structure |
| 9.2.4 | Data Cleanup | Cách đảm bảo state isolation giữa các tests |

## Quick Start: Minimal Test Environment Configuration

```bash
# 1. Create test environment config file
touch .env.test

# 2. Configure test database connection
echo 'DATABASE_URL="postgresql://user:pass@localhost:5432/myapp_test"' >> .env.test

# 3. Add test scripts vào package.json
```

```json
{
  "scripts": {
    "test": "dotenv -e .env.test -- jest",
    "test:setup": "dotenv -e .env.test -- prisma migrate deploy",
    "test:reset": "dotenv -e .env.test -- prisma migrate reset --force"
  }
}
```

## Tóm tắt phần này

Test environment isolation là nền tảng của quality assurance. Bằng cách sử dụng database độc lập, environment variables chuyên dụng, automated migration và cleanup mechanisms, bạn có thể đảm bảo mỗi lần chạy test đều diễn ra trong một môi trường có thể kiểm soát và có thể lặp lại. Các phần tiếp theo sẽ chi tiết hơn về cách triển khai từng khía cạnh.
