import React from "react";
import './style.css';

import Header from "../../components/header";
import ControlledCarousel from "../../components/carousel";
import Faq from '../../components/faq'
import Footer from "../../components/footer";

function App() {

  const faq = [
      {
        q:<div className="faqQuestion">01. Do you create presentations for Apple Keynote?</div>,
        a:<div className="faqAnswer">At present, we only create presentations on Microsoft PowerPoint. Since Microsoft Windows is popular among most businesses, PowerPoint is a far more compatible and commonly used platform. The PowerPoint presentation format (.PPT) is also ideal for sharing your presentations or presenting remotely</div>,
      },
      {
        q:<div className="faqQuestion">02. Could you help me write the content for my PowerPoint presentation?</div>,
        a:<div className="faqAnswer">Conventionally, we ask the client to provide the raw content. We further refine the content to make the message and key points clearer and succinct. We could also structure and write the content from scratch given that you've opted for the PPT Repackaging design level. But even for that, we'll require some form of content, no matter how raw, to start with.</div>,
      },
      {
        q:<div className="faqQuestion">03. Prezi seems cool. Do you use it to make presentations?</div>,
        a:<div className="faqAnswer">No, we don't use Prezi at the moment. But we're constantly experimenting to identify the best and most effective platforms to create and design striking presentations on. However, we can create effects similar to that of Prezi on Microsoft PowerPoint.</div>,
      },
      {
        q:<div className="faqQuestion">04. I'm looking for an animated presentation. Can you help?</div>,
        a:<div className="faqAnswer">Absolutely! In fact, we can even make 2D animated videos on PowerPoint. For instance, we can create characters with moving arms and blinking eyes. However, animating on Microsoft PowerPoint has limitations and requires a series of complex steps. It will take us more time and cost you more than usual.</div>,
      },
      {
        q:<div className="faqQuestion">05. Could you help me write the content for my powerpoint presentation?</div>,
        a:<div className="faqAnswer">Conventionally, we ask the client to provide the raw content. We further refine the content to make the message and key points clearer and succinct. We could also structure and write the content from scratch given that you've opted for the PPT Repackaging design level. But even for that, we'll require some form of content, no matter how raw, to start with.</div>,
      },
      {
        q:<div className="faqQuestion">06. I have many presentations to be made. Can you supply a template I could work with?</div>,
        a:<div className="faqAnswer">Absolutely! However, to make presentation templates fully editable with no restrictions on number of times it can be reused, we may charge a higher price than usual. The template will come with our presentation template guide. Just so you don't need a PowerPoint genius to input your changes.</div>,
      },
      {
        q:<div className="faqQuestion">07. Do you provide training or instructions to use Microsoft PowerPoint™?</div>,
        a:<div className="faqAnswer">If you're working with us, you won't need that training. We provide clear and simple instructions to make the presentations run on any screen like they run on ours. We'll always be available to provide assistance related to installing custom fonts, changing text, and troubleshooting any alignment issues. For some quick PowerPoint tricks and tweaks, you can visit our blog.</div>,
      },
      {
        q:<div className="faqQuestion">08. Do you also design infographics?</div>,
        a:<div className="faqAnswer">As much as it's not one of our major offerings, we do create infographics. In fact, our proficiency in information design is one of the reasons why we're in this business. However, we do not do the number crunching or data analysis. We just visualize the data points and inferences that you provide to look as amazing as possible.</div>,
      },
      {
        q:<div className="faqQuestion">09. Who will write the brief? Will I be responsible for it?</div>,
        a:<div className="faqAnswer">Well, our designers are not supposed to brief themselves in terms of design and direction. Instead, our Project Managers work closely with clients to align expectations and create an effective brief for your PowerPoint presentation. The brief may include the background of your business, key points to be covered, design approach to be followed, the purpose, the audience, and the overall structure of the PPT.</div>,
      },
      {
        q:<div className="faqQuestion">10. Will I have to provide images? What if I don't have those assets?</div>,
        a:<div className="faqAnswer">Not a problem. We'll dig out the images and graphic assets for you. In fact, we're experts in picking stock photography and icons to visualize content. We can also have a shoot arranged if you need any specific or customized photographs, which will obviously come at a cost. However, you'll have to provide all branding assets such as logos, straplines, brand fonts, and brand guidelines for the PPT.</div>,
      },
      {
        q:<div className="faqQuestion">11. Can you create PPTs for smartphones and tablets?</div>,
        a:<div className="faqAnswer">Even though the PowerPoint presentations we create are best played on PCs and laptops, they're device agnostic as well. We can take certain precautions such as using large font sizes for better visibility on mobile devices. Even better, we can render PowerPoint in a self-playing video format for ease of access, keeping animations intact. If we are to create a navigable presentation for a particular device, that device needs to have PowerPoint installed in it. However, it might have limitation in terms of animations and slide transitions.</div>,
      },
      {
        q:<div className="faqQuestion">12. Can you help me even if I have a small budget?</div>,
        a:<div className="faqAnswer">As much as our costs are highly competitive, we'll bill you on the basis of the scope of work and the time and resources it takes to execute your PPT project. Having said that, a limited budget will also limit the overall visual quality and number of slides. Feel free to get in touch to understand the best we can do in your budget. We'd advice you to opt for PPT Touch Up design level to keep the costs low.</div>,
      },
      {
        q:<div className="faqQuestion">13. Can you comply on a really tight deadline?</div>,
        a:<div className="faqAnswer">Yes, we are always ready to help clients with urgent requirements and turn around as fast as possible. It will however escalate the overall cost, especially if we're asked to work on weekends or beyond office hours. At the same time, we'd also ask the clients to be prompt and responsive with the feedback to meet deadlines effectively.</div>,
      },
      {
        q:<div className="faqQuestion">14. My requirement is strictly confidential. Would you agree to sign an NDA?</div>,
        a:<div className="faqAnswer">Absolutely! We respect your privacy and believe that you have all the rights to protect your ideas and information. In the past, we've worked with numerous high profile clients under NDAs.</div>,
      },
  ];

  return (
    <div className="App">

      <section className="homeMain" id="homeMain">
      <Header/>
        <div className="row">
          <div className="col-12 col-sm-12 homeText">
            <h1>We help people and companies achieve their goals by creating presentations that work</h1>
            <p>5pm is your outsourced in-house presentation team</p>
            <a href="#homePresentations">
            <img src="assets/img/home/main/Vector 11.svg" alt="arrow down"/>
            </a>
          </div>
        </div>
      </section>

      <section className="homePresentations" id="homePresentations">
        <div className="row">
          <div className="col-12 col-sm-12">
            <h3>We strategically partner with <strong>agencies, corporations, and startups</strong> that need <strong>pixel perfect presentation design</strong> to visually communicate with their teams, clients, shareholders, and/or consumers.</h3>
            <div className="col-12 col-sm-12 homeCarousel">
              <ControlledCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="homePartnerships">
        <div className="row homePartnershipsRow">
          <div className="col-12 col-sm-12 col-sm-12 partnershipsTitle">
            <h2>We've build long lasting partnerships with the most ambitious brands across the globe </h2>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 partnershipsImages">
            <div className="row">
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-3 partnershipsImage">
                <img src='/assets/img/home/Partnerships/AnheuserBusch.webp' alt="" />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-3 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Marriott.webp' alt="" />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-2 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Ciroc.webp' alt="" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-2 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Rumor.webp' alt="" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-2 partnershipsImage">
                <img src='/assets/img/home/Partnerships/GH-Logo-Green.webp' alt="" />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-2 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Appcore.webp' alt="" />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-3 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Hennessy-VSOP.webp' alt="" />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-2 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Pelicargo.webp' alt="" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Moet-Hennessy-USA.webp' alt="" />
              </div>
              <div className="ccol-12 col-sm-6 col-md-6 col-lg-6 col-xl-2 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Balance-Bunny.webp' alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="homeQuestions">
        <div className="row">
          <div className="col-12 col-sm-12">
            <hr />
            <h1>DO YOU HAVE ANY QUESTION?</h1>
            <p>Fell free to reach us out or take a look to our FAQ</p>
            <hr />
            <hr />
            <div className="faq">
              <Faq faqs={faq} />
            </div>
          </div>
        </div>
      </section>

    <Footer />
    </div>
  );
}

export default App;
