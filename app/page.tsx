import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Star,
  ChevronRight,
  Laptop,
  Users2,
  Monitor,
  BookOpenCheck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const courses = [
    {
      title: "BSc (Hons) Computer Systems Engineering (IT)",
      description:
        "Comprehensive program covering computer systems, networking, and IT infrastructure management with hands-on laboratory experience.",
      duration: "4 Years",
      level: "Undergraduate",
      // Using Unsplash for reliable images
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
      icon: <Laptop className="h-6 w-6" />,
    },
    {
      title: "BA (Hons) Business and Management (BBA)",
      description:
        "Strategic business education focusing on management principles, entrepreneurial skills, and real-world case studies.",
      duration: "3 Years",
      level: "Undergraduate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
      icon: <Users2 className="h-6 w-6" />,
    },
    {
      title: "BSc (Hons) International Tourism and Hospitality Management (BHM)",
      description:
        "Global perspective on tourism industry with practical hospitality management training and international exposure.",
      duration: "4 Years",
      level: "Undergraduate",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&crop=center",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "BSc (Hons) Computer Science",
      description:
        "Cutting-edge computer science program with focus on software development, algorithms, and emerging technologies.",
      duration: "4 Years",
      level: "Undergraduate",
      isNew: true,
      status: "Subject to Approval",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "BSc (Hons) Cyber Security and Digital Forensics",
      description:
        "Specialized program in cybersecurity, digital investigation, ethical hacking, and information security protocols.",
      duration: "4 Years",
      level: "Undergraduate",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop&crop=center",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  const stats = [
    { number: "13+", label: "Years of Excellence", icon: <Calendar className="h-5 w-5" /> },
    { number: "2000+", label: "Graduates", icon: <Users className="h-5 w-5" /> },
    { number: "5", label: "Degree Programs", icon: <BookOpen className="h-5 w-5" /> },
    { number: "100%", label: "Industry Relevant", icon: <Award className="h-5 w-5" /> },
  ]

  const facilities = [
    {
      title: "Modern Computer Laboratories",
      description:
        "State-of-the-art computer labs with latest technology and software for hands-on learning experience.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop&crop=center",
      icon: <Monitor className="h-6 w-6" />,
    },
    {
      title: "Comprehensive Library",
      description: "Extensive digital and physical learning resources with quiet study spaces and research facilities.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center",
      icon: <BookOpenCheck className="h-6 w-6" />,
    },
    {
      title: "Vibrant Campus Life",
      description: "Active student community with various clubs, activities, and events throughout the academic year.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&crop=center",
      icon: <Users className="h-6 w-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="h-10 w-10 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                ISMT
              </span>
              <p className="text-xs text-muted-foreground -mt-1">Excellence in Education</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="text-sm font-medium hover:text-emerald-600 transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-emerald-600 transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#courses"
              className="text-sm font-medium hover:text-emerald-600 transition-colors relative group"
            >
              Courses
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#facilities"
              className="text-sm font-medium hover:text-emerald-600 transition-colors relative group"
            >
              Facilities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-emerald-600 transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </Link>
            <Button
              size="sm"
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 shadow-lg text-white"
            >
              Apply Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-background to-orange-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className="bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm">
                    <Star className="h-3 w-3 mr-1" />
                    Established 2011
                  </Badge>
                  <Badge variant="outline" className="bg-orange-50 border-orange-200 text-orange-700 shadow-sm">
                    <Globe className="h-3 w-3 mr-1" />
                    UK Partnerships
                  </Badge>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Bridging Academia and{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                    Industry
                  </span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                  ISMT is redefining higher education with internationally recognized qualifications in partnership with
                  University of Sunderland, UK, and Pearson Edexcel, UK. Join Nepal's leading institution for academic
                  excellence.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 shadow-lg text-white"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Explore Courses
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 group bg-transparent shadow-sm border-emerald-200 hover:bg-emerald-50"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm flex-wrap">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <Globe className="h-4 w-4" />
                  International Standards
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="h-2 w-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <Award className="h-4 w-4" />
                  UK Partnerships
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/30 to-orange-200/30 rounded-2xl blur-3xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=500&fit=crop&crop=center"
                width={600}
                height={500}
                alt="ISMT Campus Building"
                className="relative aspect-[4/3] overflow-hidden rounded-2xl object-cover shadow-2xl border"
                crossOrigin="anonymous"
              />
              <div className="absolute -bottom-4 -left-4 bg-background rounded-lg p-4 shadow-lg border">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">13+ Years Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-2">
                  <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">About ISMT</h2>
            <p className="text-muted-foreground md:text-xl">
              Contributing to Nepal's higher education landscape since 2011
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-16">
            <div className="relative rounded-2xl bg-gradient-to-br from-emerald-50 to-orange-50 p-8 md:p-12 border shadow-sm">
              <div className="absolute top-6 left-6 h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="ml-16">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed md:text-lg">
                  Established in 2011, ISMT is on a mission to contribute to Nepal's higher education by providing
                  internationally recognized and industry relevant qualifications. In academic partnership with the
                  University of Sunderland, UK, and Pearson Edexcel, UK, ISMT is redefining higher education with a bold
                  vision—bridging the gap between academia and industry. ISMT's commitment to academic excellence is
                  reflected in its inclusive and cost-effective educational approach, delivering international standards
                  while adopting core local values.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Committed to delivering international standards while adopting core local values through our inclusive
                  and cost-effective educational approach.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>International Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Academic partnerships with University of Sunderland, UK, and Pearson Edexcel, UK, ensuring globally
                  recognized qualifications.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Industry Relevance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bridging the gap between academia and industry with qualifications that are both internationally
                  recognized and industry relevant.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Partnership Logos */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-8">Our Academic Partners</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="text-center group">
                <div className="h-20 w-48 bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-700">University of</div>
                    <div className="text-xl font-bold text-emerald-600">SUNDERLAND</div>
                    <div className="text-xs text-slate-500">UK</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Academic Partnership</p>
              </div>
              <div className="text-center group">
                <div className="h-20 w-48 bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">PEARSON</div>
                    <div className="text-sm font-semibold text-slate-600">EDEXCEL</div>
                    <div className="text-xs text-slate-500">UK</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Qualification Provider</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gradient-to-br from-emerald-50/50 to-orange-50/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Our Courses</h2>
            <p className="text-muted-foreground md:text-xl">
              Internationally recognized programs designed for the modern world
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    width={400}
                    height={300}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="secondary" className="bg-background/90 shadow-sm">
                      {course.level}
                    </Badge>
                    {course.isNew && <Badge className="bg-emerald-600 text-white shadow-sm">New</Badge>}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg leading-tight group-hover:text-emerald-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  {course.status && (
                    <Badge variant="outline" className="w-fit text-xs border-orange-200 text-orange-700">
                      {course.status}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-sm leading-relaxed">{course.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-emerald-600 group-hover:text-white transition-colors bg-transparent border-emerald-200"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg">
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Our Facilities</h2>
            <p className="text-muted-foreground md:text-xl">World-class infrastructure for comprehensive learning</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {facilities.map((facility, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    width={400}
                    height={300}
                    alt={facility.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                    {facility.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Ready to Start Your Journey?</h2>
            <p className="text-white/90 md:text-xl mb-8">
              Join ISMT and be part of Nepal's leading higher education institution with international recognition
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="h-12 shadow-lg bg-white text-emerald-600 hover:bg-gray-50"
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent shadow-lg"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t bg-slate-50">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">ISMT</span>
                  <p className="text-xs text-muted-foreground">Excellence in Education</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bridging the gap between academia and industry since 2011. Your gateway to international education in
                Nepal.
              </p>
              <div className="flex gap-2">
                <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center hover:bg-emerald-200 transition-colors cursor-pointer">
                  <Globe className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center hover:bg-emerald-200 transition-colors cursor-pointer">
                  <Award className="h-4 w-4 text-emerald-600" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                    Faculty
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                    Student Life
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Programs</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                    Computer Systems Engineering
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                    Business Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                    Tourism & Hospitality
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                    Computer Science
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-emerald-600 transition-colors">
                    Cyber Security
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">ISMT College</p>
                    <p className="text-muted-foreground">Kathmandu, Nepal</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-muted-foreground">+977-1-XXXXXXX</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-muted-foreground">info@ismt.edu.np</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                &copy; {new Date().getFullYear()} ISMT College. All rights reserved. | Developed by Bishal Bhattarai
              </p>
              <p className="text-sm text-muted-foreground text-center md:text-right">
                In partnership with University of Sunderland, UK & Pearson Edexcel, UK
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
