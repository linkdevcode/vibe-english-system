import { lessonWithTripleExercises } from "../../helpers/lessonTripleExercises";
import type { LessonContent } from "../../types";

export const lessons: LessonContent[] = [
  lessonWithTripleExercises(
    "Good morning — how's your day going so far?",
    "Chào buổi sáng — hôm nay của bạn đến giờ thế nào?",
    "\"How's ... going\"; \"so far\" = đến lúc này.",
    {
      cloze: { before: "Good morning — how's your day going ", after: "?", acceptableAnswers: ["so far"] },
      listenQuestionVi: "Đây có phải greeting trang trọng kiểu văn bản không?",
      mcqQuestionVi: "\"So far\" trong câu này:",
      choicesVi: [
        "Cho đến thời điểm nói chuyện",
        "Mãi mãi về sau",
        "Không có nghĩa",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Nice to meet you — I've heard a lot about you.",
    "Rất vui được gặp bạn — tôi đã nghe nhiều về bạn.",
    "\"Nice to meet you\" lần đầu; present perfect \"I've heard\".",
    {
      cloze: { before: "Nice to meet you — I've heard a lot ", after: " you.", acceptableAnswers: ["about"] },
      listenQuestionVi: "Bối cảnh gặp gỡ?",
      mcqQuestionVi: "\"I've heard a lot about you\" thường nhằm:",
      choicesVi: [
        "Mở đầu thân thiện, khen ngầm uy tín/người kia được nhắc tới",
        "Cáo buộc nghiêm trọng",
        "Kết thúc cuộc phỏng vấn",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Take care, and let's catch up soon!",
    "Bảo trọng, mình bắt chuyện lại nhé!",
    "\"Take care\" kết; \"catch up\" = vừa nói vừa cập nhật.",
    {
      cloze: { before: "Take care, and let's catch ", after: " soon!", acceptableAnswers: ["up"] },
      listenQuestionVi: "Đây có phải khởi đầu không?",
      mcqQuestionVi: "\"Catch up\" với ai đó:",
      choicesVi: [
        "Ngồi hàn huyên, cập nhật những gì đã lỡ chuyện",
        "Đuổi kịp bằng chạy bộ trong thể thao chuyên nghiệp",
        "Đăng nhập tài khoản email",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Hey, long time no see — how have you been?",
    "Ê, lâu không gặp — dạo này bạn thế nào?",
    "Thành ngữ \"long time no see\"; \"How have you been?\".",
    {
      cloze: { before: "Hey, long time no see — ", after: " have you been?", acceptableAnswers: ["how"] },
      listenQuestionVi: "Mối quan hệ giữa hai người có thể là:",
      mcqQuestionVi: "\"Long time no see\" mang sắc thái:",
      choicesVi: [
        "Thân, vui vì được gặp lại sau lâu",
        "Đòi nợ cứng",
        "Đọc báo luật trong tòa án",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Lovely weather we're having — not too humid today.",
    "Trời hôm nay khá đẹp — không quá ẩm.",
    "Small talk chủ đề thời tiết neutral.",
    {
      cloze: { before: "Lovely weather we're having — not too humid ", after: ".", acceptableAnswers: ["today"] },
      listenQuestionVi: "Chức năng giao tiếp?",
      mcqQuestionVi: "Kiểu câu này:",
      choicesVi: [
        "Mở xà giao, tránh awkward silence nhẹ nhàng",
        "Cảnh báo bão từ nhà chức trách",
        "Đặt báo thức cho sáng mai",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Thanks for having me over — dinner was amazing.",
    "Cảm ơn đã mời tớ qua — bữa tối tuyệt quá.",
    "\"Thanks for having me over\"; khen host.",
    {
      cloze: { before: "Thanks for having me ", after: " — dinner was amazing.", acceptableAnswers: ["over"] },
      listenQuestionVi: "Ai là người được cảm ơn?",
      mcqQuestionVi: "\"Having me over\" =",
      choicesVi: [
        "Mời tôi tới nhà / buổi tiệc",
        "Đuổi tôi ra khỏi nhà",
        "Cho tôi nghỉ phép dài hạn",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I should get going — I don't want to miss the last train.",
    "Tôi phải đi rồi — không muốn lỡ chuyến tàu cuối.",
    "Polite exit; lý do cụ thể.",
    {
      cloze: { before: "I should get going — I don't want to miss ", after: " last train.", acceptableAnswers: ["the"] },
      listenQuestionVi: "Người nói muốn làm gì?",
      mcqQuestionVi: "\"Get going\" gần nghĩa:",
      choicesVi: [
        "Rời đi / bắt đầu xách vali",
        "Nổi giận",
        "Ở lại thêm vài tuần",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Say hi to your partner for me when you see them.",
    "Nhớ gửi lời hỏi thăm người đi cùng bạn giúp tôi.",
    "\"Say hi to ... for me\" chuyển lời chào.",
    {
      cloze: { before: "Say hi to your partner for me ", after: " you see them.", acceptableAnswers: ["when"] },
      listenQuestionVi: "Người nói nhờ điều gì?",
      mcqQuestionVi: "Cụm này dùng khi:",
      choicesVi: [
        "Gửi lời thăm người thứ ba qua người đứng trước mặt",
        "Đề nghị kết hôn giấu tên",
        "Mời vào họp Zoom chính thức",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "It's been ages — what have you been up to lately?",
    "Lâu quá không gặp — dạo này bạn làm gì?",
    "\"Ages\" colloquial; \"up to\" = bận gì.",
    {
      cloze: { before: "It's been ages — what have you been up ", after: " lately?", acceptableAnswers: ["to"] },
      listenQuestionVi: "Mục đích của câu hỏi?",
      mcqQuestionVi: "\"What have you been up to?\" không nên xài khi:",
      choicesVi: [
        "Gặp sếp lần đầu không quen chỉ họp 5′ chính thức strict",
        "Hàn huyên đời thường",
        "Cập nhật sau một thời gian xa",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Hope you feel better soon — don't push yourself too hard.",
    "Chóng khỏe nhé — đừng gượng ép bản thân quá.",
    "Thể quan tâm khi người kia kém khoẻ.",
    {
      cloze: { before: "Hope you feel better soon — don't push yourself too ", after: ".", acceptableAnswers: ["hard"] },
      listenQuestionVi: "Tone giữa hai người?",
      mcqQuestionVi: "\"Don't push yourself too hard\" =",
      choicesVi: [
        "Nghỉ ngơi, đừng cố gắng quá sức khi ốm",
        "Hãy chạy marathon ngay",
        "Tăng giờ làm thêm",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "It's great to finally put a face to the name.",
    "Cuối cùng cũng gặp người thật sau khi chỉ biết tên trên mail.",
    "Gặp offline sau khi chỉ email; idiom quen VP.",
    {
      cloze: { before: "It's great to finally put a face ", after: " the name.", acceptableAnswers: ["to"] },
      listenQuestionVi: "Tình huống xảy ra?",
      mcqQuestionVi: "Idiom này dùng khi:",
      choicesVi: [
        "Đã quen nhau qua tên/email giờ mới gặp trực tiếp",
        "Đổi chứng minh nhân dân",
        "Chụp selfie phong cách",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Drop by anytime you're in the neighborhood.",
    "Cứ ghé qua bất cứ lúc nào bạn có mặt gần đây.",
    "\"Drop by\" = ghé không hẹn; lời mời mở.",
    {
      cloze: { before: "Drop by anytime you're ", after: " the neighborhood.", acceptableAnswers: ["in"] },
      listenQuestionVi: "Đây là lời mời có ràng không?",
      mcqQuestionVi: "\"Drop by\" khác formal \"schedule a visit\":",
      choicesVi: [
        "Thân, casual, không cần hẹn nghiêm",
        "Đòi vé xem nhạc hội",
        "Đặt bàn Michelin năm sao",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Cheers — here's to good health and new beginnings!",
    "Cạn ly — cho sức khỏe và khởi đầu mới!",
    "Toast ăn mừng; \"here's to\".",
    {
      cloze: { before: "Cheers — here's ", after: " good health and new beginnings!", acceptableAnswers: ["to"] },
      listenQuestionVi: "Bối cảnh phù hợp?",
      mcqQuestionVi: "\"Here's to ...\" thường đi với:",
      choicesVi: [
        "Nâng ly chúc mừng",
        "Tuyên bố phá sản",
        "Kết thúc hợp đồng lao động",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Sorry I'm a bit late — traffic was heavier than usual.",
    "Xin lỗi tôi hơi trễ — kẹt xe hơn mọi khi.",
    "Xin lỗi + lý do ngắn (không than vãn dài).",
    {
      cloze: { before: "Sorry I'm a bit late — traffic was heavier ", after: " usual.", acceptableAnswers: ["than"] },
      listenQuestionVi: "Người nói giải thích gì?",
      mcqQuestionVi: "\"Heavier than usual\" =",
      choicesVi: [
        "Bất thường đông/trì hơn ngày thường",
        "Nhẹ hơn bình thường",
        "Không so sánh được",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Good night — sleep well!",
    "Chúc ngủ ngon — ngủ thật say nhé!",
    "Kết buổi tối; ngắn gọn.",
    {
      cloze: { before: "Good night — sleep ", after: "!", acceptableAnswers: ["well"] },
      listenQuestionVi: "Thích hợp khi?",
      mcqQuestionVi: "\"Sleep well\" gần nghĩa:",
      choicesVi: [
        "Chúc đêm nghỉ ngon/trùm chăn thoải mái",
        "Cảnh báo nguy hiểm",
        "Mời đi karaoke sáng sớm",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Have a great weekend — any fun plans?",
    "Chúc cuối tuần vui — có dự định gì hay không?",
    "Thứ sáu trong VP; tone light.",
    {
      cloze: { before: "Have a great weekend — any fun ", after: "?", acceptableAnswers: ["plans"] },
      listenQuestionVi: "Thời điểm điển hình?",
      mcqQuestionVi: "Small talk cuối tuần nhằm:",
      choicesVi: [
        "Kết nối xã giao trước khi nghỉ",
        "Lên kế hoạch audit nội bộ",
        "Từ chối mọi lời mời",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Congratulations on the promotion — you totally deserve it!",
    "Chúc mừng được thăng chức — bạn xứng đáng lắm!",
    "Khen chân thành; \"deserve it\".",
    {
      cloze: { before: "Congratulations ", after: " the promotion — you totally deserve it!", acceptableAnswers: ["on"] },
      listenQuestionVi: "Sự kiện được chúc mừng?",
      mcqQuestionVi: "\"Congratulations on\" +",
      choicesVi: [
        "tin tốt (job, nhà cửa, học...) ",
        "tin xấu chủ định",
        "câu không hoàn chỉnh",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I'm rooting for you — let me know how it goes!",
    "Tôi ủng hộ bạn — có gì báo nhé!",
    "\"Rooting for\" cổ vũ; follow-up cởi mở.",
    {
      cloze: { before: "I'm rooting ", after: " you — let me know how it goes!", acceptableAnswers: ["for"] },
      listenQuestionVi: "\"I'm rooting for you\" được dùng khi:",
      mcqQuestionVi: "Ý gần đúng nhất của câu này:",
      choicesVi: [
        "Mình cổ vũ bạn trong thử thách (thi, phỏng vấn...)",
        "Mình chia tay không bao giờ nhắn lại",
        "Mình mời bạn hát rock trên sóng radio",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "No worries — it happens to the best of us.",
    "Không sao — ai cũng có lúc thế.",
    "An ủi nhẹ nhàng khi có lỗi nhỏ.",
    {
      cloze: { before: "No worries — it happens ", after: " the best of us.", acceptableAnswers: ["to"] },
      listenQuestionVi: "Chức năng câu nói?",
      mcqQuestionVi: "\"The best of us\" chỉ:",
      choicesVi: [
        "Cả những người giỏi nhất cũng mắc lỗi — an ủi ngang hàng",
        "Chỉ trẻ con mới lỗi",
        "Chỉ hành chính mới lỗi",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Keep in touch — don't be a stranger!",
    "Giữ liên lạc nhé — đừng biến mất luôn!",
    "Kết thân; idiom \"don't be a stranger\".",
    {
      cloze: { before: "Keep ", after: " touch — don't be a stranger!", acceptableAnswers: ["in"] },
      listenQuestionVi: "Thông điệp quan hệ?",
      mcqQuestionVi: "\"Don't be a stranger\" =",
      choicesVi: [
        "Hãy liên hệ lại, đừng xa cách hẳn",
        "Đừng làm người lạ khi gặp cướp",
        "Từ chối kết bạn trên mạng",
      ],
      correctIndex: 0,
    },
  ),
];
