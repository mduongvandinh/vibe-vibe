---
title: "Chương 2: Tư duy - Suy nghĩ như một Quản lý Sản phẩm"
---

# Chương 2: Tư duy - Suy nghĩ như một Quản lý Sản phẩm

> **Giới thiệu chương**
>
> Những gì bạn sắp học không phải là "cách viết prompt tốt hơn cho AI" -- đó là nội dung của chương 3.
>
> Chương này giải quyết một vấn đề cơ bản hơn: **Trước khi bạn yêu cầu AI "giúp tôi làm xxx", bạn nên suy nghĩ rõ ràng về điều gì?**
>
> 90% thất bại của Vibe Coding không phải vì AI không đủ thông minh, mà vì bạn chưa suy nghĩ rõ ràng về những gì bạn muốn làm.
>
> Sau khi hoàn thành chương này, bạn sẽ có được một bộ công cụ tư duy cấp độ Quản lý Sản phẩm. Từ đó về sau, bất kể bạn muốn làm gì -- một công cụ nhỏ, một phân tích dữ liệu, một script tự động hóa, hay một mẫu sản phẩm -- bạn sẽ biết cách suy nghĩ.

> **Thời gian dự kiến đọc**: Đọc hoàn chỉnh khoảng 2 giờ | Đọc nhanh khoảng 30 phút



## Sau khi học chương này, bạn sẽ nắm vững

- **Bảy mô hình tư duy**: JTBD, Tư duy ngược, Tư duy trừ, Tư duy câu chuyện, Ba câu hỏi linh hồn, Ứng dụng tình huống, Khám phá vấn đề
- **Một quy trình kiểm tra trước khi phát triển**: Đảm bảo bạn suy nghĩ rõ ràng trước khi bắt đầu
- **Chuỗi suy nghĩ hoàn chỉnh từ "có ý tưởng" đến "sẵn sàng phát triển"**



## Hướng dẫn nội dung chương

| Phần | Vấn đề được giải quyết |
|-----|-----------|
| [2.1 Nâng cấp Tư duy](./2.1-thinking-upgrade/) | Tại sao ý tưởng "Tôi muốn làm một ứng dụng" lại thất bại |
| [2.2 Tư duy Ngược](./2.2-inversion-thinking/) | Cách tránh rủi ro trước thay vì chữa cháy sau |
| [2.3 Tư duy Trừ](./2.3-subtraction-thinking/) | Phiên bản đầu tiên nên có bao nhiêu tính năng |
| [2.4 Tư duy Câu chuyện](./2.4-story-thinking/) | Cách thực sự hiểu người dùng của bạn |
| [2.5 Ba câu hỏi Linh hồn](./2.5-soul-questions/) | Tự kiểm tra cuối cùng trước khi phát triển |
| [2.6 Ứng dụng Tình huống](./2.6-scenario-application/) | Yêu cầu đặc biệt cho phân tích dữ liệu/script/công cụ gia đình, v.v. |
| [2.7 Khám phá Vấn đề](./2.7-problem-discovery/) | Cách tìm cảm hứng khi không biết nên làm dự án gì |
| [2.8 Tóm tắt Chương](./2.8-chapter-summary/) | Cách sử dụng bảy mô hình liên kết với nhau |
| [Phụ lục](./appendix/) | Mẫu tra cứu nhanh, trường hợp mở rộng, lỗi phổ biến, tài nguyên sâu |



## Gợi ý đọc cho các tình huống khác nhau

**Phiên bản vội vã (30 phút)**: 2.1 → 2.3 → 2.5 → 2.8.2 Danh sách kiểm tra

**Phiên bản hoàn chỉnh (2 giờ)**: Đọc tất cả các phần theo thứ tự

**Khi gặp vấn đề, quay lại tra cứu**: Đi trực tiếp đến cuối 2.8, "Bảng tra cứu nhanh lựa chọn mô hình"


## Chương này áp dụng cho bất kỳ điều gì bạn muốn làm

Trước khi bắt đầu, tôi muốn nói rõ một điều:

**Chương này không chỉ về "làm sản phẩm" hoặc "khởi nghiệp".**

Bất kể bạn muốn dùng Vibe Coding để làm gì, những cách suy nghĩ này đều áp dụng:

| Những gì bạn muốn làm | Cách chương này giúp bạn |
|-------------|---------------|
| **Công cụ nhỏ giải quyết khó khăn cá nhân** | Giúp bạn suy nghĩ rõ ràng "Tôi thực sự muốn giải quyết vấn đề gì" |
| **Phân tích dữ liệu và trực quan hóa** | Giúp bạn xác định "Tôi muốn trả lời câu hỏi gì, cho ai xem" |
| **Script tự động hóa** | Giúp bạn xác định "Những lao động nào lặp đi lặp lại đáng được tự động hóa" |
| **Xác minh mẫu sản phẩm** | Giúp bạn thiết kế "Phiên bản có thể kiểm chứng tối thiểu" |
| **Dự án học tập luyện tập** | Giúp bạn chọn "Dự án phù hợp với trình độ của bạn" |
| **Tạo một trang web nhỏ cho gia đình** | Giúp bạn hiểu "Họ thực sự cần gì" |

**Ý tưởng cốt lõi chỉ có một: Suy nghĩ rõ ràng trước, sau đó hành động.**

Điều này nghe có vẻ đơn giản, nhưng hầu hết mọi người (kể cả tôi) đều bỏ qua bước này và trực tiếp yêu cầu AI "giúp tôi làm một xxx".

Kết quả là: Những gì AI tạo ra luôn khác với những gì bạn muốn.

Không phải vấn đề của AI, mà bạn không suy nghĩ rõ ràng.
