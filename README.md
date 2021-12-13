# Germinare [MUI](https://mui.com/pt/) Components
Biblioteca de componentes MUI compartilhada entre os projetos micro frontend.

# Como instalar

```bash
> cd germinare-mui-components/
> npm install
```
ou
```bash
> cd germinare-mui-components/
> yarn install
```

# Como construir

```bash
> cd germinare-mui-components/
> npm run build
```

# Como usar

```bash
> cd germinare-mui-components/
> npm run start
```

# Debugging
## Visual Studio Code
Precisamos da última versão do "VS Code" e da extensão "VS Code Chrome Debugger Extension" instalados.

Adicione o bloco de código abaixo dentro do arquivo launch.json na pasta .vscode localizada no diretório root do projeto.
```JSON
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

    Note: a URL pode ser diferente se você possuir HOST ou PORTA configurados diferentes na aplicação.

Inicie a aplicação executando o comando "npm run start:standalone", e assione o debug pressionando F5 ou clicando no icone verde na area de debug do VS Code. Agora é possível criar "break points", alterar o código em tempo de debug, e o código deve ser atualizado automáticamente apenas salvando o arquivo.
