---
title: "B. Thư viện case study mở rộng"
---

# B. Thư viện case study mở rộng

Phụ lục này cung cấp 6 case study thực tế, trình bày cách áp dụng các mô hình tư duy của Chương 2 trong các tình huống khác nhau. Mỗi case study đều bao gồm: bối cảnh vấn đề, quá trình áp dụng mô hình tư duy, quyết định quan trọng, kết quả cuối cùng.


## Mục lục case study

| Tình huống | Case study | Mô hình tư duy cốt lõi |
|-----|------|-------------|
| Xác minh sản phẩm | Dropbox: Dùng video thay vì sản phẩm | Tư duy trừ |
| Xác minh sản phẩm | Airbnb: Từ đệm hơi đến kỳ lân | Tư duy JTBD |
| Phân tích dữ liệu | Phân tích ROI kênh thương mại điện tử | Ba câu hỏi linh hồn |
| Phân tích dữ liệu | Tự động hóa báo cáo bán hàng tuần | Tư duy ngược |
| Công cụ cá nhân | Nhắc nhở uống thuốc cho bố mẹ | Tư duy câu chuyện |
| Tự động hóa | Tổng hợp nhiều bảng Excel | Phát hiện vấn đề |


## Case study 1: Dropbox - Dùng video thay vì sản phẩm

**Loại tình huống**: Xác minh sản phẩm
**Mô hình tư duy cốt lõi**: Tư duy trừ

### Bối cảnh

Năm 2007, Drew Houston có một ý tưởng: làm một công cụ có thể tự động đồng bộ file giữa nhiều máy tính.

Nhưng anh gặp một khó khăn: sản phẩm này cần phát triển hệ thống backend phức tạp, xử lý nhiều trường hợp biên, chu kỳ phát triển có thể mất hơn một năm. Nếu mất một năm làm ra mà không ai dùng thì sao?

### Áp dụng mô hình tư duy: Tư duy trừ

Houston tự hỏi một câu hỏi then chốt: **Tôi thực sự cần xác minh giả định gì?**

| Cách làm thông thường | Cách làm của Houston |
|---------|---------------|
| Làm sản phẩm dùng được trước | Xác minh trước "có ai cần không" |
| Tính năng càng hoàn thiện càng tốt | Chỉ cần làm cho người ta "hiểu và muốn" |
| Sản phẩm nói lên tất cả | Video nói lên tất cả |

Giả định cốt lõi của anh là: **Có đủ nhiều người gặp vấn đề "đồng bộ file đa thiết bị", và sẵn sàng trả phí/đăng ký giải pháp.**

Để xác minh giả định này, không cần một sản phẩm hoàn chỉnh. Một video giúp người ta hiểu "đây là gì, giải quyết vấn đề gì" là đủ.

### Quyết định quan trọng

Houston làm một video demo 3 phút, trình bày tình huống sử dụng Dropbox:
- Sửa file trên một máy tính
- Mở máy tính khác, file tự động đồng bộ
- Không cần USB, không cần gửi email cho chính mình

Video được đăng trên Hacker News, kèm trang đăng ký danh sách chờ.

### Kết quả

- Chỉ sau một đêm, danh sách chờ tăng từ 5.000 người lên 75.000 người
- Houston nhận được xác minh rõ ràng: vấn đề này đáng giải quyết, có lượng lớn người sẵn sàng sử dụng
- Dựa trên kết quả xác minh này, anh bắt đầu phát triển sản phẩm nghiêm túc

### Gợi ý

**Cốt lõi của tư duy trừ không phải "làm ít tính năng", mà là "nghĩ rõ cần xác minh gì".**

MVP của Dropbox không phải "sản phẩm có ít tính năng", mà là "phương án tối thiểu có thể xác minh giả định cốt lõi". Trong case này, phương án tối thiểu để xác minh giả định là video, không phải sản phẩm.


## Case study 2: Airbnb - Từ đệm hơi đến kỳ lân

**Loại tình huống**: Xác minh sản phẩm
**Mô hình tư duy cốt lõi**: Tư duy JTBD

### Bối cảnh

Năm 2007, Brian Chesky và Joe Gebbia không trả được tiền thuê nhà ở San Francisco. Lúc đó thành phố đang tổ chức hội nghị thiết kế, khách sạn đều kín phòng. Họ nghĩ ra ý tưởng: đặt vài đệm hơi trong phòng khách, cung cấp bữa sáng, cho thuê cho người tham dự hội nghị.

Đây là nguồn gốc của Airbnb - AirBed & Breakfast (Đệm hơi và Bữa sáng).

