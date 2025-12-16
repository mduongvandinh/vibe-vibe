---
title: "A.2 Template sửa đổi code"
---

# A.2 Template sửa đổi code

Phần này cung cấp các Prompt template để sửa đổi code hiện có, bao gồm mở rộng tính năng, refactor code, tối ưu hiệu suất và điều chỉnh style.


## Template 1: Mở rộng tính năng

Áp dụng cho: Thêm tính năng mới trên nền code hiện có

```markdown
## Trạng thái hiện tại

**Bối cảnh dự án**: [Mô tả ngắn dự án làm gì]
**Tech stack**: [Công nghệ sử dụng]
**Module cần mở rộng**: [File/component nào]

## Code hiện có

```[ngôn ngữ]
[Dán code hiện có]
```

## Nhu cầu mở rộng

**Tính năng mới**: [Mô tả tính năng cần thêm]

**Chi tiết tính năng**:
- [Chi tiết 1]
- [Chi tiết 2]
- [Chi tiết 3]

**Cách kích hoạt**: [Người dùng kích hoạt tính năng này như thế nào]
**Kết quả mong đợi**: [Sau khi thực thi tính năng nên xảy ra gì]

## Điều kiện ràng buộc

**Phải giữ nguyên**:
- [Tính năng A hiện có không được ảnh hưởng]
- [Tính năng B phải tiếp tục hoạt động bình thường]

**Không được thay đổi**:
- [Phần không được sửa 1]
- [Phần không được sửa 2]

## Yêu cầu đầu ra

- [ ] Chỉ output code đã sửa, không cần lặp lại phần chưa sửa
- [ ] Dùng comment đánh dấu code mới thêm
- [ ] Nói rõ dependencies cần cài thêm (nếu có)
```

### Ví dụ điền: Todo list thêm tính năng "hoàn tác xóa"

```markdown
## Trạng thái hiện tại

**Bối cảnh dự án**: Ứng dụng web danh sách công việc cá nhân
**Tech stack**: React + TypeScript + Tailwind CSS
**Module cần mở rộng**: Component TaskList.tsx

## Code hiện có

```tsx
function TaskList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.content}
          <button onClick={() => onDelete(task.id)}>Xóa</button>
        </li>
      ))}
    </ul>
  );
}
```

## Nhu cầu mở rộng

**Tính năng mới**: Sau khi xóa task hiển thị thông báo "Hoàn tác", có thể khôi phục trong 3 giây

**Chi tiết tính năng**:
- Sau khi xóa task, hiển thị thông báo "Đã xóa, nhấn hoàn tác" ở dưới cùng
- Thông báo tự động biến mất sau 3 giây
- Nhấn nút "Hoàn tác", task được khôi phục về vị trí cũ
- Chỉ có thể có một thông báo hoàn tác cùng lúc

**Cách kích hoạt**: Người dùng nhấn nút xóa
**Kết quả mong đợi**: Task biến khỏi danh sách, thông báo hoàn tác xuất hiện ở dưới

## Điều kiện ràng buộc

**Phải giữ nguyên**:
- Logic hiển thị task hiện tại không đổi
- Vị trí và style nút xóa không đổi

**Không được thay đổi**:
- Không được thay đổi định nghĩa kiểu props
- Không được thêm thư viện quản lý state mới

## Yêu cầu đầu ra

- [x] Chỉ output code đã sửa
- [x] Dùng comment đánh dấu code mới thêm
- [ ] Nói rõ dependencies cần cài thêm
```


## Template 2: Refactor code

Áp dụng cho: Cải thiện chất lượng code, tăng khả năng đọc, thống nhất code style

