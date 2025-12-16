---
title: "A. Bảng tra cứu nhanh mô hình tư duy"
---

# A. Bảng tra cứu nhanh mô hình tư duy

Phụ lục này tổng hợp các template cốt lõi của bảy mô hình tư duy trong Chương 2, mỗi template đều có ví dụ điền mẫu và hướng dẫn tình huống sử dụng.


## Đề xuất thứ tự sử dụng template

```
Phát hiện vấn đề → JTBD → Tư duy ngược → Tư duy trừ → Tư duy câu chuyện → Ba câu hỏi linh hồn → Áp dụng theo tình huống
    ↓         ↓         ↓           ↓           ↓           ↓
 Tìm vấn đề  Định nghĩa  Phòng tránh  Tập trung   Hiểu người   Kiểm tra
              nhiệm vụ    thất bại     vào MVP      dùng      cuối cùng
```

Không nhất thiết phải đi qua toàn bộ quy trình mỗi lần. Với dự án đơn giản có thể bỏ qua một số bước, nhưng **Ba câu hỏi linh hồn** là kiểm tra đáy cuối cùng.


## 1. Template mô tả nhiệm vụ JTBD

**Tình huống áp dụng**: Khi bạn có một ý tưởng, cần làm rõ "người dùng thực sự muốn hoàn thành nhiệm vụ gì".

### Template

```markdown
Khi [loại người dùng] đang ở trong [tình huống cụ thể],
muốn [hoàn thành nhiệm vụ],
để có thể [kết quả hoặc cảm giác đạt được].
```

### Ví dụ điền mẫu

```markdown
Khi người mới đi làm vào sáng đến công ty bắt đầu làm việc,
muốn nhanh chóng ghi lại những việc cần làm hôm nay,
để có thể không bỏ sót công việc quan trọng, yên tâm tập trung vào công việc.
```

### Nâng cao: Ba tầng nhiệm vụ

| Tầng nhiệm vụ | Câu hỏi | Ví dụ |
|---------|------|------|
| Nhiệm vụ chức năng | Cần hoàn thành việc gì cụ thể? | Ghi lại và xem danh sách công việc |
| Nhiệm vụ cảm xúc | Muốn cảm giác gì? | Giảm lo lắng, cảm thấy an tâm |
| Nhiệm vụ xã hội | Muốn người khác nhìn nhận mình như thế nào? | Được đồng nghiệp đánh giá là đáng tin cậy |


## 2. Template Pre-mortem dự kiến thất bại

**Tình huống áp dụng**: Trước khi bắt đầu dự án, dùng tư duy ngược để sớm nhận diện các yếu tố có thể dẫn đến thất bại.

### Template

```markdown
## Phân tích Pre-mortem

Giả sử sau [thời gian] dự án thất bại, nguyên nhân có thể là:

| Nguyên nhân thất bại | Khả năng (cao/trung/thấp) | Mức độ nghiêm trọng (cao/trung/thấp) | Biện pháp phòng tránh |
|---------|----------------|----------------|---------|
| 1.      |                |                |         |
| 2.      |                |                |         |
| 3.      |                |                |         |

Rủi ro cần cảnh giác nhất (khả năng cao + mức độ nghiêm trọng cao):
_______________

Hành động cụ thể tương ứng:
_______________
```

### Ví dụ điền mẫu

```markdown
## Phân tích Pre-mortem

Giả sử sau 3 tháng dự án thất bại, nguyên nhân có thể là:

| Nguyên nhân thất bại | Khả năng | Mức độ nghiêm trọng | Biện pháp phòng tránh |
|---------|-------|-------|---------|
| Quá nhiều tính năng, làm không kịp | Cao | Cao | Phiên bản đầu chỉ làm 3 tính năng cốt lõi |
| Dùng phức tạp hơn cả ghi chú giấy | Trung | Cao | Thêm task phải hoàn thành trong 3 giây |
| Làm xong tự mình cũng không dùng | Trung | Cao | Dùng thử danh sách giấy 1 tuần để xác minh thói quen |

Rủi ro cần cảnh giác nhất: Quá nhiều tính năng, làm không kịp

Hành động cụ thể tương ứng: Làm rõ chỉ có 3 tính năng P0, tất cả tính năng khác đưa vào "danh sách không làm"
```


