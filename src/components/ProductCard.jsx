import { Badge, Button, Card, Rating } from "flowbite-react";

const ProductCard = ({ product = {} }) => {
  const { name, image, description, price, rating, category, brand } = product;

  return (
    <div>
      <Card imgAlt={name} imgSrc={image}>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="-mt-2.5 font-medium text-teal-500">{category}</p>
        <div className="flex items-center justify-between flex-wrap mb-4 mt-2.5">
          <div className="flex items-center">
            <Rating>
              {[1, 2, 3, 4, 5].map((item) => (
                <Rating.Star key={item} filled={item !== 5} />
              ))}
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {rating}
              </p>
            </Rating>
          </div>
          <Badge color="gray">{brand}</Badge>
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
