import SectionHeader from "./SectionHeader";
function Courses (){
    return (
        <section className="courses">
            <div className="container">
                <SectionHeader title="Notre Centre"
                description={[
    "8 salles de formation spacieuses et lumineuses",
    "1 salle pour les formations bureautiques",
    "1 espace vert pour les pauses gourmandes",
    "1 espace ouvert pour les activités ludiques"
  ]}
                
                />

            </div>
        </section>
    )
}
export default Courses;