# Espaço Clínico Arco-Íris — versão independente

Este projeto foi preparado como um site institucional estático em React + Vite. O código não depende do SDK, do backend, da autenticação ou da hospedagem do Base44.

## Rodar no computador

1. Instale o Node.js (versão 20.19+ ou 22.12+).
2. Extraia o ZIP.
3. Abra a pasta extraída no terminal.
4. Execute:

```bash
npm ci
npm run dev
```

O Vite mostrará um endereço local para abrir o site no navegador.

## Gerar os arquivos para publicação

```bash
npm ci
npm run build
```

A versão pronta para hospedagem ficará na pasta `dist/`.

## Publicar gratuitamente no Cloudflare Pages

1. Crie uma conta em https://dash.cloudflare.com/.
2. Envie este projeto para um repositório no GitHub.
3. No painel Cloudflare, abra **Workers & Pages** e escolha **Create application** → **Pages** → **Connect to Git**.
4. Selecione o repositório do site.
5. Configure o comando de build como `npm run build`.
6. Configure o diretório de saída como `dist`.
7. Salve e aguarde a publicação.
8. Depois, em **Custom domains**, conecte o domínio da clínica.

O arquivo `public/_redirects` já está incluído para manter as rotas do site, como `/privacidade`, funcionando na hospedagem estática.

## Formulário de contato

O formulário abre o WhatsApp da clínica com os dados preenchidos. A pessoa precisa revisar e tocar em enviar dentro do WhatsApp. O site não salva os dados em banco de dados nem envia mensagens automaticamente.

## Conteúdos que precisam ser revisados antes de publicar

- Especialidades e profissionais usam as informações padrão que estavam no código exportado. Confirme nomes, cargos, registros profissionais e especialidades com a clínica.
- Galeria, convênios, depoimentos e perguntas frequentes estavam vinculados a conteúdo dinâmico no Base44 e não vieram preenchidos no ZIP. Nesta versão, essas áreas ficam com estados vazios/“em breve”. Adicione os conteúdos corretos antes da publicação, se desejar exibi-los.
- As fotografias hospedadas no Base44 não vieram dentro do ZIP. Foram substituídas por ilustrações locais para que o site não dependa de arquivos de imagem do Base44.
- Revise a política de privacidade com a clínica. O texto atual descreve o formulário via WhatsApp e é um modelo inicial.

## Importante

Mantenha sua conta e seu projeto Base44 ativos até publicar e testar esta versão independente, incluindo links, formulário, celular e domínio. Só depois de confirmar tudo, decida se deseja cancelar o plano.
