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
