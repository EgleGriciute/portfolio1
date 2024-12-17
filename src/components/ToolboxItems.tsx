import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";
import { Fragment } from "react";

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
  loop = true,
}: {
  items: { title: string; iconType: React.ElementType }[];
  className?: string;
  itemsWrapperClassName?: string;
  loop?: boolean;
}) => {
  const renderItems = () =>
    items.map((item) => (
      <div
        key={item.title}
        className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
        aria-label={`Tool: ${item.title}`}
      >
        <TechIcon component={item.iconType} />
        <span className="font-semibold">{item.title}</span>
      </div>
    ));

  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] overflow-hidden",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {(loop ? Array.from({ length: 2 }) : [0]).map((_, index) => (
          <Fragment key={index}>{renderItems()}</Fragment>
        ))}
      </div>
    </div>
  );
};
