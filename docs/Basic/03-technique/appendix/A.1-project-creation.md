---
title: "A.1 Template tạo dự án"
---

# A.1 Template tạo dự án

Phần này cung cấp các Prompt template để tạo dự án từ đầu, bao gồm ứng dụng web, phân tích dữ liệu, script tự động hóa và các tình huống phổ biến khác.


## Template 1: Xây dựng ứng dụng web từ đầu

Áp dụng cho: Công cụ cá nhân, nguyên mẫu sản phẩm, website nhỏ

```markdown
## Bối cảnh dự án

Tôi muốn tạo một [loại dự án].

**Người dùng mục tiêu**: [Ai sẽ sử dụng ứng dụng này]
**Nhu cầu cốt lõi**: [Dùng một câu mô tả ứng dụng này giải quyết vấn đề gì]

## Yêu cầu kỹ thuật

**Tech stack ưu tiên**:
- Frontend: [React/Vue/HTML+CSS+JS thuần/không giới hạn]
- Styling: [Tailwind CSS/CSS thuần/không giới hạn]
- Cần backend không: [Có/Không]
- Lưu trữ dữ liệu: [localStorage/không cần lưu/cần database]

**Trình độ kỹ thuật của tôi**: [Mới bắt đầu/có chút kiến thức/thành thạo frontend]

## Yêu cầu tính năng

**Phải thực hiện (P0)**:
- [ ] [Tính năng 1]
- [ ] [Tính năng 2]
- [ ] [Tính năng 3]

**Tạm thời không cần**:
- [Tính năng A] (Lý do: [Tại sao không cần])
- [Tính năng B] (Lý do: [Tại sao không cần])

## Yêu cầu giao diện

**Phong cách**: [Tối giản/hiện đại/dễ thương/chuyên nghiệp/tham khảo website nào đó]
**Màu sắc**: [Ưu tiên màu chủ đạo, ví dụ "phối màu xanh trắng"/"chủ đề tối"]
**Responsive**: [Cần tương thích mobile/chỉ cần desktop]

## Yêu cầu đầu ra

Vui lòng cung cấp:
1. Giải thích cấu trúc file của dự án
2. Các file code đầy đủ
3. Hướng dẫn chạy trên máy local
```

### Ví dụ điền: Sổ ghi chi cá nhân

```markdown
## Bối cảnh dự án

Tôi muốn tạo một ứng dụng web ghi chi tối giản.

**Người dùng mục tiêu**: Bản thân tôi (muốn tạo thói quen ghi chi nhưng các App khác quá phức tạp)
**Nhu cầu cốt lõi**: Ghi nhanh từng khoản chi tiêu, cuối tháng xem tổng chi tiêu

## Yêu cầu kỹ thuật

**Tech stack ưu tiên**:
- Frontend: HTML+CSS+JS thuần (Tôi là người mới, muốn bắt đầu từ đơn giản)
- Styling: CSS thuần
- Cần backend không: Không
- Lưu trữ dữ liệu: localStorage

**Trình độ kỹ thuật của tôi**: Mới bắt đầu, vừa học xong Hello World

## Yêu cầu tính năng

**Phải thực hiện (P0)**:
- [ ] Ghi chi tiêu: số tiền + ghi chú đơn giản
- [ ] Hiển thị danh sách chi tiêu trong ngày
- [ ] Hiển thị tổng chi tiêu trong tháng
- [ ] Xóa bản ghi sai

**Tạm thời không cần**:
- Ghi thu nhập (Lý do: Tôi chỉ muốn quản lý chi tiêu)
- Thống kê phân loại (Lý do: Chạy được đã, sau này thêm sau)
- Trực quan hóa biểu đồ (Lý do: Số liệu là đủ, không cần fancy)

## Yêu cầu giao diện

**Phong cách**: Tối giản, cảm giác sạch sẽ như iOS Notes
**Màu sắc**: Nền trắng, chữ xám đậm, màu nhấn xanh lá
**Responsive**: Cần tương thích mobile (Tôi chủ yếu dùng trên điện thoại)

## Yêu cầu đầu ra

Vui lòng cung cấp:
1. Giải thích cấu trúc file của dự án
2. Các file code đầy đủ
3. Hướng dẫn chạy trên máy local
```


