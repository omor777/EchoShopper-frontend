import { Button, Card, Rating } from "flowbite-react";

const ProductCard = ({ product = {} }) => {
  const { name, image, description, price, rating, category, brand } = product;


  return (
    <div>
      <Card imgAlt={name} imgSrc={image}>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="mb-5 mt-2.5 flex items-center">
          <Rating>
            {[1, 2, 3, 4, 5].map((item) => (
              <Rating.Star key={item} filled={item !== 5} />
            ))}
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              {rating} out of 5
            </p>
          </Rating>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <Button>Add To Cart</Button>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
