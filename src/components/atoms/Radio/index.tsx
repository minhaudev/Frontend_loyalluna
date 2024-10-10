import { HStack } from '../HStack';

interface RadioProps {
  isChecked?: boolean;
  handleOnchange?: () => void;
  content?: string;
}
export default function Radio(props: RadioProps) {
  return (
    <HStack>
      <input
        checked={props?.isChecked}
        content={props?.content}
        onClick={props?.handleOnchange}
        type="radio"
      />
      <span className="ml-[-8px] text-[14px] ">{props?.content}</span>
    </HStack>
  );
}
