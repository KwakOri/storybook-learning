interface ICategoryButtonProps {
  iconPath: string;
  iconAlt: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CategoryButton = ({
  iconPath,
  iconAlt,
  text,
  onClick,
}: ICategoryButtonProps) => {
  return (
    <button
      className={`
        rounded-md
        border
        border-primary
        text-primary
        text-base
        font-bold
        px-5
        py-4
        flex
        flex-col
        items-center
      `}
      onClick={onClick}
    >
      <img className={`w-8 h-8`} src={iconPath} alt={iconAlt} />
      <p>{text}</p>
    </button>
  );
};

export default CategoryButton;
