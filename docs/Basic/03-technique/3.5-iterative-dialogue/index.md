---
title: "3.5 Nghệ thuật đối thoại lặp"
---

# 3.5 Nghệ thuật đối thoại lặp: Từ "Hoàn thành một lần" đến "Tiếp cận từng bước"

> **Mục tiêu của chương**: Nắm vững kỹ thuật đối thoại nhiều vòng, học cách tiếp cận kết quả lý tưởng từng bước trong cuộc đối thoại

Bạn đã học cách viết prompt có cấu trúc (3.2), nắm vững các kỹ thuật nâng cao (3.3), thậm chí có thể viết một bản PRD hoàn chỉnh (3.4). Nhưng khi bạn gửi tất cả những thứ này cho AI, bạn có thể sẽ phát hiện: **Kết quả đầu ra lần đầu thường không phải là thứ bạn muốn**.

Đây không phải là vấn đề của bạn, cũng không phải là vấn đề của AI. Đây là bản chất của đối thoại.

## Thông điểm cốt lõi

> "Theo đuổi 'hoàn hảo một lần' là ảo tưởng, 'tiếp cận từng bước' mới là con đường đúng."

Hãy tưởng tượng bạn đang trang trí nhà. Bạn sẽ không kỳ vọng thợ sơn có thể hoàn thiện hoàn hảo ngay lớp sơn đầu tiên. Bạn sẽ xem kết quả, đưa ra ý kiến, rồi điều chỉnh. Đối thoại với AI cũng tương tự—đó là một **quá trình cộng tác**, không phải **thực thi lệnh** một lần.

## Sau khi học chương này, bạn sẽ nắm vững

- Hiểu tại sao "hỏi một lần" thường không đủ
- Nắm vững mô hình ba giai đoạn của đối thoại lặp: Xem hướng → Sửa vấn đề → Chau chuốt chi tiết
- Học cách đưa feedback hiệu quả cho AI bằng framework SBI
- Quản lý context trong đối thoại dài, tránh AI "mất trí nhớ"
- Biết khi nào nên bắt đầu cuộc đối thoại mới và cách "di chuyển"

## Vị trí của chương này trong Chương 3

```
3.1 Prompt cơ bản      →  Biết nên nói với AI thông tin gì
      ↓
3.2 Framework có cấu trúc  →  Học cách tổ chức những thông tin này
      ↓
3.3 Kỹ thuật nâng cao     →  Nắm vững các "cách hỏi" khác nhau
      ↓
3.4 PRD đầu tiên      →  Tổng hợp suy nghĩ, tạo thành bản kế hoạch
      ↓
3.5 Đối thoại lặp (chương này) →  Điều chỉnh từng bước trong quá trình thực hiện, tiếp cận kết quả lý tưởng
      ↓
3.6 Chiến lược Debug   →  Cách sửa lỗi khi AI mắc lỗi
```

Nếu 3.1-3.4 dạy bạn "cách khởi đầu tốt", thì chương này dạy bạn "cách hoàn thành toàn bộ quá trình".

## Cấu trúc của chương

| Tiểu mục | Nội dung cốt lõi | Bạn sẽ có được |
|-----|---------|---------|
| 3.5.1 | Tại sao hỏi một lần thường không đủ | Kỳ vọng đúng: Iteration là bình thường, không phải thất bại |
| 3.5.2 | Mô hình cơ bản của đối thoại lặp | Mô hình ba giai đoạn + Ví dụ đối thoại hoàn chỉnh |
| 3.5.3 | Nghệ thuật feedback hiệu quả | Framework SBI + Thư viện mẫu câu feedback |
| 3.5.4 | Quản lý context | Bốn kỹ thuật tránh AI "mất trí nhớ" |
| 3.5.5 | Biết khi nào bắt đầu cuộc đối thoại mới | Đánh giá thời điểm "di chuyển" + Template khởi động |

## Ví dụ liên tục: Danh sách việc cần làm của Tiểu Lý

Chương này tiếp tục sử dụng dự án danh sách việc cần làm của Tiểu Lý. Bạn sẽ thấy một quá trình iteration hoàn chỉnh:

```
Yêu cầu ban đầu: "Giúp tôi thực hiện chức năng thêm nhiệm vụ"
    ↓
Vòng 1: AI đưa ra implementation cơ bản (hướng đúng, nhưng chi tiết còn thiếu)
    ↓
Feedback: "Input box quá nhỏ, và không có validation input rỗng"
    ↓
Vòng 2: AI sửa lỗi, thêm validation (chức năng đúng, nhưng cấu trúc không hài lòng)
    ↓
Feedback: "Logic validation nằm trong component, tôi muốn tách thành hàm riêng"
    ↓
Vòng 3: Phiên bản cuối cùng (cấu trúc rõ ràng, có thể bảo trì)
```

Ba vòng đối thoại, từ "có thể dùng" đến "dùng tốt". Đây là sức mạnh của iteration.

## Gợi ý học tập

1. **Điều chỉnh kỳ vọng**: Kết quả đầu ra vòng đầu không hoàn hảo là bình thường, đừng chán nản
2. **Học và thực hành song song**: Mỗi tiểu mục đều có template có thể sao chép, đề xuất sử dụng thực tế
3. **Ghi chép kinh nghiệm**: Thu thập các mẫu câu feedback hiệu quả, tạo thành "kho vũ khí" của riêng bạn

Sẵn sàng chưa? Hãy bắt đầu từ "Tại sao hỏi một lần thường không đủ".
