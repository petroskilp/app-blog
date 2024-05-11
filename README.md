# Exemplo aplicação Fullstack com Next.js (REST API) para minicurso DEVOPS

Esta aplicação de exemplo foi adaptada do Tutorial disponível em [Fullstack Example with Next.js (REST API)](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-api-routes).

O exemplo implementa uma aplicação **fullstack em typescript com [Next.js](https://nextjs.org/)** usando [React](https://reactjs.org/) e [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).

## Iniciando

### 1. Download do projeto

Clone do repositório


```
git clone https://github.com/petroskilp/app-blog
```

Instalar dependências npm:

```
cd app-blog
npm install
```

## 2. Configurar o banco de dados

Fazer uma copia do arquivo `example.env` com o nome `.env`
```
cp example.env .env
```
Editar as informações do banco de dados. Neste minicurso iremos utilizar o banco de dados Postgres, que pode ser obtido no banco da plataforma IaaS (Infrastructure as a service) [RENDER](https://render.com/) ou via docker.

### Ou Render
- Criar uma conta na plataforma [Dashboard RENDER](https://dashboard.render.com/)
- Criar uma instância de banco de dados gratuita ([Tutorial](https://docs.render.com/databases))
- Copiar a `URL External Database URL` e definir no arquivo `.env`

### Ou Docker
- Instalar o docker 
- Executar o comando:
```
docker run -p 5432:5432 -v /tmp/database:/var/lib/postgresql/data -e POSTGRES_PASSWORD=1234 -d postgres
```
- Definir a URL do banco de dados no arquivo `.env`:
```
POSTGRES_URL="postgres://postgres:1234@localhost/postgres?schema=public"
```


### 2. Criar o banco de dados

Criar a estrutura do banco de dados com as tableas `User` e `Post` definidas em [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma db push
```

Se executar `npx prisma migrate dev` em um banco de dados vazio, os seeds serão disparados. O arquivo de seed [`prisma/seed.ts`](./prisma/seed.ts) seá executado.

Ver o banco de dados no Prisma Studio
```
npx prisma studio
```
### 3. Iniciar o APP

```
npm run dev
```

O app está rodando, acessar em [`http://localhost:3000/`](http://localhost:3000/) no seu navegador.



Para mais detalhes desta aplicação base, consultar o repositório original do projeto [Fullstack Example with Next.js (REST API)](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-api-routes). 