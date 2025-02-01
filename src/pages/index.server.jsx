import { useShopQuery, CacheLong, gql } from '@shopify/hydrogen';

export default function Index() {
  const { data } = useShopQuery({
    query: gql\
      {
        shop {
          name
        }
      }
    \,
    cache: CacheLong(),
  });

  return (
    <div>
      <h1>Welcome to Premium Cat Store</h1>
      <p>{data.shop.name}</p>
    </div>
  );
}
