---
title: "8.3 Hiểu được những gì đã thay đổi——Quy chuẩn Commit: Conventional Commits và Release Note"
---

# 8.3 Hiểu được những gì đã thay đổi——Quy chuẩn Commit

Những commit message tốt là sổ tay hướng dẫn cho bản thân sau này và các đồng nghiệp——cũng là chìa khóa để AI hiểu được những thay đổi mã.

## Tại sao quy chuẩn commit lại quan trọng

```bash
# Lịch sử commit tệ
git log --oneline
a1b2c3d fix
b2c3d4e update
c3d4e5f fix bug
d4e5f6g 改了点东西
e5f6g7h WIP

# Lịch sử commit tốt
git log --oneline
a1b2c3d feat: 添加用户登录功能
b2c3d4e fix: 修复登录验证失败的问题
c3d4e5f docs: 更新 API 文档
d4e5f6g refactor: 重构用户认证模块
e5f6g7h test: 添加登录功能的单元测试
```

**Giá trị của việc tuân theo quy chuẩn commit**:
- Định vị nhanh commit nơi vấn đề được đưa vào
- Tự động tạo CHANGELOG
- Dễ dàng thực hiện review code
- Giúp AI hiểu rõ hơn ý định thay đổi mã

## Quy chuẩn Conventional Commits

Conventional Commits là quy chuẩn commit message phổ biến nhất hiện nay:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Các phần tử cốt lõi

| Phần tử | Mô tả | Ví dụ |
|------|------|------|
| type | Loại thay đổi | feat, fix, docs |
| scope | Phạm vi ảnh hưởng (tùy chọn) | auth, api, ui |
| description | Mô tả ngắn gọn | 添加用户登录 |
| body | Mô tả chi tiết (tùy chọn) | Mô tả chi tiết nhiều dòng |
| footer | Thông tin liên quan (tùy chọn) | Closes #123 |

## Cấu trúc phần này

1. **commit format**：Chi tiết định dạng tiêu chuẩn Conventional Commits
2. **Phân loại loại**：Các trường hợp sử dụng cho feat/fix/docs...
3. **Kiểm tra tự động**：Cấu hình commitlint và husky
4. **Tạo CHANGELOG**：Tự động tạo nhật ký phát hành từ lịch sử commit

## Ví dụ nhanh

```bash
# Commit tính năng
git commit -m "feat(auth): 添加 Google OAuth 登录"

# Commit sửa lỗi
git commit -m "fix(api): 修复用户查询分页错误"

# Commit có body
git commit -m "refactor(database): 优化查询性能

- 添加复合索引
- 使用连接池
- 缓存热点数据

Closes #456"
```

## Danh sách kiểm tra

- [ ] Hiểu rõ quy chuẩn Conventional Commits
- [ ] Có thể sử dụng type và scope một cách chính xác
- [ ] Biết cách cấu hình commitlint để kiểm tra tự động
- [ ] Có thể sử dụng các công cụ để tự động tạo CHANGELOG