### Áp dụng mô hình tư duy: Tư duy JTBD

Ban đầu, họ nghĩ vấn đề mình giải quyết là "chỗ ở giá rẻ".

Nhưng qua trao đổi với những khách đầu tiên, họ phát hiện nhiệm vụ sâu xa hơn:

| Nhu cầu bề mặt | Nhiệm vụ sâu xa (JTBD) |
|---------|----------------|
| Tôi cần chỗ ở giá rẻ | Tôi muốn trải nghiệm thành phố này như người địa phương |
| Tôi cần một cái giường | Tôi muốn trải nghiệm lưu trú có tính người hơn khách sạn |
| Tôi muốn tiết kiệm tiền | Tôi muốn dành tiền cho trải nghiệm, không phải phòng khách sạn tiêu chuẩn |

Dùng template JTBD mô tả:

> Khi khách du lịch đến một thành phố mới tham dự sự kiện,
> muốn sống ở thành phố này như người địa phương,
> để có thể có trải nghiệm du lịch độc đáo, có tính người.

### Quyết định quan trọng

Dựa trên hiểu biết này, định vị của Airbnb chuyển từ "chỗ ở giá rẻ" thành "sống như người địa phương".

Điều này ảnh hưởng thiết kế sản phẩm sau đó:
- Khuyến khích chủ nhà cung cấp gợi ý cuộc sống địa phương
- Trưng bày cá tính độc đáo của căn hộ, không phải cấu hình tiêu chuẩn
- Nhấn mạnh "trải nghiệm" hơn "chỗ ở"

### Kết quả

Airbnb trở thành công ty trị giá hơn 100 tỷ USD. Thành công của họ không phải vì cung cấp chỗ ở rẻ hơn, mà vì hiểu nhiệm vụ người dùng thực sự muốn hoàn thành.

### Gợi ý

**Tư duy JTBD giúp bạn nhìn thấy nhiệm vụ đằng sau tính năng.**

Nếu Airbnb chỉ dừng lại ở nhu cầu bề mặt "chỗ ở giá rẻ", họ có thể rơi vào cuộc chiến giá với khách sạn bình dân. Chính vì hiểu nhiệm vụ sâu xa "sống như người địa phương", họ mở ra một thị trường hoàn toàn mới.


## Case study 3: Phân tích ROI kênh thương mại điện tử

**Loại tình huống**: Phân tích dữ liệu
**Mô hình tư duy cốt lõi**: Ba câu hỏi linh hồn

### Bối cảnh

Tiểu Vương là nhân viên vận hành của một công ty thương mại điện tử. Sếp yêu cầu anh "phân tích hiệu quả đầu tư các kênh".

Anh mở Excel, đối mặt với đống dữ liệu, không biết bắt đầu từ đâu:
- Phân tích chỉ số nào?
- Làm biểu đồ gì?
- Báo cáo nên dài bao nhiêu?

### Áp dụng mô hình tư duy: Ba câu hỏi linh hồn

Tiểu Vương quyết định dùng "Ba câu hỏi linh hồn" lý rõ tư duy trước:

**Câu hỏi 1: Người dùng là ai?**

"Người dùng" của báo cáo này là sếp. Sếp quan tâm "tiền có đáng chi không", không phải "dữ liệu chi tiết thế nào".

**Câu hỏi 2: Điểm đau ở đâu?**

Điểm đau của sếp là: mỗi tháng chi 500 nghìn quảng cáo trên 5 kênh, nhưng không biết kênh nào hiệu quả nhất, ngân sách tháng sau nên phân bổ thế nào.

**Câu hỏi 3: Tại sao chọn tôi?**

Sếp chọn Tiểu Vương làm phân tích này vì Tiểu Vương có thể tiếp cận dữ liệu các kênh. Sếp cần "kết luận hỗ trợ quyết định", không phải "báo cáo trưng bày dữ liệu".

### Quyết định quan trọng

Dựa trên Ba câu hỏi linh hồn, Tiểu Vương làm rõ hướng phân tích:

| Ý tưởng trước đây | Hướng sau điều chỉnh |
|-----------|-------------|
| Phân tích tất cả chỉ số có thể phân tích | Chỉ phân tích chỉ số liên quan ROI |
| Làm các biểu đồ đẹp mắt | Chỉ làm biểu đồ trả lời "kênh nào hiệu quả nhất" |
| Báo cáo càng chi tiết càng tốt | Một trang PPT nói rõ kết luận |

Deliverable cốt lõi của anh trở thành:

