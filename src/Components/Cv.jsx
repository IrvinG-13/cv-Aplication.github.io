import '../Styles/Cv.css';
import jsPDF from 'jspdf';

export default function Cv({data}){

    const handleDownload = ()=>{
        const doc = new jsPDF();

        doc.setFontSize(24);
        doc.text('Curriculum Vitae',20,20)

        // Personal Details
        doc.setFontSize(14);
        doc.text('Personal Details:', 20, 30);
        doc.setFontSize(12);
        doc.text(`Full Name: ${data.fullName}`, 20, 40);
        doc.text(`Email: ${data.email}`, 20, 50);
        doc.text(`Phone: ${data.phone}`, 20, 60);
        doc.text(`Address: ${data.address}`, 20, 70);

        // Educational Details
        doc.setFontSize(14);
        doc.text('Educational Details:', 20, 90);
        doc.setFontSize(12);
        doc.text(`University: ${data.university}`, 20, 100);
        doc.text(`Degree: ${data.degree}`, 20, 110);
        doc.text(`Start Date: ${data.startDate}`, 20, 120);
        doc.text(`End Date: ${data.endDate}`, 20, 130);
        doc.text(`Location: ${data.location}`, 20, 140);

        // Experience Details
        doc.setFontSize(14);
        doc.text('Experience Details:', 20, 160);
        doc.setFontSize(12);
        doc.text(`Company Name: ${data.companyName}`, 20, 170);
        doc.text(`Position: ${data.position}`, 20, 180);
        doc.text(`Start Date: ${data.expSartDate}`, 20, 190);
        doc.text(`End Date: ${data.expEndDate}`, 20, 200);
        doc.text(`Location: ${data.expLocation}`, 20, 210);
        doc.text(`Description: ${data.description}`, 20, 220);

        doc.save('CV.pdf');

    }

    return(
        <div className='Cv'>
            <div className="PersonalInfo">
                <h2>Personal Details</h2>
                <p>{data.fullName}</p>
                <p>{data.email}</p>
                <p>{data.phone}</p>
                <p>{data.address}</p>
            </div>

            <div className="educationalInfo">
                <h2>Educational Details</h2>
                <p>{data.university}</p>
                <p>{data.degree}</p>
                <p>{data.startDate}</p>
                <p>{data.endDate}</p>
                <p>{data.location}</p>
            </div>

            <div className="ExperienceInfo">
                <h2>Experience Details</h2>
                <p>{data.companyName}</p>
                <p>{data.position}</p>
                <p>{data.expSartDate}</p>
                <p>{data.expEndDate}</p>
                <p>{data.expLocation}</p>
                <p>{data.description}</p>
            </div>

            <div className="download">
                <button onClick={handleDownload}>Download</button>
            </div>
            
        </div>
    )
}