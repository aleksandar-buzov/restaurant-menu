const MenuHeader = () => {
  return (
    <header className="bg-emerald-900 text-stone-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6 lg:px-6 lg:py-10">
        <span className="text-xs font-semibold tracking-widest text-emerald-200 uppercase">
          Меню
        </span>
        <h1 className="font-serif text-3xl leading-tight font-semibold lg:text-5xl">
          Бистро Липа
        </h1>
        <p className="text-sm text-emerald-100 lg:text-base">
          Сезонна кухня · цени в евро
        </p>
      </div>
    </header>
  )
}

export default MenuHeader