```markdown
## Mục tiêu refactor

**Vấn đề hiện tại**: [Code hiện tại có vấn đề gì]
**Mong muốn cải thiện**: [Sau refactor mong đợi đạt được hiệu quả gì]

## Code cần refactor

```[ngôn ngữ]
[Dán code cần refactor]
```

## Yêu cầu refactor

**Hướng**: [Có thể chọn nhiều]
- [ ] Tăng khả năng đọc (đặt tên biến, tách hàm)
- [ ] Giảm code trùng lặp (trích xuất hàm chung)
- [ ] Thống nhất code style
- [ ] Thêm định nghĩa kiểu (TypeScript)
- [ ] Cải thiện xử lý lỗi
- [ ] Khác: [Giải thích cụ thể]

**Phải giữ nguyên**:
- Hành vi chức năng hoàn toàn không đổi
- [Ràng buộc khác]

**Tham khảo quy chuẩn** (tùy chọn):
[Nếu có quy chuẩn code cụ thể, có thể dán vào đây]

## Yêu cầu đầu ra

Vui lòng cung cấp:
1. Code đầy đủ sau refactor
2. Giải thích ngắn gọn những thay đổi đã làm
3. Lý do thay đổi
```

### Ví dụ điền: Refactor code validate form trùng lặp

```markdown
## Mục tiêu refactor

**Vấn đề hiện tại**: Ba form đăng ký, đăng nhập, đổi mật khẩu đều có code validate tương tự, copy paste ba lần
**Mong muốn cải thiện**: Trích xuất hàm validate chung, giảm trùng lặp

## Code cần refactor

```typescript
// Form đăng ký
function validateRegister(data) {
  if (!data.email || !data.email.includes('@')) {
    return 'Email không đúng định dạng';
  }
  if (!data.password || data.password.length < 8) {
    return 'Mật khẩu ít nhất 8 ký tự';
  }
  if (data.password !== data.confirmPassword) {
    return 'Hai mật khẩu không khớp';
  }
  return null;
}

// Form đăng nhập
function validateLogin(data) {
  if (!data.email || !data.email.includes('@')) {
    return 'Email không đúng định dạng';
  }
  if (!data.password || data.password.length < 8) {
    return 'Mật khẩu ít nhất 8 ký tự';
  }
  return null;
}

// Form đổi mật khẩu
function validateChangePassword(data) {
  if (!data.oldPassword || data.oldPassword.length < 8) {
    return 'Mật khẩu cũ ít nhất 8 ký tự';
  }
  if (!data.newPassword || data.newPassword.length < 8) {
    return 'Mật khẩu mới ít nhất 8 ký tự';
  }
  if (data.newPassword !== data.confirmPassword) {
    return 'Hai mật khẩu không khớp';
  }
  return null;
}
```

## Yêu cầu refactor

**Hướng**:
- [x] Giảm code trùng lặp (trích xuất hàm chung)
- [x] Thêm định nghĩa kiểu (TypeScript)
- [x] Cải thiện xử lý lỗi (hỗ trợ trả về nhiều lỗi)

**Phải giữ nguyên**:
- Hành vi chức năng hoàn toàn không đổi
- Nội dung thông báo lỗi giữ nguyên

## Yêu cầu đầu ra

Vui lòng cung cấp:
1. Code đầy đủ sau refactor
2. Giải thích ngắn gọn những thay đổi đã làm
3. Cách sử dụng hàm validate mới trong form gốc
```


## Template 3: Tối ưu hiệu suất

Áp dụng cho: Trang tải chậm, thao tác bị lag, chiếm bộ nhớ cao

```markdown
## Mô tả vấn đề hiệu suất

**Hiện tượng**: [Mô tả cụ thể chậm ở đâu, lag ở đâu]
**Điều kiện kích hoạt**: [Tình huống nào xuất hiện vấn đề này]
**Mức độ ảnh hưởng**: [Delay khoảng bao lâu, lag bao lâu]

## Code liên quan

```[ngôn ngữ]
[Dán code có thể gây vấn đề hiệu suất]
```

## Mục tiêu tối ưu

**Hiệu quả mong đợi**: [Sau tối ưu nên đạt mức độ nào]
**Tiêu chuẩn đo lường**: [Làm thế nào đánh giá tối ưu thành công]

## Thông tin đã biết

**Quy mô dữ liệu**: [Khối lượng dữ liệu xử lý khoảng bao nhiêu]
**Môi trường chạy**: [Trình duyệt/Node.js/Mobile]
**Đã thử tối ưu**: [Nếu có]

## Điều kiện ràng buộc

- Logic chức năng không được thay đổi
- [Ràng buộc khác]

## Yêu cầu đầu ra

Vui lòng cung cấp:
1. Code sau tối ưu
2. Giải thích nguyên nhân vấn đề hiệu suất
3. Nguyên lý tối ưu và dự đoán hiệu quả
```


