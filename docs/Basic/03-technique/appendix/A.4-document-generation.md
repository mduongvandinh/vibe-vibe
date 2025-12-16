---
title: "A.4 Template tạo tài liệu"
---

# A.4 Template tạo tài liệu

Phần này cung cấp các Prompt template để tạo các loại tài liệu, bao gồm comment code, README, API docs và hướng dẫn sử dụng.


## Template 1: Tạo comment code

Áp dụng cho: Thêm comment cho code hiện có

```markdown
## Nhu cầu comment

Vui lòng thêm comment tiếng Việt cho code sau:

```[ngôn ngữ]
[Dán code]
```

## Yêu cầu comment

**Loại comment**:
- [ ] Comment đầu file (giải thích mục đích file)
- [ ] Comment hàm (giải thích tham số, giá trị trả về, chức năng)
- [ ] Comment logic quan trọng (giải thích logic phức tạp)
- [ ] Comment TODO (đánh dấu chỗ cần hoàn thiện)

**Phong cách comment**:
- Ngôn ngữ: Tiếng Việt
- Định dạng: [JSDoc style / comment thường / quy chuẩn của bạn]
- Mức độ chi tiết: [Ngắn gọn/vừa phải/chi tiết]

**Lưu ý đặc biệt**:
- [Yêu cầu khác, như "không cần thêm comment cho biến đơn giản"]

## Yêu cầu đầu ra

Vui lòng output code đầy đủ đã thêm comment, giữ nguyên logic code gốc.
```

### Ví dụ điền

```markdown
## Nhu cầu comment

Vui lòng thêm comment tiếng Việt cho code sau:

```typescript
interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback((title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: new Date(),
    };
    setTasks(prev => [...prev, newTask]);
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  return { tasks, addTask, toggleTask };
}
```

## Yêu cầu comment

**Loại comment**:
- [x] Comment đầu file
- [x] Comment hàm (định dạng JSDoc)
- [x] Comment logic quan trọng

**Phong cách comment**:
- Ngôn ngữ: Tiếng Việt
- Định dạng: JSDoc style
- Mức độ chi tiết: Vừa phải

**Lưu ý đặc biệt**:
- Mỗi field của interface cần comment
- useCallback cần giải thích tại sao dùng nó

## Yêu cầu đầu ra

Vui lòng output code đầy đủ đã thêm comment.
```


## Template 2: Tạo README

Áp dụng cho: Tạo tài liệu giới thiệu cho dự án

```markdown
## Thông tin dự án

**Tên dự án**: [Tên]
**Mô tả một câu**: [Mô tả ngắn dự án làm gì]

**Tech stack**:
- Frontend: [Công nghệ]
- Backend: [Công nghệ, nếu không có viết "Không"]
- Database: [Công nghệ, nếu không có viết "Không"]

**Người dùng mục tiêu**: [Ai sẽ dùng dự án này]

## Tính năng dự án

**Tính năng cốt lõi**:
1. [Tính năng 1]
2. [Tính năng 2]
3. [Tính năng 3]

**Screenshot tính năng** (tùy chọn):
[Nếu có screenshot, mô tả nội dung screenshot]

## Chi tiết kỹ thuật

**Cấu trúc dự án**:
```
[Dán cấu trúc thư mục dự án]
```

**Yêu cầu môi trường**:
- Phiên bản Node.js: [Phiên bản]
- Dependencies khác: [Liệt kê]

**Các bước cài đặt**:
[Nếu bạn biết các bước cài đặt, có thể viết ra trước]

## Yêu cầu README

**Nội dung bao gồm**:
- [ ] Giới thiệu dự án
- [ ] Tính năng đặc biệt
- [ ] Quick start (cài đặt và chạy)
- [ ] Giải thích cấu trúc dự án
- [ ] Giải thích tech stack
- [ ] Hướng dẫn đóng góp
- [ ] License

**Yêu cầu phong cách**:
- Ngôn ngữ: Tiếng Việt
- Phong cách: [Ngắn gọn chuyên nghiệp/thân thiện gần gũi/phong cách kỹ thuật]

## Yêu cầu đầu ra

Vui lòng tạo nội dung file README.md đầy đủ.
```

### Ví dụ điền

