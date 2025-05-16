export const GradientBackground = () => {
  return (
    <div className="fixed inset-0">
      <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] animate-pulse rounded-full bg-blue-900/10 blur-[10rem] duration-[10s]" />
      <div className="absolute -right-40 -bottom-40 h-[30rem] w-[30rem] animate-pulse rounded-full bg-purple-900/10 blur-[10rem] duration-[15s] delay-300" />
    </div>
  )
}
