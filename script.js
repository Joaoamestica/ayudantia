document.addEventListener('DOMContentLoaded', function () {
    
    console.log('cargando DOM...');

    let posts = [];
    let paginaActual = 1;
    let cantidadPostPorPagina = 5;

    function fetchPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(posts => posts.json())
        .then( postsJson => {
            posts = postsJson;
            console.log('Posts dentro del array: ', posts)
            refrescoPosts();
        })
        .catch( error => console.error('Error en fetch', error))    
    }

    function refrescoPosts(){
        const inicio = (paginaActual - 1) * cantidadPostPorPagina;
        const final = inicio + cantidadPostPorPagina;
        const postsActuales = posts.slice(inicio, final);
        test = 'Esta es una linea de prueba'
        //....
    }

    // inicio de mi aplicacion
    fetchPosts();

    

})