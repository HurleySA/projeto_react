import React from "react";
import "./App.css";
const App = () => {
  const formFields = [
    {
      id: "nome",
      label: "Nome",
      type: "text",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
    },
    {
      id: "senha",
      label: "Senha",
      type: "password",
    },
    {
      id: "cep",
      label: "Cep",
      type: "text",
    },
    {
      id: "rua",
      label: "Rua",
      type: "text",
    },
    {
      id: "bairro",
      label: "Bairro",
      type: "text",
    },
    {
      id: "cidade",
      label: "Cidade",
      type: "text",
    },
    {
      id: "estado",
      label: "Estado",
      type: "text",
    },
  ];

  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [response, setResponse] = React.useState(null);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => {
      setResponse(res);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formFields.map(({ id, label, type }) => (
          <div key={id} className="labels">
            <label htmlFor={id}> {label}</label>
            <input
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button>Enviar</button>
        {response && response.ok && <p>Formulário enviado</p>}
      </form>
    </div>
  );
};

export default App;
