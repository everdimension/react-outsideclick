import * as React from "react";

const { useRef, useEffect } = React;

interface Props {
  onClickOutside: () => void;
}

export const OutsideClick: React.FunctionComponent<Props> = ({
  onClickOutside,
  ...restProps
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onOutsideClickRef = useRef(onClickOutside);
  useEffect(() => {
    onOutsideClickRef.current = onClickOutside;
  }, [onClickOutside]);

  useEffect(() => {
    function handleClick(event: MouseEvent | TouchEvent) {
      const { target } = event;

      if (ref.current && ref.current.contains(target as Element)) {
        return;
      }

      onOutsideClickRef.current();
    }
    document.addEventListener("click", handleClick);
    document.addEventListener("touchend", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("touchend", handleClick);
    };
  }, []);
  return <div ref={ref} {...restProps} />;
};

