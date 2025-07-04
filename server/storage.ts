import { users, projects, blogPosts, contactMessages, type User, type InsertUser, type Project, type InsertProject, type BlogPost, type InsertBlogPost, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private blogPosts: Map<number, BlogPost>;
  private contactMessages: Map<number, ContactMessage>;
  private currentUserId: number;
  private currentProjectId: number;
  private currentBlogPostId: number;
  private currentContactMessageId: number;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.blogPosts = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentProjectId = 1;
    this.currentBlogPostId = 1;
    this.currentContactMessageId = 1;

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample projects
    const sampleProjects: Project[] = [
      {
        id: this.currentProjectId++,
        title: "Sistema de Gestão para Startups Nórdicas",
        description: "Plataforma completa de gestão desenvolvida para startups na Suécia, com foco em escalabilidade e performance. Integração com APIs locais e conformidade com GDPR.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        liveUrl: "https://nordicsystem.se",
        codeUrl: "https://github.com/ricksouza/nordic-system",
        featured: true,
        createdAt: new Date(),
      },
      {
        id: this.currentProjectId++,
        title: "App de Networking para Brasileiros na Europa",
        description: "Aplicativo mobile que conecta brasileiros vivendo na Europa, facilitando networking profissional e troca de experiências culturais.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        technologies: ["React Native", "Firebase", "Express.js"],
        liveUrl: "https://brazeurope.app",
        codeUrl: "https://github.com/ricksouza/braz-europe",
        featured: true,
        createdAt: new Date(),
      },
      {
        id: this.currentProjectId++,
        title: "Plataforma de E-learning Multilíngue",
        description: "Sistema de ensino online com suporte a múltiplos idiomas, desenvolvido para ensino de programação com foco no mercado europeu.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        technologies: ["Next.js", "Prisma", "tRPC", "Stripe"],
        liveUrl: "https://codeacademy.eu",
        codeUrl: "https://github.com/ricksouza/multilang-learning",
        featured: true,
        createdAt: new Date(),
      },
    ];

    // Sample blog posts
    const sampleBlogPosts: BlogPost[] = [
      {
        id: this.currentBlogPostId++,
        title: "Como é Realmente Viver na Suécia: 6 Meses de Experiência",
        excerpt: "Desde o choque cultural até as alegrias inesperadas, compartilho tudo sobre minha adaptação à vida sueca. Spoiler: nem tudo é como nos filmes!",
        content: "Full blog post content here...",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        category: "Vida na Suécia",
        published: true,
        createdAt: new Date("2024-01-15"),
      },
      {
        id: this.currentBlogPostId++,
        title: "Trabalhando Remotamente para Empresas Europeias: Dicas Práticas",
        excerpt: "Como conquistei meu primeiro emprego remoto na Europa e as lições que aprendi no processo. Fusos horários, comunicação e cultura de trabalho.",
        content: "Full blog post content here...",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        category: "Carreira",
        published: true,
        createdAt: new Date("2024-01-10"),
      },
      {
        id: this.currentBlogPostId++,
        title: "5 Coisas que Ninguém te Conta sobre Morar Fora do Brasil",
        excerpt: "Além da saudade da família e da comida, existe um mundo de pequenos detalhes que só quem vive sabe. Vou contar tudo!",
        content: "Full blog post content here...",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        category: "Vida no Exterior",
        published: true,
        createdAt: new Date("2024-01-05"),
      },
      {
        id: this.currentBlogPostId++,
        title: "Música Brasileira nas Terras Nórdicas: Como Manter as Raízes",
        excerpt: "Descobrindo a cena musical local e criando pontes entre o Brasil e a Suécia através da música. Uma jornada sonora inesperada.",
        content: "Full blog post content here...",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        category: "Música",
        published: true,
        createdAt: new Date("2023-12-28"),
      },
    ];

    sampleProjects.forEach(project => this.projects.set(project.id, project));
    sampleBlogPosts.forEach(post => this.blogPosts.set(post.id, post));
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort(
      (a, b) => b.createdAt!.getTime() - a.createdAt!.getTime()
    );
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => project.featured)
      .sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = {
      ...insertProject,
      id,
      createdAt: new Date(),
      liveUrl: insertProject.liveUrl || null,
      codeUrl: insertProject.codeUrl || null,
      featured: insertProject.featured || false,
    };
    this.projects.set(id, project);
    return project;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => b.createdAt!.getTime() - a.createdAt!.getTime()
    );
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const blogPost: BlogPost = {
      ...insertBlogPost,
      id,
      createdAt: new Date(),
      published: insertBlogPost.published || false,
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  async createContactMessage(insertContactMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const contactMessage: ContactMessage = {
      ...insertContactMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort(
      (a, b) => b.createdAt!.getTime() - a.createdAt!.getTime()
    );
  }
}

export const storage = new MemStorage();
