const PENDING = '_PENDING'
const REJECTED = '_REJECTED'
const FULFILLED = '_FULFILLED'

const createAsyncAction = actionName => ({
  base: actionName,
  pending: `${actionName}${PENDING}`,
  rejected: `${actionName}${REJECTED}`,
  fulfilled: `${actionName}${FULFILLED}`
})

export default createAsyncAction