import React, { useCallback, useState } from "react";
import "./Container.scss";
import { SliderService, transitions } from "@slider/core";

export interface ContainerProps {
  children: React.HTMLAttributes<HTMLDivElement>["children"];
  transition?: keyof typeof transitions;
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  const { children, transition = "default" } = props;
  const [containerEl, setContainerEl] = useState<HTMLDivElement>();

  const containerRef = useCallback((ref: HTMLDivElement) => {
    setContainerEl(ref);
  }, []);

  const service = new SliderService(containerEl, transitions[transition]);

  return (
    <div className="Container" ref={containerRef}>
      {React.Children.map(children, (child, i) => {
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