## 3. Template thiết kế MVP

**Tình huống áp dụng**: Khi bạn cần xác định phiên bản đầu làm gì, không làm gì.

### Template

```markdown
## Thiết kế MVP

**Giả định cốt lõi**: _______________
(Dùng một câu mô tả giả định quan trọng nhất bạn muốn xác minh)

**Tiêu chí xác minh**: _______________
(Kết quả nào chứng minh giả định đúng?)

**Tính năng P0 (bắt buộc phải có, tối đa 3)**:
1. _______________
2. _______________
3. _______________

**Danh sách không làm (những việc rõ ràng không làm)**:
- Không làm _______________ , vì _______________
- Không làm _______________ , vì _______________
- Không làm _______________ , vì _______________
```

### Ví dụ điền mẫu

```markdown
## Thiết kế MVP

**Giả định cốt lõi**: Một danh sách công việc hàng ngày cực kỳ đơn giản, dễ dùng hơn giấy note và ghi chú trên điện thoại

**Tiêu chí xác minh**: Tự mình dùng liên tục 7 ngày, mỗi ngày đều dùng để ghi và hoàn thành công việc

**Tính năng P0 (bắt buộc phải có)**:
1. Thêm công việc
2. Hoàn thành công việc (đánh dấu tick)
3. Xem công việc hôm nay

**Danh sách không làm**:
- Không làm đồng bộ đa thiết bị, vì cần phát triển backend, tăng độ phức tạp rất nhiều
- Không làm phân loại nhãn công việc, vì không phải cốt lõi của trải nghiệm cực đơn giản
- Không làm nhắc deadline, vì trước tiên xác minh giá trị cốt lõi "ghi lại"
```


## 4. Template User Story (chân dung ba chiều)

**Tình huống áp dụng**: Khi bạn cần mô tả rõ ràng "người dùng là ai".

### Template

```markdown
## Chân dung người dùng

**Tên người dùng**: _______________(Đặt tên cho người dùng)

**Mô tả một câu**: _______________

| Chiều | Nội dung |
|-----|------|
| Thuộc tính bề mặt | Tuổi, nghề nghiệp, mỗi ngày xử lý bao nhiêu công việc |
| Thói quen hành vi | Hàng ngày dùng công cụ gì, khi nào dùng, dùng như thế nào |
| Động cơ sâu xa | Sợ điều gì, theo đuổi điều gì, muốn trở thành người như thế nào |

**Tình huống sử dụng**:
- Tình huống 1: _______________
- Tình huống 2: _______________
- Tình huống 3: _______________
```

### Ví dụ điền mẫu

```markdown
## Chân dung người dùng

**Tên người dùng**: Tiểu Lý

**Mô tả một câu**: 25 tuổi, người mới đi làm, sợ bỏ sót công việc bị lãnh đạo phê bình

| Chiều | Nội dung |
|-----|------|
| Thuộc tính bề mặt | 25 tuổi, nhân viên vận hành công ty internet, mỗi ngày xử lý 10-15 công việc |
| Thói quen hành vi | Sáng đến công ty xem email trước, dùng ghi chú trên điện thoại nhưng thường quên xem |
| Động cơ sâu xa | Sợ bỏ sót công việc bị phê bình, muốn trở thành người đáng tin cậy |

**Tình huống sử dụng**:
- Tình huống 1: Sáng đến công ty, mở máy tính, nhanh chóng ghi lại việc cần làm hôm nay
- Tình huống 2: Giữa công việc đột nhiên nhớ ra một việc, cần ghi lại trong 3 giây
- Tình huống 3: Trước khi tan làm, kiểm tra công việc hôm nay đã hoàn thành chưa
```


