import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/Data";

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, idx) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
