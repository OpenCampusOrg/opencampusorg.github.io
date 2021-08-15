declare module 'vanta/*' {
  export interface Effect {
    destroy(): never
  }
  const _export: (options: unknown) => Effect
  export default _export
}
