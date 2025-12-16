---
title: "A.3 Template giải quyết vấn đề"
---

# A.3 Template giải quyết vấn đề

Phần này cung cấp các Prompt template để debug và tìm kiếm trợ giúp, bao gồm debug lỗi, chọn công nghệ, giải thích khái niệm và các tình huống khác.


## Template 1: Debug lỗi runtime

Áp dụng cho: Code báo lỗi, chương trình crash, console báo đỏ

```markdown
## Thông tin lỗi

Khi chạy gặp lỗi sau:

```
[Dán đầy đủ thông tin lỗi, bao gồm stack trace]
```

## Tình huống kích hoạt

**Các bước thao tác**:
1. [Bước 1 làm gì]
2. [Bước 2 làm gì]
3. [Rồi báo lỗi]

**Tần suất kích hoạt**: [Lần nào cũng lỗi/thỉnh thoảng lỗi/lỗi ở điều kiện cụ thể]

## Code liên quan

Code mà lỗi chỉ tới:
```[ngôn ngữ]
[Dán code trong thông báo lỗi đề cập, và ngữ cảnh]
```

## Thông tin môi trường

- Môi trường chạy: [Phiên bản trình duyệt/phiên bản Node.js/phiên bản Python]
- Phiên bản framework: [React 18/Vue 3/...]
- Hệ điều hành: [Windows/Mac/Linux]

## Phương pháp đã thử

1. [Thử 1]: Kết quả [thành công/thất bại/giải quyết một phần]
2. [Thử 2]: Kết quả [thành công/thất bại/giải quyết một phần]

## Vui lòng giúp tôi

1. Phân tích nguyên nhân gốc rễ của lỗi
2. Đưa ra phương án sửa lỗi
3. Giải thích tại sao xuất hiện vấn đề này (giúp tôi hiểu)
```

### Ví dụ điền

```markdown
## Thông tin lỗi

Khi chạy gặp lỗi sau:

```
TypeError: Cannot read properties of undefined (reading 'map')
    at TaskList (TaskList.tsx:15:23)
    at renderWithHooks (react-dom.development.js:14985:18)
    at mountIndeterminateComponent (react-dom.development.js:17811:13)
