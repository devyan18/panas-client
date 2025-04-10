type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
      {children}
    </div>
  )
}
