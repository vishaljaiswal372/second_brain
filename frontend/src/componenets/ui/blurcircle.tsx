interface BlurCircleProps {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  color?: string;
}

export const BlurCircle = (props: BlurCircleProps) => {
  return (
    <div
      className="absolute -z-50 h-108 w-108 aspect-square rounded-full blur-3xl"
      style={{
        top: props.top,
        left: props.left,
        bottom: props.bottom,
        right: props.right,
        backgroundColor: props.color
      }}
    />
  );
};