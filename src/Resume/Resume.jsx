const Resume = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1x0vU8StT-qR5SKh3SMuQjP_KgZS-B3CO/view?usp=sharing";

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
