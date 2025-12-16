---
title: "1.1 Trước tiên hãy chạy Hello World - Lắp ráp công cụ và Xác minh dự án tối thiểu: Node/VSCode/Cursor/Claude; chạy thông Next.js"
---

# 1.1 Trước tiên hãy chạy Hello World - Lắp ráp công cụ và Xác minh dự án tối thiểu

### Mục tiêu bài học

Trước khi viết bất kỳ code nghiệp vụ nào, bạn cần có một môi trường phát triển sẵn sàng. Mục tiêu duy nhất của bài học này là: **Cho bạn nhìn thấy một trang Next.js trong trình duyệt local**.

Tuy có vẻ đơn giản, nhưng đây là cột mốc đầu tiên của toàn bộ quá trình phát triển fullstack. Một khi bạn chạy thông vòng lặp tối thiểu này, tất cả các tính năng phát triển sau chỉ là "thêm lớp" trên nền tảng này.

### Công cụ bạn cần chuẩn bị

| Loại công cụ | Lựa chọn khuyên dùng | Chức năng |
|----------|----------|------|
| **Code editor** | Cursor / VS Code | Viết và quản lý code |
| **AI assistant** | Claude / GPT-4 | Hỗ trợ lập trình, giải đáp thắc mắc |
| **Runtime environment** | Node.js (LTS) | Chạy JavaScript/TypeScript |
| **Package manager** | pnpm | Quản lý dependencies dự án |

### Lộ trình học tập

```mermaid
graph LR
    A["Chọn editor"] --> B["Cấu hình AI assistant"]
    B --> C["Khởi tạo Next.js"]
    C --> D["Khởi động dev server"]
    D --> E["Nhìn thấy Hello World"]
```

### Dẫn đường tiểu mục

- **1.1.1 Lựa chọn Editor**: So sánh tính năng VS Code và Cursor, giúp bạn đưa ra lựa chọn
- **1.1.2 Cấu hình AI Assistant**: Cho IDE của bạn "mọc não"
- **1.1.3 Khởi tạo Next.js**: Dùng một lệnh để tạo khung dự án
- **1.1.4 Xác minh Hello World**: Khởi động server, chứng kiến trang đầu tiên

### Thời gian dự kiến

Đối với các bạn hoàn toàn mới, hoàn thành toàn bộ nội dung bài học này cần khoảng **30-60 phút**. Nếu bạn đã có kinh nghiệm phát triển nhất định, có thể bỏ qua phần đã quen thuộc, trực tiếp vào 1.1.3.

> **Gợi ý**: Gặp bất kỳ lỗi nào, hãy copy thông báo lỗi hỏi AI trước, đây là công phu cơ bản của Vibe Coding.
