import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import '../styles/MindBridgeDetail.css';

const MindBridgeDetail = () => {
  return (
    <div className="mindbridge-detail">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>MindBridge: Multi-Modal Emotion Intelligence Platform</h1>
            <p className="hero-subtitle">"Bridging Emotions with AI: Where Well-being Meets Innovation"</p>
            
            <div className="project-links-hero">
              <a href="https://github.com/DianaTao/MindBridge" target="_blank" rel="noopener noreferrer" className="btn primary">
                GitHub Repository
              </a>
              <a href="https://devpost.com/software/mindbridge-sow81y" target="_blank" rel="noopener noreferrer" className="btn secondary">
                Devpost Submission
              </a>
              <a href="https://youtu.be/92xVVM9TcDk" target="_blank" rel="noopener noreferrer" className="btn secondary">
                Demo Video
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="architecture-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>System Architecture</h2>
            <div className="architecture-image">
              <img src="/img/MindBridge Arch.png" alt="MindBridge Architecture" />
            </div>
            <p>
              MindBridge leverages a sophisticated AWS serverless architecture centered around Lambda functions, 
              enabling scalable, event-driven processing of emotional data across multiple modalities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="overview-section">
        <div className="container">
          <div className="overview-grid">
            <motion.div
              className="overview-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Project Overview</h2>
              <p>
                MindBridge is a comprehensive emotion intelligence platform that leverages AWS serverless 
                architecture to provide real-time emotion analysis across multiple modalities. The platform 
                serves three key areas: Corporate Wellness Monitoring, Call Center Agent Support, and Digital 
                Mental Health Coaching.
              </p>
              
              <h3>Core Features</h3>
              <ul>
                <li>Real-time video emotion detection using Amazon Rekognition</li>
                <li>Text sentiment analysis with Amazon Comprehend</li>
                <li>Live call analysis with Amazon Transcribe</li>
                <li>Mental health check-ins powered by Amazon Bedrock</li>
                <li>Comprehensive emotion analytics dashboard</li>
                <li>Corporate wellness monitoring tools</li>
                <li>Call center agent coaching features</li>
                <li>Digital mental health support system</li>
              </ul>
            </motion.div>
            
            <motion.div
              className="demo-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/img/emotion analytics (1).gif" alt="MindBridge Emotion Analytics Demo" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="technical-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Technical Implementation</h2>
            
            <div className="tech-grid">
              <div className="tech-card">
                <h3>Video Analysis Lambda</h3>
                <p>Real-time facial emotion detection using Amazon Rekognition with S3 for frame storage and DynamoDB for results.</p>
                <ul>
                  <li>Frame extraction and processing</li>
                  <li>Multi-face detection</li>
                  <li>Emotion confidence scoring</li>
                  <li>Real-time result streaming</li>
                </ul>
              </div>
              
              <div className="tech-card">
                <h3>Text Analysis Lambda</h3>
                <p>Sentiment and emotion analysis from text using Amazon Comprehend and Bedrock for context understanding.</p>
                <ul>
                  <li>Multi-language support</li>
                  <li>Context-aware analysis</li>
                  <li>Entity recognition</li>
                  <li>Key phrase extraction</li>
                </ul>
              </div>
              
              <div className="tech-card">
                <h3>Real-time Call Analysis</h3>
                <p>Live voice emotion analysis using Amazon Transcribe for speech-to-text and comprehensive sentiment analysis.</p>
                <ul>
                  <li>Real-time audio processing</li>
                  <li>Voice emotion detection</li>
                  <li>Live transcription</li>
                  <li>Immediate feedback</li>
                </ul>
              </div>
              
              <div className="tech-card">
                <h3>Check-in Processor</h3>
                <p>Process mental health check-ins using Amazon Bedrock for insight generation and DynamoDB for storage.</p>
                <ul>
                  <li>Dynamic question generation</li>
                  <li>Response analysis</li>
                  <li>Trend detection</li>
                  <li>Alert generation</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="tech-stack-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Technology Stack</h2>
            <div className="tech-categories">
              <div className="tech-category">
                <h3>AWS Services</h3>
                <div className="tech-tags">
                  <span className="tech-tag aws">AWS Lambda</span>
                  <span className="tech-tag aws">Amazon Rekognition</span>
                  <span className="tech-tag aws">Amazon Comprehend</span>
                  <span className="tech-tag aws">Amazon Bedrock</span>
                  <span className="tech-tag aws">Amazon Transcribe</span>
                  <span className="tech-tag aws">DynamoDB</span>
                  <span className="tech-tag aws">API Gateway</span>
                  <span className="tech-tag aws">S3</span>
                  <span className="tech-tag aws">CloudFront</span>
                  <span className="tech-tag aws">EventBridge</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h3>Frontend & Backend</h3>
                <div className="tech-tags">
                  <span className="tech-tag frontend">React.js</span>
                  <span className="tech-tag frontend">JavaScript</span>
                  <span className="tech-tag backend">Python</span>
                  <span className="tech-tag backend">WebSocket</span>
                  <span className="tech-tag backend">REST API</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h3>Architecture</h3>
                <div className="tech-tags">
                  <span className="tech-tag arch">Serverless</span>
                  <span className="tech-tag arch">Event-driven</span>
                  <span className="tech-tag arch">Real-time Processing</span>
                  <span className="tech-tag arch">Multi-modal</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Project Achievements</h2>
            <div className="achievements-grid">
              <div className="achievement-card">
                <h3>🏆 AWS Lambda Hackathon</h3>
                <p>Successfully submitted to the AWS Lambda Hackathon, showcasing innovative use of serverless architecture for emotion intelligence.</p>
              </div>
              
              <div className="achievement-card">
                <h3>🚀 Technical Innovation</h3>
                <p>Pioneered multi-modal emotion analysis combining video, audio, and text processing in real-time using AWS services.</p>
              </div>
              
              <div className="achievement-card">
                <h3>💡 Social Impact</h3>
                <p>Addressed critical mental health and workplace wellness challenges through technology-driven solutions.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Development */}
      <section className="future-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Future Development</h2>
            <div className="future-grid">
              <div className="future-card">
                <h3>Mobile App Development</h3>
                <p>Extend the platform to mobile devices for on-the-go emotion monitoring and support.</p>
              </div>
              
              <div className="future-card">
                <h3>Advanced AI Models</h3>
                <p>Integrate more sophisticated emotion recognition models and predictive analytics capabilities.</p>
              </div>
              
              <div className="future-card">
                <h3>Global Edge Deployment</h3>
                <p>Deploy across multiple AWS regions for improved latency and global accessibility.</p>
              </div>
              
              <div className="future-card">
                <h3>Team Analytics</h3>
                <p>Develop comprehensive team-level insights and organizational wellness dashboards.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default MindBridgeDetail; 