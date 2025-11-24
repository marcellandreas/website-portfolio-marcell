
export const fetchTimelineData = async () => {
  try {
    const [educationRes, nonFormalRes, experienceRes] = await Promise.all([
      fetch("/data/education.json"),
      fetch("/data/education-nonformal.json"),
      fetch("/data/experience.json")
    ]);

    const [education, educationNonFormal, experience] = await Promise.all([
      educationRes.json(),
      nonFormalRes.json(),
      experienceRes.json()
    ]);

    return {
      education,
      educationNonFormal,
      experience
    };
  } catch (error) {
    console.error("Error fetching timeline data:", error);
    return {
      education: [],
      educationNonFormal: [],
      experience: []
    };
  }
};
