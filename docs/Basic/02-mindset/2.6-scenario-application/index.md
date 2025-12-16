---
title: "2.6 Ứng dụng thực tế: Các công cụ tư duy không chỉ dùng để 「làm sản phẩm」"
---

# 2.6 Ứng dụng thực tế: Các công cụ tư duy không chỉ dùng để 「làm sản phẩm」

Năm phần trước, chúng ta đã học năm công cụ tư duy: Tư duy JTBD, tư duy ngược, tư duy trừ, tư duy câu chuyện, ba câu hỏi cốt lõi.

Có thể bạn sẽ nghĩ: Những cái này không phải dành cho product manager, founder sao? Liên quan gì đến tôi?

Phần này muốn nói với bạn: **Bản chất của các công cụ tư duy này là khả năng「nghĩ rõ vấn đề」, và khả năng này áp dụng được cho bất kỳ tình huống nào bạn nghĩ đến.**


## Sau khi học xong phần này, bạn sẽ nắm được

- Hiểu tính phổ quát của công cụ tư duy: Cùng một phương pháp, ứng dụng trong các tình huống khác nhau
- Nắm được phương pháp mô tả nhu cầu và template Prompt cho tình huống phân tích dữ liệu
- Nắm được phương pháp đánh giá task và template Prompt cho tình huống script tự động hóa
- Nắm được nguyên tắc thiết kế cho tình huống công cụ cá nhân và công cụ gia đình
- Có được bộ template Prompt theo tình huống có thể sao chép và dùng ngay


## Insight cốt lõi

> **Dù bạn muốn làm gì - công cụ nhỏ, phân tích dữ liệu, script tự động hóa - cách tư duy cốt lõi đều giống nhau: Trước tiên nghĩ rõ vấn đề, rồi mới giải quyết.**

Các công cụ tư duy trước không phải là「dành riêng cho product manager」, mà là「dành riêng cho việc định nghĩa vấn đề」.

- Khi làm phân tích dữ liệu, bạn cũng cần hỏi「Ai sẽ xem phân tích này? Họ cần đưa ra quyết định gì?」- Đây là tư duy JTBD
- Khi viết script tự động hóa, bạn cũng cần nghĩ「Trường hợp nào sẽ bị lỗi?」- Đây là tư duy ngược
- Khi làm công cụ cho bản thân, bạn cũng cần kiềm chế cơn thôi thúc「càng nhiều tính năng càng tốt」- Đây là tư duy trừ

**Công cụ tư duy là phổ quát, chỉ có tình huống ứng dụng thay đổi.**


## Tổng quan bốn tình huống lớn

Phần này bao gồm bốn loại tình huống Vibe Coding phổ biến nhất:

| Tình huống | Nhu cầu điển hình | Thách thức cốt lõi | Trọng tâm công cụ tư duy |
|-----|---------|---------|------------|
| **Phân tích dữ liệu** | Phân tích Excel, làm biểu đồ, viết báo cáo | Không biết cần trả lời câu hỏi gì | JTBD (phân tích cho ai), trừ (tập trung vào vấn đề cốt lõi) |
| **Script tự động hóa** | Xử lý file hàng loạt, task định kỳ | Không biết bắt đầu tự động hóa từ đâu | Ngược (nhận diện tình huống lỗi), trừ (làm bước đau nhất trước) |
| **Công cụ cá nhân** | Ghi sổ chi tiêu, pomodoro, ghi chú | Dễ thiết kế quá mức | Trừ (chỉ làm tính năng cốt lõi), ba câu hỏi (pain point thực sự của bản thân) |
| **Công cụ gia đình** | Nhắc uống thuốc, album ảnh, lối tắt | Không hiểu tình huống sử dụng thực tế | Tư duy câu chuyện (đứng ở góc độ của họ), ngược (cái gì khiến họ không dùng được) |


## Cấu trúc phần này

Tiếp theo, chúng ta sẽ khai triển từng tình huống:

1. **Insight cốt lõi**: Tại sao cùng một bộ công cụ tư duy có thể áp dụng cho các tình huống khác nhau
2. **Tình huống phân tích dữ liệu**: Cách dùng công cụ tư duy để AI làm phân tích có giá trị
3. **Tình huống script tự động hóa**: Cách nhận diện task đáng tự động hóa, tránh bẫy thường gặp
4. **Tình huống công cụ cá nhân**: Cách kiềm chế cơn thôi thúc thiết kế quá mức, làm công cụ thực sự dùng được
5. **Tình huống công cụ gia đình**: Cách thiết kế công cụ đơn giản dễ dùng cho người dùng không am hiểu kỹ thuật
6. **Tổng kết phần này**: Bảng tra cứu nhanh template Prompt theo tình huống

Mỗi tình huống sẽ cung cấp:
- Phương pháp áp dụng cụ thể của công cụ tư duy
- Case study thật và ví dụ Prompt đầy đủ
- Sai lầm thường gặp và hướng dẫn tránh
- Template có thể sao chép dùng trực tiếp

Sẵn sàng chưa? Hãy bắt đầu từ「Insight cốt lõi」.
