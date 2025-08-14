import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"
import SectionHeader from "@/components/section-header"
import AnimationWrapper from "@/components/animation-wrapper"
import { teamMembers, facilities } from "@/data/info-teacher"
export default function AboutPage() {
  // Import teamMembers from data file and use directly
  const teachers = teamMembers

  // Filter facilities to only include modern classroom and practice area
  const filteredFacilities = facilities.filter(facility =>
    facility.title === "Phòng học hiện đại" ||
    facility.title === "Khu vực thực hành"
  )

  return (
    <div className="flex flex-col">
      {/* Header Section with Background Image */}
      <SectionHeader backgroundImage="https://i.imgur.com/bU6tTVk.png" />

      {/* Mission & Vision Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#64A162] sm:text-4xl">Trách nhiệm của chúng tôi</h2>
            <p className="mt-4 text-lg text-gray-600">
                Giúp bạn đạt được mục tiêu học tiếng Anh của mình và trở nên khác biệt trong cuộc sống
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-3">
            <AnimationWrapper animation="fade-up">
              <Card className="border-0 shadow-md hover-lift h-full" style={{ backgroundColor: "#ffee64" }}>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-2xl font-bold text-[#64A162]">Sứ mệnh</h2>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 h-3 w-3 flex-shrink-0 rounded-full bg-[#64A162]"></span>
                      <span>Đào tạo và phát triển đều 4 kỹ năng, chú trọng Speaking & Writing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 h-3 w-3 flex-shrink-0 bg-[#9ddaec]"></span>
                      <span>Phát triển tư duy phản biện</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1.5 mr-3 h-0 w-0 flex-shrink-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#fca7b3]"></div>
                      <span>
                        Đóng vai trò là trợ thủ đắc lực, là "người truyền lửa", thắp sáng ước mơ chinh phục tiếng anh
                        cho các học viên
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 h-3 w-3 flex-shrink-0 rounded-full bg-[#fc8a3d]"></span>
                      <span>
                        Xây dựng cộng đồng học Tiếng Anh đặc biệt, nơi các học viên có cùng một mục tiêu chung
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={200}>
              <Card className="border-0 shadow-md hover-lift h-full" style={{ backgroundColor: "#9ddaec" }}>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-2xl font-bold text-[#64A162]">Tầm nhìn</h2>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 h-3 w-3 flex-shrink-0 rounded-full bg-[#64A162]"></span>
                      <span>Dẫn đầu đào tạo tiếng Anh tại Hà Nội</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 h-3 w-3 flex-shrink-0 bg-[#ffee64]"></span>
                      <span>Tiên phong phát triển tư duy toàn cầu</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1.5 mr-3 h-0 w-0 flex-shrink-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#fca7b3]"></div>
                      <span>Nâng tầm tinh thần tự học, sự chủ động trong cách tư duy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 h-3 w-3 flex-shrink-0 rounded-full bg-[#fc8a3d]"></span>
                      <span>Đào tạo ra các thế hệ công dân toàn cầu</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={400}>
              <Card className="border-0 shadow-md hover-lift h-full" style={{ backgroundColor: "#fca7b3" }}>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-2xl font-bold text-[#64A162]">Giá trị cốt lõi</h2>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 h-3 w-3 flex-shrink-0 rounded-full bg-[#64A162]"></span>
                      <span>Đồng hành (Accompany)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 h-3 w-3 flex-shrink-0 bg-[#ffee64]"></span>
                      <span>Bền vững (Sustainability)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1.5 mr-3 h-0 w-0 flex-shrink-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#9ddaec]"></div>
                      <span>Kỷ luật (Discipline)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 h-3 w-3 flex-shrink-0 bg-[#fc8a3d]"></span>
                      <span>Phát triển (Growth)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1.5 mr-3 h-0 w-0 flex-shrink-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#64A162]"></div>
                      <span>Tư duy (Mindset)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-[#f5f9f5]">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-up">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#64A162] sm:text-4xl">Đội ngũ giảng viên</h2>
              <p className="mt-4 text-lg text-gray-600">
                Gặp gỡ những chuyên gia sẽ đồng hành cùng bạn trong hành trình học tiếng Anh
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimationWrapper key={index} animation="fade-up" delay={index * 200}>
                <Card className="border-0 shadow-md overflow-hidden hover-lift h-full">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover hover-bright transition-all duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#64A162]">{member.name}</h3>
                    <p className="text-[#fc8a3d] font-medium mb-4">{member.role}</p>
                    <ul className="space-y-3">
                      {member.bio.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          {item.shape === "circle" && (
                            <span
                              className="mt-1.5 mr-3 h-3 w-3 flex-shrink-0 rounded-full"
                              style={{ backgroundColor: item.color }}
                            ></span>
                          )}
                          {item.shape === "square" && (
                            <span
                              className="mt-1.5 mr-3 h-3 w-3 flex-shrink-0"
                              style={{ backgroundColor: item.color }}
                            ></span>
                          )}
                          {item.shape === "triangle" && (
                            <div
                              className="mt-1.5 mr-3 h-0 w-0 flex-shrink-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent"
                              style={{ borderBottomColor: item.color }}
                            ></div>
                          )}
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-up">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-[#64A162] sm:text-4xl">Cơ sở vật chất</h2>
              <p className="mt-4 text-lg text-gray-600">Môi trường học tập hiện đại, thoải mái và đầy đủ tiện nghi</p>
            </div>
          </AnimationWrapper>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility, index) => (
              <AnimationWrapper key={index} animation="fade-up" delay={index * 200}>
                <Card
                  className={`border-0 overflow-hidden shadow-md hover-lift transition-colors duration-300 h-full ${facility.title === "Phòng học hiện đại"
                    ? "hover:bg-[#9ddaec]/20"
                    : facility.title === "Khu vực thực hành"
                      ? "hover:bg-[#fca7b3]/20"
                      : "hover:bg-[#fc8a3d]/20"
                    }`}
                >
                  <div className="relative aspect-video w-full">
                    <Carousel images={facility.images} autoPlay={true} interval={5000} />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#64A162]">{facility.title}</h3>
                    <p className="mt-2 text-gray-600">{facility.description}</p>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
