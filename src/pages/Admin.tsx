import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Admin = () => {
  const [isExporting, setIsExporting] = useState(false);

  const exportHTML = async () => {
    setIsExporting(true);
    
    try {
      toast.info("Iniciando exportação...");
      
      // Chamar API ou endpoint que executa o script
      const response = await fetch('/api/export', {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Falha na exportação');
      }
      
      // Baixar o arquivo
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'drp-mecanica-landing-page.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast.success("HTML exportado com sucesso!");
    } catch (error) {
      console.error('Erro ao exportar:', error);
      toast.error("Erro ao exportar. Execute o script manualmente: npm run export");
    } finally {
      setIsExporting(false);
    }
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
            <div className="bg-muted/50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2 text-foreground">Como exportar:</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Execute o comando abaixo no terminal do seu projeto:
              </p>
              <code className="block bg-secondary text-secondary-foreground px-3 py-2 rounded text-sm">
                node scripts/export.js
              </code>
              <p className="text-sm text-muted-foreground mt-2">
                Ou adicione no package.json e execute: <code className="bg-secondary px-1 rounded">npm run export</code>
              </p>
            </div>
            <Button
              size="lg"
              onClick={exportHTML}
              disabled={isExporting}
              className="gap-2"
            >
              {isExporting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Exportando...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Exportar Landing Page
                </>
              )}
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              * A exportação via botão requer backend. Use o comando no terminal para garantir funcionamento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;