## 5. Template tự kiểm tra Ba câu hỏi linh hồn

**Tình huống áp dụng**: Trước khi bắt tay vào làm, tự kiểm tra lần cuối. Cả ba đều xanh mới được bắt đầu.

### Template

```markdown
## Tự kiểm tra Ba câu hỏi linh hồn

**Tên dự án**: _______________

| Câu hỏi | Trả lời | Trạng thái |
|-----|------|------|
| Người dùng là ai? | _______________ | 🟢/🟡/🔴 |
| Điểm đau ở đâu? | _______________ | 🟢/🟡/🔴 |
| Tại sao chọn tôi? | _______________ | 🟢/🟡/🔴 |

**Giải thích trạng thái**:
- 🟢 Đèn xanh: Có thể trả lời rõ ràng bằng một câu
- 🟡 Đèn vàng: Có ý tưởng nhưng nói không rõ
- 🔴 Đèn đỏ: Hoàn toàn không trả lời được

**Kết luận**: □ Có thể bắt đầu (toàn xanh) □ Cần hoàn thiện (có vàng) □ Dừng lại trước (có đỏ)
```

### Ví dụ điền mẫu

```markdown
## Tự kiểm tra Ba câu hỏi linh hồn

**Tên dự án**: Danh sách công việc cực đơn giản

| Câu hỏi | Trả lời | Trạng thái |
|-----|------|------|
| Người dùng là ai? | Tiểu Lý - 25 tuổi người mới đi làm, sợ bỏ sót công việc | 🟢 |
| Điểm đau ở đâu? | Thường quên việc bị phê bình, công cụ hiện tại hoặc quá phức tạp hoặc dễ quên xem | 🟢 |
| Tại sao chọn tôi? | Mở ra là công việc hôm nay, 3 giây thêm task, tiện tay hơn giấy note và ghi chú | 🟢 |

**Kết luận**: ☑ Có thể bắt đầu (toàn xanh)
```


## 6. Template nhật ký phiền não

**Tình huống áp dụng**: Khi bạn không biết làm dự án gì, dùng phương pháp này phát hiện vấn đề đáng giải quyết.

### Template

```markdown
## Nhật ký phiền não

**Ngày**: _______________

**Khoảnh khắc phiền não**: _______________(Mô tả một câu chuyện gì xảy ra)

**Lúc đó đang làm gì**: _______________

**Tại sao phiền**: □ Quá chậm □ Quá phức tạp □ Dễ sai sót □ Khác: ___

**Cuối cùng tôi giải quyết như thế nào**: □ Chịu đựng làm xong □ Nhờ người giúp □ Bỏ cuộc □ Khác: ___

**Việc này bao lâu xảy ra một lần**: □ Mỗi ngày □ Mỗi tuần □ Mỗi tháng □ Thỉnh thoảng
```

### Ví dụ điền mẫu

```markdown
## Nhật ký phiền não

**Ngày**: Thứ Tư

**Khoảnh khắc phiền não**: Lại phải tổng hợp dữ liệu từ 5 file Excel để làm báo cáo tuần

**Lúc đó đang làm gì**: Chuẩn bị báo cáo họp bộ phận thứ Sáu

**Tại sao phiền**: ☑ Quá phức tạp (mỗi lần phải mở 5 file, copy paste, kiểm tra có sai không)

**Cuối cùng tôi giải quyết như thế nào**: ☑ Chịu đựng làm xong (mất 40 phút)

**Việc này bao lâu xảy ra một lần**: ☑ Mỗi tuần
```


## 7. Bảng chấm điểm lọc vấn đề

**Tình huống áp dụng**: Khi bạn có nhiều vấn đề/ý tưởng, dùng bảng này lọc ra vấn đề phù hợp nhất để giải quyết bằng Vibe Coding.

### Template

