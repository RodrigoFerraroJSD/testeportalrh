# RH CONNECT — GitHub Pages + Firebase

Portal demonstrativo estático. Sem Node, Express ou instalação de dependências.

## Publicação
1. Extraia o ZIP e envie todos os arquivos (inclusive `.nojekyll`) à raiz do repositório. Remova os arquivos antigos do backend se não forem mais necessários.
2. Settings > Pages > Deploy from a branch > main > /(root) > Save.
3. Abra a URL indicada pelo GitHub.

## Firebase opcional
Sem configuração, os novos funcionários são salvos no localStorage.
1. Em https://console.firebase.google.com/ crie um projeto e registre um aplicativo Web.
2. Copie os valores firebaseConfig para `js/firebase-config.js` (apiKey, authDomain, projectId, appId). Não use chaves privadas de contas de serviço.
3. Em Authentication > Sign-in method habilite Anonymous. Em Settings > Authorized domains adicione o domínio do Pages, se necessário.
4. Crie um banco Cloud Firestore. Em Rules cole o conteúdo de `firestore.rules` e publique.
5. Envie a configuração ao GitHub. Cadastre um funcionário fictício e recarregue a página para conferir. Os dados locais anteriores não são migrados automaticamente.

## Limitações
Os três logins e permissões da interface são simulados (senha 123456). O Firebase usa identidade anônima por navegador, isolando os registros por UID; não há compartilhamento entre dispositivos ou autenticação corporativa real. Cadastro de funcionários é persistente; os demais módulos, recuperação de senha e solicitação de acesso continuam ilustrativos. Não use dados reais, holerites ou informações sensíveis. As regras devem ser publicadas no console; o GitHub não as instala.
