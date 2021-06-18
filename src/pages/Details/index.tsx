import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import api from '../../services/api';
import { BttVoltar, Container, Tabela, Title } from './styles';

interface CampeaoParams {
  campeao: string;
}

interface CampeaoDetails {
  ano: number;
  sede: string;
  campeao: string;
  id: string;
}

const Details: React.FC = () => {
  let campeaoFilter;
  const { params } = useRouteMatch<CampeaoParams>();
  const [campeao, setCampeao] = useState<CampeaoDetails[]>();

  useEffect(() => {
    api.get(`/worldcup`).then((response) => {
      setCampeao(response.data);
    });
  }, []);

  if (campeao) {
    campeaoFilter = [];
    campeaoFilter = campeao.filter(
      (campeaofiltro) => campeaofiltro.campeao === params.campeao,
    );
  }

  return (
    <Container>
      <BttVoltar>
        <Link to="/">Voltar</Link>
      </BttVoltar>

      <h1>Pais: {params.campeao}</h1>

      <Title>Campeão Mundial: </Title>
      <Tabela>
        <ul>
          {campeaoFilter ? (
            campeaoFilter.map((pais) => (
              <li key={pais.campeao}>
                <span>
                  <strong>{pais.ano}</strong>
                </span>
              </li>
            ))
          ) : (
            <h1>Não foi encontrado o ano em que este pais foi campeão !</h1>
          )}
        </ul>
      </Tabela>
    </Container>
  );
};

export default Details;
