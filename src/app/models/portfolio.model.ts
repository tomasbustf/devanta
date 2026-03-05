export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'mobile' | 'platform' | 'ai' | 'consulting' | 'design';
  description: string;
  tags: string[];
  imageUrl?: string;       // URL de imagen o path a assets/
  imageColor?: string;     // color fallback si no hay imagen
  liveUrl?: string;        // link al sitio live
  year: number;
  featured?: boolean;
}