```markdown
## Thông tin dự án

**Tên dự án**: Todo Tối Giản
**Mô tả một câu**: Danh sách công việc tối giản có thể dùng ngay khi mở trình duyệt

**Tech stack**:
- Frontend: React + TypeScript + Tailwind CSS
- Backend: Không
- Database: localStorage của trình duyệt

**Người dùng mục tiêu**: Người dùng cá nhân muốn ghi chú công việc hàng ngày đơn giản

## Tính năng dự án

**Tính năng cốt lõi**:
1. Thêm task công việc
2. Đánh dấu task hoàn thành
3. Xóa task
4. Dữ liệu lưu trữ local persistent

## Chi tiết kỹ thuật

**Cấu trúc dự án**:
```
src/
├── components/
│   ├── AddTask.tsx
│   ├── TaskList.tsx
│   └── TaskItem.tsx
├── hooks/
│   └── useTasks.ts
├── types/
│   └── index.ts
├── App.tsx
└── main.tsx
```

**Yêu cầu môi trường**:
- Phiên bản Node.js: 18+
- Package manager: npm hoặc pnpm

## Yêu cầu README

**Nội dung bao gồm**:
- [x] Giới thiệu dự án
- [x] Tính năng đặc biệt
- [x] Quick start
- [x] Giải thích cấu trúc dự án
- [ ] Hướng dẫn đóng góp (không cần)
- [ ] License (không cần)

**Yêu cầu phong cách**:
- Ngôn ngữ: Tiếng Việt
- Phong cách: Ngắn gọn chuyên nghiệp

## Yêu cầu đầu ra

Vui lòng tạo nội dung file README.md đầy đủ.
```


## Template 3: Tạo API documentation

Áp dụng cho: Tạo tài liệu cho API backend

```markdown
## Thông tin API cơ bản

**Tên API**: [Tên interface]
**Request path**: [Ví dụ /api/users]
**Request method**: [GET/POST/PUT/DELETE]
**Mô tả chức năng**: [API này làm gì]

## Code interface

```[ngôn ngữ]
[Dán code implementation của interface]
```

## Yêu cầu tài liệu

**Định dạng tài liệu**: [Markdown / OpenAPI YAML / Khác]

**Nội dung bao gồm**:
- [ ] Mô tả interface
- [ ] Giải thích tham số request
- [ ] Ví dụ request body
- [ ] Giải thích định dạng response
- [ ] Ví dụ response
- [ ] Giải thích mã lỗi
- [ ] Ví dụ gọi API (curl/JavaScript)

## Yêu cầu đầu ra

Vui lòng tạo API documentation đầy đủ.
```

### Ví dụ điền

```markdown
## Thông tin API cơ bản

**Tên API**: Tạo task
**Request path**: /api/tasks
**Request method**: POST
**Mô tả chức năng**: Tạo một task công việc mới

## Code interface

```typescript
// POST /api/tasks
export async function POST(request: Request) {
  const body = await request.json();
  const { title, priority } = body;

  if (!title || title.trim() === '') {
    return Response.json(
      { error: 'Title is required' },
      { status: 400 }
    );
  }

  const task = {
    id: crypto.randomUUID(),
    title: title.trim(),
    priority: priority || 'medium',
    completed: false,
    createdAt: new Date().toISOString(),
  };

  // Lưu vào database...
  await db.tasks.create(task);

  return Response.json(task, { status: 201 });
}
```

## Yêu cầu tài liệu

**Định dạng tài liệu**: Markdown

**Nội dung bao gồm**:
- [x] Mô tả interface
- [x] Giải thích tham số request
- [x] Ví dụ request body
- [x] Giải thích định dạng response
- [x] Ví dụ response
- [x] Giải thích mã lỗi
- [x] Ví dụ gọi API (curl)

## Yêu cầu đầu ra

Vui lòng tạo API documentation đầy đủ.
```


## Template 4: Tạo hướng dẫn sử dụng

Áp dụng cho: Viết hướng dẫn cho người dùng không chuyên kỹ thuật

```markdown
## Thông tin sản phẩm

**Tên sản phẩm**: [Tên]
**Loại sản phẩm**: [Web/App/Phần mềm desktop/Script]
**Người dùng mục tiêu**: [Ai sẽ dùng, trình độ kỹ thuật như thế nào]

## Tính năng cốt lõi

Vui lòng viết hướng dẫn sử dụng cho các tính năng sau:

1. **[Tính năng 1]**
   - Mô tả tính năng: [Làm gì]
   - Vị trí: [Tìm tính năng này ở đâu]

2. **[Tính năng 2]**
   - Mô tả tính năng: [Làm gì]
   - Vị trí: [Tìm tính năng này ở đâu]

## Yêu cầu hướng dẫn

**Phong cách ngôn ngữ**:
- Giọng điệu: [Trang trọng/thân thiện/ngắn gọn]
- Thuật ngữ kỹ thuật: [Tránh dùng/giải thích đơn giản rồi dùng]

**Cấu trúc nội dung**:
- [ ] Giới thiệu tính năng
- [ ] Các bước thao tác (hướng dẫn từng bước)
- [ ] Lưu ý
- [ ] Câu hỏi thường gặp

**Giải thích hình ảnh** (tùy chọn):
[Mô tả cần hình ảnh gì, hoặc ghi "không cần hình"]

## Yêu cầu đầu ra

Vui lòng tạo tài liệu hướng dẫn thân thiện với người dùng.
```


