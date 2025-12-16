---
title: "Chương 3: Kỹ thuật — Nghệ thuật đối thoại với AI"
---

# Chương 3: Kỹ thuật — Nghệ thuật đối thoại với AI

> **Vị trí chương**：Đây là chương kỹ năng cốt lõi của Vibe Coding, giúp bạn từ "biết nói" đến "nói đúng", nắm vững phương pháp luận và kỹ thuật thực hành giao tiếp hiệu quả với AI.


## Từ "suy nghĩ rõ ràng" đến "diễn đạt rõ ràng"

Ở chương hai, chúng ta học được **suy nghĩ rõ ràng** — sử dụng các công cụ tư duy của quản lý sản phẩm (JTBD, tư duy ngược, tư duy trừ, tư duy câu chuyện, ba câu hỏi về linh hồn) để sắp xếp yêu cầu, làm rõ cần làm gì, cho ai, vì sao.

Ở chương này, chúng ta cần học **diễn đạt rõ ràng** — biểu đạt những gì suy nghĩ rõ ràng theo cách AI có thể hiểu.

Mối quan hệ giữa hai chương này là:

| Chương | Nhiệm vụ cốt lõi | So sánh |
|------|---------|------|
| Chương hai: Tâm pháp | Suy nghĩ rõ ràng cần làm gì | Viết kịch bản tốt |
| Chương ba: Kỹ thuật | Diễn đạt rõ ràng để AI thực hiện | Chỉ đạo diễn viên |

**Nếu không có suy nghĩ của chương hai, kỹ thuật ở chương ba sẽ là lâu đài trên không; nếu không có cách diễn đạt của chương ba, suy nghĩ ở chương hai không thể thực hiện được.**


## Tại sao chương này lại quan trọng như vậy

Trong thế giới Vibe Coding, **khả năng diễn đạt của bạn chính là khả năng lập trình**.

Lập trình truyền thống cần học cú pháp của ngôn ngữ lập trình, còn Vibe Coding cần học cú pháp của "đối thoại với AI". Đây không đơn giản là dịch yêu cầu thành ngôn ngữ tự nhiên, mà là một bộ phương pháp luận giao tiếp hoàn chỉnh — bạn cần biết:

- Khi nào nên nói gì (thời cơ và chiến lược)
- Cách nói để AI hiểu (cấu trúc và định dạng)
- Nếu AI không hiểu thì sao (lặp lại và sửa chữa)
- Cách để AI nhớ những gì bạn đã nói (quản lý ngữ cảnh)

**Một lời nhắc tốt có thể giúp AI đưa ra mã 90 điểm ngay lần đầu; một lời nhắc tồi có thể khiến bạn vật lộn trong cái hố 20 điểm trong hai giờ.**


## Mục tiêu học tập của chương

Sau khi hoàn thành chương này, bạn sẽ có khả năng:

- ✅ Hiểu các nguyên tắc cốt lõi của kỹ thuật lời nhắc, nắm vững tinh hoa của "Context is King"
- ✅ Áp dụng khung cấu trúc (S.C.A.F.F., R.G.C.) để viết lời nhắc rõ ràng và hiệu quả
- ✅ Nắm vững các kỹ thuật cốt lõi như Zero-shot, Few-shot, Chain of Thought, Tree of Thoughts
- ✅ Chuyển đổi suy nghĩ sản phẩm ở chương hai (hình ảnh người dùng, bản đồ hành trình, ba câu hỏi) thành PRD mà AI có thể thực hiện
- ✅ Học cách tiến hành đối thoại lặp lại nhiều lần với AI, từng bước tiếp cận kết quả lý tưởng
- ✅ Xác định bốn loại ảo tưởng của AI (ảo tưởng gói, ảo tưởng API, ảo tưởng logic, ảo tưởng phiên bản) và nắm vững kỹ thuật xác minh
- ✅ Hiểu phương pháp cấu hình dự án của các IDE AI chính (Cursor/Windsurf/Claude Code, v.v.)


## Điểm nổi bật của chương

Chương này chứa nhiều nội dung thực tế giúp bạn tránh đi những con đường vòng:

- 📦 **Cảnh báo bảo mật 2024-2025**: Xác định các cuộc tấn công Slopsquatting — nghiên cứu cho thấy khoảng 20% các gói được đề xuất bởi AI có thể không tồn tại, những kẻ tấn công đã tận dụng lỗ hổng này để tấn công chuỗi cung ứng
- 🛠️ **Bảng so sánh cấu hình 9 IDE AI**: Phương pháp cấu hình ngữ cảnh của Cursor, Windsurf, Claude Code, GitHub Copilot, Trae và các công cụ khác
- 📋 **Mẫu Prompt có thể sao chép trực tiếp**: Sử dụng ngay cho các tình huống tạo dự án, sửa đổi mã, giải quyết vấn đề
- ⚖️ **So sánh lời nhắc tồi vs lời nhắc tốt**: Thể hiện trực quan cách thức biểu đạt ảnh hưởng đến chất lượng đầu ra của AI


