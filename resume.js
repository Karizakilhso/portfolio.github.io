document.getElementById("downloadBtn").addEventListener("click", function() {
  const resumeElement = document.getElementById("resume");

  // Configure the options for the pdf generation
  const options = {
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  // Convert the HTML content to a PDF
  html2pdf().from(resumeElement).set(options).save();
});