## Template 2: Dự án phân tích dữ liệu

Áp dụng cho: Xử lý dữ liệu Excel, phân tích bán hàng, thống kê khảo sát, báo cáo trực quan

```markdown
## Bối cảnh phân tích

Tôi cần phân tích dữ liệu [loại dữ liệu].

**Nguồn dữ liệu**: [Excel/CSV/Database/API]
**Quy mô dữ liệu**: Khoảng [số dòng] dòng, [số cột] cột
**Mục đích phân tích**: [Trả lời câu hỏi kinh doanh gì/hỗ trợ quyết định gì]

## Mô tả dữ liệu

**Các trường chính**:
| Tên trường | Ý nghĩa | Kiểu dữ liệu | Giá trị mẫu |
|-------|------|---------|-------|
| [Trường 1] | [Giải thích] | [Text/Number/Date] | [Ví dụ] |
| [Trường 2] | [Giải thích] | [Text/Number/Date] | [Ví dụ] |

**Vấn đề chất lượng dữ liệu** (nếu có):
- [Vấn đề 1, ví dụ "một số ngày định dạng không đồng nhất"]
- [Vấn đề 2, ví dụ "một số dòng thiếu dữ liệu số tiền"]

## Nhu cầu phân tích

**Câu hỏi muốn trả lời**:
1. [Câu hỏi 1]
2. [Câu hỏi 2]
3. [Câu hỏi 3]

**Hình thức đầu ra**:
- [ ] Bảng dữ liệu sau khi làm sạch
- [ ] Số liệu thống kê (như tổng, trung bình, tỷ lệ)
- [ ] Biểu đồ trực quan (cột/đường/tròn)
- [ ] Kết luận phân tích dạng văn bản

## Yêu cầu kỹ thuật

**Công cụ sử dụng**: [Python + Pandas / Excel formula / SQL]
**Môi trường chạy**: [Python local / Jupyter Notebook / Google Colab]
**Trình độ của tôi**: [Mới bắt đầu/biết Python cơ bản/thành thạo phân tích dữ liệu]

## Yêu cầu đầu ra

Vui lòng cung cấp:
1. Code đầy đủ (có comment giải thích từng bước đang làm gì)
2. Ví dụ kết quả mong đợi sau khi chạy code
3. Cách sửa code để phù hợp với dữ liệu thực tế của tôi
```

### Ví dụ điền: Phân tích dữ liệu bán hàng theo tháng

