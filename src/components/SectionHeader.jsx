function SectionHeader ({title, description}) {
    return(
        <div className="section-header">
            <span className="text-primary">Nos Installations</span>
            <h2>{title}</h2>
            <div>
        {Array.isArray(description) ? (
          description.map((line, index) => (
            <p key={index} style={{ marginBottom: "8px" }}>
              {line}
            </p>
          ))
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
       
    )

}
export default SectionHeader;