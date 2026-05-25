import Keyboard from "@/assets/icons/keyboard.svg";
import Mice from "@/assets/icons/mice.svg";
import Mousepad from "@/assets/icons/mousepad.svg";
import Gamepad from "@/assets/icons/gamepad.svg";
import CategoryCard from "@/components/common/CategoryCard";

export default function Categories() {
  const links = [{
    icon: Keyboard,
    title: "Keyboard"
  },
  {
    icon: Mice,
    title: "Mouse"
  },
  {
    icon: Mousepad,
    title: "Mousepad"
  },
  {
    icon: Gamepad,
    title: "Gamepad"
  }];

  return (
    <section>
      <div className="categories">
        <h1 className="categories-title">Top Categories</h1>
        <div className="categories-list">
          {
            links.map((item) => {
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