import Layout from "../components/Layout";
import Image from 'next/image'

const About=()=>(
    <Layout>
        <style jsx>{`
        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
          }
          
          html {
            box-sizing: border-box;
          }
          
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          
          .column {
            float: left;
            width: 33.3%;
            margin-bottom: 16px;
            padding: 0 8px;
          }
          
          .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            margin: 8px;
          }
          
          .about-section {
            padding: 50px;
            text-align: center;
            background-color: #474e5d;
            color: white;
          }
          
          .container {
            padding: 0 16px;
          }
          
          .container::after,
          .row::after {
            content: "";
            clear: both;
            display: table;
          }
          
          .title {
            color: grey;
          }
          
          .button {
            border: none;
            outline: 0;
            display: inline-block;
            padding: 8px;
            color: white;
            background-color: #000;
            text-align: center;
            cursor: pointer;
            width: 100%;
          }
          
          .button:hover {
            background-color: #555;
          }
          
          @media screen and (max-width: 650px) {
            .column {
              width: 100%;
              display: block;
            }
          }
          
         `}</style>
        <div className="about-section">
  <h1>About Us Page</h1>
  <p>Mechanical &Electrical Engineering, Civil Engineering, Industrial Supplies & Maintenance Services, </p>
  <p> Boiler Maintenance & Servicing, Welding & Fabrication, Tank Erections & Calibration, Industrial Corrosion Protection,</p>
  <p>Thermal Insulation and Cladding, Aluminum works, Repairs/Renovation works and Manpower Services.
</p>
</div>

<h2>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
    <Image
        src="/oliver.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      
      <div className="container">
        <h2>Oliver Wabwire</h2>
        <p className="title">Projects Engineer/Director</p>
        <p>In charge of projects</p>
        <p>oliver@saberlynltd.co.ke</p>
        <p><button className="button">+254 721 365 070/+254 741 897 920</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <Image
        src="/james.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
       
      />
     
      <div className="container">
        <h2>James Ogutu</h2>
        <p className="title">Production Manager/Director</p>
        <p>Leads the production team ensuring timely delivery of projects</p>
        <p>james@saberlynltd.co.ke</p>
        <p><button className="button">+254 711 419 781/+254 741 897 920</button></p>
      </div>
    </div>
  </div>

  
</div> 
    </Layout>
)
export default About;