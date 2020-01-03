import { post } from '@/utils/request'
import api from './api'

const TableData = options => post(api.tableData, options)

export {
    TableData
}