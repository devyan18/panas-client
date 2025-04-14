import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const markdown = `
Aquí va texto en Markdown, y una fórmula en LaTeX:

La derivada es: $f'(x) = \lim_{h \\to \\infty} \\frac{f(x + h) - \n f(x)}{h}$ 

Y una fórmula en bloque:

$$
\\int_a^b f(x)\\,dx = F(b) - F(a)
$$
`

export function Math() {
  return (
    <ReactMarkdown
      children={markdown}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    />
  )
}
