import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function exportLandingPage() {
  try {
    console.log('🚀 Iniciando exportação da landing page...');
    
    // Build usando a config especial de export
    console.log('📦 Fazendo build do projeto...');
    await execAsync('vite build --config vite.config.export.ts', {
      cwd: path.resolve(__dirname, '..')
    });
    
    // Ler o arquivo HTML gerado
    const distPath = path.resolve(__dirname, '..', 'dist-export', 'index.html');
    const htmlContent = await fs.readFile(distPath, 'utf-8');
    
    // Salvar na raiz do projeto
    const outputPath = path.resolve(__dirname, '..', 'drp-mecanica-landing-page.html');
    await fs.writeFile(outputPath, htmlContent, 'utf-8');
    
    console.log('✅ Landing page exportada com sucesso!');
    console.log(`📄 Arquivo salvo em: drp-mecanica-landing-page.html`);
    
    // Limpar pasta temporária
    await fs.rm(path.resolve(__dirname, '..', 'dist-export'), { recursive: true, force: true });
    
    return {
      success: true,
      path: outputPath,
      size: (await fs.stat(outputPath)).size
    };
  } catch (error) {
    console.error('❌ Erro ao exportar landing page:', error);
    throw error;
  }
}

// Executar se chamado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  exportLandingPage()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

export { exportLandingPage };
