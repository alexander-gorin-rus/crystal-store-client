import { SyntheticEvent } from "react";

export interface IButtonProps {
  isLoading?: boolean;
  disabled: boolean;
  backroundColor?: string;
  onClick?: (e: SyntheticEvent) => void;
  children?: React.ReactNode;
}