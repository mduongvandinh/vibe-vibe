---
title: "3.6 Khi AI không nghe lời"
---

# 3.6 Khi AI không nghe lời: Debugging, sửa lỗi và chiến lược dự phòng

## Sau khi học xong phần này, bạn sẽ nắm được

- Nhận diện 6 loại vấn đề phổ biến trong output của AI
- Chẩn đoán nguyên nhân gốc rễ bằng "phương pháp nhanh 3 phút"
- 4 chiến lược sửa lỗi để AI làm đúng
- Phương án dự phòng khi AI thực sự không làm được
- Kỹ thuật thực tế để phòng ngừa vấn đề

## Tại sao cần học "Debugging AI"

Trong các phần trước, bạn đã học cách viết prompt tốt (3.1-3.4), và nắm được kỹ năng đối thoại lặp (3.5). Nhưng dù bạn làm tốt đến đâu, đôi khi AI vẫn sẽ "không nghe lời":

- Code sinh ra không chạy được
- Hiểu ý nghĩa khác với ý bạn muốn
- Đề xuất thư viện hoàn toàn không tồn tại
- Sửa đi sửa lại càng sửa càng rối

Đừng lo, điều này rất bình thường.

Khác với lỗi của con người, lỗi của AI thường **có thể dự đoán trước và có quy luật**. Một khi bạn nắm được những quy luật này, bạn sẽ chuyển từ "hoảng loạn" thành "tự tin" - biết vấn đề nằm ở đâu, biết cách sửa, và biết khi nào nên đổi phương án.

## Cấu trúc phần này

| Phần nhỏ | Chủ đề | Bạn sẽ học được |
|-----|------|---------|
| 3.6.1 | Những biểu hiện "không nghe lời" phổ biến của AI | 6 loại vấn đề, trọng tâm: Hallucination và rủi ro bảo mật |
| 3.6.2 | Chẩn đoán vấn đề: AI sai ở đâu | Phương pháp chẩn đoán 3 phút, phân tích nguyên nhân bốn góc |
| 3.6.3 | Chiến lược sửa lỗi: Làm sao để AI sửa đúng | 4 chiến lược sửa lỗi, phát triển dựa trên lỗi |
| 3.6.4 | Chiến lược dự phòng: Khi AI thực sự không làm được | Ranh giới khả năng của AI, mô hình phát triển kết hợp |
| 3.6.5 | Phòng bệnh hơn chữa bệnh | Tự kiểm tra trước khi gửi, kỹ thuật nhắc lại, tiến nhanh từng bước nhỏ |

## Tâm pháp cốt lõi

> **AI mắc lỗi không đáng sợ, đáng sợ là không biết nó đã sai.**

Trong Vibe Coding, vai trò của bạn không phải là viết code, mà là **chỉ huy và nghiệm thu**. Điều này có nghĩa bạn cần có khả năng nhận diện vấn đề, hướng dẫn sửa lỗi. Phần này sẽ dạy bạn khả năng đó.

Sẵn sàng chưa? Hãy bắt đầu từ việc nhận diện các biểu hiện "không nghe lời" khác nhau của AI.
