import { FC, ReactNode } from "react";

interface TextAreaProps {
  icon?: ReactNode;
  placeholder?: string;
}
const TextArea: FC<TextAreaProps> = ({ icon, placeholder, }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        {icon}
      </div>
      <textarea placeholder={placeholder} className="bg-primary-background text-primary-foreground w-full rounded-lg text-sm ps-10 p2.5 pt-8 focus:outline-none" />
    </div>
  );
};

export default TextArea;
