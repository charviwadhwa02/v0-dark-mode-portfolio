export const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* First blob */}
      <div className="absolute -left-40 -top-40 h-[35rem] w-[35rem] animate-float rounded-full bg-blue-800/20 blur-[10rem]" />

      {/* Second blob */}
      <div className="absolute -right-40 -bottom-40 h-[35rem] w-[35rem] animate-float-slower rounded-full bg-purple-800/20 blur-[10rem]" />

      {/* Optional Third Blob */}
      <div className="absolute left-[40%] top-[50%] hidden md:block h-[25rem] w-[25rem] animate-float-delay rounded-full bg-pink-800/10 blur-[8rem]" />
    </div>
  )
}
