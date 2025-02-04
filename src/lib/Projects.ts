interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
  }
  
  interface ProjectCategories {
    [key: string]: Project[];
  }
  
  export const projects: ProjectCategories = {
    "Web Development": [
      {
        title: "Slimnastics",
        description: "Slimnastics is a comprehensive full-stack gym management platform designed to enhance the fitness journey of users while providing seamless management tools for administrators. Built with a user-friendly interface and robust backend infrastructure, Slimnastics offers a feature-rich experience.",
        image: "",
        technologies: [
          "React",
          "Node.js",
          "MongoDB",
          "JWT Authentication",
          "Progress Tracking",
          "Admin Dashboard",
          "Membership Plans",
          "E-commerce Store",
          "Blogs & Resources"
        ],
        githubLink: "",
        liveLink: ""
      },
      {
        title: "Translingo",
        description: "Translingo is a real-time chatting application designed to facilitate seamless communication between users through personal and group chats. With a modern and intuitive UI, Translingo ensures a smooth and engaging messaging experience while maintaining high security and efficiency.",
        image: "",
        technologies: [
          "React",
          "Node.js",
          "Socket.io",
          "MongoDB",
          "Real-time Messaging",
          "Personal & Group Chats",
          "File & Image Sharing",
          "Admin Controls",
          "Beautiful UI"
        ],
        githubLink: "",
        liveLink: ""
      },
      {
        title: "Personal Portfolio",
        description: "A stunning personal portfolio website that highlights my frontend development skills through a modern, interactive, and visually appealing design. It features smooth animations, 3D models, and an intuitive layout to provide an engaging experience.",
        image: "",
        technologies: [
          "React",
          "Three.js",
          "Framer Motion",
          "Email.js",
          "Beautiful UI",
          "Smooth Animations",
          "3D Models",
          "Projects Showcase",
          "Responsive & Interactive"
        ],
        githubLink: "",
        liveLink: ""
      }
    ],
    "Machine Learning": [
      {
        title: "Hand Sign Recognition System",
        description: "A deep learning-based hand sign recognition system that accurately identifies different hand gestures in real time. It can be used for applications like sign language translation, virtual controls, and gesture-based authentication.",
        image: "",
        technologies: [
          "Python",
          "TensorFlow",
          "OpenCV",
          "Deep Learning",
          "Real-time Gesture Recognition",
          "Accessibility Applications"
        ],
        githubLink: "",
        liveLink: ""
      },
      {
        title: "Parking Slot Detector",
        description: "An AI-powered parking slot detection system that identifies available parking spaces in real-time using computer vision techniques.",
        image: "",
        technologies: [
          "Python",
          "OpenCV",
          "Deep Learning",
          "Real-time Image Processing",
          "Smart Parking Solutions",
          "IoT Integration"
        ],
        githubLink: "",
        liveLink: ""
      },
      {
        title: "Age & Gender Predictor",
        description: "A deep learning model that predicts a person's age and gender from an image using facial recognition techniques.",
        image: "",
        technologies: [
          "Python",
          "TensorFlow",
          "CNNs",
          "Facial Recognition",
          "Age & Gender Classification",
          "Real-time Processing"
        ],
        githubLink: "",
        liveLink: ""
      }
    ],
    "Artificial Intelligence": [
      {
        title: "Medical Chatbot",
        description: "A cutting-edge AI chatbot designed to provide medical assistance by leveraging Retrieval-Augmented Generation (RAG) and LLaMA 3 for intelligent responses. It utilizes Pinecone for efficient vector search and Hugging Face models to enhance response accuracy.",
        image: "",
        technologies: [
          "Python",
          "LLaMA 3",
          "Hugging Face",
          "Pinecone",
          "Retrieval-Augmented Generation (RAG)",
          "Medical Query Processing"
        ],
        githubLink: "",
        liveLink: ""
      },
      {
        title: "Text Summarizer",
        description: "An advanced text summarization tool powered by the Pegasus model from Hugging Face. This AI system can take documents as input and generate concise summaries, making it useful for research, news aggregation, and content compression.",
        image: "",
        technologies: [
          "Python",
          "Pegasus Model",
          "Hugging Face",
          "Text Summarization",
          "Document Processing",
          "AI-powered Content Compression"
        ],
        githubLink: "",
        liveLink: ""
      }
    ]
  };
  