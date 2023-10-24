import { Button, HStack, Image, Text, VStack, theme } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const SideBar = () => {
  const { genre, loading, error } = useGenres();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Text fontSize={"30"} margin={"10px"}>
          Genres
        </Text>
        {error && (
          <p className="d-flex justify-content-center" style={{ color: "red" }}>
            {error}
          </p>
        )}
        {loading && (
          <div className="spinner-border" style={{ color: "white" }}></div>
        )}
      </div>

      <VStack>
        {genre.map((genre) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              width: "90%",
              height: "50px",
              backgroundColor: "gray.100",
              borderRadius: "10px",
            }}
          >
            <Button
              fontSize={"20px"}
              backgroundColor={"#1A202C"}
              width={"100%"}
              height={"60px"}
              display={"flex"}
              justifyContent={"flex-start"}
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              key={genre.id}
              _hover={{
                bg: "gray.300",
                color: "black",
                transition: "0.4s ease-in-out",
              }}
            >
              <img
                src={genre.image_background}
                alt="Image"
                style={{
                  marginLeft: "-10px",
                  boxSizing: "border-box",
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                  marginRight: "10px",
                }}
              ></img>
              {genre.name}
            </Button>
          </div>
        ))}
      </VStack>
    </div>
  );
};

export default SideBar;
