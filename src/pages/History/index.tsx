import { useContext } from 'react'

import { CyclesContext } from '../../contexts/CyclesContext'

import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Projeto 1</td>
              <td>25 minutos</td>
              <td>Há cerca de 1 hora</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Projeto 2</td>
              <td>25 minutos</td>
              <td>Há cerca de 1 hora</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Projeto 3</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 hora</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Projeto 4</td>
              <td>25 minutos</td>
              <td>Há cerca de 3 hora</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>

            <tr>
              <td>Projeto 5</td>
              <td>25 minutos</td>
              <td>Há cerca de 3 hora</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>

            <tr>
              <td>Projeto 6</td>
              <td>25 minutos</td>
              <td>Há cerca de 5 hora</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
