import Sidebar from './Sidebar'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="grid grid-cols-12 min-h-svh">
      <Sidebar />
      {children}
    </div>
  )
}
