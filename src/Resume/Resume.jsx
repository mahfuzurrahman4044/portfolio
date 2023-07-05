const Resume = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1DS-7URExF99Ov_HHMuoL5subrIWF7iVq/view?usp=drive_link"; // Replace with the direct link to your resume file

  const handleDownload = () => {
    window.open(resumeLink);
  };

  return (
    <div>
      <div className="mt-20">
        <h2 className="text-5xl text-blue-900 font-bold text-center mb-10">
          Resume
        </h2>
        <div className="text-center">
          <button className=" btn btn-primary" onClick={handleDownload}>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
