class Paragrafo extends React.Component {
    render() {
      return <p>{this.props.children}</p>
    }
}

class Negrito extends React.Component {
    render() {
      return <span style={{ fontWeight: 'bold' }}>{this.props.children}</span>;
    }
}

function Conteudo() {
    return (
    <div>

        <header id="cabecalho">
            <nav>
                <object width="100%" height="200px" data="menu.html"></object>
            </nav>
        </header>

        <p>
            <Paragrafo>O <Negrito>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo</Negrito> - é uma autarquia federal de ensino.</Paragrafo>
            <Paragrafo>Fundada em 1909, como Escola de Aprendizes Artífices, é reconhecida pela sociedade paulista por sua excelência no ensino público gratuito de qualidade. </Paragrafo>
            <Paragrafo>Durante sua história, recebeu, também, os nomes de Escola Técnica Federal de São Paulo e Centro Federal de Educação Tecnológica de São Paulo. Com a transformação em Instituto, em dezembro de 2008, passou a ter relevância de universidade, destacando-se pela autonomia. </Paragrafo>
            <Paragrafo>Com a mudança, o Instituto Federal de São Paulo passou a destinar 50% das vagas para os cursos técnicos e, no mínimo, 20% das vagas para os cursos de licenciatura, sobretudo nas áreas de Ciências e da Matemática. Complementarmente, continuará oferecendo cursos de formação inicial e continuada, tecnologias, engenharias e pós-graduação. </Paragrafo>
            <Paragrafo>Além dos cursos presenciais, o Instituto Federal de São Paulo oferece os cursos Técnicos em Administração e em Informática para Internet e, a partir de 2012, o superior de Formação de Professores na modalidade de Ensino a Distância (EaD). </Paragrafo>
            <Paragrafo> O IFSP é organizado em diversos câmpus e possui mais de 40 mil alunos matriculados nas 36 unidades distribuídas pelo estado de São Paulo.; </Paragrafo>
            <Paragrafo>Localizado em <Negrito>Rua Pedro Vicente, 625 - Canindé - São Paulo - SP - Brasil - Cep: 01109-010</Negrito></Paragrafo>
        </p>

        <footer>
            <object width="100%" height="200px" data="rodape.html"></object>
        </footer>
    </div>
);
}

// Render the component to the DOM
ReactDOM.render(
    <Conteudo />,
    document.getElementById("root")
);