## Template 4: Điều chỉnh style

Áp dụng cho: Làm đẹp UI, sửa layout, responsive

```markdown
## Style hiện tại

**Mô tả vấn đề**: [Giao diện hiện tại chỗ nào không hài lòng]

**Code hiện tại**:
```[css/html]
[Dán code style liên quan]
```

## Hiệu quả mong đợi

**Mô tả**: [Dùng văn bản mô tả hiệu quả muốn có]

**Tham khảo** (tùy chọn):
- Website tham khảo: [URL]
- Hình ảnh tham khảo: [Mô tả hoặc link]
- Từ khóa: [Tối giản/hiện đại/bo góc/đổ bóng/gradient/...]

## Yêu cầu cụ thể

**Điều chỉnh layout**:
- [Điều chỉnh 1]
- [Điều chỉnh 2]

**Hiệu ứng hình ảnh**:
- [Hiệu ứng 1]
- [Hiệu ứng 2]

**Responsive**:
- Desktop (>1024px): [Yêu cầu]
- Tablet (768-1024px): [Yêu cầu]
- Mobile (<768px): [Yêu cầu]

## Ràng buộc kỹ thuật

**Công nghệ sử dụng**: [Tailwind CSS/CSS thuần/Khác]
**Phải tương thích**: [Yêu cầu phiên bản trình duyệt]

## Yêu cầu đầu ra

Vui lòng cung cấp code style sau sửa đổi, và đánh dấu phần thay đổi.
```


## Template 5: Migration code (Phiên bản tối giản)

Áp dụng cho: Nâng cấp phiên bản framework, chuyển tech stack

```markdown
## Nhu cầu migration

**Công nghệ gốc**: [Ví dụ React Class component]
**Công nghệ đích**: [Ví dụ React Hooks function component]

## Code gốc

```[ngôn ngữ]
[Dán code cần migrate]
```

## Yêu cầu migration

- Giữ chức năng hoàn toàn giống nhau
- Tuân theo best practice của công nghệ đích
- [Yêu cầu khác]

## Yêu cầu đầu ra

Vui lòng cung cấp code sau migration, và nói rõ các điểm thay đổi chính.
```


## Phiên bản tối giản: Template sửa nhanh

Khi bạn chỉ cần sửa nhỏ, có thể dùng phiên bản tối giản này:

```markdown
Vui lòng sửa đổi code sau:

```[ngôn ngữ]
[Code]
```

**Nội dung sửa đổi**: [Mô tả ngắn gọn cần sửa gì]

**Ràng buộc**:
- Giữ nguyên các phần khác
- [Ràng buộc khác]
```


## Sai lầm thường gặp khi điền

| Sai lầm | Vấn đề | Cách làm đúng |
|-----|------|---------|
| Không dán code hiện có | AI không thể hiểu ngữ cảnh | Dán đoạn code liên quan |
| Chỉ nói "tối ưu một chút" | Không biết tối ưu hướng nào | Nói rõ là khả năng đọc/hiệu suất/cấu trúc |
| Quên nói "không được sửa" | AI có thể refactor cả file | Nói rõ ranh giới, phần nào không động |
| Mô tả tham khảo quá trừu tượng | "Đẹp hơn một chút" quá mơ hồ | Đưa website tham khảo hoặc mô tả cụ thể |


## Điểm chính của phần này

- ✅ **Mở rộng tính năng**: Dán code hiện có + mô tả tính năng mới + nói rõ phần không được động
- ✅ **Refactor code**: Nói rõ hướng refactor + đảm bảo chức năng không đổi
- ✅ **Tối ưu hiệu suất**: Mô tả hiện tượng + đưa ra quy mô dữ liệu + thiết lập tiêu chuẩn đo lường
- ✅ **Điều chỉnh style**: Cung cấp tham khảo + mô tả cụ thể hiệu quả mong đợi
