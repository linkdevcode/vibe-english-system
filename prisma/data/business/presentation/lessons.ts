import { lessonWithTripleExercises } from "../../helpers/lessonTripleExercises";
import type { LessonContent } from "../../types";

export const lessons: LessonContent[] = [
  lessonWithTripleExercises(
    "Today I'll walk you through three key takeaways.",
    "Hôm nay tôi sẽ đi qua ba điểm chính cần nhớ.",
    "\"Walk someone through\" = dẫn từng bước; \"takeaways\" = kết luận chính.",
    {
      cloze: { before: "Today I'll walk you through three key ", after: ".", acceptableAnswers: ["takeaways"] },
      listenQuestionVi: "Phần mở đầu gợi ý cấu trúc phần sau thế nào?",
      mcqQuestionVi: "\"Takeaways\" trong thuyết trình thường là:",
      choicesVi: [
        "Những điểm chính khán giả nên nhớ khi rời phòng",
        "Phần chuyện phiếm trước giờ họp",
        "Danh sách khách mời tiệc",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Does that make sense so far?",
    "Phần vừa rồi có rõ không ạ?",
    "Check-in tương tác; \"so far\" = đến lúc này.",
    {
      cloze: { before: "Does that make sense ", after: "?", acceptableAnswers: ["so far"] },
      listenQuestionVi: "Người nói muốn gì?",
      mcqQuestionVi: "Đặt câu này giữa bài nhằm:",
      choicesVi: [
        "Xem khán giả đã hiểu trước khi sang phần kế",
        "Kết luận hỏi có ai biết không",
        "Yêu cầu khán giả nghỉ dài hai tuần",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I'm happy to take any questions at the end.",
    "Cuối buổi tôi sẵn sàng trả lời mọi câu hỏi.",
    "\"Happy to + infinitive\"; gói \"at the end\" để không bị interrupt giữa flow.",
    {
      cloze: { before: "I'm happy ", after: " take any questions at the end.", acceptableAnswers: ["to"] },
      listenQuestionVi: "Q&A được xếp khi nào?",
      mcqQuestionVi: "\"At the end\" ở đây nghĩa là:",
      choicesVi: [
        "Cuối phần trình bày, sau nội dung chính",
        "Trước khi bắt đầu slide đầu",
        "Sau khi khán giả đã về hết",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Let me start with a quick agenda for the next thirty minutes.",
    "Để tôi bắt đầu bằng lịch trình ngắn cho ba mươi phút tới.",
    "\"Let me start with\"; \"agenda\" = nội dung/tiến trình chương trình.",
    {
      cloze: { before: "Let me start with a quick ", after: " for the next thirty minutes.", acceptableAnswers: ["agenda"] },
      listenQuestionVi: "Mục đích phút đầu?",
      mcqQuestionVi: "\"Agenda\" khác \"slide deck\" ở chỗ:",
      choicesVi: [
        "Agenda mô tả trình tự/mục tiêu thời gian, deck là từng slide chi tiết",
        "Agenda là file ảnh minh hoạ",
        "Agenda không dùng trong họp",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "On the next slide, you'll see our year-over-year growth.",
    "Ở slide kế, các bạn sẽ thấy tăng trưởng so với cùng kỳ năm trước.",
    "\"Year-over-year (YoY)\" — so sánh cùng kỳ năm trước.",
    {
      cloze: { before: "On the next slide, you'll see our year-over-year ", after: ".", acceptableAnswers: ["growth"] },
      listenQuestionVi: "Trục thời gian so sánh là gì?",
      mcqQuestionVi: "\"Year-over-year\" gần với:",
      choicesVi: [
        "So sánh cùng kỳ năm nay với năm trước",
        "Chỉ xem dữ liệu một ngày duy nhất",
        "Dự báo thời tiết",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "This chart compares our actual results against the forecast.",
    "Biểu đồ này so sánh kết quả thực tế với dự báo.",
    "\"Compare ... against\"; \"forecast\" trong kinh doanh là dự báo.",
    {
      cloze: { before: "This chart compares our actual results ", after: " the forecast.", acceptableAnswers: ["against"] },
      listenQuestionVi: "Biểu đồ đang đặt hai thứ gì lên nhau?",
      mcqQuestionVi: "\"Forecast\" ở đây:",
      choicesVi: [
        "Con số dự báo trước khi có actual",
        "Bảng điểm học sinh tiểu học",
        "Dự báo thể thao",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I'd like to pause here and check for any clarifications.",
    "Tôi muốn dừng lại đây và hỏi xem có chỗ nào cần làm rõ không.",
    "\"Pause here\"; \"clarifications\" trang trọng hơn \"questions\".",
    {
      cloze: { before: "I'd like to pause here and check ", after: " any clarifications.", acceptableAnswers: ["for"] },
      listenQuestionVi: "Tại sao dừng giữa chừng?",
      mcqQuestionVi: "\"Clarifications\" thường là:",
      choicesVi: [
        "Câu hỏi làm rõ điểm chưa rõ, trước khi tiếp tục",
        "Lời khen người thuyết trình",
        "Yêu cầu tắt điện thoại",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "To sum up, we have three priorities for Q3.",
    "Tóm lại, chúng ta có ba ưu tiên cho quý 3.",
    "\"To sum up\" = in summary; Q3 = quý 3.",
    {
      cloze: { before: "To sum up, we have three priorities ", after: " Q3.", acceptableAnswers: ["for"] },
      listenQuestionVi: "Phần này thuộc vai trò gì trong bài nói?",
      mcqQuestionVi: "\"To sum up\" không nên dùng khi:",
      choicesVi: [
        "Mới mở đầu chưa nói nội dung chính",
        "Kết thúc phần chính trước Q&A",
        "Nhắc lại ý chính ngắn gọn",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "If we look at the data more closely, a clear pattern emerges.",
    "Nếu nhìn kỹ dữ liệu, một xu hướng rõ ràng lộ ra.",
    "Hướng dẫn mắt khán giả; \"emerges\" = xuất hiện hiển nhiên dần.",
    {
      cloze: { before: "If we look at the data more closely, a clear pattern ", after: ".", acceptableAnswers: ["emerges"] },
      listenQuestionVi: "Điều được nhấn mạnh về dataset?",
      mcqQuestionVi: "\"Emerges\" (pattern emerges) có thể thay:",
      choicesVi: [
        "appears / becomes visible",
        "disappears completely",
        "prints on paper automatically",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I'll hand it over to Alex for the technical deep dive.",
    "Tôi nhượng mic cho Alex phần đi sâu kỹ thuật.",
    "\"Hand over to\" = chuyển quyền nói; \"deep dive\" = phân tích chi tiết.",
    {
      cloze: { before: "I'll hand it ", after: " to Alex for the technical deep dive.", acceptableAnswers: ["over"] },
      listenQuestionVi: "Điều gì đang diễn ra trên podium?",
      mcqQuestionVi: "\"Technical deep dive\" gần nghĩa:",
      choicesVi: [
        "Phần trình bày chi tiết và chuyên sâu về mặt kỹ thuật",
        "Phần hát karaoke",
        "Phần nghỉ giải lao không có slides",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "We're slightly behind schedule, but we can still finish on time.",
    "Chúng ta hơi trễ so với giờ, nhưng vẫn có thể kết thúc đúng hạn.",
    "\"Behind schedule\" / \"finish on time\" — quản lý thời gian họp.",
    {
      cloze: { before: "We're slightly behind schedule, but we can still finish ", after: " time.", acceptableAnswers: ["on"] },
      listenQuestionVi: "Đánh giá tình trạng thời gian?",
      mcqQuestionVi: "\"Behind schedule\" nghĩa là:",
      choicesVi: [
        "Chậm hơn lịch dự định một chút/so với kế hoạch",
        "Đã xong sớm hơn mọi người",
        "Đúng như không có timeline",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Could everyone mute their microphones when they're not speaking?",
    "Mọi người có thể tắt mic khi không nói được không?",
    "Hybrid meeting basics; câu hỏi lịch sự với \"could\".",
    {
      cloze: { before: "Could everyone mute their microphones when they're not ", after: "?", acceptableAnswers: ["speaking"] },
      listenQuestionVi: "Yêu cầu kỹ thuật nào?",
      mcqQuestionVi: "\"Mute\" trong họp remote thường để:",
      choicesVi: [
        "Giảm nhiễu và vang tiếng (feedback)",
        "Tự động dịch ngôn ngữ",
        "Ghi âm không cho phép",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Let me enlarge that section so it's easier to read.",
    "Để tôi phóng to phần đó cho dễ đọc.",
    "\"Enlarge\"; accessibility / readability cho audience phía xa.",
    {
      cloze: { before: "Let me enlarge that section ", after: " it's easier to read.", acceptableAnswers: ["so"] },
      listenQuestionVi: "Động thái có lợi cho ai?",
      mcqQuestionVi: "\"So (that)\" phụ mục đích của clause sau:",
      choicesVi: [
        "Để / sao cho",
        "Mặc dù",
        "Vì thế luôn luôn sai",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I'm afraid we're running short on time for the demo.",
    "E là chúng ta sắp hết thời gian cho phần demo.",
    "\"I'm afraid\" mềm khi báo tin không lý tưởng; \"running short on time\".",
    {
      cloze: { before: "I'm afraid we're running short ", after: " time for the demo.", acceptableAnswers: ["on"] },
      listenQuestionVi: "Thông điệp chính?",
      mcqQuestionVi: "\"Running short on time\" gần với:",
      choicesVi: [
        "Gần hết thời gian dành cho phần việc đó",
        "Có quá nhiều thời gian rảnh",
        "Đồng hồ bị hỏng",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "That's all from my side — thank you for your attention.",
    "Phía tôi xin phép dừng tại đây — cảm ơn đã lắng nghe.",
    "Standard closing; \"from my side\" phổ biến trong VP quốc tế.",
    {
      cloze: { before: "That's all ", after: " my side — thank you for your attention.", acceptableAnswers: ["from"] },
      listenQuestionVi: "Đánh dấu mốc nào trong bài?",
      mcqQuestionVi: "\"From my side\" khi không nói hộ teamwork có thể thay:",
      choicesVi: [
        "\"from our team\" nếu đại diện nhóm",
        "Không có cách khác được",
        "Chỉ dùng khi chia tay vĩnh viễn",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Feel free to reach out offline if you'd prefer to discuss privately.",
    "Cứ liên hệ riêng nếu muốn trao đổi không công khai.",
    "\"Reach out\"; \"offline\" vs kênh họp nhóm.",
    {
      cloze: { before: "Feel free to reach out offline if you'd prefer ", after: " discuss privately.", acceptableAnswers: ["to"] },
      listenQuestionVi: "Lời mở đang làm giảm rào gì?",
      mcqQuestionVi: "\"Offline\" trong ngữ cảnh họp:",
      choicesVi: [
        "Qua DM/email/1–1 sau họp",
        "Tự động gửi báo động công ty",
        "Chỉ dùng khi không có Internet",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Our pilot results exceeded expectations in three major markets.",
    "Kết quả thử nghiệm vượt kỳ vọng tại ba thị trường lớn.",
    "\"Pilot\"; \"exceeded expectations\" KPI tốt.",
    {
      cloze: { before: "Our pilot results exceeded expectations ", after: " three major markets.", acceptableAnswers: ["in"] },
      listenQuestionVi: "Đánh giá pilot?",
      mcqQuestionVi: "\"Exceeded expectations\":",
      choicesVi: [
        "Tốt hơn các con số mục tiêu ban đầu",
        "Thấp hơn mục tiêu",
        "Không đo được",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I'll send the recording and slides right after this session.",
    "Tôi sẽ gửi bản ghi và slide ngay sau phiên này.",
    "Ops follow-up; \"right after\" rõ SLA ngắn.",
    {
      cloze: { before: "I'll send the recording and slides right ", after: " this session.", acceptableAnswers: ["after"] },
      listenQuestionVi: "Cam kết vật phẩm nào sau họp?",
      mcqQuestionVi: "\"Recording\" có thể là:",
      choicesVi: [
        "Video/audio buổi họp đã lưu",
        "Bản thảo sách in",
        "Hợp đồng chưa ký",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Before we open the floor, does anyone need a quick bio break?",
    "Trước khi mở phần hỏi đáp, có ai cần nghỉ nhà vệ sinh nhanh không?",
    "\"Open the floor\" = mở Q&A; \"bio break\" = eufemismo WC.",
    {
      cloze: { before: "Before we open the floor, does anyone need a quick ", after: " break?", acceptableAnswers: ["bio"] },
      listenQuestionVi: "Mục đích câu hỏi cuối phần chính?",
      mcqQuestionVi: "\"Open the floor\" gần nghĩa:",
      choicesVi: [
        "Cho phép khán giả phát biểu / hỏi",
        "Đóng cửa phòng",
        "Tắt camera toàn bộ",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I'd welcome your feedback on how we can improve next time.",
    "Tôi rất mong nhận góp ý để lần sau làm tốt hơn.",
    "\"Welcome feedback\"; continuous improvement tone.",
    {
      cloze: { before: "I'd welcome your feedback ", after: " how we can improve next time.", acceptableAnswers: ["on"] },
      listenQuestionVi: "Người nói mời điều gì?",
      mcqQuestionVi: "\"Welcome your feedback\" thể hiện:",
      choicesVi: [
        "Sẵn sàng nghe góp ý xây dựng",
        "Từ chối mọi ý kiến",
        "Chỉ nhận khiếu nại bằng fax",
      ],
      correctIndex: 0,
    },
  ),
];
