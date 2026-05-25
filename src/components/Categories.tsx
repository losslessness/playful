import { categoriesTitle, categoryLinks } from "@/constants/index";
import CategoryCard from "@/components/common/CategoryCard";

export default function Categories() {
  return (
    <section>
      <div className="categories">
        <h1 className="categories-title">{categoriesTitle}</h1>
        <div className="categories-list">
          {
            categoryLinks.map((item) => {
              return (
                <CategoryCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
}