> "Dựa trên dữ liệu Q3, ROI kênh A là 3.2, kênh C là 1.1. Đề xuất quý sau chuyển 30% ngân sách kênh C sang kênh A."

### Kết quả

Sếp xem báo cáo xong, trong 5 phút đưa ra quyết định điều chỉnh ngân sách. Đánh giá của sếp: "Cuối cùng cũng có người nói cho tôi nên làm gì, thay vì ném cho tôi đống dữ liệu."

### Gợi ý

**Giá trị phân tích dữ liệu không nằm ở "phân tích bao nhiêu", mà ở "trả lời câu hỏi gì".**

Trước khi làm phân tích dữ liệu, tự hỏi Ba câu hỏi linh hồn:
- Báo cáo này cho ai xem?
- Họ cần trả lời câu hỏi gì?
- Sau khi xem xong họ nên có thể đưa ra quyết định gì?


## Case study 4: Tự động hóa báo cáo bán hàng tuần

**Loại tình huống**: Phân tích dữ liệu/Tự động hóa
**Mô hình tư duy cốt lõi**: Tư duy ngược

### Bối cảnh

Tiểu Trương mỗi thứ Sáu phải tổng hợp dữ liệu từ 5 file Excel của các bộ phận, tạo báo cáo bán hàng tuần. Quá trình này mất 2 giờ, và thường xuyên sai sót.

Anh quyết định dùng Vibe Coding làm công cụ tự động hóa.

### Áp dụng mô hình tư duy: Tư duy ngược

Trước khi bắt tay vào làm, Tiểu Trương làm phân tích Pre-mortem:

> Giả sử 1 tháng sau, công cụ tự động hóa này thất bại, có thể vì lý do gì?

| Nguyên nhân thất bại | Khả năng | Biện pháp phòng tránh |
|---------|-------|---------|
| Bộ phận đổi format Excel, script chạy không được | Cao | Thêm kiểm tra format, phát hiện bất thường thì báo động thay vì thất bại âm thầm |
| Dữ liệu tổng hợp không khớp với tổng hợp thủ công | Trung | Vài tuần đầu tự động hóa và thủ công song song, đối chiếu xác minh |
| Quên bộ phận mới thêm vào chưa đưa vào script | Trung | Dùng quét thư mục thay vì hardcode tên file |
| Script báo lỗi không biết sửa thế nào | Trung | Yêu cầu AI viết thông báo lỗi chi tiết và log |

### Quyết định quan trọng

Dựa trên phân tích Pre-mortem, Tiểu Trương thêm các yêu cầu này vào Prompt cho AI:

```
Hãy giúp tôi viết script Python tự động tổng hợp nhiều file Excel.

Yêu cầu đặc biệt:
1. Tự động quét tất cả file .xlsx trong thư mục chỉ định
2. Kiểm tra format mỗi file có đúng kỳ vọng không, không đúng thì báo lỗi rõ ràng
3. Sau khi tổng hợp xong, xuất bản tóm tắt kiểm tra (tổng số dòng, số dữ liệu mỗi bộ phận)
4. Mỗi bước thao tác đều ghi log, thuận tiện tra cứu vấn đề
```

### Kết quả

Tuần đầu tiên, script báo lỗi khi tổng hợp dữ liệu bộ phận tài chính - vì bảng của bộ phận tài chính thêm một cột. Nhờ có kiểm tra format và thông báo lỗi rõ ràng, Tiểu Trương 5 phút đã định vị và sửa vấn đề.

Nếu không có phân tích Pre-mortem, vấn đề này có thể dẫn đến dữ liệu tổng hợp sai, đến khi sếp phát hiện mới truy ra.

### Gợi ý

**Tư duy ngược không phải chủ nghĩa bi quan, mà là "đạp hố trước".**

Với script tự động hóa, nguy hiểm nhất không phải "chạy không được", mà là "chạy được nhưng kết quả sai". Pre-mortem giúp bạn nghĩ trước những rủi ro này, và thêm biện pháp bảo vệ từ khi thiết kế.


## Case study 5: Nhắc nhở uống thuốc cho bố mẹ

**Loại tình huống**: Công cụ cá nhân/Làm cho gia đình
**Mô hình tư duy cốt lõi**: Tư duy câu chuyện

### Bối cảnh

Bố mẹ Tiểu Lý đều hơn 60 tuổi, cần uống thuốc hạ huyết áp đúng giờ hàng ngày. Nhưng họ thường quên, hoặc uống xong quên mình đã uống chưa.

Tiểu Lý muốn dùng Vibe Coding làm công cụ nhắc nhở uống thuốc.