## Template 5: Chỉnh lý ghi chú học tập

Áp dụng cho: Chỉnh lý nội dung học tập kỹ thuật

```markdown
## Chủ đề học tập

Tôi đã học [chủ đề], vui lòng giúp tôi chỉnh lý ghi chú.

## Nội dung học tập

Dưới đây là ghi chú rời rạc tôi ghi trong quá trình học:

```
[Dán ghi chú học tập, đoạn code, từ khóa của bạn]
```

## Yêu cầu chỉnh lý

**Cấu trúc ghi chú**:
- [ ] Định nghĩa khái niệm
- [ ] Điểm cốt lõi (3-5 điểm)
- [ ] Ví dụ code
- [ ] Tình huống sử dụng
- [ ] Sai lầm thường gặp
- [ ] Liên kết khái niệm liên quan

**Ưu tiên định dạng**:
- Dùng Markdown
- Code block có syntax highlighting
- Điểm quan trọng dùng in đậm

## Yêu cầu đầu ra

Vui lòng output ghi chú học tập có cấu trúc, tiện cho việc ôn tập sau này.
```

### Ví dụ điền

```markdown
## Chủ đề học tập

Tôi đã học useEffect trong React Hooks, vui lòng giúp tôi chỉnh lý ghi chú.

## Nội dung học tập

Dưới đây là ghi chú rời rạc tôi ghi trong quá trình học:

```
useEffect side effect
- Fetch data
- Subscribe event
- Modify DOM

dependency array
[] mảng rỗng - chỉ chạy khi mount
không viết - chạy mỗi lần render
[dep1, dep2] - chạy khi dependency thay đổi

cleanup function return () => {}
Gọi khi component unmount
Tránh memory leak

Lỗi thường gặp:
Vòng lặp vô hạn - dependency array viết sai
Memory leak - quên cleanup subscription
```

## Yêu cầu chỉnh lý

**Cấu trúc ghi chú**:
- [x] Định nghĩa khái niệm
- [x] Điểm cốt lõi
- [x] Ví dụ code
- [x] Tình huống sử dụng
- [x] Sai lầm thường gặp

**Ưu tiên định dạng**:
- Dùng Markdown
- Code block có syntax highlighting
- Điểm quan trọng dùng in đậm

## Yêu cầu đầu ra

Vui lòng output ghi chú học tập có cấu trúc.
```


## Phiên bản tối giản: Tạo tài liệu nhanh

Khi nhu cầu đơn giản, có thể dùng phiên bản tối giản này:

```markdown
Vui lòng tạo [comment/tài liệu/hướng dẫn] cho code sau:

```[ngôn ngữ]
[Code]
```

Yêu cầu:
- Ngôn ngữ: Tiếng Việt
- Định dạng: [Markdown/JSDoc/Khác]
- [Yêu cầu khác]
```


## Kỹ thuật tạo tài liệu

### Kỹ thuật 1: Cung cấp đủ ngữ cảnh

AI cần hiểu mục đích của code mới viết được tài liệu tốt. Giải thích đơn giản đoạn code này "làm gì", có thể làm tài liệu chính xác hơn.

### Kỹ thuật 2: Chỉ định đối tượng đọc

Tài liệu cho developer và hướng dẫn cho người dùng thường, cách viết hoàn toàn khác. Nói rõ người đọc là ai.

### Kỹ thuật 3: Đưa ra ví dụ định dạng

Nếu bạn có yêu cầu định dạng tài liệu cụ thể, đưa ví dụ hiệu quả hơn mô tả bằng văn bản.


## Sai lầm thường gặp khi điền

| Sai lầm | Vấn đề | Cách làm đúng |
|-----|------|---------|
| Không nói rõ mục đích | AI không hiểu code làm gì | Giải thích ngắn gọn chức năng và tình huống |
| Không chỉ định định dạng | Định dạng output ngẫu nhiên | Nói rõ cần Markdown/JSDoc, v.v. |
| Không chỉ định ngôn ngữ | Có thể output tiếng Anh | Yêu cầu rõ ràng tiếng Việt |
| Yêu cầu quá chung chung | "Viết tài liệu" | Nói cụ thể bao gồm nội dung gì |


## Điểm chính của phần này

- ✅ **Comment code**: Chỉ định loại comment + phong cách + mức độ chi tiết
- ✅ **README**: Cung cấp thông tin dự án + danh sách tính năng + chi tiết kỹ thuật
- ✅ **API documentation**: Cung cấp code interface + chỉ định định dạng tài liệu
- ✅ **Hướng dẫn sử dụng**: Nói rõ người dùng mục tiêu + chỉ định phong cách ngôn ngữ
- ✅ **Kỹ thuật quan trọng**: Cung cấp ngữ cảnh + chỉ định đối tượng đọc + đưa ra ví dụ định dạng
