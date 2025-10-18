interface ButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-primary-shade hover:bg-primary px-6 py-[5px] rounded-lg cursor-pointer text-whitef font-bold ${className}`}
      onClick={onClick}
    >
      {text || "Button"}
    </button>
  );
};

export default Button;
