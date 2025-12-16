---
title: "C. Danh sách chẩn đoán sai lầm thường gặp"
---

# C. Danh sách chẩn đoán sai lầm thường gặp

Phụ lục này tổng hợp các sai lầm thường gặp của bảy mô hình tư duy trong Chương 2. Mỗi sai lầm đều có "mô tả triệu chứng", "chẩn đoán vấn đề", "đề xuất cải thiện", giúp bạn tự kiểm tra và tránh sai lầm.


## Cách sử dụng danh sách này

1. **Tự kiểm tra**: Đối chiếu "triệu chứng" của mỗi sai lầm, xem mình có mắc không
2. **Chẩn đoán**: Hiểu tại sao đây là vấn đề
3. **Cải thiện**: Theo đề xuất điều chỉnh tư duy của bạn


## I. Sai lầm thường gặp của tư duy JTBD

### Sai lầm 1.1: Chỉ mô tả tính năng, không mô tả nhiệm vụ

**Triệu chứng**

Mô tả nhu cầu của bạn như thế này:
> "Tôi muốn làm một App danh sách công việc, phải có thêm task, xóa task, phân loại nhãn, deadline..."

**Chẩn đoán vấn đề**

Đây là "danh sách tính năng", không phải "mô tả nhiệm vụ". Nó nói cho AI biết bạn muốn tính năng gì, nhưng không nói rõ người dùng cần hoàn thành nhiệm vụ gì, tại sao cần các tính năng này.

AI có thể làm theo danh sách, nhưng thứ làm ra chưa chắc giải quyết được vấn đề thực sự.

**Đề xuất cải thiện**

Dùng cú pháp JTBD mô tả lại:
> "Khi người mới đi làm vào sáng bắt đầu làm việc, muốn nhanh chóng ghi lại việc cần làm hôm nay, để có thể không bỏ sót công việc quan trọng."

Sau đó mới suy ra tính năng: Vì nhiệm vụ là "ghi nhanh", thì "thêm task" phải hoàn thành trong 3 giây. "Phân loại nhãn" có thể làm chậm tốc độ, có thể không làm.


### Sai lầm 1.2: Chỉ xem nhiệm vụ chức năng, bỏ qua nhiệm vụ cảm xúc và xã hội

**Triệu chứng**

Bạn chỉ xem xét người dùng "cần làm gì", không xem xét người dùng "muốn cảm giác gì" và "muốn được người khác nhìn nhận như thế nào".

**Chẩn đoán vấn đề**

Người dùng chọn một sản phẩm, thường không chỉ vì tính năng, còn vì yếu tố cảm xúc và xã hội.

- Một App danh sách công việc, nhiệm vụ chức năng là "ghi task"
- Nhiệm vụ cảm xúc có thể là "giảm lo lắng, cảm thấy kiểm soát"
- Nhiệm vụ xã hội có thể là "trước mặt đồng nghiệp trông đáng tin cậy"

Nếu bạn chỉ quan tâm nhiệm vụ chức năng, có thể làm ra sản phẩm "tính năng đúng nhưng không ai muốn dùng".

**Đề xuất cải thiện**

Mỗi lần làm phân tích JTBD, đều tự hỏi ba câu hỏi:

| Tầng | Câu hỏi |
|-----|------|
| Nhiệm vụ chức năng | Người dùng cần hoàn thành việc gì cụ thể? |
| Nhiệm vụ cảm xúc | Người dùng muốn cảm giác gì? |
| Nhiệm vụ xã hội | Người dùng muốn được người khác nhìn nhận như thế nào? |


### Sai lầm 1.3: Coi "tôi muốn làm" là "người dùng cần"

**Triệu chứng**

Xuất phát điểm của bạn là "tôi muốn làm một xxx", chứ không phải "tôi phát hiện người dùng cần xxx".

**Chẩn đoán vấn đề**

Đây là thiên kiến tâm lý thường gặp. Chúng ta thường giả định ý tưởng của mình chính là nhu cầu người dùng, mà không xác minh giả định này.

Kết quả là: mất nhiều thời gian làm ra thứ, chỉ có mình cảm thấy tốt.

**Đề xuất cải thiện**

Chuyển "tôi muốn làm" thành "người dùng cần":

| Ý tưởng ban đầu | Sau khi chuyển đổi |
|---------|-------|
| Tôi muốn làm danh sách công việc | Ai cần danh sách công việc? Họ hiện giải quyết vấn đề này thế nào? |
| Tôi thấy tính năng này rất ngầu | Có người dùng thực sự cần tính năng này không? |

