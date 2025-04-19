
import { GeneratedPaper, PaperConfig } from "@/types/paper";

const mockPaperSections = {
  AI: [
    {
      title: "Evolution of Artificial Intelligence",
      content: "<p>The field of artificial intelligence has evolved significantly since its inception in the 1950s. Early AI systems were rule-based and could only solve narrowly defined problems. The development of machine learning algorithms in the 1990s marked a significant turning point, enabling systems to learn from data rather than relying on explicit programming.</p><p>Neural networks, initially conceptualized in the 1940s, saw a resurgence in the 2010s with the advent of deep learning. This approach has led to breakthroughs in image recognition, natural language processing, and game playing (Silver et al., 2017).</p>"
    },
    {
      title: "Current Applications of AI",
      content: "<p>Today, AI technologies are embedded in numerous aspects of daily life. Voice assistants like Siri and Alexa utilize natural language processing to interpret and respond to user queries. Recommendation systems on platforms such as Netflix and Amazon employ collaborative filtering algorithms to predict user preferences.</p><p>In healthcare, AI systems are being developed to assist in diagnostic procedures, particularly in radiology where they can identify patterns in medical images that might be overlooked by human practitioners (Topol, 2019).</p>"
    },
    {
      title: "Ethical Considerations",
      content: "<p>As AI becomes more integrated into society, ethical concerns have become increasingly prominent. Issues of bias in AI systems have received particular attention, as algorithms trained on biased data can perpetuate and amplify societal inequalities (Buolamwini & Gebru, 2018).</p><p>Questions of transparency and explainability also present challenges. Many modern AI systems, particularly deep learning models, function as 'black boxes,' making it difficult to understand how they arrive at their outputs. This lack of transparency is problematic in critical applications like criminal justice and healthcare.</p>"
    }
  ],
  climate: [
    {
      title: "Understanding Climate Change",
      content: "<p>Climate change refers to long-term shifts in temperatures and weather patterns. These changes may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas, which produces heat-trapping gases (IPCC, 2021).</p><p>The Intergovernmental Panel on Climate Change (IPCC) has established that human-induced warming reached approximately 1°C above pre-industrial levels in 2017. At the current rate, global warming is likely to reach 1.5°C between 2030 and 2052 if it continues to increase at the current rate.</p>"
    },
    {
      title: "Impact on Ecosystems",
      content: "<p>Climate change affects ecosystems in various ways. Rising temperatures can lead to shifts in species' geographical ranges, seasonal activities, migration patterns, and interactions with other species. Some species may adapt successfully, while others may face extinction (Pecl et al., 2017).</p><p>Ocean acidification, a result of increased CO2 absorption, particularly affects marine organisms with calcium carbonate shells or skeletons, such as corals and shellfish. This can disrupt marine food webs and ecosystems that humans depend on for food and economic activities.</p>"
    },
    {
      title: "Mitigation Strategies",
      content: "<p>Various strategies have been proposed to mitigate climate change. Transitioning to renewable energy sources like solar and wind power can significantly reduce greenhouse gas emissions. Improving energy efficiency in buildings, transportation, and industry also plays a crucial role.</p><p>Nature-based solutions, such as reforestation and soil carbon sequestration, offer co-benefits for biodiversity and ecosystem services while removing CO2 from the atmosphere (Griscom et al., 2017). Carbon pricing mechanisms, including carbon taxes and cap-and-trade systems, can provide economic incentives for emission reductions.</p>"
    }
  ],
  economics: [
    {
      title: "Foundations of Economic Theory",
      content: "<p>Economic theory provides a framework for understanding how individuals, businesses, and governments make decisions about the allocation of resources. Classical economics, developed by thinkers like Adam Smith and David Ricardo, emphasized free markets and minimal government intervention (Smith, 1776).</p><p>Keynesian economics, introduced by John Maynard Keynes in response to the Great Depression, advocated for active government intervention during economic downturns. More recent approaches include behavioral economics, which incorporates psychological insights into economic decision-making (Thaler, 2015).</p>"
    },
    {
      title: "Global Economic Systems",
      content: "<p>Economic systems vary widely across the globe, ranging from market-oriented economies with minimal state intervention to centrally planned economies with significant government control. Most contemporary economies are mixed, combining elements of both approaches.</p><p>Globalization has led to increased economic interdependence between nations through trade, investment, and the movement of people and information. While this has contributed to economic growth in many regions, it has also raised concerns about inequality and vulnerability to global economic shocks (Stiglitz, 2002).</p>"
    },
    {
      title: "Contemporary Economic Challenges",
      content: "<p>Modern economies face numerous challenges, including rising inequality within many countries. The gap between the wealthy and the poor has widened in recent decades, with implications for social cohesion and economic opportunity (Piketty, 2014).</p><p>Technological change, particularly automation and artificial intelligence, is transforming labor markets and raising questions about the future of work. Climate change presents both economic risks and opportunities, necessitating a transition to more sustainable production and consumption patterns.</p>"
    }
  ]
};

