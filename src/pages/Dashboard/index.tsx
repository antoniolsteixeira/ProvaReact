import React, { useEffect, useState } from 'react';
import { Cadastro, Container, Form } from './style';

import fifa from '../../assets/fifa-logo.jpg';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

interface Cadastro {
  ano: number;
  sede: string;
  campeao: string;
  id: string;
}

const Dashboard: React.FC = () => {
  const history = useHistory();

  const [cadastro, setCadastro] = useState<Cadastro[]>();

  useEffect(() => {
    api.get(`/worldcup`).then((response) => {
      setCadastro(response.data);
    });
  }, [cadastro]);

  console.log(cadastro);

  async function handleAddEvent(event: any) {
    event.preventDefault();

    const { target: form } = event;

    const novoCadastro = {
      ano: form.ano.value,
      sede: form.sede.value,
      campeao: form.campeao.value,
    };

    await api.post('worldcup', novoCadastro);
    form.reset();
  }

  function deleteCadastro(id: string) {
    api.delete(`/worldcup/${id}`);
    history.push('/');
  }

  return (
    <Container>
      <img src={fifa} alt="Logo FIFA" />
      <Form onSubmit={handleAddEvent}>
        <input type="text" name="ano" placeholder="Ano da Copa Mundo" />
        <input type="text" name="sede" placeholder="Sede da Copa do Mundo" />
        <input type="text" name="campeao" placeholder="Campeão Mundial" />
        <button type="submit">Salvar</button>
      </Form>

      <Cadastro>
        <ul>
          {cadastro
            ? cadastro.map((cadastroMap) => (
                <li key={cadastroMap.id}>
                  <span>
                    Ano da Copa Mundo: <strong>{cadastroMap.ano}</strong>
                  </span>
                  <span>
                    Sede da Copa do Mundo: <strong>{cadastroMap.sede}</strong>
                  </span>
                  <span>
                    Campeão Mundial: <strong>{cadastroMap.campeao}</strong>
                  </span>

                  <div>
                    <button
                      onClick={() => {
                        deleteCadastro(cadastroMap.id);
                      }}
                    >
                      Excluir
                    </button>
                    <Link to={`/detalhes/${cadastroMap.campeao}`}>
                      Detalhes
                    </Link>
                  </div>
                </li>
              ))
            : ''}
        </ul>
      </Cadastro>
    </Container>
  );
};

export default Dashboard;
