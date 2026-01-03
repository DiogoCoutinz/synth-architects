# 🚀 Checklist de Deployment - Diogo Coutinho Website

## ✅ PRÉ-DEPLOYMENT (Já Feito)
- [x] Meta tags SEO otimizadas
- [x] Sitemap.xml configurado
- [x] Robots.txt configurado
- [x] Schema.org markup (JSON-LD)
- [x] Open Graph tags (Facebook/LinkedIn)
- [x] Twitter Cards
- [x] Favicon configurado
- [x] Manifest.json (PWA)
- [x] Responsive design
- [x] Link Cal.com configurado
- [x] Contactos atualizados
- [x] Página 404 customizada

## 📦 BUILD & DEPLOY

### 1. Build do Projeto
```bash
npm run build
```

### 2. Testar Build Localmente
```bash
npm run preview
```

### 3. Deploy (Escolhe uma opção)

#### Opção A: Vercel (Recomendado - Grátis)
1. Criar conta em https://vercel.com
2. Conectar GitHub/GitLab
3. Importar repositório
4. Deploy automático!
5. Domínio custom: `diogocoutinho.com`

#### Opção B: Netlify (Alternativa - Grátis)
1. Criar conta em https://netlify.com
2. Arrastar pasta `dist/` para o site
3. Configurar domínio custom

#### Opção C: Cloudflare Pages (Alternativa - Grátis)
1. Criar conta em https://pages.cloudflare.com
2. Conectar GitHub
3. Deploy automático

## 🔍 PÓS-DEPLOYMENT - Google Search Console

### Passo 1: Verificar Propriedade do Site
1. Ir a https://search.google.com/search-console
2. Adicionar propriedade: `https://www.diogocoutinho.com`
3. Verificar via meta tag ou DNS

### Passo 2: Submeter Sitemap
1. No Google Search Console
2. Ir a "Sitemaps"
3. Adicionar: `https://www.diogocoutinho.com/sitemap.xml`
4. Submeter

### Passo 3: Pedir Indexação Manual
1. No Search Console
2. Ir a "Inspeção de URL"
3. Colocar: `https://www.diogocoutinho.com`
4. Clicar "Solicitar indexação"

## 📊 Analytics (Opcional mas Recomendado)

### Google Analytics 4
1. Criar conta em https://analytics.google.com
2. Criar propriedade "Diogo Coutinho"
3. Copiar Measurement ID (ex: G-XXXXXXXXXX)
4. Adicionar ao `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎯 SEO - Primeiros Dias

### O que fazer:
1. ✅ **Partilhar em redes sociais**
   - LinkedIn (pessoal + página empresa)
   - Instagram (@diogocoutinho.ai)
   - WhatsApp Status

2. ✅ **Criar backlinks**
   - LinkedIn: adicionar website ao perfil
   - Instagram: link na bio
   - Directorias portuguesas de empresas

3. ✅ **Conteúdo**
   - Publicar 1-2 posts no LinkedIn por semana
   - Mencionar o website
   - Partilhar casos de sucesso

### Palavras-chave Target:
- "automação empresarial portugal"
- "automação AI portugal"
- "consultoria inteligência artificial lisboa"
- "automação n8n portugal"
- "especialista automação portugal"
- "diogo coutinho automação"

## ⏱️ Timeframes Esperados

- **Indexação Google**: 1-3 dias
- **Aparecer em pesquisas genéricas**: 2-4 semanas
- **Ranking melhorar**: 2-3 meses
- **"Diogo Coutinho" aparecer**: 1-2 semanas

## 🔧 Performance

### Antes de Deploy - Verificar:
```bash
# Build
npm run build

# Verificar tamanho
ls -lh dist/
```

### Depois de Deploy - Testar:
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- Target: 90+ score

## 📱 Testes Finais

Antes de fazer deploy, testa:
- [ ] Homepage funciona
- [ ] Navegação entre secções
- [ ] Formulário de contacto envia
- [ ] Link Cal.com abre
- [ ] WhatsApp abre com mensagem
- [ ] Página 404 funciona
- [ ] FaturaAI page funciona
- [ ] Mobile responsive
- [ ] Tablet responsive
- [ ] Desktop responsive

## 🎉 DEPOIS DO DEPLOY

### Imediato:
1. Testar site no domínio novo
2. Verificar Google Search Console
3. Submeter sitemap
4. Partilhar nas redes sociais

### Primeira Semana:
1. Monitorizar Google Search Console
2. Ver quem visita (Analytics)
3. Ajustar conteúdo se necessário

### Primeiro Mês:
1. Publicar conteúdo regular
2. Otimizar com base em dados
3. Criar mais backlinks

## 🆘 Troubleshooting

### Site não aparece no Google?
- Verificar robots.txt não está a bloquear
- Verificar sitemap foi submetido
- Esperar 3-7 dias após indexação

### Performance baixa?
- Otimizar imagens (comprimir)
- Lazy loading está ativo
- CDN configurado (Vercel/Netlify fazem automaticamente)

### Links quebrados?
- Verificar todas as rotas
- Testar 404 page
- Verificar links externos

---

## 🎯 PRÓXIMOS PASSOS

1. **AGORA**: `npm run build`
2. **DEPLOY**: Escolher plataforma (Vercel recomendado)
3. **GOOGLE**: Search Console + Sitemap
4. **PARTILHAR**: Redes sociais
5. **MONITORIZAR**: Analytics

**Domínio configurado**: `www.diogocoutinho.com` ✅

Boa sorte! 🚀