Cách xác minh tốt nhất: Tìm 3 người dùng mục tiêu, hỏi họ hiện giải quyết thế nào.


## II. Sai lầm thường gặp của tư duy ngược

### Sai lầm 2.1: Chỉ liệt kê rủi ro, không nghĩ biện pháp ứng phó

**Triệu chứng**

Phân tích Pre-mortem của bạn như thế này:
> "Nguyên nhân có thể thất bại: Quá nhiều tính năng làm không xong, người dùng không mua, kỹ thuật không thực hiện được..."

Rồi không có gì thêm.

**Chẩn đoán vấn đề**

Liệt kê rủi ro chỉ là bước đầu. Nếu không có biện pháp phòng tránh tương ứng, phân tích này chỉ là nói suông.

**Đề xuất cải thiện**

Mỗi rủi ro phải kèm một biện pháp phòng tránh. Dùng format này:

```
Rủi ro: _______________
Biện pháp phòng tránh: _______________
```

Nếu nghĩ không ra biện pháp phòng tránh, chứng tỏ rủi ro này cần nghiêm túc hơn - hoặc thực sự khó tránh (có thể không nên làm), hoặc bạn chưa nghĩ rõ (cần tiếp tục suy nghĩ).


### Sai lầm 2.2: Quá bi quan, bị rủi ro dọa nản

**Triệu chứng**

Sau khi làm phân tích Pre-mortem, phát hiện có 10 nguyên nhân có thể thất bại, rồi quyết định không làm.

**Chẩn đoán vấn đề**

Tư duy ngược không phải để bạn từ bỏ, mà để "biết có hố mà vẫn tránh được".

Mỗi dự án đều có rủi ro, quan trọng là nhận diện đâu là "rủi ro chí mạng" (phải tránh), đâu là "rủi ro kiểm soát được" (có thể chấp nhận).

**Đề xuất cải thiện**

Dùng ma trận "khả năng × mức độ nghiêm trọng" đánh giá từng rủi ro:

| | Mức độ nghiêm trọng cao | Mức độ nghiêm trọng thấp |
|---|---------|---------|
| **Khả năng cao** | Phải giải quyết | Chú ý là được |
| **Khả năng thấp** | Chuẩn bị phương án | Có thể bỏ qua |

Chỉ có rủi ro "khả năng cao + mức độ nghiêm trọng cao" mới chí mạng. Nếu loại rủi ro này không thể tránh, có thể thực sự không nên làm. Nhưng nếu có thể phòng tránh, thì làm tốt biện pháp phòng tránh, rồi tiếp tục.


### Sai lầm 2.3: Pre-mortem làm một lần rồi xong

**Triệu chứng**

Bạn khi dự án bắt đầu làm Pre-mortem, rồi không bao giờ xem lại.

**Chẩn đoán vấn đề**

Trong quá trình dự án, sẽ xuất hiện thông tin mới. Rủi ro ban đầu không lường trước có thể xuất hiện, rủi ro ban đầu lo lắng có thể đã giải quyết.

**Đề xuất cải thiện**

Tại điểm quan trọng của dự án (như MVP hoàn thành, sau phản hồi người dùng đầu tiên) xem lại danh sách Pre-mortem:
- Có rủi ro mới thêm không?
- Biện pháp phòng tránh ban đầu có hiệu quả không?
- Có rủi ro nào đã có thể gạch bỏ không?


## III. Sai lầm thường gặp của tư duy trừ

### Sai lầm 3.1: Coi MVP là "phiên bản sơ sài"

**Triệu chứng**

MVP của bạn là phiên bản "tính năng thiếu sót, trải nghiệm thô sơ, tạm được".

**Chẩn đoán vấn đề**

MVP là "phiên bản tối thiểu có thể xác minh", không phải "phiên bản tối thiểu có thể chạy".

Sự khác biệt quan trọng:
- Hiểu sai: Tính năng càng ít càng tốt, chạy được là được
- Hiểu đúng: Giữ lại tính năng đủ xác minh giả định cốt lõi, các tính năng này phải làm tốt

Nếu trải nghiệm MVP của bạn quá tệ, người dùng có thể từ bỏ vì "không dùng được" chứ không phải vì "không cần". Bạn sẽ không phán đoán được vấn đề nằm ở sản phẩm hay nhu cầu.

**Đề xuất cải thiện**

Nguyên tắc MVP là: Tính năng phải ít, nhưng tính năng cốt lõi phải làm đúng.

