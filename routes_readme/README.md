## Routes
### Criar Usuário | POST /users
```bash
#json 
{
     "nome": "string",

     "senha": "string",
    
     "role": "admin" #Valores possíveis: admin, user, guest
}
```
###  Buscar todos os Usuário | GET /users
```bash
#Headers | bearer token
Authorization: Bearer JWT_TOKEN # somente admin
```

### Autenticação de Usuario | POST /auth
```bash
#json 
{
     "nome": "string",

     "senha": "string"
}
```

```bash
#Retorno
Authorization: Bearer JWT_TOKEN
```

### Buscar todas as tarefas | GET /tarefas
```bash
#Headers | bearer token
Authorization: Bearer JWT_TOKEN # somente admin
```

### Criar uma Tarefa | POST /tarefas
```bash
#json 
{
    "titulo": "String";
    "descricao": "String";
    "status": "Não iniciada"; #Valores possíveis:Não iniciada,Em andamento,Finalizada
}
```
