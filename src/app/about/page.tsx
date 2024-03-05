import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">

              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Hein Wai Yan Htet ,  <span>a software enginner</span>
                  </h2>
                  <p>
                      Experienced Developer with three years in web design 
                      and backend development. Well-versed in enterprise-level projects,
                      I bring a proven track record of delivering scalable solutions on time.
                      Eager to contribute skills to dynamic projects.
                  </p>
                </div>
              </div>
              
              <div className="row">
                <div className="download-cv">
                  <div className="row">
                      <div className="buttons padd-15">

                        <a
                          href="docs/Resume_Hein_Wai_Yan_Htet.pdf"
                          target="_target"
                          className="btn"
                          download
                        >
                          Download CV
                        </a>

                        <a
                          href="#contact"
                          data-section-index={0}
                          className="btn hire-me"
                        >
                        Hire Me
                      </a>
                    </div>
                  </div>
                  
                </div>
              </div>


              <div className="row">

                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Dec - 2022 to Present
                          </h6>
                          <h4 className="timeline-title">Backend Developer</h4>
                          <h4>Mahar Mobile Application</h4>

                          {/* <p> <img src="/imgs/icon/building-regular.svg" /> 
                           ABC Content Solutions well known as Mahar Mobile Application
                          </p> */}
                            <ul className="experience-industry">
                              <ol>1.  Integrated AWS services, including Cognito and S3, to enhance user authentication and data storage capabilities.</ol>
                              <ol>2.  Designed and implemented microservice APIs using .NET, Entity Framework, dapper, gRPC, LINQ, Blazor, OData, refit, store-procedure with both code-first or database-first approach.</ol>
                              <ol>3.  Utilized Docker for efficient deployment, ensuring scalability and maintainability.</ol>
                              <ol>4.  Implemented Sentry for robust error handling, minimizing downtime and enhancing user experience.</ol>
                              <ol>5.  Led the development of a transcoding dashboard using Next.js, .NET, JWT, Prisma authentication, and FFmpeg.</ol>
                              <ol>6.  Engineered a real-time notification system using AWS SNS, enhancing communication channels within the application.</ol>
                              <ol>7.  Customized a web player with pure JavaScript and .NET MVC, contributing to an improved multimedia experience.</ol>
                              <ol>8.  Developed a QR login API for Android TV, providing a convenient and secure login method.</ol>
                              <ol>9.  Developed and maintained a dynamic React, Redux, TypeScript, Prisma, node.js dashboard.</ol>
                              <ol>10. Conducted research on payment integration methods, staying abreast of industry trends and technologies.</ol>
                            </ul>
                          <p className="timeline-text">


                          </p>
                        </div>
                      
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                       
                      </div>
                    </div>
                  </div>
                </div>

                <div className="education padd-15">
                  <h3 className="title">Personal Projects</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Self Taught (Programming)
                          </h4>
                          <p className="timeline-text">
                            Since 2020 I started to learn Programming. I have
                            learn Html, Css, Sass, JavaScript, Bootstrap. Now I
                            am a Professional Web Designer..
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Diploma in Civil Engineering
                          </h4>
                          <p className="timeline-text">
                            From 2019 I started my journey to be a Civil
                            Engineer on Shyamoli Ideal Polytechnic Institute. It
                            still Running to Present.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2014 to 2019
                          </h6>
                          <h4 className="timeline-title">
                            Secondary School Certificate
                          </h4>
                          <p className="timeline-text">
                            In 2019 I passed SSC Exam from Science Group with
                            GPA- 4.56. My school name was Patgram Anath Bondhu
                            Govt. High School.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>

              <div className="row">
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5> Javascript </h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5> .net </h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent"> 70% </div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5> Laravel </h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Software Enginnering </h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