| Chiều | MVP nên làm | MVP không nên làm |
|-----|------------|--------------|
| Số lượng tính năng | Chỉ làm P0 (tối đa 3) | Không làm P1, P2 |
| Độ sâu tính năng | Tính năng P0 làm đến dễ dùng | Không qua loa, không chiếu lệ |
| Thiết kế visual | Rõ ràng dùng được | Không cần đẹp mắt |


### Sai lầm 3.2: Khi cắt tính năng lòng không qua được

**Triệu chứng**

Bạn biết nên làm MVP, nhưng từng tính năng đều không nỡ cắt:
> "Tính năng này quan trọng lắm... Tính năng kia đối thủ đều có... Tính năng này tôi đã nghĩ ra cách làm rồi..."

**Chẩn đoán vấn đề**

Đây là tâm lý bình thường. Con người vốn ghét mất mát, cắt bỏ tính năng đã nghĩ ra sẽ khiến bạn cảm thấy "thiệt".

Nhưng nếu không cắt, bạn sẽ mất nhiều thời gian hơn cho tính năng không quan trọng, trì hoãn xác minh thực sự.

**Đề xuất cải thiện**

Dùng "danh sách không làm" thay "danh sách tính năng". Không phải "xóa tính năng", mà là "đưa tính năng vào danh sách không làm".

Sự khác biệt tâm lý:
- "Xóa" = Tính năng này mất rồi
- "Đưa vào danh sách không làm" = Tính năng này tôi đã nghĩ qua rồi, quyết định không làm, lý do là xxx, sau này xxx lúc mới xem xét

### Sai lầm 3.3: Danh sách không làm quá chung chung

**Triệu chứng**

Danh sách không làm của bạn như thế này:
> "Không làm tính năng phức tạp" "Không làm tính năng không cần thiết"

**Chẩn đoán vấn đề**

Danh sách không làm này tương đương không có. Cái gì là "phức tạp"? Cái gì là "không cần thiết"? Không có ranh giới rõ ràng, gặp vấn đề cụ thể vẫn sẽ phân vân.

**Đề xuất cải thiện**

Danh sách không làm phải cụ thể đến tên tính năng, và viết rõ lý do:

```
Không làm đồng bộ đa thiết bị, vì cần phát triển backend, tăng độ phức tạp rất nhiều
Không làm phân loại nhãn task, vì không phải cốt lõi trải nghiệm cực đơn giản
Không làm nhắc deadline, vì trước tiên xác minh giá trị cốt lõi "ghi lại"
```


## IV. Sai lầm thường gặp của tư duy câu chuyện

### Sai lầm 4.1: Chân dung người dùng chỉ có đặc điểm nhân khẩu học

**Triệu chứng**

Chân dung người dùng của bạn như thế này:
> "25-35 tuổi, thành phố lớn, học đại học, thu nhập tháng 1-2 vạn"

**Chẩn đoán vấn đề**

Những thông tin này gần như không giúp gì cho thiết kế sản phẩm. Biết người dùng là "25-35 tuổi", không nói cho bạn biết họ cần tính năng gì, dùng trong tình huống nào, có quan ngại gì.

**Đề xuất cải thiện**

Dùng "chân dung ba chiều" thay nhân khẩu học:

| Chiều | Nên bao gồm nội dung |
|-----|--------------|
| Thuộc tính bề mặt | Nghề nghiệp, mỗi ngày xử lý bao nhiêu công việc, dùng thiết bị gì |
| Thói quen hành vi | Khi nào dùng, dùng thế nào, hiện dùng phương án thay thế gì |
| Động cơ sâu xa | Sợ điều gì, theo đuổi điều gì, muốn trở thành người như thế nào |


### Sai lầm 4.2: Người dùng là "một nhóm người" chứ không phải "một người"

**Triệu chứng**

Người dùng bạn nói là "người trẻ" "nhân viên văn phòng" "sinh viên" nhóm như thế này.

**Chẩn đoán vấn đề**

Nhóm quá trừu tượng, không thể hướng dẫn thiết kế sản phẩm cụ thể. Trong "người trẻ" có sinh viên, có người mới đi làm, có doanh nhân, nhu cầu của họ hoàn toàn khác.

**Đề xuất cải thiện**

Đặt tên cho người dùng của bạn, cụ thể hóa TA đến mức "có thể gửi WeChat hỏi":

| Trừu tượng | Cụ thể |
|-----|------|
| Nhân viên văn phòng trẻ | Tiểu Lý, 25 tuổi, nhân viên vận hành công ty internet, mỗi ngày xử lý 10-15 công việc |
| Người hay quên việc | Tiểu Lý, tuần trước vì quên trả lời email khách hàng bị lãnh đạo phê bình |