```markdown
## Bảng chấm điểm lọc vấn đề

| Vấn đề | Tính lặp lại | Tính quy tắc | Có thể xác minh | Không nhạy cảm | Dung sai cao | Tổng điểm |
|-----|-------|-------|-------|-------|-------|-----|
|     | /5    | /5    | /5    | /5    | /5    | /25 |

**Tiêu chí chấm điểm**:
- Tính lặp lại: Vấn đề này bao lâu xảy ra một lần? (Mỗi ngày 5 điểm, mỗi tuần 4 điểm, mỗi tháng 2 điểm, thỉnh thoảng 1 điểm)
- Tính quy tắc: Có thể mô tả bằng quy tắc rõ ràng không? (Hoàn toàn được 5 điểm, phần lớn được 3 điểm, không rõ 1 điểm)
- Có thể xác minh: Tự mình dùng có thể xác minh hiệu quả không? (Tự dùng 5 điểm, cần người khác 3 điểm, khó xác minh 1 điểm)
- Không nhạy cảm: Không liên quan đến quyền riêng tư và tài chính? (Hoàn toàn không 5 điểm, có chút liên quan 3 điểm, rất nhạy cảm 1 điểm)
- Dung sai cao: Sai dễ phát hiện và sửa không? (Rất dễ 5 điểm, bình thường 3 điểm, sai rắc rối lớn 1 điểm)

**Đề xuất**: Vấn đề có tổng điểm ≥ 18 điểm phù hợp giải quyết bằng Vibe Coding
```

### Ví dụ điền mẫu

```markdown
## Bảng chấm điểm lọc vấn đề

| Vấn đề | Tính lặp lại | Tính quy tắc | Có thể xác minh | Không nhạy cảm | Dung sai cao | Tổng điểm |
|-----|-------|-------|-------|-------|-------|-----|
| Bỏ sót công việc | 5 | 4 | 5 | 5 | 4 | 23 ✓ |
| Tổng hợp Excel | 4 | 5 | 5 | 4 | 4 | 22 ✓ |
| Quyết định đầu tư | 2 | 2 | 1 | 2 | 1 | 8 ✗ |

Kết luận: "Bỏ sót công việc" và "Tổng hợp Excel" phù hợp làm, "Quyết định đầu tư" không phù hợp
```


## 8. Template nhu cầu theo tình huống

**Tình huống áp dụng**: Mô tả nhu cầu theo các tình huống khác nhau (phân tích dữ liệu, script tự động hóa, v.v.).

### Template nhu cầu phân tích dữ liệu

```markdown
**Bối cảnh**: Tôi là_______________, cần báo cáo cho_______________

**Vấn đề cốt lõi**: Tôi cần trả lời câu hỏi "_______________"

**Phân tích cần thiết**:
1. _______________
2. _______________
3. _______________

**Nguồn dữ liệu**: _______________

**Yêu cầu output**: _______________(biểu đồ/bảng/báo cáo văn bản)
```

### Template nhu cầu script tự động hóa

```markdown
**Công việc lặp lại của tôi**: _______________

**Hiện tại tôi làm như thế nào**:
1. _______________ (mất___phút)
2. _______________ (mất___phút)
3. _______________ (mất___phút)

**Phần tôi muốn tự động hóa**: _______________

**Input là gì**: _______________

**Output là gì**: _______________

**Tình huống có thể lỗi**: _______________
```


## Hướng dẫn tra cứu nhanh

| Vấn đề của bạn | Dùng template nào |
|---------|-------------|
| Không biết làm dự án gì | Nhật ký phiền não + Bảng chấm điểm lọc vấn đề |
| Nghĩ rõ người dùng cần hoàn thành gì | Template mô tả nhiệm vụ JTBD |
| Lo lắng dự án sẽ thất bại | Template Pre-mortem |
| Không biết phiên bản đầu làm gì | Template thiết kế MVP |
| Không rõ người dùng là ai | Template User Story |
| Không chắc đã sẵn sàng bắt đầu chưa | Template tự kiểm tra Ba câu hỏi linh hồn |
| Làm phân tích dữ liệu | Template nhu cầu phân tích dữ liệu |
| Làm script tự động hóa | Template nhu cầu script tự động hóa |
