import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const SideBar = () => {
  const { genre, loading, error } = useGenres();

  return (
    <VStack style={{ display: "flex", justifyContent: "center" }}>
      <Text fontSize={"30"} style={{}}>
        Genres
      </Text>

      {error && (
        <p className="d-flex justify-content-center" style={{ color: "red" }}>
          {error}
        </p>
      )}

      {loading && <div className="spinner-border"></div>}

      <VStack>
        {genre.map((genre) => (
          <Button
            fontSize={"20px"}
            width={"100%"}
            height={"50px"}
            key={genre.id}
            _hover={{
              bg: "gray.300",
              color: "black",
              transition: "0.4s ease-in-out",
            }}
          >
            {genre.name}
          </Button>
        ))}
      </VStack>
    </VStack>
  );
};

export default SideBar;