const mockReferences = {
  AI: [
    {
      id: "1",
      authors: ["D. Silver", "J. Schrittwieser", "K. Simonyan"],
      year: 2017,
      title: "Mastering the game of Go without human knowledge",
      source: "Nature, 550(7676), 354-359",
      doi: "10.1038/nature24270"
    },
    {
      id: "2",
      authors: ["E. J. Topol"],
      year: 2019,
      title: "High-performance medicine: the convergence of human and artificial intelligence",
      source: "Nature Medicine, 25(1), 44-56",
      doi: "10.1038/s41591-018-0300-7"
    },
    {
      id: "3",
      authors: ["J. Buolamwini", "T. Gebru"],
      year: 2018,
      title: "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification",
      source: "Proceedings of the 1st Conference on Fairness, Accountability and Transparency, 81, 77-91",
      url: "http://proceedings.mlr.press/v81/buolamwini18a.html"
    }
  ],
  climate: [
    {
      id: "1",
      authors: ["IPCC"],
      year: 2021,
      title: "Climate Change 2021: The Physical Science Basis",
      source: "Contribution of Working Group I to the Sixth Assessment Report of the IPCC",
      url: "https://www.ipcc.ch/report/ar6/wg1/"
    },
    {
      id: "2",
      authors: ["G. T. Pecl", "M. B. Araújo", "J. D. Bell"],
      year: 2017,
      title: "Biodiversity redistribution under climate change: Impacts on ecosystems and human well-being",
      source: "Science, 355(6332)",
      doi: "10.1126/science.aai9214"
    },
    {
      id: "3",
      authors: ["B. W. Griscom", "J. Adams", "P. W. Ellis"],
      year: 2017,
      title: "Natural climate solutions",
      source: "Proceedings of the National Academy of Sciences, 114(44), 11645-11650",
      doi: "10.1073/pnas.1710465114"
    }
  ],
  economics: [
    {
      id: "1",
      authors: ["A. Smith"],
      year: 1776,
      title: "An Inquiry into the Nature and Causes of the Wealth of Nations",
      source: "W. Strahan and T. Cadell, London",
      url: "https://www.gutenberg.org/files/3300/3300-h/3300-h.htm"
    },
    {
      id: "2",
      authors: ["R. H. Thaler"],
      year: 2015,
      title: "Misbehaving: The Making of Behavioral Economics",
      source: "W. W. Norton & Company",
      url: "https://wwnorton.com/books/Misbehaving/"
    },
    {
      id: "3",
      authors: ["J. E. Stiglitz"],
      year: 2002,
      title: "Globalization and Its Discontents",
      source: "W. W. Norton & Company",
      url: "https://wwnorton.com/books/Globalization-and-Its-Discontents/"
    },
    {
      id: "4",
      authors: ["T. Piketty"],
      year: 2014,
      title: "Capital in the Twenty-First Century",
      source: "Harvard University Press",
      doi: "10.4159/9780674369542"
    }
  ]
};

