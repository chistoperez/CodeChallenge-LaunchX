# CodeChallenge-LaunchX

Requerimientos:
1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación `haveCertification`.
3. Habilitar un endpoint para consultar todos los estudiantes que tengan `credits` mayor a 500.

- Agregar pruebas automatizadas con GitHub Actions.

## Dependencias utilizadas

- **Jest** para realizar pruebas
- **Nodemon** para reiniciar el servidor automaticamente cuando se realicen cambios


## Diseño de componentes
```mermaid
  graph TD;
    Json-->Reader-->StudentController-->|Unit Tests| Server--> C{API}
    C --> v1/students/
    C --> v1/students/emails
    C --> v1/students/credits
```
## Endpoint para consultar todos los estudiantes con todos los campos
![image](https://user-images.githubusercontent.com/99354481/166125530-17920cba-7f7b-45fc-914c-2b727b092a34.png)

## Endpoint para consultar los emails de todos los estudiantes que tengan certificación `haveCertification`.
![image](https://user-images.githubusercontent.com/99354481/166125533-da0fe1d2-4eae-42e9-a1ac-d2c741c7fc9e.png)

## Endpoint para consultar todos los estudiantes que tengan `credits` mayor a 500.
![image](https://user-images.githubusercontent.com/99354481/166125544-bc826c6f-4b0a-4aea-ab27-555dfeb33513.png)
