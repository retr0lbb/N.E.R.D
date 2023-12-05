import styled from "styled-components"


export default function Header(){
    return(
        <div>
        {/* Cabeçalho com barra de pesquisa */}
        <header>
          <input type="text" placeholder="Pesquisar" />
        </header>

        {/* Menu de hamburguer */}
        <nav>
          <button>☰</button>
        </nav>

        {/* Carrinho */}
        <div>
          <span role="img" aria-label="Carrinho de compras">🛒</span>
        </div>

        {/* Botão para acessar o usuário */}
        <div>
          <button>Usuário</button>
        </div>

        {/* Adicione aqui o restante do conteúdo da sua aplicação */}
      </div>
    )
}


/// styled


const mainWrapper = styled.div`
    
`