---
title: "4.4 Vòng thứ ba: Làm sống dữ liệu"
order: 1
---

# 4.4 Vòng thứ ba: Làm sống dữ liệu

> **Mục tiêu phần này**: Lưu trữ dữ liệu nhiệm vụ, vẫn còn sau khi làm mới trang

## Từ 4.3 đến 4.4: Mảnh ghép cuối cùng

Trong phần 4.3, bạn đã làm cho danh sách công việc có đầy đủ khả năng tương tác: thêm, xóa, đánh dấu hoàn thành.

Nhưng nếu bạn làm mới trang (nhấn F5), bạn sẽ thấy — **tất cả nhiệm vụ đều biến mất**.

Đây không phải là Bug, mà là vì hiện tại dữ liệu chỉ tồn tại trong "bộ nhớ tạm thời" của trình duyệt. Giống như viết chữ trên bảng trắng, xóa đi thì mất.

Vòng này, chúng ta sẽ gắn "bộ nhớ" cho danh sách công việc, để nó có thể nhớ các nhiệm vụ của bạn.

## Kết quả học tập vòng này

Sau vòng học này, bạn sẽ nắm được:

- Hiểu tại sao trang web cần lưu trữ dữ liệu
- Sử dụng localStorage để thực hiện lưu trữ dữ liệu bền vững
- Xác minh dữ liệu được lưu và đọc đúng cách
- Hoàn thành một ứng dụng "không mất dữ liệu khi làm mới"

## Điều hướng chương

| Tiểu mục | Chủ đề | Thời gian dự kiến |
|------|------|---------|
| [4.4.1](./4.4.1-why-storage.md) | Tại sao cần lưu trữ dữ liệu | 3 phút |
| [4.4.2](./4.4.2-localstorage.md) | Sử dụng lưu trữ cục bộ (localStorage) | 10 phút |
| [4.4.3](./4.4.3-test-persistence.md) | Kiểm tra tính bền vững dữ liệu | 5 phút |
| [4.4.4](./4.4.4-final-verification.md) | Xác minh chức năng hoàn chỉnh và tổng kết giai đoạn | 5 phút |

**Tổng thời gian dự kiến: khoảng 25 phút**

→ [4.4.1 Tại sao cần lưu trữ dữ liệu](./4.4.1-why-storage.md)
