/**
 * Rodrigo Beraldo — Portfolio
 * i18n: PT-BR / EN-US language switch
 */
(function () {
  "use strict";

  const STORAGE_KEY = "site-lang";

  const translations = {
    pt: {
      "nav.home": "Início",
      "nav.about": "Sobre",
      "nav.experience": "Experiência",
      "nav.work": "Projetos",
      "nav.passions": "Paixões",
      "nav.contact": "Contato",
      "nav.openMenu": "Abrir menu",

      "hero.eyebrow": "Engenheiro de Dados Sênior · São Paulo, Brasil",
      "hero.lead": "Ajudo empresas a evoluir plataformas de dados legadas para arquiteturas modernas, escaláveis e prontas para IA — conectando as necessidades do negócio a soluções sustentáveis, do primeiro Data Lake ao Lakehouse.",
      "hero.btnProjects": "Ver projetos",
      "hero.btnContact": "Falar comigo",
      "hero.statYears": "Anos de experiência",
      "hero.statCompanies": "Empresas atendidas",
      "hero.statProjects": "Projetos em destaque",

      "about.eyebrow": "Sobre mim",
      "about.title": "Dados, código e uma paixão por resolver problemas",
      "about.factsTitle": "// dados de contato",
      "about.pipelineCaption": "// pipeline de dados montando o perfil, fragmento a fragmento",
      "about.pipelineDone": "pipeline concluído",
      "about.photoAlt": "Foto de Rodrigo Beraldo",
      "about.fact.name": "Nome",
      "about.fact.role": "Atuação",
      "about.fact.roleValue": "Especialista em Engenharia de Dados",
      "about.fact.location": "Local",
      "about.fact.locationValue": "São Paulo, SP",
      "about.fact.email": "Email",
      "about.fact.phone": "Telefone",
      "about.heading": "Sobre mim",
      "about.p1": "Sou especialista em Engenharia de Dados e gosto de resolver o problema por trás do problema: entender como o negócio realmente usa os dados para então desenhar arquiteturas simples de manter, fáceis de confiar e prontas para crescer — em vez de simplesmente trocar uma tecnologia por outra.",
      "about.p2": "Ao longo da minha trajetória, liderei a modernização de plataformas de dados em bancos, seguradoras e empresas de tecnologia: migrei processos legados para arquiteturas Lakehouse, reduzi a latência de dados de horas para segundos com streaming e CDC, e criei produtos de dados que aproximam times de negócio e de tecnologia. Mais recentemente, também tenho aplicado Inteligência Artificial à própria Engenharia de Dados, acelerando desenvolvimento, documentação e tomada de decisão.",
      "about.skillsTitle1": "Como eu entrego valor",
      "about.chip.agility": "Agilidade",
      "about.chip.valueDelivery": "Entrega de Valor",
      "about.chip.teamFacilitator": "Facilitador de Times",
      "about.chip.businessAcumen": "Trato com o Negócio",
      "about.chip.architecture": "Arquitetura & Governança",
      "about.skillsTitle2": "Tecnologias que uso",
      "about.eduTitle": "Formação",
      "about.edu0Year": "Em andamento",
      "about.edu0": "Pós-graduação em Matemática Aplicada à Computação — Anhanguera",
      "about.edu1": "MBA em Big Data e Business Intelligence — Escola de Negócios Europeia de Barcelona",
      "about.edu2": "Licenciatura em Matemática — Universidade Cruzeiro do Sul",
      "about.edu3": "Economia e Finanças — Universidade Paulista",
      "about.langTitle": "Idiomas",
      "about.lang1": "Inglês — Avançado",
      "about.lang2": "Espanhol — Intermediário",
      "about.lang3": "Italiano — Básico",
      "about.lang4": "Francês — Básico",

      "experience.eyebrow": "Experiência",
      "experience.title": "Minha trajetória",
      "experience.lead": "8+ anos resolvendo problemas de dados em bancos, seguradoras, fintechs e empresas de tecnologia.",
      "experience.clientsTitle": "Outros clientes atendidos via Beraldo Coders BR",

      "exp.b3.role": "— Engenheiro de Dados Sênior",
      "exp.b3.badge": "Atual · Ago 2026",
      "exp.b3.desc": "Lidero a arquitetura e modernização da plataforma de dados da bolsa brasileira, migrando soluções legadas — SQL Server, procedures, fluxos Alteryx e processamento de arquivos — para uma arquitetura Lakehouse no Databricks, avaliando não só a conversão tecnológica dos workloads, mas também a adequação das regras de negócio ao novo ambiente. Atuo como referência técnica do time, definindo padrões arquiteturais e componentes reutilizáveis para acelerar a migração de novos workloads.",

      "exp.brasilprev.role": "— Engenheiro de Dados Sênior",
      "exp.brasilprev.badge": "Mar 2025 – Ago 2026",
      "exp.brasilprev.desc": "Liderei a modernização da ingestão de dados, evoluindo de Azure Data Factory para Databricks Lakeflow Connect, com Kafka como motor de streaming e CDC em tempo real — reduzindo a latência dos dados e melhorando os SLAs para os consumidores analíticos. Idealizei e construí o catálogo corporativo de dados com Databricks Apps e IA integrada para orientar os usuários, apliquei modelagem Data Vault para reforçar governança e privacidade, e implantei observabilidade com Datadog e Grafana para detectar falhas antes que virassem incidentes.",

      "exp.ifood.role": "— Engenheiro de Dados Sênior",
      "exp.ifood.badge": "Nov 2024 – Mar 2025",
      "exp.ifood.desc": "Otimizei pipelines e queries PySpark no Databricks, rodando em Azure e AWS, reduzindo o tempo de processamento e a complexidade para o usuário final. Revisei arquiteturas legadas para construir novos produtos de dados, integrei serviços com AWS SNS/SQS para mensageria assíncrona, automatizei infraestrutura com Terraform e implementei testes automatizados (pytest/unittest) para aumentar a confiabilidade das entregas.",

      "exp.santander.role": "— Engenheiro de Dados",
      "exp.santander.badge": "Out 2023 – Nov 2024",
      "exp.santander.desc": "Participei ativamente da construção do primeiro Data Lake da companhia, migrando dados on-premise para a nuvem com Azure Blob Storage, Azure Data Factory, Databricks e Snowflake. Integrei fontes diversas — Oracle, SQL Server, MongoDB, APIs e dados quase em tempo real (NRT) — garantindo integridade e alta disponibilidade, e desenvolvi uma plataforma de BI self-service com conceitos de Data Mesh, dando autonomia aos times de negócio para explorar os dados sem depender de filas de TI.",

      "exp.itau.role": "— Engenheiro de Dados",
      "exp.itau.badge": "Set 2022 – Out 2023",
      "exp.itau.desc": "Migrei a camada de dados local para a nuvem AWS (S3, Redshift, Glue) e construí, do zero, o sistema de NPS e Precificação já nativo na nuvem, consumindo microsserviços em tempo real — resultado que elevou de forma consistente o NPS da área. Participei do projeto de migração On-Premise → AWS e criei sistemas de captação de dados com Python, Knime, Alteryx e Pentaho, padronizando as informações para os Data Warehouses da empresa.",

      "exp.antlia.role": "— Analista de Dados",
      "exp.antlia.badge": "Jul 2021 – Ago 2022",
      "exp.antlia.desc": "Atuei em fábrica de software tratando dados de clientes do setor bancário: transformação de bases vindas de SQL Server e SAS, criação de Stored Procedures, views e joins para consultas de alta performance, e cargas de ETL com SSIS — sempre dentro de um ritmo ágil de entregas contínuas.",

      "exp.deal.role": "— Analista de Dados Financeiros",
      "exp.deal.badge": "Set 2020 – Jun 2021",
      "exp.deal.desc": "Extraí, limpei e modelei dados financeiros para criar visualizações que facilitassem a análise, automatizei rotinas manuais com RPA e Python, e construí dashboards interativos em Power BI que davam às equipes insights rápidos e acionáveis sobre faturamento e indicadores financeiros.",

      "work.eyebrow": "Portfólio",
      "work.title": "Projetos em destaque",
      "work.lead": "Uma seleção de dashboards, pipelines e automações implementados em clientes.",

      "work.card1.desc": "Comparativo entre o Databricks Lakeflow (Delta Live Tables) e o modelo atual de ingestão via Azure Data Factory, com streaming Kafka e réplica automática entre as camadas bronze e silver.",

      "work.card2.kicker": "Data Apps",
      "work.card2.title": "Dashboard de Vendas — Databricks Apps + Streamlit",
      "work.card2.desc": "Data app interativo publicado como Databricks App, com Streamlit consumindo tabelas Delta via Unity Catalog para acompanhar metas, ticket médio e performance em tempo real.",
      "work.card2.alt": "Data app de vendas com Databricks Apps e Streamlit",

      "work.card3.desc": "Faturamento previsto x realizado, forecast e metas por cliente.",
      "work.card4.desc": "Acompanhamento de valor bruto mensal e localização de clientes.",

      "work.card5.title": "Arquitetura de Data Pipeline — AWS",
      "work.card5.desc": "Ingestão, orquestração e processamento de dados de ponta a ponta na nuvem.",

      "work.card6.title": "Data Engineering & IA — Spark + Snowflake",
      "work.card6.desc": "Processamento distribuído de grandes volumes de dados com Apache Spark, carga em Data Warehouse na Snowflake e aplicação de modelos de IA para gerar insights a partir dos dados.",
      "work.card6.stackAI": "IA",

      "work.card7.kicker": "IA",
      "work.card7.title": "Consultas em Linguagem Natural — Genie + Ontology",
      "work.card7.desc": "Modelagem de uma camada semântica (Ontology) no Unity Catalog para alimentar o Databricks Genie, permitindo que áreas de negócio façam perguntas em linguagem natural e recebam respostas confiáveis, sem escrever SQL.",
      "work.card7.alt": "Consultas em linguagem natural com Databricks Genie e Ontology",

      "work.card8.title": "Visualização de Dados — Python",
      "work.card8.desc": "Notebooks com Plotly para mapas e análises exploratórias interativas.",

      "work.card9.title": "Sites Personalizados — Beraldo Coders BR",
      "work.card9.desc": "Desenvolvimento de sites institucionais sob medida para clientes.",

      "passions.eyebrow": "Fora do código",
      "passions.title": "O que me inspira fora do trabalho",
      "passions.lead": "Correr, ler e tocar guitarra são o meu contraponto ao teclado — energia que eu trago de volta para resolver problemas de dados.",
      "passions.leitura.kicker": "Leitura",
      "passions.leitura.title": "Sempre um livro técnico na mesa",
      "passions.leitura.desc": "Gosto de me manter atualizado com o que há de mais recente em IA e engenharia de dados — de LLMs a arquiteturas de produção.",
      "passions.leitura.alt": "Livros sobre IA e engenharia de dados",
      "passions.corrida.kicker": "Corrida",
      "passions.corrida.title": "Correndo pelas ruas de São Paulo",
      "passions.corrida.desc": "Participo de corridas de rua pela cidade — a disciplina da corrida lembra a de um bom pipeline de dados: constância importa mais que velocidade.",
      "passions.corrida.alt": "Medalha de finisher em corrida de rua",
      "passions.musica.kicker": "Música",
      "passions.musica.title": "Guitarra como válvula de escape",
      "passions.musica.desc": "Toco guitarra nas horas vagas — o hobby que desliga a lógica e liga a criatividade.",
      "passions.musica.alt": "Tocando guitarra em um show",

      "contact.eyebrow": "Contato",
      "contact.title": "Vamos conversar sobre o seu próximo projeto?",
      "contact.colTitle": "Entre em contato",
      "contact.colLead": "Precisa de mais detalhes? Envie a sua mensagem que logo entrarei em contato.",
      "contact.ctaTitle": "Envie uma mensagem",
      "contact.ctaLead": "Conte um pouco sobre o seu projeto e eu retorno o mais rápido possível.",
      "contact.formName": "Seu nome",
      "contact.formEmail": "Seu email",
      "contact.formMessage": "Conte um pouco sobre o seu projeto",
      "contact.formSubmit": "Enviar mensagem",
      "contact.formHoneypot": "Não preencha este campo: ",
      "contact.sending": "Enviando...",
      "contact.success": "Mensagem enviada! Retorno em breve.",
      "contact.error": "Não foi possível enviar agora. Tente novamente ou use o email/WhatsApp ao lado.",

      "footer.rights": "Todos os direitos reservados.",
      "footer.backToTop": "Voltar ao topo",

      "meta.title": "Rodrigo Beraldo — Engenheiro de Dados Sênior",
      "meta.description": "Rodrigo Beraldo — Especialista em Engenharia de Dados. Modernização de plataformas legadas para Lakehouse em Azure, AWS e Databricks, com experiência em B3, Brasilprev, iFood, Santander e Itaú."
    },

    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.work": "Projects",
      "nav.passions": "Passions",
      "nav.contact": "Contact",
      "nav.openMenu": "Open menu",

      "hero.eyebrow": "Senior Data Engineer · São Paulo, Brazil",
      "hero.lead": "I help companies evolve legacy data platforms into modern, scalable, AI-ready architectures — connecting business needs to sustainable solutions, from the first Data Lake to the Lakehouse.",
      "hero.btnProjects": "View projects",
      "hero.btnContact": "Get in touch",
      "hero.statYears": "Years of experience",
      "hero.statCompanies": "Companies served",
      "hero.statProjects": "Featured projects",

      "about.eyebrow": "About me",
      "about.title": "Data, code, and a passion for solving problems",
      "about.factsTitle": "// contact info",
      "about.pipelineCaption": "// data pipeline assembling the profile, piece by piece",
      "about.pipelineDone": "pipeline complete",
      "about.photoAlt": "Photo of Rodrigo Beraldo",
      "about.fact.name": "Name",
      "about.fact.role": "Role",
      "about.fact.roleValue": "Data Engineering Specialist",
      "about.fact.location": "Location",
      "about.fact.locationValue": "São Paulo, Brazil",
      "about.fact.email": "Email",
      "about.fact.phone": "Phone",
      "about.heading": "About me",
      "about.p1": "I'm a Data Engineering specialist who likes to solve the problem behind the problem: understanding how the business actually uses data, then designing architectures that are simple to maintain, easy to trust, and ready to grow — instead of just swapping one technology for another.",
      "about.p2": "Throughout my career, I've led the modernization of data platforms at banks, insurers, and tech companies: migrating legacy processes to Lakehouse architectures, cutting data latency from hours to seconds with streaming and CDC, and building data products that bring business and technology teams closer together. More recently, I've also been applying Artificial Intelligence to Data Engineering itself, speeding up development, documentation, and decision-making.",
      "about.skillsTitle1": "How I deliver value",
      "about.chip.agility": "Agility",
      "about.chip.valueDelivery": "Value Delivery",
      "about.chip.teamFacilitator": "Team Facilitator",
      "about.chip.businessAcumen": "Business Acumen",
      "about.chip.architecture": "Architecture & Governance",
      "about.skillsTitle2": "Technologies I use",
      "about.eduTitle": "Education",
      "about.edu0Year": "In progress",
      "about.edu0": "Postgraduate degree in Applied Mathematics for Computing — Anhanguera",
      "about.edu1": "MBA in Big Data and Business Intelligence — Escuela de Negocios Europea de Barcelona",
      "about.edu2": "Bachelor's Degree in Mathematics — Universidade Cruzeiro do Sul",
      "about.edu3": "Economics and Finance — Universidade Paulista",
      "about.langTitle": "Languages",
      "about.lang1": "English — Advanced",
      "about.lang2": "Spanish — Intermediate",
      "about.lang3": "Italian — Basic",
      "about.lang4": "French — Basic",

      "experience.eyebrow": "Experience",
      "experience.title": "My journey",
      "experience.lead": "8+ years solving data problems across banks, insurers, fintechs, and technology companies.",
      "experience.clientsTitle": "Other clients served via Beraldo Coders BR",

      "exp.b3.role": "— Senior Data Engineer",
      "exp.b3.badge": "Current · Aug 2026",
      "exp.b3.desc": "I lead the architecture and modernization of the Brazilian stock exchange's data platform, migrating legacy solutions — SQL Server, stored procedures, Alteryx flows, and file processing — to a Lakehouse architecture on Databricks, assessing not only the technical conversion of workloads but also how business rules translate into the new environment. I act as the team's technical reference, defining architectural standards and reusable components to accelerate the migration of new workloads.",

      "exp.brasilprev.role": "— Senior Data Engineer",
      "exp.brasilprev.badge": "Mar 2025 – Aug 2026",
      "exp.brasilprev.desc": "I led the modernization of data ingestion, evolving from Azure Data Factory to Databricks Lakeflow Connect, with Kafka as the streaming engine and real-time CDC — reducing data latency and improving SLAs for analytics consumers. I designed and built the company's enterprise data catalog with Databricks Apps and integrated AI to guide users, applied Data Vault modeling to strengthen governance and privacy, and rolled out observability with Datadog and Grafana to catch failures before they became incidents.",

      "exp.ifood.role": "— Senior Data Engineer",
      "exp.ifood.badge": "Nov 2024 – Mar 2025",
      "exp.ifood.desc": "I optimized PySpark pipelines and queries on Databricks, running on Azure and AWS, reducing processing time and complexity for end users. I reviewed legacy architectures to build new data products, integrated services with AWS SNS/SQS for asynchronous messaging, automated infrastructure with Terraform, and implemented automated tests (pytest/unittest) to increase delivery reliability.",

      "exp.santander.role": "— Data Engineer",
      "exp.santander.badge": "Oct 2023 – Nov 2024",
      "exp.santander.desc": "I actively took part in building the company's first Data Lake, migrating on-premise data to the cloud with Azure Blob Storage, Azure Data Factory, Databricks, and Snowflake. I integrated diverse sources — Oracle, SQL Server, MongoDB, APIs, and near-real-time (NRT) data — ensuring integrity and high availability, and developed a self-service BI platform based on Data Mesh concepts, giving business teams autonomy to explore data without depending on IT queues.",

      "exp.itau.role": "— Data Engineer",
      "exp.itau.badge": "Sep 2022 – Oct 2023",
      "exp.itau.desc": "I migrated the on-premise data layer to AWS (S3, Redshift, Glue) and built, from scratch, the cloud-native NPS and Pricing system, consuming microservices in real time — a result that consistently raised the department's NPS. I took part in the On-Premise → AWS migration project and built data capture systems with Python, Knime, Alteryx, and Pentaho, standardizing information for the company's Data Warehouses.",

      "exp.antlia.role": "— Data Analyst",
      "exp.antlia.badge": "Jul 2021 – Aug 2022",
      "exp.antlia.desc": "I worked in a software factory handling data for banking-sector clients: transforming data from SQL Server and SAS, creating stored procedures, views, and joins for high-performance queries, and running ETL loads with SSIS — always within an agile rhythm of continuous delivery.",

      "exp.deal.role": "— Financial Data Analyst",
      "exp.deal.badge": "Sep 2020 – Jun 2021",
      "exp.deal.desc": "I extracted, cleaned, and modeled financial data to create visualizations that made analysis easier, automated manual routines with RPA and Python, and built interactive Power BI dashboards that gave teams fast, actionable insights into revenue and financial indicators.",

      "work.eyebrow": "Portfolio",
      "work.title": "Featured projects",
      "work.lead": "A selection of dashboards, pipelines, and automations delivered for clients.",

      "work.card1.desc": "Comparison between Databricks Lakeflow (Delta Live Tables) and the current ingestion model via Azure Data Factory, with Kafka streaming and automatic replication between the bronze and silver layers.",

      "work.card2.kicker": "Data Apps",
      "work.card2.title": "Sales Dashboard — Databricks Apps + Streamlit",
      "work.card2.desc": "Interactive data app published as a Databricks App, with Streamlit querying Delta tables through Unity Catalog to track targets, average ticket, and real-time performance.",
      "work.card2.alt": "Sales data app built with Databricks Apps and Streamlit",

      "work.card3.desc": "Forecast vs. actual revenue, projections, and targets by client.",
      "work.card4.desc": "Monthly gross value tracking and client location mapping.",

      "work.card5.title": "Data Pipeline Architecture — AWS",
      "work.card5.desc": "End-to-end data ingestion, orchestration, and processing in the cloud.",

      "work.card6.title": "Data Engineering & AI — Spark + Snowflake",
      "work.card6.desc": "Distributed processing of large data volumes with Apache Spark, loading into a Snowflake Data Warehouse, and applying AI models to generate insights from the data.",
      "work.card6.stackAI": "AI",

      "work.card7.kicker": "AI",
      "work.card7.title": "Natural Language Queries — Genie + Ontology",
      "work.card7.desc": "Modeled a semantic layer (Ontology) in Unity Catalog to power Databricks Genie, letting business teams ask questions in natural language and get trustworthy answers without writing SQL.",
      "work.card7.alt": "Natural language queries with Databricks Genie and Ontology",

      "work.card8.title": "Data Visualization — Python",
      "work.card8.desc": "Notebooks with Plotly for interactive maps and exploratory analysis.",

      "work.card9.title": "Custom Websites — Beraldo Coders BR",
      "work.card9.desc": "Development of custom institutional websites for clients.",

      "passions.eyebrow": "Beyond the code",
      "passions.title": "What inspires me outside of work",
      "passions.lead": "Running, reading, and playing guitar are my counterbalance to the keyboard — energy I bring back to solving data problems.",
      "passions.leitura.kicker": "Reading",
      "passions.leitura.title": "Always a technical book on the desk",
      "passions.leitura.desc": "I like to stay current with what's newest in AI and data engineering — from LLMs to production architectures.",
      "passions.leitura.alt": "Books about AI and data engineering",
      "passions.corrida.kicker": "Running",
      "passions.corrida.title": "Running the streets of São Paulo",
      "passions.corrida.desc": "I take part in street races around the city — the discipline of running is a lot like a good data pipeline: consistency matters more than speed.",
      "passions.corrida.alt": "Finisher medal from a street race",
      "passions.musica.kicker": "Music",
      "passions.musica.title": "Guitar as an outlet",
      "passions.musica.desc": "I play guitar in my free time — the hobby that switches off logic and switches on creativity.",
      "passions.musica.alt": "Playing guitar at a show",

      "contact.eyebrow": "Contact",
      "contact.title": "Let's talk about your next project?",
      "contact.colTitle": "Get in touch",
      "contact.colLead": "Need more details? Send your message and I'll get back to you shortly.",
      "contact.ctaTitle": "Send a message",
      "contact.ctaLead": "Tell me a bit about your project and I'll get back to you as soon as possible.",
      "contact.formName": "Your name",
      "contact.formEmail": "Your email",
      "contact.formMessage": "Tell me about your project",
      "contact.formSubmit": "Send message",
      "contact.formHoneypot": "Do not fill this field: ",
      "contact.sending": "Sending...",
      "contact.success": "Message sent! I'll get back to you soon.",
      "contact.error": "Couldn't send it right now. Please try again or use the email/WhatsApp next to it.",

      "footer.rights": "All rights reserved.",
      "footer.backToTop": "Back to top",

      "meta.title": "Rodrigo Beraldo — Senior Data Engineer",
      "meta.description": "Rodrigo Beraldo — Data Engineering specialist. Modernizing legacy platforms into Lakehouse architectures on Azure, AWS, and Databricks, with experience at B3, Brasilprev, iFood, Santander, and Itaú."
    }
  };

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore (private browsing, storage disabled, etc.) */
    }
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.pt;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    document.documentElement.lang = lang === "en" ? "en-US" : "pt-BR";
    if (dict["meta.title"]) document.title = dict["meta.title"];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict["meta.description"]) metaDesc.setAttribute("content", dict["meta.description"]);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    window.currentLang = lang;
  }

  function setLanguage(lang) {
    applyLanguage(lang);
    storeLang(lang);
  }

  function t(key) {
    const dict = translations[window.currentLang] || translations.pt;
    return dict[key] !== undefined ? dict[key] : key;
  }

  const initialLang = getStoredLang() === "en" ? "en" : "pt";
  applyLanguage(initialLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
  });

  window.i18n = { t, setLanguage, getLanguage: () => window.currentLang };
})();
