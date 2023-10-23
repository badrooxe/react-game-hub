import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width={"285px"}>
      <Skeleton
        startColor="#718096"
        endColor="#222222"
        objectFit={"cover"}
        height={150}
        borderTopRadius={10}
        boxSizing="border-box"
      />
      <CardBody>
        <SkeletonText mt="4" noOfLines={2} spacing="3" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
