import Aniket from "../assets/Aniket.png";

const Projects = [
  {
    image:
      "https://res.cloudinary.com/ducnpwkjo/image/upload/v1752561831/Heart_Stroke_Prediction_biijx7.png",
    title: "Heart Stroke Prediction",
    shortDesc:
      "This project aims to predict the likelihood of a person experiencing a heart stroke based on key health and demographic parameters. Using a supervised machine learning approach, the model identifies at-risk individuals by learning patterns from historical medical data.",
    description: [
      "This project aims to predict the likelihood of a person experiencing a heart stroke based on key health and demographic parameters. Using a supervised machine learning approach, the model identifies at-risk individuals by learning patterns from historical medical data.",
      "Data Handling: The dataset includes features like age, hypertension, heart disease history, BMI, smoking status, glucose levels, and more.",
      "Modeling: Various classification algorithms such as Logistic Regression, Random Forest, and XGBoost were evaluated. The best-performing model was selected based on metrics like accuracy, precision, recall, and AUC-ROC.",
      "Feature Engineering: Missing values were handled, categorical variables were encoded, and features were normalized for optimal model performance.",
      "Deployment: The final model can be integrated into a healthcare web app or system to provide real-time stroke risk assessments.",
      "mpact: This solution can assist healthcare professionals in early identification of high-risk patients, enabling timely intervention and potentially saving lives.",
      "Tech Stack: Python, Pandas, Scikit-learn, XGBoost, Flask (for deployment), Matplotlib/Seaborn (for EDA & visualization)",
    ],
    link: "https://github.com/ak-301/Heart-Stroke-Prediction",
  },
  {
    image:
      "https://res.cloudinary.com/ducnpwkjo/image/upload/v1752561832/sentiment-Analysis_i1at0s.png",
    title: "Sentiment Analysis",
    shortDesc:
      "This project focuses on analyzing customer sentiments using Twitter data related to airline experiences. The goal is to classify tweets as either positive or negative and utilize this sentiment insight for customer segmentation.",
    description: [
      "This project focuses on analyzing customer sentiments using Twitter data related to airline experiences. The goal is to classify tweets as either positive or negative and utilize this sentiment insight for customer segmentation. The pipeline involves the following steps:",
      "Data Preprocessing: Tweets are filtered to exclude neutral sentiments, and text is tokenized and padded for uniform input length.",
      "Model Development: A deep learning model using an LSTM (Long Short-Term Memory) network is trained on the preprocessed data. The model utilizes embedding layers, dropout regularization, and a sigmoid output to classify sentiment.",
      "API Deployment: A Flask-based REST API is built to deploy the model, allowing real-time sentiment predictions on user-submitted text.",
      "Business Application: The system can be integrated into customer service dashboards to identify dissatisfied users in real-time, enabling targeted responses and customer segmentation based on sentiment behavior.",
      "Tech Stack: Python, TensorFlow/Keras, Flask, Pandas, LSTM, REST API, CORS",
    ],
    link: "https://github.com/ak-301/Customer-sentiment-analysis",
  },
  {
    image:
      "https://res.cloudinary.com/ducnpwkjo/image/upload/v1752561831/JARVIS_hza8rr.png",
    title: "JARVIS",
    shortDesc:
      "J.A.R.V.I.S (Just A Rather Very Intelligent System) is a voice-activated personal assistant developed using Python. Inspired by the Marvel Universe, this project is designed to perform real-time tasks using natural language voice commands, enhancing user productivity and interaction with technology.",
    description: [
      "J.A.R.V.I.S (Just A Rather Very Intelligent System) is a voice-activated personal assistant developed using Python. Inspired by the Marvel Universe, this project is designed to perform real-time tasks using natural language voice commands, enhancing user productivity and interaction with technology",
      "Voice Recognition: Utilizes the speech_recognition library to capture and process voice input from the user.",
      "Text-to-Speech Engine: Implements pyttsx3 for converting system responses into natural-sounding speech.",
      "Functionality: Answers factual questions using Wikipedia, Plays music or specific YouTube content using pywhatkit, Opens popular websites like Google via the default web browser, Announces the current time, Responds to greetings and basic identity questions, Gracefully shuts down upon command",
      "Key Features: Real-time voice interaction, Dynamic greetings based on the time of day, Integration with online platforms (YouTube, Google, Wikipedia)",
      "Tech Stack: Python, pyttsx3, SpeechRecognition, Wikipedia API, PyWhatKit, Webbrowser, Datetime",
    ],
    link: "https://github.com/ak-301/Python-Jarvis",
  },
  {
    image:
      "https://res.cloudinary.com/ducnpwkjo/image/upload/v1752561831/Cumputer_Vision_ggmnzr.png",
    title: "Computer Vision",
    shortDesc:
      "This collection of computer vision projects demonstrates the application of OpenCV and Python to build interactive and real-time visual systems. Developed in VS Code, each mini-project showcases a core concept in image processing, object detection, and human-computer interaction.",
    description: [
      "This collection of computer vision projects demonstrates the application of OpenCV and Python to build interactive and real-time visual systems. Developed in VS Code, each mini-project showcases a core concept in image processing, object detection, and human-computer interaction.",
      "Face Tracking: Detects and tracks faces in real-time using Haar cascades or deep learning-based models",
      "Finger Counter: Uses hand landmarks to count the number of fingers raised, useful in gesture-based interfaces.",
      "Hand Tracking: Tracks hand positions and movements using MediaPipe for gesture control applications.",
      "Object Detection: Identifies and highlights various objects in a frame using pre-trained models like YOLO or SSD",
      "Pose Estimation: Detects full-body posture and skeletal movements using keypoint detection algorithms",
      "Volume Control: Implements gesture-based volume control by measuring distance between fingers",
      "Tech Stack: Python, OpenCV, MediaPipe, NumPy, Visual Studio Code",
    ],
    link: "https://github.com/ak-301/ComputerVision",
  },
  {
    image:
      "https://res.cloudinary.com/ducnpwkjo/image/upload/v1752565450/NailArt_pyq3om.png",
    title: "Nail Art Appointment System",
    shortDesc:
      "The NailArt-Booking-System is a backend web application built using Node.js, Express.js, and MongoDB, designed to manage appointment bookings for a nail art studio. This RESTful API handles appointment creation, storage, and retrieval efficiently, ensuring smooth coordination between customers and the business.",
    description: [
      "The NailArt-Booking-System is a backend web application built using Node.js, Express.js, and MongoDB, designed to manage appointment bookings for a nail art studio. This RESTful API handles appointment creation, storage, and retrieval efficiently, ensuring smooth coordination between customers and the business.",
      "Appointment Booking: Allows users to schedule nail art appointments by submitting booking details through HTTP requests",
      "Database Integration: Uses MongoDB and Mongoose for storing and managing appointment records",
      "CORS-enabled API: Configured with flexible CORS settings to support requests from multiple front-end clients",
      "Routing System: Modular route handling (order.routes.js) supports clean code and scalable structure",
      "Environment Flexibility: Includes dotenv configuration for port management and secure deployment",
      "Tech Stack: Node.js, Express.js, MongoDB, Mongoose, CORS, dotenv",
    ],
    link: "https://github.com/ak-301/NailArt-appointment-System-Backend"
  },
  {
    image:
      "https://res.cloudinary.com/ducnpwkjo/image/upload/v1752561831/Intelli-lock_otsyes.png",
    title: "Intelli-lock",
    shortDesc:
      "Intelli-Lock is a modern Flutter-based mobile application designed to serve as a user interface for a smart lock or door security system. The app provides a clean and responsive UI that allows users to interact with access control functionalities such as accepting or rejecting entry requests.",
    description: [
      "Intelli-Lock is a modern Flutter-based mobile application designed to serve as a user interface for a smart lock or door security system. The app provides a clean and responsive UI that allows users to interact with access control functionalities such as accepting or rejecting entry requests.",
      "Smart UI Layout: A neatly designed interface with a focus on minimalism and usability, including a top navigation bar with menu, search, and home icons.",
      "Access Control Panel: Central interface showing a placeholder for camera/video feed (intended for real-time visual verification), along with clearly distinguishable Accept and Reject buttons",
      "Responsive Design: Layout adapts to different screen sizes using MediaQuery and Stack positioning for precision UI placement.",
      "Tech Stack: Frontend: Flutter (Dart), UI Components: Material Design widgets, Stack, Positioned, Container, AppBar, and Buttons",
    ],
    link: "https://github.com/ak-301/intelli-lock",
  },
  {
    image:
      "https://res.cloudinary.com/ducnpwkjo/image/upload/v1752561832/M-Health_x8ilga.png",
    title: "M-Health",
    shortDesc:
      "M-HEALTH is a web-based mental health support platform developed using the Django framework. The application enables users to book appointments with psychologists, access mental wellness resources, and seek professional help through a secure and user-friendly interface.",
    description: [
      "M-HEALTH is a web-based mental health support platform developed using the Django framework. The application enables users to book appointments with psychologists, access mental wellness resources, and seek professional help through a secure and user-friendly interface.",
      "Appointment Booking System: Allows users to schedule consultations with mental health professionals at their convenience.",
      "User Authentication: Secure login and registration system to protect user data and ensure confidential access",
      "Admin Panel: Django's built-in admin interface is used for managing appointments, user records, and psychologists' availability",
      "Scalable Architecture: Modular design and Django's ORM enable seamless database interactions and scalability.",
      "Use Case: Designed for mental health clinics, individual therapists, and wellness platforms looking to digitize appointment handling and improve client engagement.",
      "Tech Stack:",
      "Backend: Python, Django",

      "Database: SQLite / PostgreSQL (configurable)",

      "Deployment: Compatible with platforms like Heroku, Render, or PythonAnywhere",

      "Tools: Django Admin, ORM, Django Templates (for frontend views)",
    ],
    link: "https://github.com/ak-301/mhealth",
  },
  {
    image:
      "https://res.cloudinary.com/ducnpwkjo/image/upload/v1752566022/Traffport_zfm2oj.png",
    title: "TraffPort",
    shortDesc:
      "TraffPort is a mobile application built using Flutter that empowers citizens to report traffic violations directly to traffic control authorities in real-time. The app bridges the communication gap between the public and enforcement agencies, promoting safer and more accountable roads.",
    description: [
      "TraffPort is a mobile application built using Flutter that empowers citizens to report traffic violations directly to traffic control authorities in real-time. The app bridges the communication gap between the public and enforcement agencies, promoting safer and more accountable roads.",
      "Key Features:",
      "Incident Reporting: Allows users to document and report traffic rule violations through a user-friendly interface",
      "Clean UI/UX: Designed with intuitive navigation and a responsive layout for smooth user experience across devices.",
      "Scalable Architecture: Modular design for easy integration of features such as image/video uploads, location tagging, or status tracking",
      "Cross-Platform: Built using Flutter, the app can run on both Android and iOS platforms",
      "Use Case: A civic-tech tool aimed at engaging citizens in promoting road safety and assisting traffic departments in real-time violation tracking.",
      "Tech Stack:",
      "Frontend: Flutter (Dart)",
      "Architecture: Modular screens and reusable components",
    ],
    link: "https://github.com/ak-301/traffport",
  },

  {
    image:
      "https://res.cloudinary.com/ducnpwkjo/image/upload/v1752562111/INTELLI-HOME_ppmore.png",
    title: "Intelli-home",
    shortDesc:
      "Intelli-Home is a Flutter-based smart home automation system that enables users to control home appliances through a mobile interface using Bluetooth communication. Designed with accessibility and convenience in mind, the app connects to home automation hardware (e.g., Arduino or ESP32) and provides a simple UI to toggle devices like lights, fans, and more",
    description: [
      "Intelli-Home is a Flutter-based smart home automation system that enables users to control home appliances through a mobile interface using Bluetooth communication. Designed with accessibility and convenience in mind, the app connects to home automation hardware (e.g., Arduino or ESP32) and provides a simple UI to toggle devices like lights, fans, and more",
      "Bluetooth Device Pairing: Scans and connects to bonded Bluetooth devices using flutter_bluetooth_serial.",
      "Real-Time Control Interface: Provides a chat-style command screen (ChatPage) to send control signals to the connected hardware",
      "Modular Design: Includes dedicated modules like connection.dart and led.dart for scalable development",
      "Interactive UI: Guides users through connection steps and device interaction using stepper widgets and user feedback prompts.",
      "Bluetooth Enable Prompt: Prompts users to enable Bluetooth on app launch with a user-friendly interface.",
      "Use Cases: Smart control of home lighting or appliances, Assistive tech for elderly or disabled users, Educational prototype for IoT + mobile integration",
      "Tech Stack: Frontend: Flutter (Dart),Communication: Bluetooth Serial via flutter_bluetooth_serial, Architecture: Modular and stateful widgets for flexibility and scalability, Hardware Integration: Compatible with Arduino, ESP32, or other Bluetooth-enabled controllers",
    ],
    link: "https://github.com/ak-301/intelli-home",
  },
];

export default Projects;
