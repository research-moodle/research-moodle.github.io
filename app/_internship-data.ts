import { ProfileCategory } from "@/types/enum";

export const data: InternshipDetailsWithProfiles = {
  _id: "6554367889b517b7ec08e40",
  applicationLink: "https://forms.gle/HhjUXSqxT7sZwSbL8",
  applicationProcess:
    "The application process consists of an online application to be submitted through this webpage. A link to appropriate forms will be available here when the application process begins. Please read the description and eligibility criteria carefully before filling the application form.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, inventore quis modi odio magni sequi delectus voluptas, ipsam vitae labore ipsum quibusdam. Dolorem ipsum commodi saepe adipisci neque, error voluptas, nihil unde soluta consectetur quia non. Ducimus error mollitia voluptatibus sed nulla molestias enim? Totam a quam ratione cumque, hic excepturi magnam illum eligendi rem. Distinctio perspiciatis, architecto animi excepturi dolorum nemo. Expedita eligendi reprehenderit tempora, consequatur voluptate, ipsa laborum distinctio sed est, ipsum dicta ab pariatur quo temporibus. Distinctio perspiciatis obcaecati laborum sunt. Et eum voluptate vitae molestiae quaerat, quam laboriosam non ad facilis voluptates adipisci. Rem quo beatae perferendis, aspernatur nihil, voluptates incidunt vero praesentium molestiae ad labore molestias adipisci velit doloribus hic possimus dicta eos rerum aliquid.",
  eligibility: [
    "Should be in the Second year of a Masters program, or third / fourth year of a Bachelors program. Branch / discipline of study will be as per the project requirements",
    "Should be among the top 10% in all the previous years in your discipline in the College / University / Institute. A certificate from the Principal (in the prescribed format) to this effect will have to be submitted at the time of applying.",
    "Should be a full-time student while applying and till the completion of the Internship. You may submit a partial project report before (e.g., in April) the completion of the Internship (e.g., in June) if the academic calendar of your College / Institute / University requires you to do so, with the prior consent of the Internship Guide.",
    "Should be able to work full-time for the Internship. Part-time internship is not allowed. A certificate to the effect that there are no course work requirements during the internship period has to be submitted at the time of applying.",
  ],
  open: true,
  selectionProcedure: [
    "The selection procedure consists of preliminary screening of applications, followed by test/ interview.",
    "Selection depends upon consistently brilliant academic performance (relative rank in the class/University), work carried out by the student besides his regular academic work, participation/recognition in competitions such as Techfest, Olympiads, National Talent Search Exams, and performance in the interview.",
    "The interns will have only below mentioned menttors as advisor.",
    "Only one proposal from one faculty member will be considered for the internship.",
  ],
  faq: [],
  timeline: [
    {
      task: "Start and last date of submission",
      tentativeTimeline: "1st Nov - 15 Nov, 2023",
    },
    {
      task: "Shortlisting",
      tentativeTimeline:
        "Shortlisting is under process and will be updated shortly by 26.11.2023",
    },
    {
      task: "Dates for Intervieww",
      tentativeTimeline: "30th Nov, 2023 - 07th Dec, 2023",
    },
    {
      task: "Duration of Internship",
      tentativeTimeline:
        "Duration will be minimum four months from the date of joining.",
    },
  ],
  topics: [
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "Image Processing",
  ],
  profiles: [
    {
      _id: "1",
      name: "Vinay Kumar Verma",
      linkedIn: "https://www.linkedin.com/in/vinay-kumar-verma-6a315468/",
      category: ProfileCategory.InternshipMentor,
      college: null,
      collegeTier: null,
      currentPosition: null,
      highlightedText: "Duke University, USA",
      internshipTopic: null,
      profileImage: "https://i.ibb.co/jRfVFg8/Vinay-Kumar-Verma.jpg",
      website: null,
    },
    {
      _id: "2",
      name: "Pravendra Singh",
      linkedIn: "https://www.linkedin.com/in/pravendra-singh-001/",
      category: ProfileCategory.InternshipMentor,
      college: null,
      collegeTier: null,
      currentPosition: null,
      highlightedText: "IIT Roorkee",
      internshipTopic: null,
      profileImage:
        "https://i.ibb.co/p3CgHBQ/b254ea73-4cae-41e0-a70a-e1cfbf29b5ae.jpg",
      website: null,
    },
    {
      _id: "3",
      name: "Swalpa Kumar Roy",
      linkedIn: "https://www.linkedin.com/in/swalpa-kumar-roy-9b51234a/",
      category: ProfileCategory.InternshipMentor,
      college: null,
      collegeTier: null,
      currentPosition: null,
      highlightedText: "AGEMC, West Bengal",
      internshipTopic: null,
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1714064572/j3q3y9v0bat5mfjsefiq.jpg",
      website: null,
    },
    {
      _id: "4",
      name: "Dwarikanath Mahapatra",
      linkedIn: "https://scholar.google.com/citations?user=j5K7HPoAAAAJ&hl=en",
      category: ProfileCategory.InternshipMentor,
      college: null,
      collegeTier: null,
      currentPosition: null,
      highlightedText: "Inception Institute of AI, UAE",
      internshipTopic: null,
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1703048057/eg2h24du4u5r9darujea.jpg",
      website: null,
    },
    {
      _id: "5",
      name: "Swagatam Das",
      linkedIn: "https://www.linkedin.com/in/swagatam-das-b26a186?originalSubdomain=in",
      category: ProfileCategory.InternshipMentor,
      college: null,
      collegeTier: null,
      currentPosition: null,
      highlightedText: "ISI Kolkata",
      internshipTopic: null,
      profileImage: "https://i.postimg.cc/mD690wHh/IMG-20180426-192810526.jpg",
      website: null,
    },
    // Tier 1 colleges
    {
      _id: "13",
      name: "Prit Mhala",
      linkedIn: "https://www.linkedin.com/in/prit-mhala-8baab7223/",
      category: ProfileCategory.CurrentStudent,
      college: "Indian Institute of Information Technology, Pune",
      collegeTier: true,
      currentPosition: null,
      highlightedText: "IIIT Pune",
      internshipTopic: "Deep learning",
      profileImage:
        "https://i.ibb.co/P9tjKwY/prit-mhala-profile-photo-Prit-Mhala.jpg",
      website: null,
    },
    {
      _id: "12",
      name: "Gourav Banik",
      linkedIn: "https://www.linkedin.com/in/gourav-banik-a92225201/",
      category: ProfileCategory.CurrentStudent,
      college: "National Institute of Technology Raipur",
      collegeTier: true,
      currentPosition: null,
      highlightedText: "NIT Raipur",
      internshipTopic: "Deep learning",
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1700219180/fxic8hb7985jeyyz6ahh.jpg",
      website: null,
    },
    {
      _id: "11",
      name: "Soham Mitra",
      linkedIn: "www.linkedin.com/in/soham-mitra-3a8a4b247",
      category: ProfileCategory.CurrentStudent,
      college: "Indian Institute of Information Technology, Kalyani",
      collegeTier: true,
      currentPosition: null,
      highlightedText: "IIIT Kalyani",
      internshipTopic: "Deep learning",
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1700219358/ke4icjqh3jjhwttd7ntq.jpg",
      website: null,
    },
    {
      _id: "10",
      name: "Risab Biswas",
      linkedIn: "https://www.linkedin.com/in/risab-biswas/",
      category: ProfileCategory.CurrentStudent,
      college: "BITS Pilani",
      collegeTier: true,
      currentPosition: null,
      highlightedText: "BITS Pilani",
      internshipTopic: "Deep learning",
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1700220859/eqnwl9d7pz7lcj0gtjjy.png",
      website: null,
    },
    {
      _id: "9",
      name: "Atharva Paranjape",
      linkedIn: "https://www.linkedin.com/in/atharva-paranjape-816a0722a/",
      category: ProfileCategory.CurrentStudent,
      college: "Indian Institute of Technology, Delhi",
      collegeTier: true,
      currentPosition: null,
      highlightedText: "IIT Delhi",
      internshipTopic: "Deep learning",
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1700220962/e82q5uzurhsptdxonjgk.jpg",
      website: null,
    },
    {
      _id: "8",
      name: "Kureshi Saniya",
      linkedIn: "https://www.linkedin.com/in/kureshi-saniya",
      category: ProfileCategory.CurrentStudent,
      college: "National Institute Technology, Surat",
      collegeTier: true,
      currentPosition: null,
      highlightedText: "NIT Surat",
      internshipTopic: "Deep learning",
      profileImage:
        "https://i.ibb.co/gz7ts2J/ff9ca070-ddb5-4fdd-b80d-c40071bfb748-U20-ME218-Saniya.jpg",
      website: null,
    },
    {
      _id: "7",
      name: "Wentao Wang",
      linkedIn: null,
      category: ProfileCategory.CurrentStudent,
      college: "Chongqing University of Posts and Telecommunications",
      collegeTier: true,
      currentPosition: null,
      highlightedText: "CUPT, China",
      internshipTopic: "Deep Learning",
      profileImage: "https://i.ibb.co/nzX0ZL4/self-Rick-Wang.jpg",
      website: null,
    },

    {
      _id: "6",
      name: "Zhonghao Chen",
      linkedIn: null,
      category: ProfileCategory.CurrentStudent,
      college: "Hohai University",
      collegeTier: true,
      currentPosition: null,
      highlightedText: "Hohai University",
      internshipTopic: "Deep Learning",
      profileImage: "https://i.ibb.co/2Yt8nYr/profile-Zhonghao-Chen.jpg",
      website: "https://zhonghaochen.github.io/",
    },

    // Tier 2 colleges
    {
      _id: "26",
      name: "Aniket Guchhait",
      linkedIn: "https://www.linkedin.com/in/aniket-guchhait-sunny/",
      category: ProfileCategory.CurrentStudent,
      college: "Ramkrishna Mahato Government Engineering College ",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "RMGEC, West Bengal",
      internshipTopic: "Deep learning",
      profileImage: "https://i.ibb.co/gFmxVgv/aniket-Aniket-Guchhait.png",
      website: null,
    },
    {
      _id: "25",
      name: "Aryan Das",
      linkedIn: "https://www.linkedin.com/in/aryan--das",
      category: ProfileCategory.CurrentStudent,
      college: "VIT Bhopal University",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "VIT, Bhopal",
      internshipTopic: "Deep learning",
      profileImage: "https://i.ibb.co/mJbhbv2/Aryan-Das-Aryan-Das.png",
      website: null,
    },
    {
      _id: "24",
      name: "Rajul Mahto",
      linkedIn: "https://www.linkedin.com/in/rajul-mahto-313463200/",
      category: ProfileCategory.CurrentStudent,
      college: "VIT Bhopal University",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "VIT, Bhopal",
      internshipTopic: "Deep learning",
      profileImage: "https://i.ibb.co/mNYhp2C/RAJUL-MAHTO-21-BCE11533.png",
      website: null,
    },
    {
      _id: "23",
      name: "Atri Sukul",
      linkedIn: "https://www.linkedin.com/in/atri-sukul-35a9b022a",
      category: ProfileCategory.CurrentStudent,
      college: "Jalpaiguri Government Engineering College",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "JGEC, West Bengal",
      internshipTopic: "Deep learning",
      profileImage: "https://i.ibb.co/VH8LWMD/atri-sukul.jpg",
      website: null,
    },
    {
      _id: "22",
      name: "Prachurjya Pathak ",
      linkedIn: "https://www.linkedin.com/in/prachurjyapathak/",
      category: ProfileCategory.CurrentStudent,
      college: "Sikkim Manipal Institute of Technology",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "SMIT, Sikkim",
      internshipTopic: "Deep learning",
      profileImage: "https://i.ibb.co/3sn2bDw/prachurjya-pathak.jpg",
      website: null,
    },
    {
      _id: "21",
      name: "Sayan Kumar Bhowmick",
      linkedIn: "https://www.linkedin.com/in/sayankr007",
      category: ProfileCategory.CurrentStudent,
      college: "Jalpaiguri Government Engineering College",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "JGEC, West Bengal",
      internshipTopic: "Deep learning",
      profileImage: "https://i.ibb.co/Tc1YWXP/Sayan-Kumar-Bhowmick.jpgg",
      website: null,
    },
    {
      _id: "20",
      name: "Dhrubajyoti Sarma",
      linkedIn: "https://www.linkedin.com/in/dhrubajyotisarma",
      category: ProfileCategory.CurrentStudent,
      college: "Sikkim Manipal Institute of Technology",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "SMIT, Sikkim",
      internshipTopic: "Deep learning",
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1700218487/fzgwy49rhdvete6maxwh.png",
      website: null,
    },
    {
      _id: "19",
      name: "Hrishikesh Sarma",
      linkedIn: "https://www.linkedin.com/in/hrishikesharma/",
      category: ProfileCategory.CurrentStudent,
      college: "Sikkim Manipal Institute of Technology",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "SMIT, Sikkim",
      internshipTopic: "Deep learning",
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1700219043/nloomgf3wst9ifnnlpjb.jpg",
      website: null,
    },
    {
      _id: "18",
      name: "Kunal Pasad",
      linkedIn:
        "https://www.linkedin.com/in/kunal-pasad-9254a5246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      category: ProfileCategory.CurrentStudent,
      college: "Sardar Patel Institute of Technology",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "SPIT, Mumbai",
      internshipTopic: "Deep learning",
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1700221168/cch3myg0mpskl0rxffq0.jpg",
      website: null,
    },
    {
      _id: "17",
      name: "Nikita Kansal",
      linkedIn: "https://www.linkedin.com/in/nikita-kansal-65b06521b/",
      category: ProfileCategory.CurrentStudent,
      college: "Giani Zail Singh Campus College of Engineering and Technology",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "GZSCCET, Punjab",
      internshipTopic: "Deep learning",
      profileImage: "https://i.ibb.co/B4KZ1nN/Nikita-Kansal-Nikita-Kansal.jpg",
      website: null,
    },
    {
      _id: "16",
      name: "Mitul Goswami",
      linkedIn: "https://www.linkedin.com/in/mitul-goswami-a6114b230/",
      category: ProfileCategory.CurrentStudent,
      college: "Kalinga Institute of Industrial Technology",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "KIIT Odisha",
      internshipTopic: "Deep learning",
      profileImage: "https://i.ibb.co/yhwHL6N/mitul.jpg",
      website: null,
    },
    {
      _id: "15",
      name: "Sainath Dey",
      linkedIn: "https://www.linkedin.com/in/sainath-dey",
      category: ProfileCategory.CurrentStudent,
      college: "Kalinga Institute of Industrial Technology",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "KIIT Odisha",
      internshipTopic: "Deep learning",
      profileImage: "https://i.ibb.co/KLVcV0V/sainath-dey.jpg",
      website: null,
    },
    {
      _id: "14",
      name: "Ashish",
      linkedIn: "https://www.linkedin.com/in/rathore-ashish-k76/",
      category: ProfileCategory.CurrentStudent,
      college: "Aligarh Muslim University, India",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "AMU, India",
      internshipTopic: "Deep learning",
      profileImage: "https://i.ibb.co/cT3CN84/ashis-rathore.jpg",
      website: null,
    },

    // Past interns --- Tier 1 colleges
    {
      _id: "27",
      name: "Banda Nithish Reddy",
      linkedIn: "https://www.linkedin.com/in/nithish-reddy-goviper/",
      category: ProfileCategory.PreviousStudent,
      college: "Indian Institute of Information Technology Sri City ",
      collegeTier: true,
      currentPosition: null,
      highlightedText: "IIIT Sri City",
      internshipTopic: "Deep learning",
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1700217820/yk6ofyolweel5idiyhpu.jpg",
      website: null,
    },
    {
      _id: "28",
      name: "Ankur Deria",
      linkedIn: "https://www.linkedin.com/in/ankur-deria-b840891a9",
      category: ProfileCategory.PreviousStudent,
      college: "Technical University of Munich",
      collegeTier: true,
      currentPosition: null,
      highlightedText: "TUM, Germany",
      internshipTopic: "Deep learning",
      profileImage: "https://i.ibb.co/4Mcgx9R/fohhxpprbbdycmuebxrp.jpg",
      website: null,
    },
    {
      _id: "29",
      name: "Ankita Das",
      linkedIn: "https://linkedin.com/in/ankita-das-77030016b",
      category: ProfileCategory.PreviousStudent,
      college: "Indian Institute of Information Technology, Guwahati",
      collegeTier: true,
      currentPosition: null,
      highlightedText: "IIT Guwahati",
      internshipTopic: "Deep learning",
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1700220742/yyjphc3q0w9lgmugv8l6.png",
      website: null,
    },

    // Past interns --- Tier 2 colleges
    {
      _id: "30",
      name: "Preetam Ghosh",
      linkedIn: "https://www.linkedin.com/in/preetam-ghosh-rd/",
      category: ProfileCategory.PreviousStudent,
      college: "Jalpaiguri Government Engineering College",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "JGEC, West Bengal",
      internshipTopic: "Deep learning",
      profileImage: "https://i.ibb.co/47wwdmR/PREETAM-GHOSH.jpg",
      website: null,
    },
    {
      _id: "31",
      name: "Subhajyoti Maity",
      linkedIn: "https://www.linkedin.com/in/subhajyoti-maity-84577a25b/",
      category: ProfileCategory.PreviousStudent,
      college:
        "Ramakrishna Mission Vivekananda Educational And Research Institute",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "RKMVERI, West Bengal",
      internshipTopic: "Deep learning",
      profileImage: "https://i.ibb.co/mB9gR7F/subhajyouti-maity.jpg",
      website: null,
    },
    {
      _id: "32",
      name: "Pratim Acharya",
      linkedIn: "https://www.linkedin.com/in/pratim-acharya-083908200/",
      category: ProfileCategory.PreviousStudent,
      college: "Jalpaiguri Government Engineering College",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "JGEC, West Bengal",
      internshipTopic: "Deep learning",
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1700219636/lejv5u91lxbd9vu1keeq.jpg",
      website: null,
    },
    {
      _id: "33",
      name: "Soumalya Kar",
      linkedIn: "https://www.linkedin.com/in/soumalya-kar-b978b720a/",
      category: ProfileCategory.PreviousStudent,
      college: "Jalpaiguri Government Engineering College",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "JGEc, West Bengal",
      internshipTopic: "Deep learning",
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1700219828/qanqe5qybgpw69hgbpv0.jpg",
      website: null,
    },
    {
      _id: "34",
      name: "Purbayan Sanyal",
      linkedIn: "https://www.linkedin.com/in/purbayan23",
      category: ProfileCategory.PreviousStudent,
      college: "Jalpaiguri Government Engineering College",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "JGEC, West Bengal",
      internshipTopic: "Deep learning",
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1700219981/se0e3esqprfmlgwgzk2m.jpg",
      website: null,
    },
    {
      _id: "35",
      name: "Anurag Chaurasia",
      linkedIn:
        "https://www.linkedin.com/in/anurag-chaurasia-072872192?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      category: ProfileCategory.PreviousStudent,
      college: "Jalpaiguri Government Engineering College",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "Python Developer at Lenze",
      internshipTopic: "Deep learning",
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1700220124/pobt8j0yf8ptg0arxbao.jpg",
      website: null,
    },
    {
      _id: "36",
      name: "Suman Rana",
      linkedIn: "https://www.linkedin.com/in/suman-rana-4862a5159/",
      category: ProfileCategory.PreviousStudent,
      college: "Jalpaiguri Government Engineering College",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "JGEC, West Bengal",
      internshipTopic: "Deep learning",
      profileImage:
        "https://res.cloudinary.com/dzyjwdlot/image/upload/v1700220626/iev8wsjnh9lkdkomnzxc.jpg",
      website: null,
    },
    {
      _id: "37",
      name: "Debajyoti Maity",
      linkedIn:
        "https://research-moodle.github.io/www.linkedin.com/in/debajyoti-maity-77172125b",
      category: ProfileCategory.PreviousStudent,
      college:
        "Ramakrishna Mission Vivekananda Educational And Research Institute",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "RKMVERI, West Bengal",
      internshipTopic: "Deep learning",
      profileImage: "https://i.ibb.co/M5KwdyJ/DP-DEBAJYOTI-MAITY.jpg",
      website: null,
    },
    {
      _id: "38",
      name: "Gopal Krishna",
      linkedIn: "https://www.linkedin.com/in/gopalkrishna96",
      category: ProfileCategory.PreviousStudent,
      college: "Northeastern University",
      collegeTier: false,
      currentPosition: null,
      highlightedText: "Northeastern University",
      internshipTopic: "Deep learning",
      profileImage: "https://i.ibb.co/PtR7CzS/gopa-krisna.jpg",
      website: null,
    },
  ],
};
