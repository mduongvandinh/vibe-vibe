---
title: "Chương 4: Thực chiến — Phát triển công cụ cá nhân từ 0 đến 1"
order: 1
---

# Chương 4: Thực chiến — Phát triển công cụ cá nhân từ 0 đến 1

> **Định vị chương**: Chương này là chương thực hành cốt lõi của Vibe Coding, sẽ thực sự làm rơi vào thực tế tư duy và kỹ pháp học được ở ba chương trước, dẫn bạn từng bước hoàn thành dự án lập trình AI đầu tiên hoàn chỉnh.

## Từ "giáo điều" đến "thực chiến"

Trong ba chương trước, chúng ta đã hoàn thành công việc chuẩn bị quan trọng:

| Chương | Bạn đã học được gì | Ví dụ |
|------|-------------|------|
| Chương 1 Thức tỉnh | Hiểu Vibe Coding là gì | Nhận biết thế giới mới |
| Chương 2 Tâm pháp | Dùng tư duy product manager nghĩ rõ cần làm gì | Viết kịch bản tốt |
| Chương 3 Kỹ pháp | Dùng phương pháp có cấu trúc giao tiếp hiệu quả với AI | Học ngôn ngữ của đạo diễn |
| **Chương 4 Thực chiến** | **Thực sự ra tay làm ra một sản phẩm** | **Bắt đầu quay!** |

Chương này, chúng ta sẽ dùng hết những gì đã học ở trước — **làm một thứ thực sự có thể dùng được**.

Không phải xem người khác làm, không phải tưởng tượng làm, mà là bạn tự tay làm ra.

## Tại sao chọn "todo list" làm dự án đầu tiên

Bạn có thể hỏi: Tại sao không làm thứ gì ngầu hơn? Ví dụ chatbot AI, công cụ tạo ảnh?

Chúng tôi chọn "todo list cá nhân", có ba lý do quan trọng:

### 1. Bao gồm đầy đủ thao tác CRUD

| Thao tác | Tiếng Anh | Thể hiện trong todo list |
|------|------|-------------------|
| Tạo | Create | Thêm task mới |
| Đọc | Read | Hiển thị danh sách task |
| Cập nhật | Update | Đánh dấu task hoàn thành |
| Xóa | Delete | Xóa task |

Bốn thao tác này là nền tảng của hầu như mọi ứng dụng. Học được cái này, làm dự án khác chỉ là đổi vỏ ngoài.

### 2. Kết nối liền mạch với ví dụ chương 2

Còn nhớ Tiểu Lý ở chương 2 không? Anh ấy muốn làm một todo list để quản lý task của mình. Chúng ta ở chương 2 đã giúp anh ấy làm:
- Phân tích ba câu hỏi linh hồn
- User persona
- Định nghĩa tính năng MVP
- PRD đơn giản

Bây giờ, chúng ta sẽ **thực sự làm ra** ý tưởng của Tiểu Lý.

### 3. Làm xong thực sự dùng được

Đây không phải "dự án luyện tập" — làm xong, bạn thực sự có thể dùng nó để quản lý công việc của mình. Refresh trang dữ liệu vẫn còn, mở trên điện thoại cũng được. Cảm giác thành tựu "thứ tôi làm thực sự dùng được" này, chính là động lực lớn nhất để học lập trình.

## Chương này tích hợp nội dung các chương trước như thế nào

| Từ chương | Bạn sẽ dùng | Dùng ở đâu |
|---------|---------|---------|
| Chương 2 Tâm pháp | PRD của Tiểu Lý, ba câu hỏi linh hồn, định nghĩa MVP | 4.1 Xác định rõ cần làm gì |
| Chương 3 Kỹ pháp | Framework S.C.A.F.F., kỹ thuật đối thoại lặp | 4.2-4.4 Viết Prompt, điều chỉnh tối ưu |

Chương này là "sân tập thực chiến" của hai chương trước — chương 2 dạy bạn nghĩ rõ, chương 3 dạy bạn nói rõ, chương này để bạn thực sự làm ra.

## Mục tiêu học tập chương này

Hoàn thành chương này, bạn sẽ:

- ✅ Hoàn thành độc lập một ứng dụng web hoàn chỉnh có chức năng thêm xóa sửa tìm
- ✅ Nắm vững quy trình làm việc hoàn chỉnh từ ý tưởng đến sản phẩm
- ✅ Học cách dùng AI IDE để phát triển
- ✅ Có thể debug và sửa khi code AI báo lỗi
- ✅ Hiểu khái niệm cơ bản về lưu trữ dữ liệu (localStorage)
- ✅ Có một tác phẩm thực có thể khoe với bạn bè

## Cấu trúc chương này

```
4.1 Trước khi bắt đầu → Tích hợp công việc chuẩn bị, chọn công cụ
4.2 Vòng 1: Xây dựng trang → Trước hết làm "giao diện"
4.3 Vòng 2: Thực hiện chức năng → Để nó phản ứng với thao tác
4.4 Vòng 3: Lưu trữ dữ liệu → Để nó nhớ dữ liệu của bạn
4.5 Debug thực chiến → Khi code AI báo lỗi thì làm sao
4.6 Tổng kết và nhìn lại → Trình bày dự án hoàn chỉnh và tổng kết kinh nghiệm
```

## Thời gian dự kiến

| Mục | Thời gian dự kiến | Độ khó |
|------|---------|------|
| 4.1 Trước khi bắt đầu | 15 phút | ⭐ |
| 4.2 Xây dựng trang | 20 phút | ⭐ |
| 4.3 Thực hiện chức năng | 30 phút | ⭐⭐ |
| 4.4 Lưu trữ dữ liệu | 20 phút | ⭐⭐ |
| 4.5 Debug thực chiến | 20 phút | ⭐⭐ |
| 4.6 Tổng kết nhìn lại | 15 phút | ⭐ |
| **Tổng cộng** | **Khoảng 2 giờ** | |

::: tip 💡 Đề xuất
Có thể làm một mạch, cũng có thể chia thành 2-3 lần. Mỗi lần hoàn thành một vòng đều có thành quả giai đoạn, có thể tạm dừng bất cứ lúc nào.
:::

## Sẵn sàng chưa?

Hãy bắt đầu ra tay làm đồ thôi!

→ [4.1 Trước khi bắt đầu](./4.1-before-start/)
