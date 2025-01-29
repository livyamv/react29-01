function App() {
  return (
    <div>
      <h1>Bem-Vindo ao React</h1>
      <p>Exemplo 2 de componentização</p>
      <Button/>
    </div>
  );

  function Button() {
    function clik() {
      alert ('Você clicou no botão');
    }

    return (
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
        onClick={()=>clik()}
      >
        Clique Aqui
      </button>
    );
  }
}
export default App;
