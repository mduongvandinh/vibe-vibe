---
title: "Phần Nâng Cao"
---

# Phần Nâng Cao

::: warning 🚧 Thông báo phiên bản xem trước nội bộ
**Dự án này hiện đang trong giai đoạn phát triển sớm**, phần lớn nội dung đều là bản thảo đầu tiên, chưa qua review và hiệu đính thủ công toàn diện lần hai.
:::

Sau khi hoàn thành phần cơ bản, bạn có thể tiếp tục học sâu các kỹ năng nâng cao về phát triển hỗ trợ AI tại đây.

## Quy trình phát triển tổng thể được đề xuất

Trong hệ thống Vibe Coding, chúng tôi đề nghị bạn dùng một quy trình phát triển "thân thiện với AI" để hoàn thành dự án, từ ý tưởng đến lên mạng, đại khái có thể tách thành các bước sau:

1. Lý rõ tư duy
   Viết ra bằng ngôn ngữ tự nhiên những ý tưởng trong đầu trước: người dùng mục tiêu là ai, muốn giải quyết vấn đề gì, hi vọng thấy kết quả gì, chứ không phải vừa bắt đầu đã viết code.

2. Viết PRD (Tài liệu yêu cầu)
   Dùng cách có cấu trúc để mô tả chức năng: bối cảnh, mục tiêu, user story, danh sách tính năng, yêu cầu phi chức năng v.v., để cả bạn và AI đều biết cần làm gì, không làm gì.

3. Viết tài liệu kỹ thuật (Bản thảo phương án kỹ thuật)
   Làm rõ tech stack (ví dụ Next.js 16 + TypeScript + Prisma), kiến trúc hệ thống, cấu trúc dữ liệu quan trọng, phụ thuộc bên ngoài (API bên thứ ba, database, message queue v.v.).

4. Review nhiều AI
   Đưa PRD và tài liệu kỹ thuật cho nhiều AI "soi lỗi" và bổ sung:
   - Để AI giúp bạn tìm lỗ hổng và điểm mơ hồ trong yêu cầu
   - Để AI đưa ra rủi ro tiềm ẩn và trường hợp biên
   - Để AI đưa ra phương án thay thế và đề xuất cải thiện

5. Để AI liên tục hỏi bạn
   Đảo ngược lại, để AI đóng vai "product manager / architect cứng rắn", liên tục đặt câu hỏi về phương án của bạn, bạn phụ trách trả lời và liên tục chỉnh sửa bổ sung trong tài liệu.

6. Định bản PRD và phương án kỹ thuật
   Khi vấn đề cơ bản đã được hỏi kỹ, các rủi ro chính đều có phương án tương ứng, sắp xếp PRD và tài liệu kỹ thuật thành "bản định của phiên bản hiện tại", làm nguồn sự thật duy nhất cho phát triển sau này.

7. Chuẩn bị biến môi trường và cơ sở hạ tầng
   Lập kế hoạch trước biến môi trường và cơ sở hạ tầng, ví dụ:
   - Kết nối database, storage, khóa dịch vụ bên thứ ba
   - Chuẩn mực cấu hình môi trường local và online
   - Cấu trúc và cách quản lý file `.env`

8. Chuẩn bị môi trường dev và khởi tạo dự án
   Theo phương án kỹ thuật setup môi trường dev local:
   - Khởi tạo dự án và cấu trúc thư mục cơ bản
   - Cài dependency, config Lint/Format, TypeScript v.v.
   - Dựng khung chạy được tối thiểu (trang chủ, health check v.v.)

9. Để AI chính thức tham gia phát triển
   Dựa trên PRD và tài liệu kỹ thuật để drive AI:
   - Để AI giúp bạn tách task và lập kế hoạch thứ tự lặp
   - Để AI output code phiên bản đầu, bạn phụ trách review và điều chỉnh
   - Mỗi lần thay đổi đều cố gắng giữ nhất quán với tài liệu, yêu cầu

