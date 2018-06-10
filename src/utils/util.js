import { curry } from 'ramda'

const funcAppendClass = (appendedClassName, classNameProp) => [appendedClassName, classNameProp || ''].join(' ').trim()

export const appendClass = curry(funcAppendClass)
