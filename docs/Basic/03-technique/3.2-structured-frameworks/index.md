---
title: "3.2 Framework Prompt có cấu trúc"
---

# 3.2 Framework Prompt có cấu trúc: Từ "nói tùy hứng" đến "có chương pháp"

Ở phần 3.1, bạn học được nguyên tắc cốt lõi "ngữ cảnh là vua", biết nên nói cho AI biết thông tin gì. Nhưng có thể bạn vẫn còn một băn khoăn:

> "Đạo lý tôi đều hiểu, nhưng mỗi lần viết prompt vẫn phải nghĩ từ đầu, có cách nào tiết kiệm công sức hơn không?"

Có đó. Đây chính là ý nghĩa tồn tại của **framework có cấu trúc**.


## Sau khi học xong phần này, bạn sẽ nắm được

- Hiểu giá trị của framework: Tại sao "áp công thức" lại có thể viết được prompt tốt hơn
- Nắm vững framework S.C.A.F.F.: Cấu trúc hoàn chỉnh phù hợp nhiệm vụ phát triển kỹ thuật
- Nắm vững framework R.G.C.: Cấu trúc rút gọn phù hợp câu hỏi nhanh
- Có được template prompt vạn năng: Lựa chọn an toàn khi không chắc dùng framework nào
- Học cách lựa chọn framework phù hợp theo tình huống


## Quan hệ với chương hai

Phần 2.4.5 chương hai giới thiệu **Prompt Kể chuyện** (Danh tính-Hiện trạng-Nỗi đau-Kỳ vọng), đặc biệt phù hợp với tình huống cần biểu đạt cảm xúc và nỗi đau của người dùng.

Framework có cấu trúc trong phần này và Prompt Kể chuyện là quan hệ **bổ sung**, không phải thay thế:

| Loại framework | Đặc điểm cốt lõi | Tình huống áp dụng |
|---------|---------|---------|
| Prompt Kể chuyện | Dẫn dắt bằng cảm xúc, nhấn mạnh nỗi đau người dùng | Thiết kế sản phẩm, giao tiếp nhu cầu |
| Framework có cấu trúc | Dẫn dắt bằng logic, nhấn mạnh ràng buộc kỹ thuật | Triển khai code, nhiệm vụ kỹ thuật |

Bạn có thể linh hoạt lựa chọn theo tính chất nhiệm vụ, thậm chí kết hợp sử dụng.


## Cấu trúc phần này

```
3.2.1 Tại sao cần framework → Hiểu giá trị của framework, loại bỏ hiểu lầm "áp công thức rất ngu"
3.2.2 Framework S.C.A.F.F. → Framework 5 yếu tố hoàn chỉnh, phù hợp nhiệm vụ phức tạp
3.2.3 Framework R.G.C. → Framework 3 yếu tố rút gọn, phù hợp câu hỏi nhanh
3.2.4 Template prompt vạn năng → Lựa chọn an toàn khi không chắc dùng cái nào
3.2.5 Hướng dẫn lựa chọn framework → Tình huống nào dùng framework nào
```

Sẵn sàng chưa? Chúng ta bắt đầu từ "tại sao cần framework".
