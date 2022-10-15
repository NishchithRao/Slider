import { Children, FC, HTMLAttributes, useCallback, useState } from "react";
import "./Container.scss";
import { SliderService, transitions } from "@slider/core";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Transition to be applied for slider
   * @default 'default'
   */
  transition?: keyof typeof transitions;
}

const Container: FC<ContainerProps> = (props: ContainerProps) => {
  const { children, transition = "default", ...rest } = props;
  const [containerEl, setContainerEl] = useState<HTMLDivElement>();

  const containerRef = useCallback((ref: HTMLDivElement) => {
    setContainerEl(ref);
  }, []);

  const service = new SliderService(containerEl, transitions[transition]);

  return (
    <div className="Container" ref={containerRef} {...rest}>
      {Children.map(children, (child, i) => {
        return (
          <div
            data-index={i}
            onTouchStart={service.handleTouchStart}
            onTouchMove={service.handleTouchMove}
            onTouchEnd={service.handleTouchEnd}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default Container;
