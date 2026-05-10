import { lessonWithTripleExercises } from "../../helpers/lessonTripleExercises";
import type { LessonContent } from "../../types";

export const lessons: LessonContent[] = [
  lessonWithTripleExercises(
    "I'm writing to follow up on our meeting yesterday.",
    "Tôi viết email để follow up cuộc họp hôm qua của chúng ta.",
    "\"I'm writing to + V\" mở đầu formal; \"follow up on\" cố định sau follow up.",
    {
      cloze: {
        before: "I'm writing to follow up ",
        after: " our meeting yesterday.",
        acceptableAnswers: ["on"],
      },
      listenQuestionVi: "Theo đoạn vừa nghe, mục đích chính là gì?",
      mcqQuestionVi: "\"follow up\" ở đây gần nghĩa nhất:",
      choicesVi: [
        "Tiếp tục / nhắc lại sau cuộc trao đổi đã có",
        "Hủy cuộc họp",
        "Từ chối tham gia",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Please find attached the report for your review.",
    "Trong email có đính kèm báo cáo để bạn xem qua.",
    "Cụm \"please find attached\"; \"for your review\" nhờ duyệt, tone trung lập.",
    {
      cloze: {
        before: "Please find attached ",
        after: " report for your review.",
        acceptableAnswers: ["the"],
      },
      listenQuestionVi: "Người nhận được yêu cầu làm gì với báo cáo?",
      mcqQuestionVi: "\"For your review\" trong email thường có nghĩa:",
      choicesVi: [
        "Xem và phản hồi / duyệt",
        "Không cần đọc",
        "Xóa file ngay",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Let me know if you need anything else by Friday.",
    "Vui lòng cho tôi biết nếu bạn cần thêm gì chậm nhất đến thứ Sáu.",
    "\"Let me know\" imperative mềm; \"by Friday\" = không muộn hơn thứ Sáu.",
    {
      cloze: {
        before: "Let me know if you need anything else ",
        after: ".",
        acceptableAnswers: ["by Friday", "by friday"],
      },
      listenQuestionVi: "Hạn thời gian được nhắc trong câu là gì?",
      mcqQuestionVi: "\"By Friday\" nghĩa là:",
      choicesVi: [
        "Không muộn hơn thứ Sáu",
        "Chỉ đúng sáng thứ Sáu",
        "Sau thứ Sáu mới làm được",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Could we schedule a quick call next Tuesday afternoon?",
    "Chúng ta có thể xếp một cuộc gọi nhanh vào chiều thứ Ba tới không?",
    "\"Could we ...?\" mềm, lịch sự; \"schedule a call\" cụm công việc quen.",
    {
      cloze: {
        before: "Could we schedule ",
        after: " quick call next Tuesday afternoon?",
        acceptableAnswers: ["a"],
      },
      listenQuestionVi: "Người nói muốn điều gì?",
      mcqQuestionVi: "Cách hỏi lịch gọi này thích hợp khi:",
      choicesVi: [
        "Đề xuất thời gian họp/nghe điện thoại một cách nhẹ nhàng",
        "Ra lệnh sếp đứng dậy",
        "Than phiền về nhân viên",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Thank you for your patience while we investigate this issue.",
    "Cảm ơn anh/chị đã kiên nhẫn trong lúc chúng tôi làm rõ vấn đề này.",
    "\"Thank you for + noun/V-ing\"; \"while\" + S + V chỉ hai việc song song trong thư xin lỗi/delay.",
    {
      cloze: {
        before: "Thank you ",
        after: " your patience while we investigate this issue.",
        acceptableAnswers: ["for"],
      },
      listenQuestionVi: "Đoạn thể hiện thái độ gì với người nhận?",
      mcqQuestionVi: "Dùng câu này khi:",
      choicesVi: [
        "Đang xử lý sự cố và cần cảm ơn sự chờ đợi của đối tác",
        "Kết thúc hợp đồng",
        "Mời đi nhậu không chính thức",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I apologize for the delay in getting back to you.",
    "Tôi xin lỗi về việc trả lời anh/chị chậm.",
    "\"Apologize for + noun\"; \"getting back to someone\" = trả lời / phản hồi lại ai.",
    {
      cloze: {
        before: "I apologize ",
        after: " the delay in getting back to you.",
        acceptableAnswers: ["for"],
      },
      listenQuestionVi: "Ai đó xin lỗi điều gì?",
      mcqQuestionVi: "\"getting back to you\" tương đương:",
      choicesVi: [
        "Trả lời / phản hồi lại người kia sau một lúc",
        "Quay về nhà của bạn",
        "Đuổi việc người kia",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Following up on my previous email regarding the invoice.",
    "Đây là email tiếp theo sau thư trước của tôi về hoá đơn.",
    "Mở email bằng \"Following up on...\" báo là tiếp nối chuỗi trao đổi có sẵn.",
    {
      cloze: {
        before: "Following up ",
        after: " my previous email regarding the invoice.",
        acceptableAnswers: ["on"],
      },
      listenQuestionVi: "Cụm \"Following up on...\" cho thấy:",
      mcqQuestionVi: "\"Regarding\" trong dòng này gần nghĩa:",
      choicesVi: [
        "Email này tiếp nối thư trước và nói \"về\" một chủ đề cụ thể",
        "Email mở chủ đề hoàn toàn mới, không liên quan thư cũ",
        "Chấm dứt mọi liên lạc với người nhận",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Please let me know if you have any questions or concerns.",
    "Cho tôi biết nếu anh/chị có bất kỳ thắc mắc hay lo ngại nào.",
    "Kết khối hỗ trợ; \"questions or concerns\" rộng hơn chỉ \"questions\".",
    {
      cloze: {
        before: "Please let me know if you have any questions ",
        after: " concerns.",
        acceptableAnswers: ["or"],
      },
      listenQuestionVi: "Người gửi mời người nhận làm gì?",
      mcqQuestionVi: "\"Concerns\" ở đây có thể hiểu là:",
      choicesVi: [
        "Điều lo ngại / chỗ chưa yên tâm cần làm rõ",
        "Lời chúc sức khỏe",
        "Hợp đồng đã ký",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I've cc'd Jane from Finance for visibility on this thread.",
    "Tôi đã cc Jane phòng Tài chính để mọi người cùng theo dõi chuỗi email.",
    "\"cc'd\" = carbon copied; \"for visibility\" = để các bên cùng thấy bối cảnh.",
    {
      cloze: {
        before: "I've cc'd Jane from Finance ",
        after: " visibility on this thread.",
        acceptableAnswers: ["for"],
      },
      listenQuestionVi: "Tại sao Jane được nhắc tới?",
      mcqQuestionVi: "\"visibility\" trong email họp thường là:",
      choicesVi: [
        "Để người liên quan cùng nắm thông tin trên luồng mail",
        "Để giấu nhân viên",
        "Để khóa tài khoản",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Could you kindly confirm receipt of this message?",
    "Anh/chị có thể vui lòng xác nhận đã nhận được thư này không?",
    "\"Kindly\" làm imperative mềm; \"confirm receipt of\" chuẩn văn phòng.",
    {
      cloze: {
        before: "Could you kindly confirm receipt ",
        after: " this message?",
        acceptableAnswers: ["of"],
      },
      listenQuestionVi: "Người gửi cần gì?",
      mcqQuestionVi: "Mục đích phổ biến của câu này:",
      choicesVi: [
        "Đảm bảo bên kia đã nhận được email/log",
        "Tặng quà",
        "Đặt chỗ vé máy bay",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "The deadline for feedback is end of business Thursday.",
    "Hạn nhận phản hồi là hết giờ làm việc thứ Năm.",
    "\"End of business\" = cuối ngày làm việc; EOB thường thấy trong deadline.",
    {
      cloze: {
        before: "The deadline ",
        after: " feedback is end of business Thursday.",
        acceptableAnswers: ["for"],
      },
      listenQuestionVi: "Thời hạn được nói tới là về điều gì?",
      mcqQuestionVi: "\"End of business Thursday\" nghĩa gần với:",
      choicesVi: [
        "Cuối ngày làm việc thứ Năm (trước khi đóng cửa văn phòng)",
        "Nửa đêm chủ nhật",
        "Sáng đầu năm tài chính",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I'm out of office until Monday with limited access to email.",
    "Tôi nghỉ văn phòng đến thứ Hai và chỉ xem mail hạn chế.",
    "\"Out of office (OOO)\" tự động trả lời tiêu chuẩn; giới hạn SLA khi không có mặt.",
    {
      cloze: {
        before: "I'm out of office until Monday with limited access ",
        after: " email.",
        acceptableAnswers: ["to"],
      },
      listenQuestionVi: "Thông báo đang mô tả tình huống nào?",
      mcqQuestionVi: "\"Limited access to email\" nghĩa là:",
      choicesVi: [
        "Ít vào/thấp được email hơn bình thường trong thời gian đó",
        "Không bao giờ dùng email",
        "Đã đổi công ty",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Per our conversation, here's a summary of the action items.",
    "Theo trao đổi của chúng ta, đây là phần tóm tắt các việc cần làm.",
    "\"Per\" = theo như đã thoả thuận; \"action items\" các nhiệm vụ được giao.",
    {
      cloze: {
        before: "Per our conversation, here's a summary ",
        after: " the action items.",
        acceptableAnswers: ["of"],
      },
      listenQuestionVi: "Đoạn mở sau cuộc nói thường dẫn tới điều gì?",
      mcqQuestionVi: "\"Action items\" là:",
      choicesVi: [
        "Việc cần làm tiếp theo, thường có người phụ trách/hạn",
        "Slide minh họa không gắn với họp",
        "Nội quy xe buýt học đường",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Would it be possible to extend the timeline by two days?",
    "Có thể kéo dài tiến độ thêm hai ngày được không?",
    "\"Would it be possible to ...?\" cách hỏi xin chỉnh SLA rất nhã.",
    {
      cloze: {
        before: "Would it be possible ",
        after: " extend the timeline by two days?",
        acceptableAnswers: ["to"],
      },
      listenQuestionVi: "Người gửi đang đề xuất điều gì?",
      mcqQuestionVi: "Cấu trúc này so với \"Extend the timeline now\":",
      choicesVi: [
        "Nhẹ nhàng, có thể từ chối không gây mất mặt",
        "Áp đặt không thương lượng",
        "Đùa trong chat nội bộ",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I've updated the spreadsheet with this quarter's projections.",
    "Tôi đã cập nhật bảng tính với số liệu dự báo quý này.",
    "Perf. present báo đã hoàn thành với hiệu lực tới hiện tại; spreadsheet thuần VP.",
    {
      cloze: {
        before: "I've updated the spreadsheet ",
        after: " this quarter's projections.",
        acceptableAnswers: ["with"],
      },
      listenQuestionVi: "Có thay đổi trên artifact nào?",
      mcqQuestionVi: "\"Projections\" trong ngữ cảnh này là:",
      choicesVi: [
        "Con số dự báo (doanh thu, chi phí...)",
        "Phim chiếu rạp",
        "Đường hầm xe lửa",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I'm looking forward to your thoughts on the attached proposal.",
    "Tôi mong nhận ý kiến của anh/chị về đề xuất đính kèm.",
    "\"Looking forward to + noun/V-ing\"; chú ý không dùng to + V đơn trường học.",
    {
      cloze: {
        before: "I'm looking forward ",
        after: " your thoughts on the attached proposal.",
        acceptableAnswers: ["to"],
      },
      listenQuestionVi: "Điều đúng về ngữ pháp cụm cuối:",
      mcqQuestionVi: "Sai thường gặp: *looking forward to hear* — đúng là:",
      choicesVi: [
        "looking forward to hearing / hearing from you",
        "looking forward hear",
        "look forward hearing without to",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Please disregard my earlier email — the correct attachment is included below.",
    "Vui lòng bỏ qua email trước của tôi — tệp đính kèm đúng nằm bên dưới đây.",
    "Đính nhầm file nên chỉnh: \"disregard\" trung tính, không chỉ trích.",
    {
      cloze: {
        before:
          "Please disregard my earlier email — the correct attachment is included ",
        after: ".",
        acceptableAnswers: ["below"],
      },
      listenQuestionVi: "Vì sao phải nói với recipient?",
      mcqQuestionVi: "\"Disregard my earlier email\" nghĩa là:",
      choicesVi: [
        "Đừng dựa vào thư/email trước (đã có lỗi hoặc thay thế)",
        "Tăng giá dịch vụ",
        "Mời phỏng vấn tuyển dụng",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Could you circulate this to the rest of the team?",
    "Bạn có thể chuyển tiếp cho các thành viên còn lại trong team không?",
    "\"Circulate\" = lan truyền nội bộ được phê duyệt trong nhóm nhỏ.",
    {
      cloze: {
        before: "Could you circulate this ",
        after: " the rest of the team?",
        acceptableAnswers: ["to"],
      },
      listenQuestionVi: "Người gửi nhờ việc gì?",
      mcqQuestionVi: "\"Circulate\" trong VP gần nghĩa:",
      choicesVi: [
        "Chia sẻ thông báo/tài liệu cho các bên liên quan trong nhóm",
        "Đăng báo lá cải",
        "Huỷ tất cả lịch họp trong tuần",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I wanted to loop you in before we finalize the agreement.",
    "Tôi muốn đưa anh/chị vào vòng thông tin trước khi chốt thoả thuận.",
    "\"Loop someone in\" = cập nhật người mới vào quyết định đang được soạn.",
    {
      cloze: {
        before: "I wanted to loop you in ",
        after: " we finalize the agreement.",
        acceptableAnswers: ["before"],
      },
      listenQuestionVi: "Tại sao người kia được thêm vào chuỗi mail?",
      mcqQuestionVi: "\"Loop someone in\" là:",
      choicesVi: [
        "Đưa ai vào nhóm được thông báo/decision có liên quan",
        "Loại khỏi dự án",
        "Từ chối không trả lời",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Thank you again for taking the time to meet with us yesterday.",
    "Một lần nữa cảm ơn đã dành thời gian gặp chúng tôi hôm qua.",
    "Email cảm ơn sau meeting; polite closure chuẩn sales/PM.",
    {
      cloze: {
        before: "Thank you again ",
        after: " taking the time to meet with us yesterday.",
        acceptableAnswers: ["for"],
      },
      listenQuestionVi: "Bối cảnh phát sinh là gì?",
      mcqQuestionVi: "\"Taking the time\" nhấn mạnh:",
      choicesVi: [
        "Đối tác đã bỏ thời gian — nên được cảm ơn",
        "Họ báo không rảnh",
        "Đang khiếu nại dịch vụ",
      ],
      correctIndex: 0,
    },
  ),
];
