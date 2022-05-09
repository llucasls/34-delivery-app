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
} from './styles';

const Board = ({
  board = [],
  boardColoumns = [],
  boardHeader = null,
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
              { row === 'excluir'
                ? (
                  <Button
                    style={ {
                      backgroundColor: 'transparent',
                      padding: 0,
                      margin: 0,
                      fontWeight: 600,
                    } }
                    size={ 16 }
                    title={ row }
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
        <StyledHeaderBoard>
          {boardHeader}
        </StyledHeaderBoard>
        {renderTable()}
        {/* {useMemo(returnTotal, [total])} */}
      </StyledContainerBoard>
    </StyledContainer>
  );
};

export default Board;

Board.propTypes = {
  board: PropTypes.arrayOf().isRequired,
  boardColoumns: PropTypes.arrayOf().isRequired,
  boardHeader: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
