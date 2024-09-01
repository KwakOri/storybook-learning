import IconButton from "./IconButton";

// /icons/left-chevron.png

interface INavigationBarProps {
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
}

const NavigationBar = ({
  showBackButton,
  showCloseButton,
  showTitle,
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
  title = "",
}: INavigationBarProps) => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-1">
        {showBackButton && (
          <IconButton
            alt=""
            iconPath="/icons/left-chevron.png"
            onClick={onBackButtonClick}
          />
        )}
        {showTitle && <h1>{title}</h1>}
      </div>
      {showCloseButton && (
        <IconButton
          alt=""
          iconPath="/icons/delete.png"
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
};

export default NavigationBar;