## Trường hợp xuyên suốt chương

Chương này sẽ tiếp tục dự án "Danh sách công việc" của Tiểu Lý ở chương hai, để chỉ ra cách:
- Chuyển đổi phân tích JTBD và ba câu hỏi của chương hai thành PRD mà AI có thể thực hiện
- Sử dụng khung cấu trúc để viết Prompt hoàn chỉnh đầu tiên
- Liên tục hoàn thiện các tính năng thông qua đối thoại lặp lại

Đồng thời, cũng sẽ sử dụng các tình huống điển hình như "trang đăng nhập", "chuyển đổi mã", "lựa chọn công nghệ" để chứng minh các kỹ thuật lời nhắc khác nhau.


## Đặc thù giảng dạy của chương

Chương này sử dụng phương pháp giảng dạy so sánh — hiển thị "lời nhắc tồi" và "lời nhắc tốt" cho cùng một nhiệm vụ, giúp bạn thấy rõ cách thức biểu đạt ảnh hưởng đến chất lượng đầu ra của AI.

Ví dụ:
- ❌ "Hãy giúp tôi tạo một trang đăng nhập"
- ✅ Phiên bản khung S.C.A.F.F. hoàn chỉnh chứa lịch sử dự án, ngôn ngữ công nghệ, yêu cầu chức năng, ràng buộc kiểu dáng (xem phần 3.2)

**Tại sao dạy như thế này**: Nghiên cứu cho thấy học tập so sánh có thể nhanh chóng thiết lập mô hình tư duy chính xác. Chỉ khi thấy "tồi" ở đâu, mới hiểu "tốt" tốt ở đâu.


## Kết nối với chương hai

Chương này và chương hai là mối quan hệ giữa "suy nghĩ" và "biểu đạt". Bảng dưới đây cho thấy cách chuyển đổi kết quả chương hai thành kỹ năng chương ba:

| Kết quả chương hai | Vị trí áp dụng chương ba | Cách chuyển đổi |
|-----------|--------------|---------|
| Ba câu hỏi về linh hồn (ai là người dùng, điểm yếu ở đâu, tại sao chọn bạn) | Mẫu 3.4 PRD | Điền trực tiếp vào phần "Mục tiêu sản phẩm" |
| Tư duy trừ (ưu tiên P0/P1/P2) | Phát triển từng giai đoạn 3.4 | Sử dụng ưu tiên để hướng dẫn AI thực hiện từng bước |
| Hình ảnh người dùng | Phần Context của khung 3.2 | Giúp AI hiểu người dùng mục tiêu |
| Bản đồ hành trình người dùng | Quy trình người dùng 3.4 | Phiên bản đơn giản điền vào PRD |
| Lời nhắc được lịch sử hóa | Lựa chọn khung 3.2 | Hiệu quả hơn lạng quạng có cấu trúc trong một số tình huống |
| Danh sách không làm | Ràng buộc 3.2 Constraints | Nói rõ ràng với AI không được làm gì |


## Ranh giới chương

Chương này tập trung vào **phương pháp luận chung**, không gắn với bất kỳ công cụ cụ thể nào. Về cấu hình cụ thể của IDE AI:
- Phiên bản cơ bản chỉ giới thiệu các khái niệm cốt lõi và chức năng của tệp cấu hình
- Để tìm hướng dẫn cấu hình công cụ chi tiết, vui lòng tham khảo phiên bản nâng cao hoặc tài liệu chính thức của từng công cụ

Lý do thiết kế như vậy: công cụ sẽ thay đổi, phương pháp luận thì không. Sau khi nắm vững cách suy nghĩ ở chương này, bạn có thể chuyển sang bất kỳ công cụ lập trình AI nào.


## Xem trước cấu trúc chương

| Phần | Câu hỏi cốt lõi | Bạn sẽ nhận được |
|-----|---------|---------|
| 3.1 Cơ bản về kỹ thuật lời nhắc | AI cần biết gì? | Mô hình ngữ cảnh ba lớp |
| 3.2 Khung cấu trúc | Cách nói để AI hiểu? | Khung S.C.A.F.F. và R.G.C. |
| 3.3 Kỹ thuật lời nhắc nâng cao | Nên dùng kỹ thuật gì trong tình huống nào? | Hướng dẫn lựa chọn Zero-shot/Few-shot/CoT/ToT |
| 3.4 Viết PRD đầu tiên | Cách tích hợp suy nghĩ chương hai? | Mẫu PRD có thể điền |
| 3.5 Đối thoại lặp lại | Một lần không đủ thì sao? | Kỹ thuật vòng phản hồi-sửa chữa |
| 3.6 Khi AI không nghe lời | Đầu ra có vấn đề thì sao? | Nhận diện ảo tưởng + danh sách kiểm tra xác minh |
| 3.7 Tóm tắt và thực hành | Làm cách nào để áp dụng tổng hợp? | Quy trình làm việc hoàn chỉnh + bài tập thực tế |
