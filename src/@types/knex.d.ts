// eslint-disable-next-line
import { Knex } from 'knex'
// a variável acima não foi utilizada
// mas mantemos a importação pra dizer que queremos
// reaproveitar todos os tipos já existentes no knex
// (e só modificar/incluir esses que
// estamos especificando abaixo)

declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
