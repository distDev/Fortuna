import { nanoid } from 'nanoid'

export default (context, inject) => {
  inject('nanoid', nanoid)
}