class ResearchPaperGenerator {
  static generatePaper(config: PaperConfig): GeneratedPaper {
    // In a real app, this would connect to AI APIs
    // For this demo, we'll use mock data based on topic keywords
    
    let topicKey = "AI"; // Default
    
    if (config.topic.toLowerCase().includes("climate") || 
        config.keywords.some(k => k.toLowerCase().includes("climat"))) {
      topicKey = "climate";
    } else if (config.topic.toLowerCase().includes("econom") || 
               config.keywords.some(k => k.toLowerCase().includes("econom"))) {
      topicKey = "economics";
    }
    
    const sections = mockPaperSections[topicKey as keyof typeof mockPaperSections];
    const references = mockReferences[topicKey as keyof typeof mockReferences];
    
    // Generate title based on topic and keywords
    const title = this.generateTitle(config.topic, config.keywords);
    
    return {
      title,
      abstract: this.generateAbstract(config.topic, sections),
      introduction: this.generateIntroduction(config.topic, config.keywords),
      sections,
      conclusion: this.generateConclusion(config.topic),
      references
    };
  }
  
  private static generateTitle(topic: string, keywords: string[]): string {
    // Create a title using the topic and some of the keywords
    const firstKeyword = keywords[0] || "";
    const lastKeyword = keywords.length > 1 ? keywords[keywords.length - 1] : "";
    
    if (topic.length < 40) {
      return `${topic}: A Comprehensive Analysis of ${firstKeyword} and ${lastKeyword || "Related Concepts"}`;
    } else {
      return topic;
    }
  }
  
  private static generateAbstract(topic: string, sections: any[]): string {
    const sectionTitles = sections.map(s => s.title.toLowerCase());
    
    return `This paper examines ${topic} through multiple perspectives. It begins with an overview of ${sectionTitles[0] || "the field"}, followed by an analysis of ${sectionTitles[1] || "key aspects"}. The research then investigates ${sectionTitles[2] || "important considerations"}, providing evidence-based insights. The findings suggest that further research is needed to fully understand the complex interplay between these factors. This study contributes to the existing literature by synthesizing current knowledge and identifying gaps for future investigation.`;
  }
  
  private static generateIntroduction(topic: string, keywords: string[]): string {
    const keywordsText = keywords.length > 0 
      ? `key concepts including ${keywords.slice(0, 3).join(", ")}`
      : "several key concepts";
      
    return `<p>In recent years, ${topic} has emerged as a significant area of research and practical interest. This paper aims to provide a comprehensive overview of this field, examining its historical development, current applications, and future prospects.</p>
    
    <p>The analysis will focus on ${keywordsText}, exploring their interrelationships and implications. By synthesizing findings from diverse sources, this study seeks to contribute to a more nuanced understanding of the subject matter.</p>
    
    <p>The following sections will delve into specific aspects of ${topic}, beginning with its foundational concepts and progressing to more specialized considerations. Throughout the discussion, attention will be paid to both theoretical frameworks and practical applications.</p>`;
  }
  
  private static generateConclusion(topic: string): string {
    return `<p>This paper has examined various aspects of ${topic}, highlighting its complexity and significance. The analysis has revealed several key insights that contribute to our understanding of this field.</p>
    
    <p>First, the historical development of ${topic} demonstrates how initial concepts have evolved in response to changing contexts and new discoveries. Second, current applications illustrate the practical value of theoretical advances in this area. Finally, ethical and future considerations point to ongoing challenges that require further research and careful attention.</p>
    
    <p>While this study has provided a comprehensive overview, several questions remain unanswered and merit additional investigation. Future research could explore these gaps, particularly focusing on emerging trends and interdisciplinary connections. As ${topic} continues to evolve, maintaining a balanced perspective that acknowledges both its potential benefits and limitations will be essential.</p>`;
  }
}

export default ResearchPaperGenerator;
