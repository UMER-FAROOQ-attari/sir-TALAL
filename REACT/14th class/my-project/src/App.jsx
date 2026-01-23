import './App.css'

const appsRow1 = [
  { label: 'Authenticator', color: 'bg-white/90', icon: '??', text: 'text-slate-700' },
  { label: 'Photos', color: 'bg-emerald-600', icon: '???' },
  { label: 'Play Store', color: 'bg-red-500', icon: '??' },
  { label: 'Weather', color: 'bg-sky-500', icon: '??' },
  { label: 'Google', color: 'bg-slate-200/80', icon: '??', text: 'text-slate-700' },
]

const appsRow2 = [
  { label: 'Clock', color: 'bg-pink-400', icon: '??' },
  { label: 'Settings', color: 'bg-purple-700', icon: '??' },
  { label: 'Tools', color: 'bg-slate-700', icon: '??' },
  { label: 'Calendar', color: 'bg-fuchsia-500', icon: '??' },
]

const dockApps = [
  { label: 'Phone', color: 'bg-emerald-600', icon: '??', badge: '1' },
  { label: 'Browser', color: 'bg-blue-600', icon: '??' },
  { label: 'Messages', color: 'bg-teal-600', icon: '??', badge: '99+' },
  { label: 'Camera', color: 'bg-pink-700', icon: '??' },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col gap-6 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center px-6 pb-10 pt-8">
        <div className="flex items-start justify-between text-white/90">
          <div className="text-lg font-medium">17:33</div>
          <div className="flex items-center gap-2 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span className="h-1.5 w-3 rounded-full bg-white/80" />
            <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-amber-300 to-yellow-100" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-6xl font-light tracking-tight">17:33</div>
          <div className="flex items-center gap-3">
            <div className="text-2xl">??</div>
            <div className="text-sm leading-4 text-white/90">
              <div>Sunny 19°C</div>
              <div className="text-white/70">Goth-varayo-gado</div>
              <div className="text-white/70">Fri, Jan 23</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 pt-4 text-center text-xs text-white/90">
          {appsRow1.map((app) => (
            <div key={app.label} className="flex flex-col items-center gap-2">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${app.color} ${app.text || 'text-white'}`}>
                <span className="text-xl">{app.icon}</span>
              </div>
              <div className="line-clamp-1 w-16 text-[11px]">{app.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-3 rounded-full bg-white/85 px-5 py-3 text-slate-700 shadow-sm">
          <span className="text-lg">G</span>
          <div className="flex-1 text-sm text-slate-500">Search</div>
          <span>??</span>
          <span>??</span>
        </div>

        <div className="grid grid-cols-4 gap-6 pt-2 text-center text-xs text-white/90">
          {appsRow2.map((app) => (
            <div key={app.label} className="flex flex-col items-center gap-2">
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${app.color}`}>
                <span className="text-2xl">{app.icon}</span>
              </div>
              <div>{app.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/50" />
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="h-2 w-2 rounded-full bg-white/50" />
          <span className="h-2 w-2 rounded-full bg-white/50" />
        </div>

        <div className="grid grid-cols-4 gap-6 rounded-3xl bg-black/40 px-6 py-4">
          {dockApps.map((app) => (
            <div key={app.label} className="relative flex flex-col items-center gap-2">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${app.color}`}>
                <span className="text-2xl">{app.icon}</span>
              </div>
              {app.badge && (
                <span className="absolute -right-1 -top-2 rounded-full bg-red-500 px-2 py-0.5 text-[10px]">
                  {app.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 text-white/70">
          <span className="h-4 w-4 rounded-sm border border-white/60" />
          <span className="h-5 w-5 rounded-full border border-white/60" />
          <span className="h-4 w-4 rotate-45 border border-white/60" />
        </div>
      </div>
    </div>
  )
}

export default App
