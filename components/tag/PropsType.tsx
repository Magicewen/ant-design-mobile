interface TagProps {
  disabled?: boolean;
  selected?: boolean;
  closable?: boolean;
  small?: boolean;
  onChange?: (selected: boolean) => void;
  onClose?: () => void;
  afterClose?: () => void;
  style?: any;
}

export default TagProps;
