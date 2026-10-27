This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


ENTENDENDO O NEXT JS 
#1
//chamando uma variavel
const nome = 'diobrgue viana '
const sobreNome = 'de Sousa'


//chamdno a function h1
function retNome() {
  return nome
}

export default function Home() {
  return (
    <>
    <h1>{retNome()}</h1>
    <h2>{sobreNome}</h2>
    <h2>Diobergue viana</h2>
    </>
  );
}