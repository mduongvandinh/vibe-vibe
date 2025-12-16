---
title: "5.2 Thế giới rộng lớn: Đưa trang web lên Internet"
order: 1
---

# 5.2 Thế giới rộng lớn: Đưa trang web lên Internet

Còn nhớ danh sách việc cần làm mà bạn làm ở chương bốn không? Nó chỉ có thể chạy trên máy tính của riêng bạn. Phần này sẽ hướng dẫn bạn xuất bản nó lên Internet, cho phép toàn thế giới có thể truy cập.

## Sau khi học xong phần này, bạn sẽ nắm vững

- Hiểu ý nghĩa của "triển khai" (deployment) và loại bỏ sợ hãi về việc đưa nó lên production
- Chọn nền tảng triển khai phù hợp dựa trên tình hình của mình
- Hoàn thành toàn bộ quy trình từ dự án cục bộ đến trang web trực tuyến
- Có được một URL thực tế có thể chia sẻ cho bất kỳ ai

## Bây giờ vs Sau khi đưa lên

| So sánh | Bây giờ (cục bộ) | Sau khi đưa lên |
|---------|-----------------|-----------------|
| Cách truy cập | Chỉ mở được trên máy tính của bạn | Có thể truy cập từ bất kỳ thiết bị nào |
| URL | localhost:3000 | your-todo.zeabur.app |
| Chia sẻ | Phải đưa máy tính cho người khác xem | Gửi một liên kết thôi |
| Sử dụng trên điện thoại | Không thể sử dụng | Sử dụng bất cứ lúc nào, bất cứ đâu |
| Sau khi tắt máy | Người khác không thể truy cập | Luôn trực tuyến 24 giờ |

## Hướng dẫn chương

| Phần | Chủ đề | Thời gian dự kiến |
|------|--------|------------------|
| [5.2.1](./5.2.1-why-deploy.md) | Tại sao cần triển khai | 3 phút |
| [5.2.2](./5.2.2-platform-guide.md) | Hướng dẫn chọn nền tảng triển khai | 5 phút |
| [5.2.3](./5.2.3-zeabur.md) | Triển khai thực tế với Zeabur (lựa chọn hàng đầu cho Trung Quốc) | 10 phút |
| [5.2.4](./5.2.4-vercel.md) | Triển khai thực tế với Vercel | 8 phút |
| [5.2.5](./5.2.5-after-deploy.md) | Các hoạt động hữu ích sau khi triển khai | 5 phút |
| [5.2.6](./5.2.6-china-solution.md) | Giải pháp truy cập cho khu vực Trung Quốc | 5 phút |
| [5.2.7](./5.2.7-other-platforms.md) | Các lựa chọn triển khai khác | 3 phút |
| [5.2.8](./5.2.8-faq.md) | Câu hỏi thường gặp về triển khai | 3 phút |
| [5.2.9](./5.2.9-checklist.md) | Danh sách kiểm tra phần này | 2 phút |

**Tổng thời gian dự kiến: khoảng 40-45 phút**

::: tip Gợi ý
Nếu bạn ở Trung Quốc, hãy ưu tiên đọc 5.2.2 và 5.2.3, sử dụng Zeabur để triển khai. Nếu bạn ở ngoài biên giới hoặc có tên miền tùy chỉnh, bạn có thể chọn Vercel.
:::

→ [5.2.1 Tại sao cần triển khai](./5.2.1-why-deploy.md)
