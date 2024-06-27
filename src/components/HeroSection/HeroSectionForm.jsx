const HeroSectionForm = () => {
  return (
    <form className="flex w-full flex-col gap-3 px-3">
      <input
        type="text"
        placeholder="Search for restaurants..."
        className="w-full rounded-md px-4 py-4 shadow-lg outline-none"
      />
      <button className="w-full rounded-md bg-primary-foreground py-4 text-center font-semibold text-white hover:brightness-95">
        Find Food
      </button>
    </form>
  );
};
export default HeroSectionForm;