```markdown
## Bối cảnh phân tích

Tôi cần phân tích dữ liệu bán hàng thương mại điện tử.

**Nguồn dữ liệu**: File Excel (xuất từ backend)
**Quy mô dữ liệu**: Khoảng 5000 dòng, 8 cột
**Mục đích phân tích**: Hiểu tình hình bán hàng trong tháng, tìm sản phẩm bán chạy và sản phẩm có vấn đề

## Mô tả dữ liệu

**Các trường chính**:
| Tên trường | Ý nghĩa | Kiểu dữ liệu | Giá trị mẫu |
|-------|------|---------|-------|
| Mã đơn hàng | ID duy nhất | Text | ORD20241201001 |
| Tên sản phẩm | Tên SP | Text | Tai nghe Bluetooth |
| Phân loại | Danh mục SP | Text | Phụ kiện số |
| Số tiền | Giá trị đơn hàng | Number | 299 |
| Thời gian đặt | Thời điểm đặt hàng | Date | 2024-12-01 14:30 |

**Vấn đề chất lượng dữ liệu**:
- Một số đơn hàng có số tiền = 0 (có thể là đơn hoàn trả)
- Thời gian đặt hàng có hai định dạng: một số có giờ phút, một số chỉ có ngày

## Nhu cầu phân tích

**Câu hỏi muốn trả lời**:
1. Tổng doanh thu tháng này là bao nhiêu? Doanh thu trung bình mỗi ngày?
2. Danh mục sản phẩm nào bán tốt nhất? Chiếm tỷ lệ bao nhiêu?
3. Top 10 sản phẩm bán chạy là gì?
4. Xu hướng doanh thu theo ngày như thế nào?

**Hình thức đầu ra**:
- [x] Số liệu thống kê (tổng, trung bình ngày, tỷ lệ danh mục)
- [x] Biểu đồ trực quan (biểu đồ tròn danh mục, đường xu hướng ngày, cột Top10)
- [x] Kết luận phân tích dạng văn bản

## Yêu cầu kỹ thuật

**Công cụ sử dụng**: Python + Pandas + Matplotlib
**Môi trường chạy**: Jupyter Notebook local
**Trình độ của tôi**: Biết Python cơ bản, chưa thạo Pandas

## Yêu cầu đầu ra

Vui lòng cung cấp:
1. Code đầy đủ (có comment giải thích từng bước đang làm gì)
2. Ví dụ kết quả mong đợi sau khi chạy code
3. Cách sửa code để phù hợp với dữ liệu thực tế của tôi
```


## Template 3: Script tự động hóa

Áp dụng cho: Xử lý file hàng loạt, tổng hợp Excel, tác vụ định kỳ, thu thập dữ liệu

```markdown
## Nhu cầu tự động hóa

Tôi muốn tự động hoàn thành [mô tả nhiệm vụ].

**Pain point hiện tại**:
[Mô tả việc làm thủ công hiện nay phiền phức thế nào]

**Hiệu quả mong muốn**:
[Sau khi chạy script, điều gì nên xảy ra]

## Input và Output

**Input**:
- Nguồn: [Thư mục/file đơn/trang web/...]
- Định dạng: [Excel/CSV/TXT/hình ảnh/...]
- Vị trí: [Đường dẫn cụ thể hoặc mô tả]
- Ví dụ: [Đưa ra ví dụ cụ thể]

**Output**:
- Định dạng: [Excel/CSV/file mới/...]
- Vị trí: [Lưu vào đâu]
- Quy tắc đặt tên: [Ví dụ "tên file gốc_processed.xlsx"]

## Logic xử lý

Vui lòng xử lý theo các bước sau:
1. [Bước 1: Làm gì]
2. [Bước 2: Làm gì]
3. [Bước 3: Làm gì]

**Xử lý trường hợp đặc biệt**:
- Nếu gặp [trường hợp A], thì [cách xử lý]
- Nếu gặp [trường hợp B], thì [cách xử lý]

## Yêu cầu kỹ thuật

**Ngôn ngữ**: [Python/Batch script/PowerShell]
**Môi trường chạy**: [Windows/Mac/Linux]
**Giới hạn dependencies**: [Càng ít thư viện bên ngoài càng tốt/có thể dùng thư viện phổ biến]
**Trình độ của tôi**: [Chỉ cần chạy được/muốn học hiểu code]

## Yêu cầu đầu ra

Vui lòng cung cấp:
1. Script code hoàn chỉnh có thể chạy được
2. Dependencies cần cài đặt (ví dụ pip install xxx)
3. Hướng dẫn sử dụng (cách chạy, cách sửa tham số)
4. Các vấn đề thường gặp và cách giải quyết
```

### Ví dụ điền: Đổi tên hàng loạt ảnh

