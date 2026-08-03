import { colors } from "@/constants/index";

export default function AvailableColors({color, options}: {color: string, options: string[]}) {
  const productColor = color.toLowerCase();

  return(
    <div className="available-colors">
      {
        options?.map((item) => {
          const optionColor = item.toLowerCase();
          const optionObject = colors?.find((item) => item?.label === optionColor);
          const activeItem = productColor === optionColor;

          return(
            <div className="available-colors-item" key={item}>
              <button
                className={
                  activeItem ? "available-colors-item-active"
                             : "available-colors-item-inactive"
                }
                style={{backgroundColor: `${optionObject?.code}`}}
                onClick={() => {
                  
                }}
              />
            </div>
          )
        })
      }
    </div>
  );
}