export function underline({ skip = true } = {}) {
  return {
    textDecoration: 'underline',
    textDecorationSkipInk: skip ? 'auto' : 'none',
  }
}
