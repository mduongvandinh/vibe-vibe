---
title: "Phụ lục: Thư viện Prompt Template thường dùng"
---

# Phụ lục: Thư viện Prompt Template thường dùng

Phụ lục này cung cấp một loạt các Prompt template có thể sao chép và sử dụng trực tiếp, bao gồm bốn tình huống chính: tạo dự án, sửa đổi code, giải quyết vấn đề và tạo tài liệu.

## Cách sử dụng thư viện template này

1. **Tìm tình huống của bạn**: Dựa vào bảng chỉ mục bên dưới, nhanh chóng định vị template phù hợp với bạn
2. **Sao chép template**: Sao chép template vào cửa sổ chat AI của bạn
3. **Thay thế placeholder**: Thay thế `[nội dung trong ngoặc vuông]` bằng tình huống thực tế của bạn
4. **Xóa bớt nếu cần**: Nếu một số trường không áp dụng, bạn có thể xóa chúng

## Chỉ mục theo tình huống: Tôi muốn làm gì → Dùng template nào

| Bạn muốn làm gì | Template đề xuất | Chương mục |
|-----------|---------|---------|
| Tạo ứng dụng web từ đầu | Template tạo ứng dụng web | A.1 |
| Dùng Python phân tích dữ liệu | Template dự án phân tích dữ liệu | A.1 |
| Viết script tự động xử lý file | Template script tự động hóa | A.1 |
| Thêm tính năng mới vào code hiện có | Template mở rộng tính năng | A.2 |
| Tối ưu hiệu suất hoặc cấu trúc code | Template refactor code | A.2 |
| Code báo lỗi, cần sửa | Template debug lỗi runtime | A.3 |
| Code chạy được nhưng kết quả sai | Template phân tích lỗi logic | A.3 |
| Không biết nên dùng công nghệ/thư viện nào | Template tư vấn công nghệ | A.3 |
| Thêm comment cho code | Template tạo comment code | A.4 |
| Viết tài liệu giới thiệu dự án | Template tạo README | A.4 |


## Checklist kiểm tra trước khi dùng template

Trước khi gửi Prompt, hãy kiểm tra nhanh:

- [ ] **Thông tin bối cảnh đầy đủ chưa?** Loại dự án, tech stack, tiến độ hiện tại
- [ ] **Mô tả nhiệm vụ rõ ràng chưa?** Cụ thể phải làm gì, input output là gì
- [ ] **Điều kiện ràng buộc đã viết chưa?** Những giới hạn phải tuân thủ, không được làm gì
- [ ] **Placeholder đã thay hết chưa?** Không còn sót lại nội dung `[ngoặc vuông]`
- [ ] **Định dạng mong muốn đã nói rõ chưa?** Cần code đầy đủ hay giải thích


## Cấu trúc của phụ lục này

```
A.1 Template tạo dự án → Khởi tạo dự án từ đầu
A.2 Template sửa code → Sửa đổi, mở rộng, refactor code hiện có
A.3 Template giải quyết vấn đề → Debug lỗi, chọn công nghệ, giải thích khái niệm
A.4 Template tạo tài liệu → Comment, README, API docs
```


## Mối quan hệ với nội dung chính

Phụ lục này là **hộp công cụ thực hành** của các chương trong Chương 3:

| Chương chính | Phụ lục tương ứng |
|---------|---------|
| 3.2 Structured Framework | Template trong phụ lục được thiết kế dựa trên S.C.A.F.F. Framework |
| 3.3 Kỹ thuật nâng cao | Một số template tích hợp kỹ thuật Few-shot, CoT |
| 3.4 PRD Template | Template tạo dự án A.1 bổ sung cho PRD |
| 3.6 Xử lý vấn đề | Template giải quyết vấn đề A.3 cung cấp định dạng chuẩn hóa |
| 3.7 Checklist tham khảo | Phụ lục cung cấp template phiên bản đầy đủ chi tiết hơn |

Bây giờ, hãy cùng đi vào thư viện template cụ thể.
