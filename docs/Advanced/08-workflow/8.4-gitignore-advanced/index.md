---
title: "8.4 Những tệp nào không nên vào kho lưu trữ—`.gitignore` quản lý: phụ thuộc/xây dựng/nhạy cảm/IDE/hệ thống/nhật ký"
---

# 8.4 Những tệp nào không nên vào kho lưu trữ—Gitignore nâng cao

`.gitignore` là "người bảo vệ" của kho lưu trữ mã—nó quyết định tệp nào có thể vào, tệp nào ở ngoài cửa.

## Tại sao cần .gitignore

**Các tệp không nên vào kho lưu trữ**:

| Loại | Ví dụ | Lý do |
|------|------|------|
| Thư mục phụ thuộc | node_modules | Quá lớn, có thể khôi phục qua package.json |
| Sản phẩm xây dựng | .next, out, dist | Có thể xây dựng lại |
| Thông tin nhạy cảm | .env, *.pem | Rủi ro bảo mật |
| Tệp hệ thống | .DS_Store | Không liên quan đến mã |
| Cấu hình IDE | .idea, .vscode | Sở thích cá nhân |
| Tệp nhật ký | *.log | Dữ liệu tạm thời |

## .gitignore cho dự án Next.js

```gitignore
# Thư mục phụ thuộc
node_modules/
.pnpm-store/

# Sản phẩm xây dựng
.next/
out/
dist/
build/

# Biến môi trường
.env
.env.local
.env.*.local

# Nhật ký
*.log
npm-debug.log*
pnpm-debug.log*

# Tệp hệ thống
.DS_Store
Thumbs.db

# IDE
.idea/
.vscode/
*.swp
*.swo

# Độ bao phủ kiểm tra
coverage/

# TypeScript
*.tsbuildinfo

# Vercel
.vercel

# Cơ sở dữ liệu cục bộ
*.db
*.sqlite
```

## Cấu trúc phần này

1. **Phụ thuộc và sản phẩm xây dựng**: node_modules, .next, out, v.v.
2. **Tệp nhạy cảm**: quản lý .env và mẫu .env.example
3. **Tệp hệ thống và IDE**: cấu hình bỏ qua đa nền tảng
4. **Ngăn chặn cam kết sai**: kiểm tra pre-commit hook

## Tham chiếu nhanh cú pháp .gitignore

| Cú pháp | Ý nghĩa | Ví dụ |
|------|------|------|
| `*` | Khớp bất kỳ ký tự nào | `*.log` |
| `**` | Khớp bất kỳ thư mục nào | `**/node_modules` |
| `!` | Phủ định (không bỏ qua) | `!.env.example` |
| `/` ở đầu | Chỉ khớp thư mục gốc | `/dist` |
| `/` ở cuối | Chỉ khớp thư mục | `logs/` |
| `#` | Bình luận | `# bỏ qua nhật ký` |

## Danh sách kiểm tra chấp nhận

- [ ] Hiểu những tệp nào nên bị bỏ qua
- [ ] Có thể viết các quy tắc .gitignore cơ bản
- [ ] Hiểu cách xử lý tệp nhạy cảm
- [ ] Biết cách cấu hình gitignore toàn cục
