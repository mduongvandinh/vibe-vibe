---
title: "4.3 Vòng thứ hai: Thực hiện chức năng cốt lõi"
order: 1
---

# 4.3 Vòng thứ hai: Thực hiện chức năng cốt lõi

> **Mục tiêu vòng này**: Làm cho trang có thể phản hồi thao tác người dùng — nhấn nút thực sự có phản ứng

Ở vòng trước (4.2), bạn đã làm được một "vỏ đẹp": có tiêu đề, có ô nhập, có nút bấm, có khu vực danh sách. Nhưng nếu bạn bây giờ nhấp nút "Thêm", sẽ không có gì xảy ra.

Giống như đã tạo một chiếc ô tô đẹp, nhưng chưa lắp động cơ.

**Vòng này, chúng ta sẽ lắp "động cơ" cho nó** — làm cho mỗi nút đều có thể hoạt động thực sự.

## Từ "tĩnh" sang "động"

Ở phần 4.2, chúng ta đã dùng HTML và CSS xây dựng trang. Bây giờ cần thêm JavaScript, làm cho trang có thể "phản hồi" thao tác của người dùng.

| Khái niệm | Phép loại suy | Thể hiện trong danh sách công việc |
|------|------|-------------------|
| HTML | Khung xương của ngôi nhà | Cấu trúc ô nhập, nút bấm, danh sách |
| CSS | Trang trí của ngôi nhà | Màu sắc, font chữ, bố cục |
| JavaScript | Mạch điện và công tắc của ngôi nhà | Logic phản hồi sau khi nhấp nút |

Bạn không cần "học" JavaScript. Bạn chỉ cần nói với AI bạn muốn hiệu ứng gì, AI sẽ giúp bạn viết code.

## Ba chức năng cần thực hiện vòng này

Còn nhớ chức năng P0 đã định nghĩa ở chương hai không? Vòng này chúng ta sẽ thực hiện ba chức năng cốt lõi nhất:

| Chức năng | Thao tác người dùng | Kết quả dự kiến |
|------|---------|---------|
| Thêm nhiệm vụ | Nhập nội dung, nhấp nút "Thêm" | Nhiệm vụ mới xuất hiện trong danh sách |
| Xóa nhiệm vụ | Nhấp nút "Xóa" bên cạnh nhiệm vụ | Nhiệm vụ đó biến mất khỏi danh sách |
| Đánh dấu hoàn thành | Nhấp nút "Hoàn thành" của nhiệm vụ | Nhiệm vụ hiển thị trạng thái đã hoàn thành (thêm gạch ngang) |

Ba chức năng này bao gồm thao tác "thêm, xóa, sửa", là mô hình cơ bản của hầu hết các ứng dụng.

## Xử lý sự kiện: Làm cho trang "hiểu" thao tác của bạn

Trước khi bắt đầu, hãy hiểu một khái niệm cốt lõi: **xử lý sự kiện**.

Hãy tưởng tượng bạn đang gọi món ở nhà hàng:

1. Bạn nhấn nút gọi phục vụ (**kích hoạt sự kiện**)
2. Phục vụ nghe thấy chuông (**lắng nghe sự kiện**)
3. Phục vụ đi đến phục vụ bạn (**thực thi phản hồi**)

Xử lý sự kiện JavaScript cũng là logic này:

```
Người dùng nhấp nút → Chương trình lắng nghe được click → Thực thi code tương ứng
```

Bạn không cần tự viết những đoạn code này. Chỉ cần nói với AI: "Khi người dùng nhấp nút thêm, thêm nội dung đã nhập vào danh sách", AI sẽ giúp bạn thực hiện.

## Quy trình làm việc vòng này

```
4.3.1 Thêm nhiệm vụ → Làm nút "Thêm" hoạt động
       ↓
4.3.2 Xóa nhiệm vụ → Làm nút "Xóa" hoạt động
       ↓
4.3.3 Đánh dấu hoàn thành → Làm nút "Hoàn thành" hoạt động
       ↓
4.3.4 Tối ưu lặp → Điều chỉnh chỗ không hài lòng
       ↓
4.3.5 Kiểm tra giai đoạn → Xác nhận tất cả chức năng bình thường
```

Mỗi khi hoàn thành một chức năng, đều phải test xác nhận có thể dùng bình thường, rồi mới chuyển sang chức năng tiếp theo.

## Điều hướng chương

| Phần nhỏ | Chủ đề | Thời gian dự kiến |
|------|------|---------|
| [4.3.1](./4.3.1-add-task.md) | Chức năng một: Thêm nhiệm vụ | 10 phút |
| [4.3.2](./4.3.2-delete-task.md) | Chức năng hai: Xóa nhiệm vụ | 8 phút |
| [4.3.3](./4.3.3-complete-task.md) | Chức năng ba: Đánh dấu hoàn thành | 8 phút |
| [4.3.4](./4.3.4-iterate.md) | Nghệ thuật tối ưu lặp | 7 phút |
| [4.3.5](./4.3.5-checkpoint.md) | Kiểm tra thành quả giai đoạn | 2 phút |

**Tổng thời gian dự kiến: khoảng 35 phút**

::: tip 💡 Lời nhắc nhẹ
Nếu chức năng nào đó thực hiện xong không đúng lắm, đừng vội lo. Phần 4.3.4 sẽ chuyên nói về cách hỏi lại và điều chỉnh. Cứ làm theo trước, gặp vấn đề ghi chép lại.
:::

## Sẵn sàng chưa?

Hãy chắc chắn bạn đã hoàn thành phần 4.2, có một trang tĩnh hiển thị bình thường.

Hãy bắt đầu "lắp động cơ" cho nó!

→ [4.3.1 Chức năng một: Thêm nhiệm vụ](./4.3.1-add-task.md)
