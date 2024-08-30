interface Movie{
    id: string,
    name: string,
    description: string,
    author: string,
    duration: string,
    publishment_year: number
}


const MovieForm = () => {


    return ( 
    <div>
        <form action="post" onSubmit={() => {console.log('enviado')}}>
          <label htmlFor="name">Nome do filme</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="description">Descrição</label>
          <textarea name="description" id="description"></textarea>
          <label htmlFor="author">Autor</label>
          <input type="text" name="author" id="author" />
          <label htmlFor="duration">Duração do filme</label>
          <input type="time" name="duration" id="duration" />
          <label htmlFor="publishment_year">Ano de publicação</label>
          <input type="number" name="publishment_year" id="publishment_year" />
          <input type="submit" value="Adicionar" />
        </form>
    </div> );
}
 
export default MovieForm;