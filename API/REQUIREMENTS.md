# API Requirements

## API Endpoints

## Article endpoint

- CreateArticle[Token Required] `[POST] /articles (body {title:string, content:string, stauts("published"|"unpublished")})`
- list all published articles[Token Required] `[GET] /articles/`
- Change Status [token required] `[PUT] /articles/status (request body[{id:number, status:("published"|"unpublished")])`