### Áp dụng mô hình tư duy: Tư duy câu chuyện

Tiểu Lý không trực tiếp bắt đầu thiết kế tính năng, mà dùng "chân dung ba chiều" hiểu bố mẹ trước:

| Chiều | Nội dung |
|-----|------|
| Thuộc tính bề mặt | Hơn 60 tuổi, thị lực không tốt lắm, không rành dùng smartphone |
| Thói quen hành vi | Sáng dậy xem tivi trước, điện thoại chủ yếu dùng để nhận điện thoại và WeChat |
| Động cơ sâu xa | Không muốn làm phiền con cái, nhưng sợ quên uống thuốc ảnh hưởng sức khỏe |

Sau đó, anh dùng "hành trình người dùng" tưởng tượng tình huống bố mẹ sử dụng công cụ này:

```
Sáng 7:00
├── Tình huống: Bố mẹ vừa dậy, đang ở phòng khách
├── Kích hoạt: Điện thoại kêu/rung
├── Hành động: Xem điện thoại, thấy nhắc nhở uống thuốc
├── Trở ngại: Chữ quá nhỏ nhìn không rõ? Không biết bấm đâu để xác nhận?
└── Cảm giác kỳ vọng: "Ồ, đến giờ uống thuốc rồi", bấm một cái là xong
```

### Quyết định quan trọng

Dựa trên phân tích tư duy câu chuyện, Tiểu Lý xác định nguyên tắc thiết kế:

| Cách làm thông thường | Cách làm của Tiểu Lý |
|---------|-----------|
| Nhiều cách nhắc nhở tùy chọn | Chỉ dùng cách đơn giản nhất: Chữ lớn + rung |
| Ghi lại lịch sử uống thuốc | Chỉ hỏi "Đã uống chưa", bấm "Đã uống" là xong |
| Có thể cài đặt nhiều loại thuốc | Trước tiên chỉ hỗ trợ một loại thuốc, giảm độ phức tạp |
| UI thiết kế đẹp mắt | Nút lớn, chữ lớn, độ tương phản cao |

Prompt cho AI:

```
Tôi muốn làm trang web nhắc nhở uống thuốc cho bố mẹ hơn 60 tuổi.

Đặc điểm người dùng:
- Thị lực không tốt, cần chữ lớn (ít nhất 24px)
- Không rành dùng điện thoại, tương tác phải cực đơn giản
- Không cần ghi lại lịch sử, chỉ cần nhắc nhở và xác nhận

Yêu cầu tính năng:
- Hiển thị thời gian hiện tại và lời nhắc "Đến giờ uống thuốc rồi"
- Một nút "Tôi đã uống" cực lớn
- Sau khi bấm hiển thị "Được rồi, ngày mai cùng giờ sẽ nhắc bạn"
- Trang có thể đặt làm trang chủ trình duyệt điện thoại
```

### Kết quả

Bố mẹ thực sự bắt đầu dùng công cụ này. Mẹ nói: "Cái này đơn giản hơn mấy App con dạy mẹ dùng trước nhiều, mẹ nhìn là hiểu."

### Gợi ý

**Khi làm công cụ cho người khác, "Tư duy câu chuyện" giúp bạn tư duy từ góc độ đối phương.**

Nếu Tiểu Lý trực tiếp hỏi bố mẹ "muốn tính năng gì", họ có thể nói không rõ. Nhưng qua tưởng tượng một ngày của họ, tình huống họ dùng điện thoại, trở ngại có thể gặp, Tiểu Lý thiết kế ra công cụ thực sự phù hợp với họ.


## Case study 6: Tổng hợp nhiều bảng Excel

**Loại tình huống**: Tự động hóa
**Mô hình tư duy cốt lõi**: Phát hiện vấn đề

### Bối cảnh

Tiểu Trần là nhân viên hành chính nhân sự công ty. Mỗi đầu tháng, cô cần thu thập bảng chấm công từ các bộ phận, tổng hợp thành bảng chấm công tổng công ty.

Việc này cô làm được hai năm, mỗi lần đều cảm thấy phiền, nhưng chưa bao giờ nghĩ có thể tự động hóa.

### Áp dụng mô hình tư duy: Phát hiện vấn đề

Một ngày, Tiểu Trần bắt đầu ghi "nhật ký phiền não". Một tuần sau, cô xem lại ghi chép:

```markdown
## Tổng hợp nhật ký phiền não

| Ngày | Phiền não | Tần suất | Mức độ đau khổ |
|-----|------|-----|---------|
| Thứ Hai | Tổng hợp chấm công mất 3 giờ | Mỗi tháng 1 lần | 9 điểm |
| Thứ Ba | Có bộ phận format bảng lại không đúng | Mỗi tháng 1 lần | 7 điểm |
| Thứ Năm | Tổng hợp xong phát hiện dữ liệu không khớp, làm lại | Mỗi tháng thường có | 10 điểm |
```

Cô dùng "Bảng chấm điểm lọc vấn đề" phân tích vấn đề này:

| Chiều | Điểm | Lý do |
|-----|------|------|
| Tính lặp lại | 4 | Mỗi tháng một lần, xảy ra cố định |
| Tính quy tắc | 5 | Quy tắc rất rõ ràng: từ cột chỉ định trích xuất dữ liệu, gộp vào một bảng |
| Có thể xác minh | 5 | Tự mình dùng có thể xác minh, đối chiếu kết quả thủ công |
| Không nhạy cảm | 4 | Là dữ liệu nội bộ, nhưng không liên quan lương và thông tin nhạy cảm cốt lõi khác |
| Dung sai cao | 4 | Sau khi tổng hợp sẽ kiểm tra thủ công, sai có thể phát hiện |
| **Tổng điểm** | **22** | Rất phù hợp tự động hóa |

### Quyết định quan trọng

Tiểu Trần quyết định dùng Vibe Coding giải quyết vấn đề này. Cô dùng "Template nhu cầu script tự động hóa" tổng hợp nhu cầu:

```markdown
**Công việc lặp lại của tôi**: Mỗi tháng tổng hợp bảng chấm công các bộ phận

**Hiện tại tôi làm như thế nào**:
1. Mở file Excel các bộ phận gửi đến (20 phút tìm đủ file)
2. Copy dữ liệu cột B-F mỗi file (60 phút)
3. Paste vào bảng tổng hợp, kiểm tra format (40 phút)
4. Đối chiếu tổng số người có khớp không (20 phút)

**Phần tôi muốn tự động hóa**: Bước 2 và Bước 3

**Input**: Một thư mục, bên trong là file .xlsx của các bộ phận

**Output**: Một file .xlsx đã tổng hợp

**Tình huống có thể lỗi**:
- Có bộ phận thứ tự cột trong bảng không đúng
- Có bộ phận bảng thêm hoặc thiếu vài cột
- Format tên file không thống nhất
```

### Kết quả

Cô dùng AI tạo script Python, giờ tổng hợp chấm công hàng tháng từ 3 giờ rút xuống 10 phút (chủ yếu là chờ script chạy xong và kiểm tra thủ công).

Quan trọng hơn, vì script sẽ kiểm tra bất thường format, cô không còn lo lắng "tổng hợp xong mới phát hiện dữ liệu không khớp" nữa.

### Gợi ý

**Nhiều vấn đề đáng tự động hóa, chúng ta đang "chịu đựng" hàng ngày.**

Giá trị của nhật ký phiền não không nằm ở bản thân việc ghi chép, mà ở việc giúp bạn "nhìn thấy" những điểm đau quen thuộc. Khi bạn viết chúng ra, chấm điểm, xếp hạng, bạn sẽ phát hiện: hoá ra mỗi tháng tôi đang lãng phí 3 giờ cho một việc, mà việc này hoàn toàn có thể giao cho AI.


## Tổng kết case study

| Case study | Gợi ý cốt lõi |
|-----|---------|
| Dropbox | Phương án tối thiểu xác minh giả định, có thể không phải bản thân sản phẩm |
| Airbnb | Nhìn thấy nhiệm vụ đằng sau tính năng, mới tìm được thị trường thực sự |
| Phân tích ROI thương mại điện tử | Giá trị phân tích dữ liệu nằm ở hỗ trợ quyết định, không phải trưng bày dữ liệu |
| Tự động hóa báo cáo bán hàng tuần | Nghĩ trước nguyên nhân thất bại, thêm bảo vệ từ khi thiết kế |
| Nhắc nhở uống thuốc | Làm công cụ cho người khác, phải đứng từ góc độ đối phương tưởng tượng tình huống sử dụng |
| Tổng hợp Excel | Nhật ký phiền não giúp phát hiện vấn đề đáng tự động hóa |

Điểm chung của các case study này là: **Trước khi bắt tay vào làm, dùng mô hình tư duy nghĩ rõ vấn đề trước.**

Đây là giá trị cốt lõi của Chương 2 "Phần Tư duy" - nó không giúp bạn viết code, nhưng giúp bạn ít đi vòng.