### Sai lầm 4.3: Hành trình người dùng chỉ xem "đường đi bình thường"

**Triệu chứng**

Hành trình người dùng của bạn là "Mở App → Thêm task → Hoàn thành task → Đóng".

**Chẩn đoán vấn đề**

Đây chỉ là trường hợp lý tưởng. Trong tình huống thực, người dùng sẽ gặp nhiều ý ngoại:
- Khi thêm task bị gián đoạn thì sao?
- Task quá nhiều nhìn không hết thì sao?
- Vài ngày không dùng mở lại thì sao?

**Đề xuất cải thiện**

Trong hành trình người dùng thêm "đường đi bất thường" và "trường hợp biên":

```
Đường đi bình thường: Mở → Thêm → Hoàn thành → Đóng
Đường đi bất thường 1: Mở → Thêm đến nửa bị gián đoạn → Lần mở sau có thấy bản nháp không?
Đường đi bất thường 2: Mở → Thấy 50 task chưa hoàn thành → Có lo lắng đến mức đóng không?
Trường hợp biên: 3 ngày không dùng → Mở lại hiển thị gì?
```


## V. Sai lầm thường gặp của Ba câu hỏi linh hồn

### Sai lầm 5.1: Mô tả người dùng quá chung

**Triệu chứng**

Khi trả lời "người dùng là ai", bạn nói:
> "Người muốn nâng cao hiệu suất" "Người có nhu cầu công việc" "Người trẻ"

**Chẩn đoán vấn đề**

Mô tả này tương đương không mô tả. "Người muốn nâng cao hiệu suất" có thể là sinh viên, là người đi làm, là doanh nhân, nhu cầu của họ khác biệt rất lớn.

Tiêu chí phán đoán: Bạn có thể gửi WeChat cho người dùng này không? Nếu không, chứng tỏ chưa đủ cụ thể.

**Đề xuất cải thiện**

Dùng tiêu chí kiểm tra này: Tôi có thể dùng một câu mô tả TA là ai, TA trong tình huống nào gặp vấn đề gì không?

```
❌ Người muốn nâng cao hiệu suất
✅ Tiểu Lý, 25 tuổi người mới đi làm, thường quên việc bị lãnh đạo phê bình
```


### Sai lầm 5.2: Điểm đau chỉ có "muốn" không có "đau"

**Triệu chứng**

Điểm đau bạn mô tả là:
> "Người dùng muốn một danh sách công việc dễ dùng" "Người dùng muốn ghi task thuận tiện hơn"

**Chẩn đoán vấn đề**

"Muốn xxx" là nhu cầu, không phải điểm đau. Điểm đau nên mang cảm xúc tiêu cực: lo lắng, phiền muộn, xấu hổ, sợ hãi.

Nếu người dùng chỉ "muốn" mà không "đau", họ có thể không thực sự dùng giải pháp của bạn - vì hiện trạng còn qua được.

**Đề xuất cải thiện**

Kiểm tra điểm đau bằng ba tiêu chí:

| Tiêu chí | Câu hỏi |
|-----|------|
| Có cảm xúc tiêu cực | Người dùng có vì vấn đề này cảm thấy lo lắng/phiền muộn/xấu hổ không? |
| Đang xảy ra | Tuần này người dùng có gặp vấn đề này không? |
| Sẵn sàng bỏ công sức | Nếu có giải pháp, người dùng có dùng ngay không? |

Cả ba đều thỏa mãn, mới là điểm đau thực sự.


### Sai lầm 5.3: "Tại sao chọn tôi" chỉ nói "tôi tốt hơn"

**Triệu chứng**

Khi trả lời "tại sao chọn tôi", bạn nói:
> "Vì sản phẩm của tôi tốt hơn" "Vì thiết kế của tôi đơn giản hơn"

**Chẩn đoán vấn đề**

"Tốt hơn" không phải khác biệt hóa. Tại sao người dùng tin bạn "tốt hơn"? So với ai "tốt hơn"? Tốt ở chỗ nào?

**Đề xuất cải thiện**

Dùng cú pháp này trả lời:

> "Người dùng hiện dùng [phương án hiện tại] giải quyết vấn đề này, nhưng [điểm đau]. Phương án của tôi là [khác biệt cụ thể], nên người dùng nên chọn tôi."

