import { createGlobalStyle } from 'styled-components'

export const THEME = {
  colors: {
    red: '#ff292b',
    'red-50': '#fd6d6a',
    black: '#000000',
    'black-50': '#444444',
    grey: '#a4a4a4',
    'grey-50': '#f4f3f3',
  },
}

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: ${THEME.colors.red};
    --black: ${THEME.colors.black};
    --black-50: ${THEME.colors['black-50']};
    --grey: ${THEME.colors.grey};
    --grey-50: ${THEME.colors['grey-50']};
  }

  html,
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--grey-50);
  }

  .container {
    padding: 0 32px;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page-header {
    padding: 24px 32px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;

    h1 {
      color: var(--primary);
      margin: 0;
    }
    p {
      margin: 0;
      color: var(--black-50);
      font-size: 1rem;
    }
    .page-header-item--flex {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .vh-scroll {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-gap: 32px;
    overflow-x: auto;
    padding-bottom: 24px;
  }

  .driver-card {
    min-width: 320px;
    .avatar {
      padding: 16px 32px 32px 0;
      img {
        border-radius: 100%;
      }
    }
    .item {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .item-hide-mscreen {
      display: block;
    }
    .header {
      color: var(--grey);
    }
    .driver-id {
      color: var(--primary);
    }
    label {
      color: var(--grey);
      font-size: 12px;
      font-weight: normal;
    }
    p {
      margin: 0;
      font-weight: semi-bold;
    }
  }

  @media only screen and (max-width: 1024px) {
    .page-header {
      padding: 16px 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;

      .page-header-item--flex {
        display: flex;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .page-header {
      .page-header-item--flex {
        display: grid;
        width: 100%;
      }
    }
    .vh-scroll {
      grid-auto-flow: row;
      grid-auto-columns: 1fr;
    }
    .driver-card {
      width: 100%;
      .container {
        display: flex;
        gap: 16px;
      }
      .driver-id {
        color: var(--primary);
      }
      .item {
        justify-content: center;
      }
      .item-hide-mscreen {
        display: none;
      }
    }
  }
`

export default GlobalStyle
