import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";

const Admin = () => {
  const generateHTML = () => {
    const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DRP Mecânica Automotiva - Igrejinha RS | Manutenção e Reparos Automotivos</title>
    <meta name="description" content="Mecânica automotiva de confiança em Igrejinha, RS. Serviços completos de manutenção, revisão, troca de óleo, freios, suspensão e diagnóstico eletrônico. Agende agora!">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #1e3a5f;
            background: #fafafa;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #0066a1 0%, #003d66 100%);
            color: white;
            padding: 6rem 1rem 4rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" fill="white" opacity="0.1"/></svg>');
            opacity: 0.3;
        }
        
        .hero-content {
            position: relative;
            z-index: 1;
        }
        
        .logo {
            max-width: 200px;
            margin: 0 auto 2rem;
        }
        
        .hero h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        
        .hero p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.95;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2.5rem;
            font-size: 1.125rem;
            font-weight: 600;
            border-radius: 0.75rem;
            text-decoration: none;
            transition: all 0.3s;
            cursor: pointer;
            border: none;
        }
        
        .btn-whatsapp {
            background: linear-gradient(135deg, #8bc34a 0%, #7cb342 100%);
            color: #1e3a5f;
            box-shadow: 0 8px 24px -8px rgba(139, 195, 74, 0.4);
        }
        
        .btn-whatsapp:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 30px -8px rgba(139, 195, 74, 0.5);
        }
        
        .hero-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .stat {
            text-align: center;
        }
        
        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            display: block;
            margin-bottom: 0.5rem;
            filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
        }
        
        .stat-label {
            font-size: 1rem;
            font-weight: 600;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }
        
        /* Services Section */
        .services {
            padding: 5rem 1rem;
            background: white;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #1e3a5f;
        }
        
        .section-subtitle {
            text-align: center;
            font-size: 1.125rem;
            margin-bottom: 3rem;
            color: #666;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
        }
        
        .service-card {
            padding: 2rem;
            border-radius: 0.75rem;
            background: #fafafa;
            border: 2px solid #e0e0e0;
            transition: all 0.3s;
        }
        
        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 40px -10px rgba(0, 102, 161, 0.3);
            border-color: #0066a1;
        }
        
        .service-icon {
            width: 48px;
            height: 48px;
            color: #0066a1;
            margin-bottom: 1rem;
        }
        
        .service-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            color: #1e3a5f;
        }
        
        .service-description {
            color: #666;
        }
        
        /* Portfolio Section */
        .portfolio {
            padding: 5rem 1rem;
            background: #fafafa;
        }
        
        .work-item {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin-bottom: 3rem;
            align-items: center;
        }
        
        .work-item:nth-child(even) {
            direction: rtl;
        }
        
        .work-item:nth-child(even) > * {
            direction: ltr;
        }
        
        .work-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 0.75rem;
            transition: transform 0.3s;
        }
        
        .work-image:hover {
            transform: scale(1.05);
        }
        
        .work-content {
            padding: 1.5rem;
        }
        
        .work-title {
            font-size: 1.75rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #1e3a5f;
        }
        
        .work-description {
            color: #666;
            font-size: 1.125rem;
        }
        
        /* CTA Section */
        .cta {
            background: linear-gradient(135deg, #8bc34a 0%, #7cb342 100%);
            padding: 5rem 1rem;
            text-align: center;
            color: #1e3a5f;
        }
        
        .cta h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        
        .cta-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .cta-feature {
            text-align: center;
        }
        
        .cta-feature-icon {
            width: 48px;
            height: 48px;
            margin: 0 auto 1rem;
        }
        
        /* Location Section */
        .location {
            padding: 5rem 1rem;
            background: white;
        }
        
        .location-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin-top: 3rem;
        }
        
        .location-info {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .info-item {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
        }
        
        .info-icon {
            width: 24px;
            height: 24px;
            color: #0066a1;
            flex-shrink: 0;
        }
        
        .map-container {
            border-radius: 0.75rem;
            overflow: hidden;
            height: 400px;
        }
        
        .map-container iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
        
        /* Footer */
        .footer {
            background: #1e3a5f;
            color: white;
            padding: 3rem 1rem;
        }
        
        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 2rem;
        }
        
        .footer-logo {
            max-width: 200px;
        }
        
        .footer-info {
            text-align: right;
        }
        
        .footer-bottom {
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.2);
            text-align: center;
            font-size: 0.875rem;
            opacity: 0.7;
        }
        
        /* WhatsApp Float */
        .whatsapp-float {
            position: fixed;
            bottom: 1.5rem;
            right: 1.5rem;
            z-index: 1000;
            animation: bounce 3s ease-in-out infinite;
        }
        
        .whatsapp-btn {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: linear-gradient(135deg, #8bc34a 0%, #7cb342 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 24px -8px rgba(139, 195, 74, 0.6);
            transition: transform 0.3s;
            border: none;
            cursor: pointer;
            position: relative;
        }
        
        .whatsapp-btn:hover {
            transform: scale(1.1);
        }
        
        .whatsapp-badge {
            position: absolute;
            top: -8px;
            right: -8px;
            width: 20px;
            height: 20px;
            background: #ef4444;
            border-radius: 50%;
            animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        @media (max-width: 768px) {
            .hero h1 { font-size: 2rem; }
            .section-title { font-size: 2rem; }
            .work-item { grid-template-columns: 1fr; }
            .location-grid { grid-template-columns: 1fr; }
            .footer-content { flex-direction: column; text-align: center; }
            .footer-info { text-align: center; }
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <div class="container hero-content">
            <img src="https://storage.googleapis.com/gpt-engineer-file-uploads/SDX9CvXuCqapYzWWr8kgLghtyiC3/uploads/1759330765009-images.png" alt="DRP Mecânica Automotiva" class="logo">
            <h1>Mecânica Automotiva de Confiança em Igrejinha</h1>
            <p>Especialistas em manutenção preventiva e corretiva para seu veículo</p>
            <a href="https://wa.me/5551997188572?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20agendar%20um%20servi%C3%A7o." class="btn btn-whatsapp" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Agendar Serviço
            </a>
            <div class="hero-stats">
                <div class="stat">
                    <span class="stat-number">10+</span>
                    <span class="stat-label">Anos de Experiência</span>
                </div>
                <div class="stat">
                    <span class="stat-number">1000+</span>
                    <span class="stat-label">Clientes Satisfeitos</span>
                </div>
                <div class="stat">
                    <span class="stat-number">100%</span>
                    <span class="stat-label">Comprometimento</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services">
        <div class="container">
            <h2 class="section-title">Nossos Serviços</h2>
            <p class="section-subtitle">Oferecemos uma gama completa de serviços automotivos</p>
            <div class="services-grid">
                <div class="service-card">
                    <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                    </svg>
                    <h3 class="service-title">Manutenção Preventiva</h3>
                    <p class="service-description">Revisões periódicas para manter seu veículo sempre em dia</p>
                </div>
                <div class="service-card">
                    <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                    <h3 class="service-title">Reparos Gerais</h3>
                    <p class="service-description">Diagnóstico e correção de problemas mecânicos</p>
                </div>
                <div class="service-card">
                    <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <h3 class="service-title">Troca de Óleo</h3>
                    <p class="service-description">Lubrificação completa do motor com produtos de qualidade</p>
                </div>
                <div class="service-card">
                    <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    <h3 class="service-title">Sistema de Freios</h3>
                    <p class="service-description">Revisão e troca de pastilhas, discos e fluidos</p>
                </div>
                <div class="service-card">
                    <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2v20M2 12h20"></path>
                    </svg>
                    <h3 class="service-title">Suspensão</h3>
                    <p class="service-description">Alinhamento, balanceamento e troca de componentes</p>
                </div>
                <div class="service-card">
                    <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                        <path d="M12 12h.01M17 12h.01M7 12h.01"></path>
                    </svg>
                    <h3 class="service-title">Diagnóstico Eletrônico</h3>
                    <p class="service-description">Identificação de problemas com equipamentos modernos</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio">
        <div class="container">
            <h2 class="section-title">Alguns Trabalhos Realizados</h2>
            <p class="section-subtitle">Veja a qualidade dos nossos serviços</p>
            
            <div class="work-item">
                <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600" alt="Revisão Completa" class="work-image">
                <div class="work-content">
                    <h3 class="work-title">Revisão Completa</h3>
                    <p class="work-description">Realizada manutenção preventiva completa incluindo troca de óleo, filtros, verificação de freios e suspensão. Cliente satisfeito com o resultado e performance do veículo.</p>
                </div>
            </div>
            
            <div class="work-item">
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600" alt="Troca de Suspensão" class="work-image">
                <div class="work-content">
                    <h3 class="work-title">Troca de Suspensão</h3>
                    <p class="work-description">Substituição completa do sistema de suspensão dianteira, incluindo amortecedores, molas e buchas. Veículo voltou a ter estabilidade e conforto.</p>
                </div>
            </div>
            
            <div class="work-item">
                <img src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600" alt="Sistema de Freios" class="work-image">
                <div class="work-content">
                    <h3 class="work-title">Sistema de Freios</h3>
                    <p class="work-description">Troca de pastilhas e discos de freio nas quatro rodas, sangria do sistema e regulagem. Segurança e performance restauradas.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
        <div class="container">
            <h2>Seu Carro Precisa de Atenção?</h2>
            <p style="font-size: 1.125rem; margin-bottom: 2rem;">Entre em contato agora e agende seu serviço com os melhores profissionais</p>
            <a href="https://wa.me/5551997188572?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20agendar%20um%20servi%C3%A7o." class="btn btn-whatsapp" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Fale Conosco Agora
            </a>
            <div class="cta-features">
                <div class="cta-feature">
                    <svg class="cta-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                    <h3 style="font-weight: 600; margin-bottom: 0.5rem;">Atendimento Rápido</h3>
                    <p>Resposta imediata</p>
                </div>
                <div class="cta-feature">
                    <svg class="cta-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    <h3 style="font-weight: 600; margin-bottom: 0.5rem;">Preços Justos</h3>
                    <p>Orçamento transparente</p>
                </div>
                <div class="cta-feature">
                    <svg class="cta-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <h3 style="font-weight: 600; margin-bottom: 0.5rem;">Garantia de Qualidade</h3>
                    <p>Serviço garantido</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Location Section -->
    <section class="location">
        <div class="container">
            <h2 class="section-title">Nossa Localização</h2>
            <p class="section-subtitle">Venha nos visitar em Igrejinha, RS</p>
            <div class="location-grid">
                <div class="location-info">
                    <div class="info-item">
                        <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <div>
                            <h3 style="font-weight: 600; margin-bottom: 0.25rem;">Endereço</h3>
                            <p style="color: #666;">Igrejinha, RS - Brasil</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <div>
                            <h3 style="font-weight: 600; margin-bottom: 0.25rem;">Telefone</h3>
                            <p style="color: #666;">(51) 99718-8572</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <div>
                            <h3 style="font-weight: 600; margin-bottom: 0.25rem;">Horário</h3>
                            <p style="color: #666;">Segunda a Sexta: 8h às 18h</p>
                            <p style="color: #666;">Sábado: 8h às 12h</p>
                        </div>
                    </div>
                    <a href="https://wa.me/5551997188572?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20agendar%20um%20servi%C3%A7o." class="btn btn-whatsapp" target="_blank" style="width: fit-content;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        Entre em Contato pelo WhatsApp
                    </a>
                </div>
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13889.761437891!2d-50.78847!3d-29.54586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95194f1e36425555%3A0x6b5d6d7b0e1f1e1e!2sIgrejinha%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1234567890" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <img src="https://storage.googleapis.com/gpt-engineer-file-uploads/SDX9CvXuCqapYzWWr8kgLghtyiC3/uploads/1759330765009-images.png" alt="DRP Mecânica Automotiva" class="footer-logo">
                <div class="footer-info">
                    <p style="font-weight: 600;">DRP Mecânica Automotiva</p>
                    <p style="opacity: 0.8;">Igrejinha, RS - Brasil</p>
                    <p style="opacity: 0.8;">(51) 99718-8572</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 DRP Mecânica Automotiva. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

    <!-- WhatsApp Float -->
    <div class="whatsapp-float">
        <a href="https://wa.me/5551997188572?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20agendar%20um%20servi%C3%A7o." target="_blank" class="whatsapp-btn" aria-label="Fale conosco no WhatsApp">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span class="whatsapp-badge"></span>
        </a>
    </div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'drp-mecanica-landing-page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("HTML baixado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Painel Admin</h1>
          <p className="text-muted-foreground mb-8">
            Use o botão abaixo para baixar a landing page completa em um único arquivo HTML.
          </p>
          
          <div className="border-t pt-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Exportar Landing Page</h2>
            <p className="text-muted-foreground mb-6">
              O arquivo HTML será gerado com todo o CSS e JavaScript embutidos, pronto para ser hospedado em qualquer servidor.
            </p>
            <Button
              size="lg"
              onClick={generateHTML}
              className="gap-2"
            >
              <Download className="w-5 h-5" />
              Baixar Landing Page HTML
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;