import 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'deck-stage': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          width?: string | number
          height?: string | number
          noscale?: boolean | string
        },
        HTMLElement
      >
    }
  }
}
