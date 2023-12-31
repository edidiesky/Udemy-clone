import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  padding:1.6rem 0;
  background: var(--white);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .TableContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      background: #f8f8f8;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--grey);
      border-radius: 10px;
      transition: all 0.5s;
      &:hover {
        background: #333;
      }
    }

    .tableWrapper {
      border-collapse: collapse;
      width: 100%;
      min-width:100%;
      /* max-width: 1000px; */

      thead {
        tr {
          text-align: start;
          z-index: 200;
          background: #f7f7f7;
          text-align: start;
          transition: all 0.3s var(--transition-2);
          &:hover {
            background: rgb(0 0 0 / 13%);
          }
          th {
            font-size: 1.3rem;
            color: var(--blue-3);
            font-weight: 600;
            text-align: start;
            text-transform: uppercase;

            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            padding: 2rem 1.8rem;
         
            transition: all 0.3s var(--transition-2);
          }
        }
      }

      tbody {
        tr {
          transition: all 0.5s var(--transition-2);
          z-index: 200;

          &:hover {
            background: #2364c41f;
            td {
              color: var(--blue-3);
            }
          }
          td {
            font-size: 1.4rem;
            font-weight: 500;
            text-align: start;
            padding: 1.5rem 0;
            color: var(--dark-1);
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            .true {
              color: #e72d2d;
            }
         
            .tablespan {
              display: block;
              padding: 1rem 1.4rem;
              font-size: 1.3rem;
              font-weight: 600;
              width: 100%;
              border-radius: 4px;
              color: #333;
              text-align: center;
              &.true {
                color: #045235;
                background: #04523517;
              }
              &.false {
                color: #e50b0b;
                background: #e50b0b12;
              }
            }

            .true {
              color: var(--green);
              font-size: 1.3rem;
            }
            .false {
              color: var(--red);
              font-size: 1.3rem;
            }

        
          }

          .action {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.8rem;
            .icons {
              width: 4rem;
              height: 4rem;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                font-size: 1.7rem;
                cursor: pointer;
              }
              &:hover {
                background: var(--grey-3);
              }
            }
            .details {
              padding: 0.8rem 1rem;
              background: var(--grey-3);
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
`;
