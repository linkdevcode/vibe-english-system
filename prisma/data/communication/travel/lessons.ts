import { lessonWithTripleExercises } from "../../helpers/lessonTripleExercises";
import type { LessonContent } from "../../types";

export const lessons: LessonContent[] = [
  lessonWithTripleExercises(
    "Could you tell me where the nearest subway station is?",
    "Bạn có thể cho tôi biết ga tàu điện ngầm gần nhất ở đâu không?",
    "\"Could you\" lịch hơn \"Can you\"; câu hỏi gián tiếp sau where.",
    {
      cloze: { before: "Could you tell me where the nearest subway station ", after: "?", acceptableAnswers: ["is"] },
      listenQuestionVi: "Người hỏi cần thông tin gì?",
      mcqQuestionVi: "Cấu trúc sau \"tell me where\" giữ thứ tự như:",
      choicesVi: [
        "Mệnh đề khẳng định (subject + verb): ... where the station is",
        "Đảo trợ động từ như Yes/No question",
        "Không bao giờ dùng động từ",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I'd like a window seat, please.",
    "Cho tôi chỗ ngồi cạnh cửa sổ, làm ơn.",
    "\"I'd like\" lịch sự; window seat transportation.",
    {
      cloze: { before: "I'd like ", after: " window seat, please.", acceptableAnswers: ["a"] },
      listenQuestionVi: "Yêu cầu trong ngữ cảnh nào?",
      mcqQuestionVi: "\"I'd like\" so với \"I want\":",
      choicesVi: [
        "I'd like mềm và lịch hơn trong dịch vụ",
        "Nghĩa trái ngược hoàn toàn",
        "Chỉ dùng khi gọi cảnh sát",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "My flight has been delayed by two hours.",
    "Chuyến bay của tôi bị hoãn hai tiếng.",
    "Present perfect passive; \"by two hours\" mức độ.",
    {
      cloze: { before: "My flight has been delayed ", after: " two hours.", acceptableAnswers: ["by"] },
      listenQuestionVi: "Tình huống với hành khách?",
      mcqQuestionVi: "\"Has been delayed\" nhấn:",
      choicesVi: [
        "Hành động do hãng/giờ bay tác động, vẫn liên quan hiện tại",
        "Máy bay đã cất cánh đúng giờ",
        "Vé được hoàn tiền tự động",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Is this the right platform for the express train to Kyoto?",
    "Đây có phải ke ga tàu tốc hành đi Kyoto không?",
    "Xác nhận platform; proper noun giữ nguyên.",
    {
      cloze: { before: "Is this the right platform ", after: " the express train to Kyoto?", acceptableAnswers: ["for"] },
      listenQuestionVi: "Người hỏi lo lắng điều gì?",
      mcqQuestionVi: "\"Platform\" trong ga tàu là:",
      choicesVi: [
        "Ke/sân chờ lên đúng chuyến",
        "Chỗ ngồi trên xe bus",
        "Khu nhập cảnh tại cửa hàng duty-free",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I'd like to check in, please — here's my passport.",
    "Tôi muốn làm thủ tục, đây là hộ chiếu.",
    "\"Check in\"; trình passport.",
    {
      cloze: { before: "I'd like ", after: " check in, please — here's my passport.", acceptableAnswers: ["to"] },
      listenQuestionVi: "Địa điểm thích hợp?",
      mcqQuestionVi: "\"Check in\" khách sạn:",
      choicesVi: [
        "Nhận phòng và đưa CMND/hộ chiếu người front desk nhận",
        "Trả phòng rời đi",
        "Mua vé xem phim",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Does this bus go to the city center?",
    "Xe buýt này có đi trung tâm thành phố không?",
    "Yes/No question với third person singular.",
    {
      cloze: { before: "Does this bus go ", after: " the city center?", acceptableAnswers: ["to"] },
      listenQuestionVi: "Mục đích hỏi?",
      mcqQuestionVi: "\"City center\" ≈",
      choicesVi: [
        "Khu trung tâm thương mại / downtown",
        "Sân bay quốc tế",
        "Kho hàng",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Could I get a table for two, non-smoking, please?",
    "Cho tôi bàn cho hai người, khu không hút thuốc.",
    "Đặt bàn nhà hàng; \"non-smoking\".",
    {
      cloze: { before: "Could I get a table for two, non-smoking, ", after: "?", acceptableAnswers: ["please"] },
      listenQuestionVi: "Người nói đang ở đâu có thể?",
      mcqQuestionVi: "\"Non-smoking\" ám chỉ:",
      choicesVi: [
        "Khu không cho hút thuốc",
        "Chỉ hút thuốc",
        "Bàn ngoài trời bắt buộc",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I'm allergic to peanuts — is there any in this dish?",
    "Tôi dị ứng đậu phộng — món này có không?",
    "An toàn thực phẩm; \"allergic to\".",
    {
      cloze: { before: "I'm allergic ", after: " peanuts — is there any in this dish?", acceptableAnswers: ["to"] },
      listenQuestionVi: "Tại sao câu hỏi quan trọng?",
      mcqQuestionVi: "\"Allergic to\" +",
      choicesVi: [
        "thực phẩm/chất gây phản ứng",
        "món khoái khẩu luôn dùng have",
        "gia vị chỉ trong tiếng Việt",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "How much does a taxi to the airport usually cost?",
    "Taxi đi sân bay thường hết khoảng bao nhiêu?",
    "Hỏi giá; \"usually cost\" không phải bảo chứng.",
    {
      cloze: { before: "How much does a taxi ", after: " the airport usually cost?", acceptableAnswers: ["to"] },
      listenQuestionVi: "Đang hỏi về?",
      mcqQuestionVi: "Câu hỏi thích hợp trước khi:",
      choicesVi: [
        "Bắt taxi để ước trước giá",
        "Mua nhà chung cư",
        "Ký hợp đồng thuê dài hạn",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I've lost my wallet — where can I report it?",
    "Tôi bị mất ví — báo cáo ở đâu được?",
    "Present perf + cụm báo incidents.",
    {
      cloze: { before: "I've lost my wallet — where ", after: " I report it?", acceptableAnswers: ["can"] },
      listenQuestionVi: "Tình huống?",
      mcqQuestionVi: "\"I've lost\" dùng vì:",
      choicesVi: [
        "Trải nghiệm mất còn hệ quả đến lúc nói",
        "Mất từ 20 năm trước không nhắc lại được",
        "Ví chỉ trong mơ nhưng nói thật",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "What's the wi-fi password for this hotel?",
    "Mật khẩu wifi khách sạn là gì?",
    "Connectivity on the road.",
    {
      cloze: { before: "What's the wi-fi password ", after: " this hotel?", acceptableAnswers: ["for"] },
      listenQuestionVi: "Đang yêu cầu?",
      mcqQuestionVi: "Hỏi password phù hợp:",
      choicesVi: [
        "Khách lưu trú trong phòng/khách sạn nhỏ friendly",
        "Khi interrogation cực nhọc không liên quan",
        "Khi không có sóng di động",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Could you recommend a moderately priced restaurant nearby?",
    "Bạn có thể giới thiệu nhà hàng giá trung bình gần đây không?",
    "\"Recommend\"; moderately priced moderate budget.",
    {
      cloze: { before: "Could you recommend a moderately priced restaurant ", after: "?", acceptableAnswers: ["nearby"] },
      listenQuestionVi: "Người hỏi quan tâm gì?",
      mcqQuestionVi: "\"Moderately priced\":",
      choicesVi: [
        "Không rẻ bèo không đắt đời",
        "Chỉ cho hoàng gia",
        "Miễn phí 100%",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "My suitcase is overweight by three kilograms.",
    "Vali của tôi quá cân ba ki-lô.",
    "Airlines vocabulary; overweight.",
    {
      cloze: { before: "My suitcase is overweight ", after: " three kilograms.", acceptableAnswers: ["by"] },
      listenQuestionVi: "Tại quầy nào thường nghe?",
      mcqQuestionVi: "\"Overweight\" hành lý:",
      choicesVi: [
        "Nặng quá quota hãng đưa ra",
        "Vali bị nhầm chủ",
        "Chỉ mô tả xe hơi",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Is breakfast included with the room rate?",
    "Bữa sáng đã gồm trong giá phòng chưa?",
    "Clarifying package; passive sense.",
    {
      cloze: { before: "Is breakfast included ", after: " the room rate?", acceptableAnswers: ["with"] },
      listenQuestionVi: "Tranh thủ thông tin gì?",
      mcqQuestionVi: "\"Included with\":",
      choicesVi: [
        "Nằm trong gói cùng mức giá nhắc tới",
        "Luôn tính tiền thêm không hỏi",
        "Chỉ dành nhân viên nội bộ",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I'd like an aisle seat closer to the front, if possible.",
    "Cho tôi ghế lối đi, gần phía trước nếu được.",
    "Seat preference; soften with if possible.",
    {
      cloze: { before: "I'd like an aisle seat closer ", after: " the front, if possible.", acceptableAnswers: ["to"] },
      listenQuestionVi: "Trên phương tiện nào?",
      mcqQuestionVi: "\"Aisle seat\" là:",
      choicesVi: [
        "Ghế cạnh lối đi (không sát cửa sổ)",
        "Ghế lái ô tô",
        "Ghế phụ chỉ trên xe đạp",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Could we split the bill, please?",
    "Chúng ta chia hoá đơn được không?",
    "Going Dutch idiom politely.",
    {
      cloze: { before: "Could we split ", after: " bill, please?", acceptableAnswers: ["the"] },
      listenQuestionVi: "Yêu cầu trong nhà hàng?",
      mcqQuestionVi: "\"Split the bill\":",
      choicesVi: [
        "Ai trả tiền món ai / chia nhau",
        "Xé hoá đơn thành mảnh vụn không trả tiền",
        "Đòi nhân viên tặng bữa tiệc",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "I'd prefer a quieter room facing the courtyard, please.",
    "Tôi muốn phòng yên hơn, nhìn ra sân trong.",
    "Hotel upgrade/preference politely.",
    {
      cloze: { before: "I'd prefer ", after: " quieter room facing the courtyard, please.", acceptableAnswers: ["a"] },
      listenQuestionVi: "Người nói sợ điều gì?",
      mcqQuestionVi: "\"Courtyard-facing\":",
      choicesVi: [
        "Hướng nhìn ra sân trong, thường ít xe cộ hơn mặt phố",
        "Tầng không có cửa sổ",
        "Buồng máy chủ",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Please keep your belongings with you at all times.",
    "Giữ đồ cá nhân bên mình suốt hành trình nhé.",
    "Public-announcement tone; signage.",
    {
      cloze: { before: "Please keep your belongings with you ", after: " all times.", acceptableAnswers: ["at"] },
      listenQuestionVi: "Ngữ cảnh?",
      mcqQuestionVi: "\"At all times\":",
      choicesVi: [
        "Luôn luôn / mọi lúc trong chuyển đi",
        "Chỉ lúc 3 giờ sáng",
        "Khi buổi biểu diễn chưa có khán giả",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Where can I buy a rechargeable transit card?",
    "Tôi mua thẻ giao thông nạp tiền được ở đâu?",
    "Urban mobility;",
    {
      cloze: { before: "Where can I buy ", after: " rechargeable transit card?", acceptableAnswers: ["a"] },
      listenQuestionVi: "Mục tiêu mua?",
      mcqQuestionVi: "\"Transit card\":",
      choicesVi: [
        "Thẻ đi métro/bus có thể nạp lại tiền",
        "Visa không giới hạn lương",
        "Vé vào cửa công viên giả",
      ],
      correctIndex: 0,
    },
  ),
  lessonWithTripleExercises(
    "Excuse me, is this seat taken?",
    "Xin lỗi, chỗ này có ai ngồi chưa?",
    "\"Excuse me\" mở; polite seat inquiry.",
    {
      cloze: { before: "Excuse me, is this seat ", after: "?", acceptableAnswers: ["taken"] },
      listenQuestionVi: "Đang trong không gian?",
      mcqQuestionVi: "\"Seat taken\":",
      choicesVi: [
        "Đã có người giữ chỗ/ngồi rồi",
        "Ghế bị đập vỡ",
        "Xe máy chỉ chở gạch xi măng",
      ],
      correctIndex: 0,
    },
  ),
];
