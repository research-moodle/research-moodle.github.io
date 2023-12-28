type InternshipDetails = {
    _id:                 string,
    description:         string,
    topics:              string[],
    timeline:            { task: string, tentativeTimeline: string }[],
    eligibility:         string[],
    selectionProcedure:  string[],
    applicationProcess:  string,
    open:                boolean,
    applicationLink:     string,
    faq:                 { question: string, answer: string }[],
}

type InternshipDetailsWithProfiles  =  InternshipDetails & {profiles: InternshipProfile[]}


type InternshipProfile =  {
    _id?: string,
    name: string,  
    profileImage: string, 
    highlightedText: string,
    college:  string | null | undefined,
    linkedIn: string | null | null, 
    website:  string | null | undefined,
    currentPosition: string | null | undefined,
    internshipTopic: string | null | undefined,
    collegeTier:     boolean | null | undefined,
    category: ProfileCategory,
}