```markdown
## Nhu cầu tự động hóa

Tôi muốn tự động đổi tên hàng loạt ảnh trong thư mục.

**Pain point hiện tại**:
Ảnh xuất từ máy ảnh được đặt tên theo kiểu IMG_0001.jpg, rất khó tìm ảnh theo ngày cụ thể.
Đổi tên thủ công hàng trăm ảnh mất quá nhiều thời gian.

**Hiệu quả mong muốn**:
Sau khi chạy script, tất cả ảnh được đổi tên theo ngày chụp với định dạng 2024-12-01_001.jpg

## Input và Output

**Input**:
- Nguồn: Thư mục chỉ định
- Định dạng: Ảnh jpg, png
- Vị trí: Người dùng chỉ định (nhập khi chạy)
- Ví dụ: IMG_0001.jpg, IMG_0002.jpg...

**Output**:
- Định dạng: Ảnh gốc (chỉ đổi tên, không đổi nội dung)
- Vị trí: Đổi tên tại chỗ
- Quy tắc đặt tên: Ngày chụp_số thứ tự.extension (ví dụ 2024-12-01_001.jpg)

## Logic xử lý

Vui lòng xử lý theo các bước sau:
1. Đọc tất cả ảnh trong thư mục
2. Trích xuất ngày chụp từ thông tin EXIF của ảnh
3. Sắp xếp theo ngày, ảnh cùng ngày đánh số theo thứ tự thời gian
4. Đổi tên file

**Xử lý trường hợp đặc biệt**:
- Nếu ảnh không có thông tin EXIF, dùng thời gian sửa đổi file
- Nếu tên file đích đã tồn tại, thêm hậu tố _dup

## Yêu cầu kỹ thuật

**Ngôn ngữ**: Python
**Môi trường chạy**: Windows 11
**Giới hạn dependencies**: Có thể dùng thư viện Pillow để đọc EXIF
**Trình độ của tôi**: Chỉ cần chạy được, code không cần comment quá chi tiết

## Yêu cầu đầu ra

Vui lòng cung cấp:
1. Script code hoàn chỉnh có thể chạy được
2. Dependencies cần cài đặt
3. Hướng dẫn sử dụng (cách chạy)
```


## Template 4: CLI Command-line Tool (Phiên bản tối giản)

Áp dụng cho: Công cụ developer, script hiệu suất, quản trị hệ thống

```markdown
## Nhu cầu công cụ

Tôi muốn tạo một command-line tool, dùng để [mục đích].

**Ví dụ cách sử dụng**:
```bash
[tên lệnh] [tham số mẫu]
# Ví dụ: mytool --input data.csv --output result.json
```

**Chức năng chính**:
1. [Chức năng 1]
2. [Chức năng 2]

**Giải thích tham số**:
| Tham số | Bắt buộc | Giải thích | Giá trị mặc định |
|-----|-----|------|-------|
| [Tham số 1] | Có/Không | [Giải thích] | [Mặc định] |

**Tech stack**: [Python argparse / Node.js commander / Go cobra]

Vui lòng cung cấp code đầy đủ và ví dụ sử dụng.
```


## Sai lầm thường gặp khi điền

| Sai lầm | Vấn đề | Cách làm đúng |
|-----|------|---------|
| Không viết trình độ kỹ thuật | Code AI đưa quá phức tạp hoặc quá đơn giản | Nói rõ trình độ của mình |
| Yêu cầu tính năng quá mơ hồ | "Làm một công cụ dễ dùng" | Liệt kê các điểm tính năng cụ thể |
| Quên viết "không cần" | AI tự ý thêm nhiều tính năng | Nói rõ ranh giới, viết rõ không làm gì |
| Mô tả dữ liệu không rõ | AI không thể viết logic xử lý đúng | Đưa ra giải thích trường và dữ liệu mẫu |


## Điểm chính của phần này

- ✅ **Template ứng dụng web**: Tech stack + yêu cầu tính năng + yêu cầu giao diện + định dạng đầu ra
- ✅ **Template phân tích dữ liệu**: Mô tả dữ liệu + câu hỏi phân tích + hình thức đầu ra
- ✅ **Template script tự động hóa**: Input output + logic xử lý + xử lý ngoại lệ
- ✅ **Kỹ thuật quan trọng**: Nói rõ trình độ kỹ thuật, AI sẽ điều chỉnh độ phức tạp code
