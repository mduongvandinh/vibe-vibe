---
title: "4.5 Thực chiến Debug: Khi code AI báo lỗi"
order: 1
---

# 4.5 Thực chiến Debug: Khi code AI báo lỗi

Trải qua phần này, bạn sẽ nắm được:
- Nhận diện bốn loại lỗi thường gặp trong phát triển danh sách công việc
- Quy trình chuẩn dùng AI chẩn đoán và sửa vấn đề code
- Kỹ thuật đối thoại hoàn chỉnh xử lý báo lỗi thực tế
- Xây dựng tâm lý Debug "báo lỗi không đáng sợ"

## Quan hệ với chương ba

Chương ba phần 3.6 nói về **tầng nguyên lý**: AI có những biểu hiện "không nghe lời" nào, cách nhận diện ảo giác AI, framework tư duy chẩn đoán vấn đề.

Phần này nói về **tầng thực hành**: Xoay quanh dự án danh sách công việc bạn đang phát triển, trình bày thông tin báo lỗi thực tế, đối thoại sửa chữa hoàn chỉnh, template Prompt có thể sao chép trực tiếp.

Nói đơn giản: 3.6 dạy bạn "gặp vấn đề nên nghĩ thế nào", 4.5 dạy bạn "gặp vấn đề nên làm thế nào".

## Tại sao báo lỗi là bình thường

Trong quá trình phát triển danh sách công việc, bạn có thể đã gặp một số báo lỗi. Đừng lo, điều này hoàn toàn bình thường.

| Hiểu lầm | Sự thật |
|------|------|
| "Báo lỗi chứng tỏ tôi làm sai" | Báo lỗi là code đang nói với bạn chỗ nào cần điều chỉnh |
| "Lập trình viên chuyên nghiệp không gặp báo lỗi" | Lập trình viên chuyên nghiệp mỗi ngày đều debug, chỉ là họ biết cách giải quyết |
| "Code AI sinh ra không nên có vấn đề" | AI không hiểu môi trường cụ thể của bạn, cần bạn giúp nó điều chỉnh |

Tin tốt là: **AI có thể giúp bạn giải quyết 90% vấn đề thường gặp**. Bạn chỉ cần học "hỏi thế nào".

## Điều hướng chương

| Phần nhỏ | Chủ đề | Bạn sẽ học được |
|------|------|---------|
| [4.5.1](./4.5.1-error-types.md) | Tra cứu nhanh loại lỗi thường gặp | Phương pháp nhận diện bốn loại lỗi, cách đọc báo lỗi console |
| [4.5.2](./4.5.2-fix-with-ai.md) | Dùng AI giúp bạn sửa code của AI | Template Prompt hoàn chỉnh cho chẩn đoán, sửa chữa, xác minh |
| [4.5.3](./4.5.3-real-cases.md) | Ôn lại case thực tế | 6 lỗi điển hình trong phát triển danh sách công việc và quy trình giải quyết |
| [4.5.4](./4.5.4-debug-mindset.md) | Tổng kết tâm pháp Debug | Xây dựng tâm lý và thói quen debug đúng đắn |

**Thời gian học dự kiến: khoảng 25-30 phút**

## Trước khi bắt đầu

Hãy chắc chắn bạn đã hoàn thành phát triển 4.2-4.4, có một danh sách công việc cơ bản có thể dùng. Nếu code của bạn hiện tại có thể chạy bình thường, cũng có thể lướt qua nội dung chương này trước, đợi gặp vấn đề rồi quay lại tra cứu.

Sẵn sàng chưa? Hãy bắt đầu từ nhận biết các loại lỗi thường gặp.

→ [4.5.1 Tra cứu nhanh loại lỗi thường gặp](./4.5.1-error-types.md)
