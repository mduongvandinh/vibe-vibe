---
title: "3.3 Kỹ thuật prompt nâng cao"
---

# 3.3 Kỹ thuật prompt nâng cao: Mở khóa khả năng ẩn của AI

Trong mục 3.2, bạn đã học cách dùng framework có cấu trúc (S.C.A.F.F., R.G.C.) để tổ chức prompt. Framework giải quyết vấn đề "cách tổ chức thông tin", nhưng còn một câu hỏi chưa được trả lời:

> "Với cùng thông tin, có cách 'hỏi' thông minh hơn không, để AI thể hiện tốt hơn?"

Có. Đó chính là **kỹ thuật prompt nâng cao** mà mục này sẽ giới thiệu.

## Qua mục này bạn sẽ nắm được

- **Zero-shot**: Hỏi trực tiếp, phù hợp với task AI đã "biết"
- **Few-shot**: Dùng ví dụ để dạy AI, phù hợp với output có format
- **Chain of Thought**: Để AI suy nghĩ từng bước, phù hợp logic phức tạp
- **Tree of Thoughts**: Khám phá nhiều đường đi, phù hợp so sánh phương án
- **Self-Critique**: Để AI tự kiểm tra, nâng cao chất lượng output
- **Hướng dẫn chọn kỹ thuật**: Tình huống nào dùng kỹ thuật gì

## Nhận thức cốt lõi

> "Task khác nhau, cần cách suy nghĩ khác nhau. Bản chất của kỹ thuật prompt, là hướng dẫn AI dùng cách phù hợp nhất để xử lý vấn đề của bạn."

Nghiên cứu năm 2024 cho thấy: Kỹ thuật Chain of Thought (chuỗi suy nghĩ) hiệu quả rõ rệt với task **toán học và suy luận ký hiệu**, nhưng lợi ích hạn chế với các loại task khác. Điều này có nghĩa: **Không có kỹ thuật vạn năng, chỉ có kỹ thuật phù hợp nhất**.

Mục tiêu của mục này không phải để bạn nhớ tất cả kỹ thuật, mà giúp bạn xây dựng "trực giác chọn kỹ thuật" — nhìn thấy task, biết ngay nên dùng cách nào để đối thoại với AI.

## Cấu trúc mục này

```
3.3.1 Zero-shot Prompting    → Cách hỏi cơ bản nhất, phù hợp nhập môn
3.3.2 Few-shot Prompting     → Dùng ví dụ dạy AI, công cụ tốt cho format output
3.3.3 Chain of Thought       → Suy luận từng bước, trợ thủ đắc lực cho logic phức tạp
3.3.4 Tree of Thoughts       → Khám phá nhiều đường, chuyên dụng cho tình huống quyết định
3.3.5 Self-Critique          → AI tự kiểm tra, tuyến phòng cuối cùng đảm bảo chất lượng
3.3.6 Hướng dẫn chọn kỹ thuật → Quyết định nhanh, tình huống nào dùng kỹ thuật gì
```

## Quan hệ với các mục trước

| Mục | Vấn đề giải quyết | Ví dụ |
|-----|-----------|------|
| 3.1 Prompt cơ bản | Nên cho AI **thông tin gì** | Chuẩn bị nguyên liệu |
| 3.2 Framework cấu trúc | Làm thế nào **tổ chức** các thông tin này | Sắp xếp theo công thức |
| 3.3 Kỹ thuật nâng cao | Dùng **cách nào** để AI xử lý | Chọn phương pháp nấu nướng |

Ba phần này có quan hệ tiến triển: Trước hết biết nên nói gì (3.1), sau đó học cách tổ chức (3.2), cuối cùng nắm vững các "cách hỏi" khác nhau (3.3).

## Tiếp tục ví dụ: Todo list của Tiểu Lý

Mục này tiếp tục sử dụng dự án todo list của Tiểu Lý ở chương 2 làm ví dụ xuyên suốt. Bạn sẽ thấy cùng một yêu cầu, dùng kỹ thuật hỏi khác nhau, sẽ có hiệu quả ra sao.

## Đề xuất học tập

1. **Nắm vững Zero-shot và Few-shot trước**: Hai kỹ thuật này bao phủ 80% tình huống hàng ngày
2. **Chain of Thought dùng khi cần**: Gặp logic phức tạp mới dùng
3. **Tree of Thoughts hiểu là được**: Chỉ cần khi chọn công nghệ
4. **Self-Critique tạo thành thói quen**: Output quan trọng đều để AI tự kiểm tra một lần

Sẵn sàng chưa? Hãy bắt đầu từ Zero-shot cơ bản nhất.
