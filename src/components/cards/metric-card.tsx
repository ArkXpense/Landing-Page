export default function MetricCard({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
    return (
      <div className=" rounded-lg px-6 py-8 border border-green-400 transition duration-300">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-400 bg-opacity-10 mx-auto">
          {icon}
        </div>
        <h3 className="mt-6 text-xl font-medium text-white text-center">{title}</h3>
        <p className="mt-2 text-3xl font-bold text-green-400 text-center">{value}</p>
      </div>
    )
  }