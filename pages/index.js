import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation/Navigation'
import styles from '../styles/Home.module.css'
import PersonalCard from '../components/PersonalCard/PersonalCard'
import Section from '../components/Section/Section'
import PersonalCardParallax from '../datainfo/PersonalCardParallax'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div className='text-blue-900'>
      <Head>
        <title>Delhen - Profile</title>
        <meta name="description" content="Information related to Delian Hendardi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Section 
          classesName={"flex flex-col md:h-96 items-center p-4 justify-center"} 
          isParallaxBg 
          urlImage={PersonalCardParallax.urlImg} 
          gradientColor={PersonalCardParallax.gradientColor}>
        <PersonalCard />
      </Section>
      <div className='md:mt-12 md:p-24 p-12' id='home'>
        <h1 className='md:text-2xl text-xl text-center font-light tracking-wider'>Hello! I am Delian Hendardi</h1>
        <br />
        <div className='text-center md:text-base max-w-5xl mx-auto'>
          <p>A fresh graduate bachelor degree student from Bina Nusantara University, majoring in Computer Science. Have interest in software engineering especially in web development and data scientist especially in machine learning and data analyst. Professional Javascript and PHP web developer, both front-end and back-end. Consider as a person who proper at problem solving and planning, can work as either individual or team, and always curious learning something especially related to software engineer, data science, and mathematics. </p>
        </div>
        <br />
        <div className='flex md:flex-row flex-col justify-center text-center'>
          <a href="/archive/CV_DELIAN_HENDARDI_WEB_DEVELOPER.pdf" target={'_blank'} className="bg-transparent hover:bg-sky-600 text-sky-700 font-semibold hover:text-white py-2 px-4 mx-4 mt-2 border border-sky-700 hover:border-transparent rounded">CV Web Developer</a>
          <a href="/archive/CV_DELIAN_HENDARDI_DATA_SCIENTIST.pdf" target={'_blank'} className="bg-transparent hover:bg-sky-600 text-sky-700 font-semibold hover:text-white py-2 px-4 mx-4 mt-2 border border-sky-700 hover:border-transparent rounded">CV Data Scientist</a>
          <a href="/archive/CV_PLAIN_DELIAN_HENDARDI_WEB_DEVELOPER.docx" target={'_blank'} className="bg-transparent hover:bg-sky-600 text-sky-700 font-semibold hover:text-white py-2 px-4 mx-4 mt-2 border border-sky-700 hover:border-transparent rounded">CV Web Developer - Plain</a>
          <a href="/archive/CV_PLAIN_DELIAN_HENDARDI_DATA_SCIENTIST.docx" target={'_blank'} className="bg-transparent hover:bg-sky-600 text-sky-700 font-semibold hover:text-white py-2 px-4 mx-4 mt-2 border border-sky-700 hover:border-transparent rounded">CV Data Scientist - Plain</a>
        </div>
      </div>
      <div className='text-sky-50' id='portfolio'> 
        <h2 className='font-semibold bg-sky-900 p-4 text-xl tracking-wide text-center underline'>PORTFOLIO</h2>
        <div className='flex justify-center md:flex-row flex-col bg-fixed bg-center bg-cover bg-blend-overlay p-4' style={
        {
          backgroundImage: `linear-gradient(135deg, rgba(7,89,133,1) 0%, rgba(72,207,237,1) 100%, rgba(10,113,168,1) 100%), 
          url('https://images.unsplash.com/photo-1462556791646-c201b8241a94?ixlib=rb-1.2.1&dl=hector-j-rivas-1FxMET2U5dU-unsplash.jpg&w=2400&q=80&fm=jpg&crop=entropy&cs=tinysrgb')`
        }
      }>
          <div className="max-w-sm rounded-lg shadow-md bg-sky-800 m-4">
            <a href="http://coofeez.herokuapp.com/" target={"_blank"}>
              <img className="rounded-t-lg" src="/images/coffeez.png" alt="" />
            </a>
            <div className="p-5">
              <a href="http://coofeez.herokuapp.com/" target={"_blank"}>
                <h5 className="mb-2 text-xl font-bold tracking-tight">Coffeez</h5>
              </a>
              <p className="mb-3 font-normal">This is a CRUD web application. CRUD in this case is for stock updating. The user interface is only compatible for desktop. Development using PHP and Materialize CSS.</p>
            </div>
          </div>
          <div className="max-w-sm rounded-lg shadow-md bg-sky-800 m-4">
            <a href="/ht-speech.html" target={'_blank'}>
              <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1585250003680-b12dbff01e65?ixlib=rb-1.2.1&dl=claudio-schwarz-FMJAYeRwtDY-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb" alt="" />
            </a>
            <div className="p-5">
              <a href="/ht-speech.html" target={'_blank'}>
                <h5 className="mb-2 text-xl font-bold tracking-tight">Sentiment Analysis About Hate Speech Tweets</h5>
              </a>
              <p className="mb-3 font-normal">Final exam for Information Retrieval college course. Analyzing whether hate speech tweet tends to be a negative sentiment. Using BERT pre-trained model for create a machine learning model for support the analysis.</p>
            </div>
          </div>
          <div className="max-w-sm rounded-lg shadow-md bg-sky-800 m-4">
            <a href="/news-dataset-dl.html" target={'_blank'}>
              <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&dl=obi-pixel6propix-UEQvUtRs224-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb" alt="" />
            </a>
            <div className="p-5">
              <a href="/news-dataset-dl.html" target={'_blank'}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">News Classification</h5>
              </a>
              <p className="mb-3 font-normal">Final exam for Deep Learning college course. Make machine learning model for classifying news category. Using Recurrent Neural Network (RNN) with Long Short-Term Memory (LSTM).</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='p-8 text-center' id="skills">
        <h2 className='font-semibold text-xl tracking-wide underline'>SKILLS</h2>
        <div className='flex justify-around md:flex-row flex-col mt-4 md:px-16'>
          <div className='text-left md:w-4/12'>
            <h3 className='text-lg tracking-wider underline'>TECHNICAL SKILLS</h3>
            <ul className='list-disc'>
              <li className='my-4'>
                <p className='text-md font-semibold'>Web Development (Fullstack)</p>
                <p>Develop web interface and its responsiveness based on given user interface <i>(front-end)</i> and design server-side application for data communication either using API or web server <i>(back-end)</i>.</p>
                <p className='text-sm'><b>Programming Language:</b> Javascript, PHP, C#</p>
                <p className='text-sm'><b>Framework:</b> React JS, React Native, CodeIgniter, Laravel, Bootstrap</p>
              </li>
              <li className='my-4'>
                <p className='text-md font-semibold'>Data Scientist</p>
                <p>Have specialization in Machine Learning and Data Analyst. Doing feature engineering and build a machine learning model based on given data. Having a focus on text processing (NLP). This skillset is in re-learn phase because it was never used for a year.</p>
                <p className='text-sm'><b>Programming Language:</b> Python</p>
                <p className='text-sm'><b>Framework:</b> Tensorflow, Keras, Pandas, Matplotlib, Numpy, Scikit-learn</p>
              </li>
            </ul>
          </div>
          <div className='md:w-4/12 text-left md:mt-0 mt-4'>
            <h3 className='text-lg tracking-wider underline'>SOFT SKILLS</h3>
            <ul className='list-disc'>
              <li className='my-4'>
                <p className='text-md font-semibold'>Problem Solving</p>
                <p>Finding a good solution with deep analysis and additional evidences based on given task or immediate situation.</p>
              </li>
              <li className='my-4'>
                <p className='text-md font-semibold'>Individual and Teamwork</p>
                <p>Have work experiences either as an individual or a team.</p>
              </li>
              <li className='my-4'>
                <p className='text-md font-semibold'>Passionate and Curious</p>
                <p>Passionate about learning new things, especially related to computer science, and facing new challenges.</p>
              </li>
              <li className='my-4'>
                <p className='text-md font-semibold'>Communication</p>
                <p>Have a good communication either for working or free-time (a little bit awkward at first). Able to coordinate something that related to work either as an individual or as a team.</p>
              </li>
              <li className='my-4'>
                <p className='text-md font-semibold'>Adaptable</p>
                <p>Able to adapt to new environment, team, or any changes as long as it is acceptable.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className='p-8 text-left bg-sky-900 text-sky-50' id='exp'>
        <h2 className='font-semibold text-xl tracking-wide text-center underline'>EXPERIENCE</h2>
        <div className='flex md:flex-row flex-col justify-around'>
          <div className='md:w-4/12 m-4'>
            <h3 className='text-xl font-semibold'>PT. Adicipta Inovasi Teknologi</h3>
            <p className='text-md'>Fullstack Web Developer (Internship)</p>
            <p className='text-sm font-light'>Feb 2021 - Feb 2022</p>
            <p>Develop new features that are requested by a client to an existing app for multifinance business management both for user interface (front-end) and data communication (back-end) and test its result. Provide files for deployment to the client. Do fixing when a bug has occurred. Create SQL stored procedure for database processing. Development using C#, ASP.NET, and SQL Server.</p>
          </div>
          <div className='md:w-4/12 m-4'>
            <h3 className='text-xl font-semibold'>Hackathon BPJS Kesehatan 2021</h3>
            <p className='text-md'>Fullstack Web Developer (Freelance)</p>
            <p className='text-sm font-light'>Aug 2021 - Sept 2021</p>
            <p>Develop web administration for participant management. Development both for user interface (front-end) and data communication (back-end). Support in creating an examiner for machine learning competition. Got positive feedbacks for the examiner from participans of Machine Learning competition. Development using Javascript, PHP (CodeIgniter), MySQL, AdminLTE, and Python.</p>
          </div>
        </div>
      </div>
      <div className='p-8 text-left bg-sky-900 text-sky-50'>
        <h2 className='font-semibold text-xl tracking-wide text-center underline'>ORGANIZATIONAL</h2>
        <div className='flex md:flex-row flex-col justify-around'>
          <div className='md:w-4/12 m-4'>
            <h3 className='text-xl font-semibold'>DSPARTED 2017</h3>
            <p className='text-md'>Chief of Design, Documentation, and Decoration Division DSPARTED 2017</p>
            <p className='text-sm font-light'>Jan 2017 - Nov 2017</p>
            <p>Take responsibility for planning a theme of the event and designing something that related to the event such as logo, banner, Instagram feed, etc.</p>
          </div>
          <div className='md:w-4/12 m-4'>
            <h3 className='text-xl font-semibold'>EKSAK DOETA 2019</h3>
            <p className='text-md'>Chief of Design and Decoration Division EKSAK DOETA 2019</p>
            <p className='text-sm font-light'>Sept 2018 - Jan 2019</p>
            <p>Take responsibility for planning a theme of the event and designing something that related to the event such as logo, banner, Instagram feed, etc.</p>
          </div>
        </div>
      </div>
      <hr />
      <div className='p-8 text-left' id='certif'>
        <h2 className='font-semibold text-xl tracking-wide text-center underline'>CERTIFICATE</h2>
        <div className='flex md:flex-row flex-col justify-center p-4'>
          <a href="https://drive.google.com/file/d/1yDwQijQPmppu0GCQa2B1wXuqAil9Xx8a/view?usp=sharing" target={'_blank'} className="bg-transparent hover:bg-sky-600 text-sky-700 font-semibold hover:text-white py-2 px-4 mx-4 mt-2 border border-sky-700 hover:border-transparent rounded">Hackathon BPJS Kesehatan 2021 Committee</a>
          <a href="https://www.dicoding.com/certificates/2RVZKVM8OXD5" target={'_blank'} className="bg-transparent hover:bg-sky-600 text-sky-700 font-semibold hover:text-white py-2 px-4 mx-4 mt-2 border border-sky-700 hover:border-transparent rounded">Dicoding - Belajar Fundamental Front-End Web Development</a>
          <a href="https://academy.dqlab.id/Certificate_check_2/result/DQLABDVIZ2TRPSMQ" target={"_blank"} className="bg-transparent hover:bg-sky-600 text-sky-700 font-semibold hover:text-white py-2 px-4 mx-4 mt-2 border border-sky-700 hover:border-transparent rounded">DQLab - Machine Learning With Python for Begineer</a>
          <a href="https://academy.dqlab.id/Certificate_check_2/result/DQLABINTP1KWBFUF" target={"_blank"} className="bg-transparent hover:bg-sky-600 text-sky-700 font-semibold hover:text-white py-2 px-4 mx-4 mt-2 border border-sky-700 hover:border-transparent rounded">DQLab - Exploratory Data Analysis with Python for Beginner</a>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  )
}
