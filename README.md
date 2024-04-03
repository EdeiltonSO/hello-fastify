# Hello Fastify

Isso aqui é uma API em Node pra brincar com o Fastify. É parte dos estudos do bootcamp de Node da Rocketseat.

## Como executar?

Sem segredo:
1. Faz o `git clone`;
2. Entra na pasta;
3. Executa `npm i`;
4. Executa `npm run dev`;

## Quais são os requisitos e regras?

### Requisitos funcionais

- [x] Usuário deve poder criar uma transação;
- [x] Usuário deve poder obter um resumo da própria conta;
- [x] Usuário deve poder listar todas as transações que já ocorreram na própria conta;
- [x] Usuário deve poder visualizar uma transação única;

### Regras de negócio

- [x] Transação pode ser do tipo crédito (se soma ao valor total) ou débito (se subtrai do valor total);
- [ ] Deve ser possível identificarmos o usuário entre as requisições. Não teremos login e senha, mas precisamos que o usuário A faça transações de crédito e débito na própria conta e quando o usuário B for fazer o mesmo, não impacte na atividade da conta do usuário A;
- [ ] Usuário só pode visualizar transações que ele criou;