```

## Tình huống kích hoạt

**Các bước thao tác**:
1. Mở trang chủ ứng dụng
2. Khi trang tải thì báo lỗi luôn
3. Danh sách task không hiển thị

**Tần suất kích hoạt**: Mỗi lần refresh trang đều lỗi

## Code liên quan

Code mà lỗi chỉ tới:
```tsx
// TaskList.tsx
function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map(task => (          // Dòng 15
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

// Gọi trong App.tsx
function App() {
  const [tasks, setTasks] = useState();  // Chú ý chỗ này

  return <TaskList tasks={tasks} />;
}
```

## Thông tin môi trường

- Môi trường chạy: Chrome 120
- Phiên bản framework: React 18.2.0 + TypeScript 5.0
- Hệ điều hành: Mac

## Phương pháp đã thử

1. Kiểm tra dữ liệu tasks: console.log phát hiện là undefined
2. Refresh trang: Vấn đề vẫn còn

## Vui lòng giúp tôi

1. Phân tích nguyên nhân gốc rễ của lỗi
2. Đưa ra phương án sửa lỗi
3. Giải thích tại sao xuất hiện vấn đề này
```


## Template 2: Phân tích lỗi logic

Áp dụng cho: Code chạy được nhưng kết quả sai

```markdown
## Mô tả vấn đề

Code có thể chạy, nhưng kết quả không như mong đợi.

**Hành vi mong đợi**: [Nên ra kết quả gì]
**Hành vi thực tế**: [Thực tế nhận được kết quả gì]

## Test case

| Input | Output mong đợi | Output thực tế | Đúng không |
|-----|---------|---------|---------|
| [Input 1] | [Mong đợi 1] | [Thực tế 1] | ❌ |
| [Input 2] | [Mong đợi 2] | [Thực tế 2] | ❌ |
| [Input 3] | [Mong đợi 3] | [Thực tế 3] | ✅ |

## Code liên quan

```[ngôn ngữ]
[Dán code liên quan]
```

## Phân tích của tôi

Tôi nghi ngờ vấn đề có thể ở: [Dự đoán của bạn]

## Vui lòng giúp tôi

1. Tìm ra lỗi logic nằm ở đâu
2. Giải thích tại sao logic hiện tại tạo ra kết quả sai
3. Đưa ra code sau khi sửa
```

### Ví dụ điền

```markdown
## Mô tả vấn đề

Code có thể chạy, nhưng kết quả không như mong đợi.

**Hành vi mong đợi**: Khi tính tổng giỏ hàng, đủ 100 giảm 20
**Hành vi thực tế**: Dù số tiền bao nhiêu, đều giảm 20

## Test case

| Input (tổng tiền SP) | Output mong đợi | Output thực tế | Đúng không |
|---------------|---------|---------|---------|
| 150 | 130 | 130 | ✅ |
| 80 | 80 | 60 | ❌ |
| 100 | 80 | 80 | ✅ |

## Code liên quan

```javascript
function calculateTotal(items) {
  let total = items.reduce((sum, item) => sum + item.price, 0);

  // Đủ 100 giảm 20
  if (total > 100) {
    total = total - 20;
  } else {
    total = total - 20;  // Vấn đề có thể ở đây?
  }

  return total;
}
```

## Phân tích của tôi

Tôi nghi ngờ vấn đề có thể ở: else cũng trừ 20, chắc là copy paste quên xóa

## Vui lòng giúp tôi

1. Xác nhận phân tích của tôi đúng không
2. Đưa ra code sau khi sửa
3. Gợi ý cách tránh lỗi copy paste kiểu này
```


## Template 3: Tư vấn chọn công nghệ

Áp dụng cho: Không biết chọn thư viện, framework, công cụ nào

```markdown
## Bối cảnh dự án

**Loại dự án**: [Mô tả ngắn dự án làm gì]
**Tech stack**: [Công nghệ đang dùng]
**Tình hình team**: [Dự án cá nhân/quy mô team/trình độ kỹ thuật]

## Nhu cầu chọn công nghệ

Tôi cần chọn một [loại] để thực hiện [chức năng].

**Nhu cầu cốt lõi**:
- [Nhu cầu 1]
- [Nhu cầu 2]
- [Nhu cầu 3]

**Yếu tố xem xét**:
| Yếu tố | Mức độ quan trọng | Giải thích |
|-----|---------|------|
| Chi phí học | Cao/Trung/Thấp | [Giải thích] |
| Cộng đồng hoạt động | Cao/Trung/Thấp | [Giải thích] |
| Hiệu suất | Cao/Trung/Thấp | [Giải thích] |
| Kích thước package | Cao/Trung/Thấp | [Giải thích] |
| Bảo trì dài hạn | Cao/Trung/Thấp | [Giải thích] |

## Ứng viên đã biết (tùy chọn)

Các lựa chọn tôi hiện biết:
1. [Lựa chọn A]: [Ấn tượng đơn giản]
2. [Lựa chọn B]: [Ấn tượng đơn giản]
3. [Lựa chọn C]: [Ấn tượng đơn giản]

## Vui lòng giúp tôi

1. Bổ sung phương án ứng viên tôi có thể bỏ sót
2. So sánh ưu nhược điểm các phương án từ nhiều góc độ
3. Đưa ra phương án đề xuất và lý do
4. Nói rõ trường hợp nào nên chọn phương án khác
```

### Ví dụ điền

```markdown
## Bối cảnh dự án

**Loại dự án**: Website blog cá nhân
**Tech stack**: Next.js + TypeScript
**Tình hình team**: Dự án cá nhân, frontend thành thạo, backend mới học

## Nhu cầu chọn công nghệ

Tôi cần chọn một phương án database để lưu bài viết blog.

**Nhu cầu cốt lõi**:
- Lưu nội dung bài viết (định dạng Markdown)
- Hỗ trợ phân loại và tag
- Có thể query sắp xếp theo thời gian

**Yếu tố xem xét**:
| Yếu tố | Mức độ quan trọng | Giải thích |
|-----|---------|------|
| Chi phí học | Cao | Backend không quen, mong dễ làm quen |
| Quota miễn phí | Cao | Dự án cá nhân, không muốn tốn tiền |
| Tích hợp với Next.js | Trung | Mong có tutorial sẵn |
| Hiệu suất | Thấp | Lượng truy cập blog không nhiều |

## Ứng viên đã biết

Các lựa chọn tôi hiện biết:
1. Supabase: Nghe nói là thay thế Firebase
2. MongoDB Atlas: NoSQL database
3. PlanetScale: MySQL cloud service

## Vui lòng giúp tôi

1. Bổ sung phương án ứng viên tôi có thể bỏ sót
2. So sánh ưu nhược điểm các phương án từ nhiều góc độ
3. Đưa ra phương án đề xuất và lý do
4. Nói rõ trường hợp nào nên chọn phương án khác
```


## Template 4: Giải thích khái niệm

Áp dụng cho: Không hiểu khái niệm kỹ thuật nào đó

```markdown
## Khái niệm muốn hiểu

Tôi muốn hiểu [tên khái niệm].

## Chỗ hiện đang bối rối

**Hiểu biết hiện tại của tôi**: [Bạn nghĩ hiện tại nó là gì]
**Chỗ bối rối**: [Chỗ nào không hiểu]

## Cách giải thích mong muốn

**Độ sâu kỹ thuật**: [Chỉ cần biết cách dùng/muốn hiểu nguyên lý/cần chi tiết sâu]
**Ưu tiên so sánh**: [Thích so sánh đời thường/thích so sánh kỹ thuật/giải thích thẳng là được]

## Bối cảnh liên quan

**Background kỹ thuật của tôi**: [Quen thuộc công nghệ/ngôn ngữ gì]
**Tại sao cần hiểu cái này**: [Tình huống ứng dụng]

## Vui lòng giúp tôi

1. Dùng ngôn ngữ dễ hiểu giải thích khái niệm này
2. Đưa ra ví dụ code đơn giản
3. Nói rõ khi nào sẽ dùng đến nó
4. Chỉ ra sai lầm hiểu biết thường gặp
```

### Ví dụ điền

```markdown
## Khái niệm muốn hiểu

Tôi muốn hiểu useEffect trong React.

## Chỗ hiện đang bối rối

**Hiểu biết hiện tại của tôi**: Có vẻ dùng để xử lý "side effect", nhưng không biết cái gì gọi là side effect
**Chỗ bối rối**:
- Khi nào cần dùng useEffect?
- Dependency array là để làm gì?
- Tại sao đôi khi "vòng lặp vô hạn"?

## Cách giải thích mong muốn

**Độ sâu kỹ thuật**: Chỉ cần biết cách dùng, nguyên lý nói sau
**Ưu tiên so sánh**: Thích so sánh đời thường

## Bối cảnh liên quan

**Background kỹ thuật của tôi**: Biết JavaScript cơ bản, đang học React
**Tại sao cần hiểu cái này**: Muốn fetch data khi component load

## Vui lòng giúp tôi

1. Dùng ngôn ngữ dễ hiểu giải thích useEffect
2. Đưa ra ví dụ code "fetch data"
3. Nói rõ tác dụng của dependency array
4. Giải thích tại sao "vòng lặp vô hạn" và cách tránh
```


## Template 5: Code review

Áp dụng cho: Để AI kiểm tra chất lượng code

```markdown
## Mục tiêu review

Vui lòng giúp tôi review code sau:

```[ngôn ngữ]
[Dán code]
```

## Góc độ review

Vui lòng kiểm tra từ các góc độ sau:

- [ ] **Tính đúng đắn chức năng**: Logic có đúng, xử lý trường hợp biên không
- [ ] **Bảo mật**: Có lỗ hổng bảo mật không (XSS, SQL injection, v.v.)
- [ ] **Hiệu suất**: Có vấn đề hiệu suất rõ ràng không
- [ ] **Khả năng đọc**: Đặt tên có rõ ràng, cấu trúc có hợp lý không
- [ ] **Khả năng bảo trì**: Có dễ mở rộng và sửa đổi không
- [ ] **Xử lý lỗi**: Tình huống ngoại lệ có được xử lý tốt không

## Background code

**Code này làm gì**: [Mô tả ngắn chức năng]
**Tình huống sử dụng**: [Chạy trong tình huống nào]

## Định dạng đầu ra

Vui lòng output theo định dạng sau:

1. **Danh sách vấn đề**: Liệt kê vấn đề phát hiện, sắp xếp theo mức độ nghiêm trọng
2. **Đề xuất cải thiện**: Đưa ra gợi ý cụ thể cho từng vấn đề
3. **Code sau tối ưu**: Đưa ra code đầy đủ sau cải thiện
```


## Phiên bản tối giản: Template hỏi nhanh

Khi vấn đề đơn giản hơn, có thể dùng phiên bản tối giản này:

```markdown
**Vấn đề**: [Mô tả vấn đề trong một câu]

**Background**: [Ngữ cảnh cần thiết]

**Code**:
```[ngôn ngữ]
[Code liên quan]
```

**Mong muốn**: [Bạn mong nhận được trợ giúp gì]
```


## Kỹ thuật đặt câu hỏi: Làm thế nào để câu trả lời hữu ích hơn

### Kỹ thuật 1: Nói kết luận trước, chi tiết sau

```markdown
❌ Tôi có một dự án React, dùng TypeScript, rồi tôi đang làm một form validate...
   (AI đọc nửa ngày vẫn không biết vấn đề là gì)

✅ Code validate form của tôi báo lỗi.
   Tech stack là React + TypeScript, thông báo lỗi là [xxx].
```

### Kỹ thuật 2: Đưa ra code tái hiện tối thiểu

Không dán cả file, chỉ dán **code tối thiểu có thể tái hiện vấn đề**. Như vậy AI dễ dàng định vị vấn đề hơn.

### Kỹ thuật 3: Nói rõ đã thử gì rồi

Điều này giúp AI tránh đưa ra phương án vô hiệu mà bạn đã thử.


## Sai lầm thường gặp khi điền

| Sai lầm | Vấn đề | Cách làm đúng |
|-----|------|---------|
| Chỉ nói "không hoạt động" | AI không biết triệu chứng cụ thể | Mô tả khác biệt giữa mong đợi vs thực tế |
| Thông báo lỗi chỉ cắt nửa | Mất thông tin quan trọng | Dán đầy đủ, bao gồm stack trace |
| Không đưa code | AI chỉ có thể đoán | Dán đoạn code liên quan |
| Câu hỏi khái niệm quá rộng | "Giải thích JavaScript" | Cụ thể đến điểm nào đó, như "giải thích closure" |


## Điểm chính của phần này

- ✅ **Debug lỗi**: Thông tin lỗi đầy đủ + các bước kích hoạt + code liên quan + phương pháp đã thử
- ✅ **Lỗi logic**: Dùng test case thể hiện "mong đợi vs thực tế"
- ✅ **Chọn công nghệ**: Nói rõ ưu tiên nhu cầu + liệt kê yếu tố xem xét
- ✅ **Giải thích khái niệm**: Nói rõ hiểu biết hiện tại và chỗ bối rối + độ sâu giải thích mong muốn
