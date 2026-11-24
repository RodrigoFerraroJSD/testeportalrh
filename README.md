# RH CONNECT — Portal demonstrativo

Frontend estático HTML, CSS e JavaScript, com Firebase opcional. Não requer Node.js, Express ou Render. **Não é um sistema de RH de produção. Não insira dados pessoais reais.**

## Publicação
No GitHub: Settings > Pages > Deploy from a branch > main > /(root) > Save.
O index.html deve permanecer na raiz.

## Funcionalidades
- Interface responsiva, temas claro/escuro, navegação por teclado e movimento reduzido.
- Três perfis de demonstração: colaborador, RH e administrador.
- Dashboard com indicadores calculados a partir do diretório e filtro por departamento.
- Diretório: busca, filtros, paginação, exportação CSV, criação e edição de registros fictícios; exclusão pelo administrador demonstrativo.
- As cinco contas/registros de exemplo permanecem protegidos para preservar a demonstração.
- Persistência local ou Firestore com autenticação anônima e isolamento por UID.

## Firebase
1. Crie um projeto em https://console.firebase.google.com/ e registre um aplicativo Web.
2. Preencha js/firebase-config.js com a configuração pública do aplicativo Web. Nunca use chave privada de conta de serviço.
3. Habilite Authentication > Anonymous e, se necessário, adicione o domínio do Pages aos domínios autorizados.
4. Crie Cloud Firestore e publique as regras de firestore.rules no console.
5. Teste com dados fictícios: cadastrar, recarregar, editar, recarregar, excluir e recarregar.
6. Confira que outro navegador anônimo não consegue acessar o diretório gravado pelo primeiro.

Sem Firebase configurado, registros criados ficam no localStorage. Não há migração automática entre armazenamento local e remoto. Se a nuvem estiver configurada e falhar, o portal informa o erro; não grava silenciosamente em outro destino.

## Segurança e limites
Login e permissões de RH/admin são apenas simulações no frontend. A identidade anônima do Firebase protege registros por UID, não implementa RBAC corporativo. Os módulos de holerites, benefícios, ponto, agenda, solicitações e recuperação de senha continuam ilustrativos. Nenhum e-mail é enviado. Para produção é indispensável autenticação real, regras por função verificadas no servidor/Firebase, revisão de privacidade e testes de acesso.

## Checklist de aceitação
- Abrir em 320, 375, 768, 1024 e 1440 px; conferir menus, modais e rolagem das tabelas.
- Testar os três perfis (senha de demonstração: 123456).
- Conferir teclado, Esc, foco e alternância de tema.
- Cadastrar, editar e excluir um funcionário fictício; testar duplicidade e filtros.
- Exportar CSV filtrado; conferir acentos e colunas.
- Executar testes de segurança das regras antes de usar a nuvem.
