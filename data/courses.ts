export const coursesData: Record<
  string,
  {
    title: string
    category: "middle-school" | "ielts" | "soft-skills"
    description: string
    image: string
    targetLearners: string
    duration: string
    sessionsPerWeek: string
    price: string
    target: string
    level: string
    content: string[]
    objectives: string[]
    benefits: string[]
  }
> = {
  // Middle School Courses
  "grade-6": {
    title: "Tiếng Anh Lớp 6",
    category: "middle-school",
    description:
      "Khóa học bám sát các chủ đề của sách giáo khoa truyền thống, bên cạnh đó, được thiết kế để đẩy mạnh ngữ pháp, từ vựng, và khả năng đọc hiểu của học sinh, giúp học sinh có trình độ vượt trội hơn so với chương trình học chính khóa. Bên cạnh đó, học sinh cũng được tiếp xúc dần với những học liệu viết và nói để phù hợp hơn với các bài thi chứng chỉ quốc tế.",
    image: "/placeholder.svg?height=600&width=1200",
    targetLearners: "Học sinh lớp 6, độ tuổi 11-12, mới bắt đầu học tiếng Anh hoặc có nền tảng cơ bản từ tiểu học",
    duration: "3 tháng",
    sessionsPerWeek: "2 buổi/tuần, mỗi buổi 1 giờ 45 phút",
    price: "7,500,000 VNĐ",
    target: "Kết thúc khóa học, học sinh sẽ có trình độ tương đương với level A1",
    level: "Sơ cấp",
    objectives: [
      "Kết thúc khóa học, học sinh sẽ có trình độ tương đương với level A1",
      "Có thể sử dụng các cấu trúc quen thuộc, các từ ngữ cơ bản để đáp ứng nhu cầu giao tiếp đơn giản, có thể tự giới thiệu bản thân và trả lời những thông tin cơ bản về gia đình, nơi sinh sống, bạn bè, trường lớp vv",
      "Áp dụng những từ vựng và cấu trúc câu đơn giản để tự viết những đoạn văn ngắn và tự thuyết trình những chủ đề cơ bản.",
    ],
    benefits: [
      "Giáo trình được thiết kế phù hợp với chương trình của Bộ Giáo dục và Đào tạo",
      "Lớp học quy mô nhỏ với tối đa 20 học viên",
      "Giảng viên có kinh nghiệm giảng dạy và ôn thi THCS",
      "Phương pháp giảng dạy tương tác, lấy học sinh làm trung tâm",
      "Tài liệu học tập phong phú và bài tập về nhà được thiết kế phù hợp",
      "Báo cáo tiến độ học tập định kỳ cho phụ huynh",
    ],
    content: [
      "Ngữ pháp cơ bản: Thì hiện tại đơn, hiện tại tiếp diễn, quá khứ đơn",
      "Từ vựng theo chủ đề: Gia đình, trường học, sở thích, thể thao",
      "Kỹ năng nghe: Nghe hiểu thông tin cơ bản, chỉ dẫn đơn giản",
      "Kỹ năng nói: Giới thiệu bản thân, mô tả người/vật/nơi chốn",
      "Kỹ năng đọc: Đọc hiểu văn bản ngắn, trả lời câu hỏi",
      "Kỹ năng viết: Viết đoạn văn ngắn về chủ đề quen thuộc",
    ],
  },
  "grade-7": {
    title: "Tiếng Anh Lớp 7",
    category: "middle-school",
    description:
      "Khóa học tiếng Anh dành cho học sinh lớp 7, phát triển kỹ năng nghe, nói, đọc, viết và ôn luyện những kỹ năng phù hợp hơn với các bài thi chứng chỉ quốc tế.",
    image: "/placeholder.svg?height=600&width=1200",
    targetLearners: "Học sinh lớp 7, độ tuổi 12-13, đã có nền tảng tiếng Anh cơ bản từ lớp 6",
    duration: "3 tháng",
    sessionsPerWeek: "2 buổi/tuần, mỗi buổi 1 giờ 45 phút",
    price: "6,500,000 VNĐ",
    target: "Phát triển toàn diện các kỹ năng tiếng Anh",
    level: "Sơ cấp - Trung cấp",
    objectives: [
      "Học sinh sẽ có trình độ tương đương với level A2",
      "Khả năng thuyết trình của học sinh cũng được nâng cao qua những chủ đề đa dạng hơn, phức tạp hơn",
      "Phát triển khả năng giao tiếp thoải mái hơn về nhiều chủ đề khác nhau",
      "Biết đặt câu hỏi và trả lời về môi trường và những sự việc xung quanh",
      "Áp dụng những từ vựng và cấu trúc câu ở mức độ cao hơn trong những bài văn viết dài hơn",
    ],
    benefits: [
      "Giáo trình được cập nhật theo chương trình mới của Bộ Giáo dục và Đào tạo",
      "Lớp học quy mô nhỏ với tối đa 20 học viên",
      "Giảng viên có kinh nghiệm giảng dạy và ôn thi THCS",
      "Phương pháp giảng dạy tương tác, kết hợp học tập và trò chơi",
      "Tài liệu học tập phong phú và bài tập về nhà được thiết kế phù hợp",
      "Báo cáo tiến độ học tập định kỳ cho phụ huynh",
    ],
    content: [
      "Ngữ pháp nâng cao: Thì quá khứ tiếp diễn, hiện tại hoàn thành, câu điều kiện loại 1",
      "Từ vựng theo chủ đề: Môi trường, du lịch, văn hóa, khoa học",
      "Kỹ năng nghe: Nghe hiểu thông tin chi tiết, phân biệt ý chính và ý phụ",
      "Kỹ năng nói: Thảo luận, trình bày ý kiến cá nhân về các chủ đề quen thuộc",
      "Kỹ năng đọc: Đọc hiểu văn bản dài hơn, trả lời câu hỏi chi tiết",
      "Kỹ năng viết: Viết đoạn văn có cấu trúc rõ ràng, sử dụng từ nối",
    ],
  },
  "grade-8": {
    title: "Tiếng Anh Lớp 8",
    category: "middle-school",
    description:
      "Khóa học tiếng Anh dành cho học sinh lớp 8, nâng cao kỹ năng giao tiếp và chuẩn bị cho các kỳ thi quan trọng.",
    image: "/placeholder.svg?height=600&width=1200",
    targetLearners: "Học sinh lớp 8, độ tuổi 13-14, đã có nền tảng tiếng Anh từ lớp 6 và 7",
    duration: "3 tháng",
    sessionsPerWeek: "2 buổi/tuần, mỗi buổi 1 giờ 45 phút",
    price: "7,000,000 VNĐ",
    target: "Nâng cao kỹ năng và chuẩn bị cho các kỳ thi",
    level: "Trung cấp",
    objectives: [
      "Học sinh sẽ có trình độ tương đương với level A2",
      "Mở rộng vốn từ vựng và cấu trúc nâng cao",
      "Phát triển khả năng giao tiếp trôi chảy về nhiều chủ đề, biết đặt câu hỏi và trả lời về những sự việc xung quanh",
      "Đọc hiểu các bài đọc dài và phức tạp hơn",
      "Viết được các bài luận ngắn có cấu trúc rõ ràng",
    ],
    benefits: [
      "Giáo trình được thiết kế phù hợp với chương trình của Bộ Giáo dục và Đào tạo",
      "Lớp học quy mô nhỏ với tối đa 20 học viên",
      "Giảng viên có kinh nghiệm giảng dạy và ôn thi THCS",
      "Phương pháp giảng dạy tương tác, kết hợp học tập và thực hành",
      "Tài liệu học tập phong phú và bài tập về nhà được thiết kế phù hợp",
      "Báo cáo tiến độ học tập định kỳ cho phụ huynh",
    ],
    content: [
      "Ngữ pháp nâng cao: Câu điều kiện loại 2, thì tương lai hoàn thành, câu bị động",
      "Từ vựng theo chủ đề: Công nghệ, nghề nghiệp, sức khỏe, giáo dục",
      "Kỹ năng nghe: Nghe hiểu các bài giảng, hội thoại phức tạp",
      "Kỹ năng nói: Tranh luận, thuyết trình về các chủ đề học thuật",
      "Kỹ năng đọc: Đọc hiểu văn bản học thuật, phân tích nội dung",
      "Kỹ năng viết: Viết bài luận có lập luận logic, sử dụng từ vựng học thuật",
    ],
  },
  "grade-9": {
    title: "Tiếng Anh Lớp 9",
    category: "middle-school",
    description:
      "Khóa học tiếng Anh dành cho học sinh lớp 9, ôn tập và chuẩn bị cho kỳ thi vào lớp 10 và các kỳ thi tiếng Anh quốc tế.",
    image: "/placeholder.svg?height=600&width=1200",
    targetLearners: "Học sinh lớp 9, độ tuổi 14-15, chuẩn bị cho kỳ thi vào lớp 10 và các kỳ thi tiếng Anh quốc tế",
    duration: "3 tháng",
    sessionsPerWeek: "2 buổi/tuần, mỗi buổi 1 giờ 45 phút",
    price: "Học phí đóng theo tháng",
    target: "Sẵn sàng cho kỳ thi vào lớp 10 và các kỳ thi quốc tế",
    level: "Trung cấp - Cao cấp",
    objectives: [
      "Nắm vững toàn bộ kiến thức ngữ pháp trong chương trình THCS",
      "Giúp học sinh làm thành thạo các dạng bài trong đề thi vào cấp 3",
      "Phát triển khả năng làm bài thi đọc hiểu và nghe hiểu hiệu quả",
      "Viết được các bài luận có cấu trúc rõ ràng và logic",
      "Phát triển kỹ năng nói trôi chảy và tự tin",
    ],
    benefits: [
      "Giáo trình được thiết kế đặc biệt cho việc ôn thi vào lớp 10",
      "Lớp học quy mô nhỏ với tối đa 20 học viên",
      "Giảng viên có kinh nghiệm luyện thi vào lớp 10 và các kỳ thi quốc tế",
      "Phương pháp giảng dạy tập trung vào kỹ năng làm bài thi",
      "Tài liệu học tập phong phú và đề thi thử được cập nhật thường xuyên",
      "Báo cáo tiến độ học tập định kỳ cho phụ huynh",
    ],
    content: [
      "Ôn tập toàn diện ngữ pháp: Tất cả các thì, câu điều kiện, câu bị động, câu gián tiếp",
      "Từ vựng theo chủ đề thi: Môi trường, xã hội, khoa học, văn hóa",
      "Kỹ năng làm bài thi: Chiến lược làm bài trắc nghiệm, điền từ, đọc hiểu",
      "Luyện đề: Làm các đề thi thử theo cấu trúc đề thi vào lớp 10",
      "Kỹ năng viết: Viết bài luận theo yêu cầu của đề thi",
      "Kỹ năng nói: Trả lời câu hỏi phỏng vấn, thuyết trình theo chủ đề",
    ],
  },

  // IELTS Courses
  "ielts-foundation": {
    title: "IELTS Foundation",
    category: "ielts",
    description: "Khóa học chuẩn bị nền tảng cho IELTS, dành cho người mới bắt đầu hoặc có trình độ tiếng Anh cơ bản.",
    image: "/placeholder.svg?height=600&width=1200",
    targetLearners:
      "Người học có trình độ tiếng Anh cơ bản (tương đương A1-A2), muốn chuẩn bị nền tảng trước khi học IELTS chính thức",
    duration: "3 tháng",
    sessionsPerWeek: "2 buổi/tuần, mỗi buổi 1 giờ 45 phút",
    price: "7,500,000 VNĐ/khóa",
    target: "IELTS 5.5",
    level: "Sơ cấp",
    objectives: [
      "Hiểu rõ định dạng và yêu cầu của bài thi IELTS",
      "Nắm vững các cấu trúc ngữ pháp cơ bản cần thiết cho IELTS",
      "Phát triển vốn từ vựng theo chủ đề IELTS",
      "Làm quen với các dạng bài tập trong phần thi Nghe và Đọc",
      "Nắm vững cấu trúc và cách viết các dạng bài trong IELTS Writing",
      "Phát triển kỹ năng nói theo các phần của bài thi IELTS Speaking",
      "Xây dựng chiến lược làm bài hiệu quả cho từng phần thi",
    ],
    benefits: [
      "Giáo trình được thiết kế đặc biệt cho người mới bắt đầu học IELTS",
      "Lớp học quy mô nhỏ với tối đa 20 học viên",
      "Giảng viên có kinh nghiệm giảng dạy và ôn thi IELTS",
      "Phương pháp giảng dạy tương tác, tập trung vào chiến lược làm bài",
      "Tài liệu học tập phong phú và bài tập về nhà được thiết kế phù hợp",
      "Đánh giá trình độ định kỳ để điều chỉnh lộ trình học tập",
      "Hỗ trợ học tập ngoài giờ thông qua nền tảng trực tuyến",
      "Bài thi thử IELTS vào cuối khóa học với phản hồi chi tiết",
    ],
    content: [
      "Giới thiệu tổng quan về IELTS: Cấu trúc bài thi, thang điểm, chiến lược làm bài",
      "Ngữ pháp cơ bản: Các thì, cấu trúc câu, liên từ, giới từ",
      "Từ vựng theo chủ đề IELTS: Giáo dục, môi trường, công nghệ, sức khỏe",
      "IELTS Listening: Làm quen với các dạng bài nghe, chiến lược làm bài",
      "IELTS Reading: Kỹ thuật đọc hiểu, các dạng câu hỏi phổ biến",
      "IELTS Writing: Cấu trúc bài viết Task 1 và Task 2, phân tích đề, lập dàn ý",
      "IELTS Speaking: Cách trả lời các phần thi nói, phát âm chuẩn",
    ],
  },
  "ielts-intermediate": {
    title: "IELTS Intermediate",
    category: "ielts",
    description:
      "Khóa học IELTS trung cấp, nâng cao kỹ năng và chiến lược làm bài thi, phù hợp cho người đã có nền tảng.",
    image: "/placeholder.svg?height=600&width=1200",
    targetLearners:
      "Người học có trình độ tiếng Anh khá (tương đương B2), đã có kiến thức về IELTS và muốn đạt điểm 6.0-7.0",
    duration: "3.5 tháng",
    sessionsPerWeek: "2 buổi/tuần, mỗi buổi 1 giờ 45 phút",
    price: "8,500,000 VNĐ",
    target: "IELTS 6.5",
    level: "Trung cấp - Cao cấp",
    objectives: [
      "Nắm vững các chiến lược làm bài thi IELTS nâng cao",
      "Phát triển vốn từ vựng học thuật phong phú",
      "Cải thiện khả năng nghe hiểu với tốc độ nhanh và accent khác nhau",
      "Phát triển khả năng nói trôi chảy và tự nhiên về các chủ đề phức tạp",
      "Nâng cao kỹ năng viết bài luận có cấu trúc rõ ràng và ý tưởng phát triển logic",
    ],
    benefits: [
      "Giáo trình nâng cao được biên soạn bởi chuyên gia IELTS bám sát khung năng lực chuẩn Châu Âu",
      "Lớp học quy mô nhỏ với tối đa 20 học viên",
      "Giảng viên có kinh nghiệm giảng dạy và ôn thi phong phú",
      "Phương pháp giảng dạy tương tác, tập trung vào chiến lược làm bài nâng cao",
      "Tài liệu học tập phong phú và bài tập về nhà được thiết kế phù hợp",
      "Thi thử IELTS 2 lần trong khóa học với phản hồi chi tiết",
    ],
    content: [
      "IELTS Listening nâng cao: Nghe hiểu các bài giảng học thuật, hội thoại phức tạp",
      "IELTS Reading nâng cao: Đọc hiểu các bài báo học thuật, kỹ thuật đọc lướt và đọc chi tiết",
      "IELTS Writing Task 1: Phân tích biểu đồ, bảng số liệu phức tạp, so sánh dữ liệu",
      "IELTS Writing Task 2: Viết bài luận với lập luận sắc bén, ví dụ thuyết phục",
      "IELTS Speaking: Trả lời các câu hỏi phức tạp, phát triển ý tưởng, sử dụng từ vựng học thuật",
      "Từ vựng học thuật: Mở rộng vốn từ vựng theo chủ đề IELTS nâng cao",
      "Ngữ pháp nâng cao: Cấu trúc câu phức, thành ngữ, cụm từ học thuật",
    ],
  },
  "ielts-advanced": {
    title: "IELTS Advanced",
    category: "ielts",
    description:
      "Khóa học IELTS cao cấp, hoàn thiện kỹ năng và chiến lược làm bài thi, dành cho học viên muốn đạt điểm cao.",
    image: "/placeholder.svg?height=600&width=1200",
    targetLearners:
      "Người học có trình độ tiếng Anh cao (tương đương C1), đã có kiến thức vững về IELTS và muốn đạt điểm 7.0-8.5",
    duration: "4 tháng",
    sessionsPerWeek: "2 buổi/tuần, mỗi buổi 1 giờ 45 phút",
    price: "9,000,000 VNĐ",
    target: "IELTS 7.5",
    level: "Cao cấp",
    objectives: [
      "Nắm vững các chiến lược làm bài thi IELTS để đạt điểm cao (7.0-8.5)",
      "Phát triển vốn từ vựng học thuật phong phú và chuyên ngành",
      "Hoàn thiện khả năng nghe hiểu với các bài nghe học thuật và chuyên ngành",
      "Phát triển khả năng nghiên cứu và thuyết trình, giúp học viên nói tiếng Anh trôi chảy và tự tin hơn",
      "Hoàn thiện kỹ năng viết bài luận học thuật với lập luận sắc bén và cấu trúc hoàn chỉnh",
    ],
    benefits: [
      "Giáo trình cao cấp được biên soạn bởi chuyên gia IELTS bám sát khung năng lực Châu Âu",
      "Lớp học quy mô siêu nhỏ với tối đa 10 học viên",
      "Giảng viên có kinh nghiệm giảng dạy và ôn thi phong phú",
      "Phương pháp giảng dạy tương tác, tập trung vào chiến lược đạt điểm cao",
      "Tài liệu học tập cao cấp và bài tập về nhà được thiết kế đặc biệt",
      "Thi thử IELTS 3 lần trong khóa học với phản hồi chi tiết từ giảng viên",
    ],
    content: [
      "Chiến lược đạt điểm cao: Phân tích tiêu chí chấm điểm, kỹ thuật làm bài nâng cao",
      "IELTS Listening band 7+: Nghe hiểu các bài giảng chuyên ngành, hội thảo học thuật",
      "IELTS Reading band 7+: Đọc hiểu các bài báo nghiên cứu, tài liệu chuyên ngành",
      "IELTS Writing Task 1 band 7+: Phân tích và mô tả dữ liệu phức tạp, so sánh nhiều nguồn thông tin",
      "IELTS Writing Task 2 band 7+: Viết bài luận học thuật với lập luận sắc bén, ví dụ thuyết phục",
      "IELTS Speaking band 7+: Thảo luận các vấn đề phức tạp, trình bày quan điểm một cách thuyết phục",
      "Từ vựng chuyên ngành: Mở rộng vốn từ vựng học thuật cao cấp theo lĩnh vực",
    ],
  },

  // Soft Skills Courses
  "critical-thinking": {
    title: "Tư duy phản biện - Công dân toàn cầu",
    category: "soft-skills",
    description:
      "Khóa học phát triển tư duy phản biện và kỹ năng công dân toàn cầu, giúp học viên sẵn sàng cho thế giới hiện đại.",
    image: "/placeholder.svg?height=600&width=1200",
    targetLearners:
      "Học sinh, sinh viên và người đi làm có nền tảng tiếng Anh cao (IELTS 6.5 hoặc tương đương) muốn phát triển tư duy phản biện và kỹ năng công dân toàn cầu",
    duration: "2.5 tháng",
    sessionsPerWeek: "2 buổi/tuần, mỗi buổi 1 giờ 45 phút",
    price: "8,000,000 VNĐ",
    target: "Phát triển tư duy phản biện và kỹ năng công dân toàn cầu",
    level: "Cao cấp",
    objectives: [
      "Khả năng phân tích những vấn đề thực tế và diễn thuyết những vấn đề đó một cách rõ ràng, mạch lạc, tự tin",
      "Nâng cao kỹ năng giao tiếp, thuyết trình, lập luận và tranh luận hiệu quả",
      'Giúp cho học viên có một tư duy mang tính quốc tế hơn, hiểu rõ những vấn đề từ nhiều góc nhìn đa văn hóa hơn, và trở thành những công dân hội nhập hơn, "toàn cầu" hơn',
      "Ứng dụng tư duy phản biện và kỹ năng công dân toàn cầu trong cuộc sống hàng ngày",
    ],
    benefits: [
      "Giáo trình được thiết kế bởi chuyên gia giàu kinh nghiệm trong lĩnh vực giáo dục",
      "Lớp học quy mô nhỏ với tối đa 15 học viên",
      "Giảng viên có kinh nghiệm trong lĩnh vực giáo dục và phát triển kỹ năng mềm",
      "Phương pháp giảng dạy tương tác, kết hợp lý thuyết và thực hành",
      "Tài liệu học tập phong phú và bài tập thực hành thú vị",
      "Chứng chỉ hoàn thành khóa học được công nhận",
    ],
    content: [
      "Tư duy phản biện: Khái niệm, tầm quan trọng và ứng dụng",
      "Kỹ năng phân tích và đánh giá thông tin: Phân biệt sự thật và ý kiến",
      "Kỹ năng lập luận: Xây dựng lập luận mạnh mẽ và thuyết phục",
      "Kỹ năng giải quyết vấn đề: Phương pháp tiếp cận và giải quyết vấn đề phức tạp",
      "Công dân toàn cầu: Khái niệm và vai trò trong thế giới hiện đại",
      "Hiểu biết đa văn hóa: Tôn trọng và đánh giá cao sự đa dạng văn hóa",
      "Kỹ năng giao tiếp liên văn hóa: Giao tiếp hiệu quả trong môi trường đa văn hóa",
    ],
  },
}