```
❌ Vì sản phẩm của tôi tốt hơn
✅ Người dùng hiện dùng ghi chú điện thoại ghi việc, nhưng thường quên xem. Phương án của tôi là "mở ra là công việc hôm nay", 3 giây thêm task, nên phù hợp hơn với người đi làm cần ghi nhanh.
```


## VI. Sai lầm thường gặp của áp dụng theo tình huống

### Sai lầm 6.1: Áp dụng cứng nhắc tư duy sản phẩm

**Triệu chứng**

Khi làm phân tích dữ liệu hoặc script tự động hóa, bạn cũng phân vân "chân dung người dùng" "MVP" "Ba câu hỏi linh hồn".

**Chẩn đoán vấn đề**

Mô hình tư duy là công cụ, không phải giáo điều. Tình huống khác cần điều chỉnh linh hoạt:
- Làm sản phẩm: Cần chân dung người dùng hoàn chỉnh, quy hoạch MVP
- Làm phân tích dữ liệu: Cốt lõi là "cho ai xem, trả lời câu hỏi gì"
- Làm script tự động hóa: Cốt lõi là "task nào đáng tự động hóa"

**Đề xuất cải thiện**

Chọn mô hình trọng tâm theo tình huống:

| Tình huống | Mô hình trọng tâm | Mô hình phụ |
|-----|---------|---------|
| Sản phẩm/Công cụ | JTBD, Tư duy trừ, Ba câu hỏi linh hồn | Tất cả |
| Phân tích dữ liệu | Ba câu hỏi linh hồn (cho ai xem, trả lời gì) | Tư duy ngược (gì khiến phân tích sai) |
| Script tự động hóa | Phát hiện vấn đề, Tư duy ngược | Tư duy trừ (tự động hóa bước nào trước) |
| Làm cho gia đình | Tư duy câu chuyện | Tư duy trừ (thiết kế cực đơn giản) |


## VII. Sai lầm thường gặp của phát hiện vấn đề

### Sai lầm 7.1: Nhật ký phiền não chỉ ghi không phân tích

**Triệu chứng**

Bạn ghi nhật ký phiền não một tuần, rồi để đó.

**Chẩn đoán vấn đề**

Ghi chép chỉ là bước đầu. Giá trị nằm ở phân tích và lọc.

**Đề xuất cải thiện**

Ngày thứ 8 phải làm phân tích:
1. Chấm điểm theo tần suất và mức độ đau khổ
2. Dùng "Bảng chấm điểm lọc vấn đề" đánh giá mỗi vấn đề
3. Chọn 1-2 vấn đề điểm cao nhất, bắt đầu phân tích JTBD


### Sai lầm 7.2: Chọn vấn đề "không phù hợp tự động hóa"

**Triệu chứng**

Task bạn chọn tự động hóa là:
- Liên quan nhiều phán đoán chủ quan (như "giúp tôi viết báo cáo tốt")
- Liên quan dữ liệu nhạy cảm (như "tự động giao dịch cổ phiếu")
- Sai hậu quả rất nghiêm trọng (như "tự động gửi hợp đồng cho khách hàng")

**Chẩn đoán vấn đề**

Không phải mọi vấn đề đều phù hợp giải quyết bằng Vibe Coding. Task tính quy tắc thấp, tính nhạy cảm cao, dung sai thấp, nên thận trọng xử lý.

**Đề xuất cải thiện**

Dùng "Bảng chấm điểm lọc vấn đề" đánh giá, vấn đề tổng điểm dưới 15 điểm, hoặc không làm, hoặc chỉ làm hỗ trợ (kiểm tra thủ công).


## Tổng kết danh sách tự kiểm tra

Trước khi hoàn thành dự án, dùng danh sách này tự kiểm tra nhanh:

- [ ] Tôi dùng "mô tả nhiệm vụ" chứ không phải "danh sách tính năng"?
- [ ] Tôi đã xem xét ba tầng nhiệm vụ chức năng, cảm xúc, xã hội?
- [ ] Mỗi rủi ro đều có biện pháp phòng tránh tương ứng?
- [ ] Tính năng cốt lõi của MVP làm đến vị, chứ không phải qua loa?
- [ ] Danh sách không làm là tên tính năng cụ thể, chứ không phải mô tả chung chung?
- [ ] Chân dung người dùng cụ thể đến mức "có thể gửi WeChat"?
- [ ] Điểm đau mang cảm xúc tiêu cực, chứ không chỉ "muốn"?
- [ ] "Tại sao chọn tôi" nói rõ khác biệt với phương án hiện tại?

Nếu có bất kỳ mục nào không thể tích, quay lại phần tương ứng suy nghĩ lại.
