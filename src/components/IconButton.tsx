interface IconButtonProps {
  iconPath: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  alt: string;
}

const IconButton = ({ iconPath, onClick, alt }: IconButtonProps) => {
  return (
    <button onClick={onClick}>
      <img className="w-2 h-2" alt={alt} src={iconPath} />
    </button>
  );
};

export default IconButton;
