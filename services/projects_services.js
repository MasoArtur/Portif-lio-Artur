export async function getProjects(){
    try{
    let response = await fetch('http://localhost:3000/projetos'); 
    const dados = await response.json(); // uma função que usa await tem q ser assincrona

    return dados;
    }catch(e){
        console.log(`Erro: ${e}`);
    }  

}