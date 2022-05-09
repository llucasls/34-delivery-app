import React from 'react';
import PropTypes from 'prop-types';
import colorColumnBoard from '../../helpers/colorColumnBoard';

import Button from '../Form/Button/Button';
import {
  StyledContainer,
  StyledTitle,
  StyledContainerBoard,
  StyledHeaderBoard,
  StyledContainerTable,
  StyledContainerTableHeader,
  StyledContainerTableRow,
  StyledContainerTableColumn,
  StyledColumn,
} from './styles';

const Board = ({
  boardHeader = null,
  boardColoumns = [],
  board = [],
  total = null,
  title,
}) => {
  const renderTable = () => (
    <StyledContainerTable>
      <StyledContainerTableHeader>
        { boardColoumns.map((columns, index) => (
          <StyledContainerTableColumn key={ index }>
            {columns}
          </StyledContainerTableColumn>
        ))}
      </StyledContainerTableHeader>
      { board.map((column, indexRow) => (
        <StyledContainerTableRow key={ indexRow }>
          {Object.values(column).map((row, indexColumn) => (
            <StyledContainerTableColumn
              key={ indexColumn }
              style={ {
                backgroundColor: colorColumnBoard(indexColumn),
                color: indexColumn === 1 ? '#262626' : '#FFF',
                width: indexColumn === 1 && '40%',
              } }
            >
              { row === 'excluir' || typeof row === 'function'
                ? (
                  <Button
                    style={ {
                      backgroundColor: 'transparent',
                      padding: 0,
                      margin: 0,
                      fontWeight: 600,
                    } }
                    size={ 16 }
                    title="Remover"
                    onClick={ row }
                  />
                )
                : row }
            </StyledContainerTableColumn>
          ))}
        </StyledContainerTableRow>
      )) }
    </StyledContainerTable>
  );

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledContainerBoard>
        { boardHeader
          && (
            <StyledHeaderBoard>
              {boardHeader}
            </StyledHeaderBoard>
          ) }
        {renderTable()}
        { total
          && (
            <StyledColumn
              style={ {
                position: 'absolute',
                bottom: '20%',
                right: '15%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#036B52',
                height: 60,
                width: 200,
                borderRadius: 5 } }
            >
              { total }
            </StyledColumn>
          )}
      </StyledContainerBoard>
    </StyledContainer>
  );
};

export default Board;

Board.propTypes = {
  board: PropTypes.arrayOf().isRequired,
  boardColoumns: PropTypes.arrayOf().isRequired,
  boardHeader: PropTypes.element.isRequired,
  total: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