10. Gặp chức năng không hiểu thì hỏi
    Đối với tính năng framework hoặc cú pháp không quen thuộc, đừng cứng viết:
    - Hỏi AI để lấy giải thích và ví dụ
    - Đồng thời kết hợp tài liệu chính thức để xác minh cách dùng quan trọng

11. Đưa vào API bên ngoài xem doc trước
    Khi cần đối tiếp bất kỳ API bên ngoài nào (thanh toán, đăng nhập, AI model v.v.):
    - Ưu tiên đọc tài liệu chính thức và giới hạn sử dụng
    - Sau đó chuyển thông tin quan trọng thành "contract interface" trong dự án của bạn, để AI giúp bạn sinh code đóng gói.

12. Tối ưu lặp
    Theo nhịp "chạy nhanh từng bước nhỏ" để lặp:
    - Để chức năng đúng trước, sau đó tối ưu trải nghiệm và hiệu năng
    - Dùng AI giúp bạn refactor, tối ưu naming, thống nhất style code

13. Lưu trữ Git và cập nhật tài liệu
    Mỗi vòng thay đổi có ý nghĩa đều nên bao gồm:
    - Commit code vào Git (kèm thông tin commit rõ ràng)
    - Cập nhật PRD, tài liệu kỹ thuật, mô tả interface tương ứng
    - Để repo vừa là code base, vừa là knowledge base


Hãy hoàn thành phần học [Phần Cơ Bản](/Basic/) trước.

## Định vị Phần Nâng Cao: Xây dựng bản đồ nhận thức và ngữ liệu cộng tác

Phần nâng cao này **không yêu cầu bạn phải tự tay viết từng dòng code**, cũng không theo đuổi việc biến bạn thành chuyên gia mỗi lĩnh vực kỹ thuật. Tác dụng cốt lõi của nó là:

1. **Giúp bạn lý rõ khái niệm, xây dựng kỳ vọng tâm lý**
   Để bạn biết trong quá trình phát triển full-stack sẽ gặp những khâu nào, những từ ngữ nào (như Prisma, ORM, Middleware, Server Actions v.v.), chúng đóng vai trò gì. Khi vấn đề xuất hiện, bạn biết nó thuộc phạm trù nào, nên đi đâu tìm câu trả lời.

2. **Để bạn chỉ huy AI tốt hơn**
   Khi bạn hiểu các khái niệm và quy trình này, bạn không còn là người mới chỉ biết nói "giúp tôi viết một trang web", mà có thể nói ra "hãy dùng Next.js 16 App Router + Prisma thực hiện authentication người dùng, chú ý xử lý Session" như một chỉ huy viên. Bạn biết càng nhiều, chỉ thị cho AI càng chính xác, chất lượng code AI output càng cao.

3. **Cung cấp "thư viện mẫu" để AI tham khảo**
   Các ví dụ code và best practices trong tài liệu, không chỉ để bạn xem, mà còn để AI assistant tương lai của bạn xem. Khi phát triển, bạn có thể trực tiếp đưa các tài liệu hoặc đoạn code này cho AI, bảo nó: "Hãy tham khảo pattern này để thực hiện chức năng của tôi".

**Nói tóm lại:**
Học tập ở đây là để bạn **"hiểu rành"**, từ đó cộng tác tốt hơn với AI, chứ không phải để biến bạn thành lập trình viên truyền thống tách khỏi AI vẫn thuộc code được. Hãy mang tâm thái này, thoải mái bắt đầu hành trình nâng cao.

Các chương hiện tại chủ yếu là văn bản và khái niệm cốt lõi, demo thực hành cụ thể, diễn tập dự án hoàn chỉnh v.v., sẽ dần dần mở ra trong "Phần Thực Hành" sau này. Hãy tiếp tục theo dõi, mong chờ phần thực hành tiếp theo được cập nhật.
