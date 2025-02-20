"use client"



type DataType = {
  sub_title: string;
  title: string;
  sm_info: string;
}
const news_content: DataType = {
  sub_title: "Subscribe for Ayurvedic Updates",
  title: "Stay Informed About Ayurveda & Wellness",
  sm_info: "Join our community to receive the latest updates on Ayurveda courses, Panchakarma treatments, herbal remedies, and holistic wellness tips. Stay connected with the wisdom of Ayurveda for a healthier life.",
};

const {sub_title, title, sm_info}  = news_content

const NewsLetterHomeTwo = () => {
  return (
    <>
      <section className="news-letter-area pt-120 pb-120"  style={{backgroundImage: `url(/assets/img/newsletter/7a.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', // Centers the image
          backgroundRepeat: 'no-repeat', // Prevents repetition
          display: 'flex'}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-6 col-lg-8 offset-lg-4">
              <div className="news-letter-box"> 
                <div className="about-title news-letter-title mb-20">
                  <h5 className="pink-color">{sub_title}</h5>
                  <h1>{title}</h1>
                </div>
                <div className="news-letter-text mb-30">
                  <p>{sm_info}</p>
                </div>
                <div className="subscribe-form">
                  <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Enter your email address" />
                      <button className="primary_btn btn" type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetterHomeTwo;