import { Button, Text, VStack } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { GenresResults } from "../hooks/useGenres";
import useData from "../hooks/useData";

interface SideBarProps {
  onSelectGenre: (genre: GenresResults) => void;
  selectedGenre: GenresResults | null;
}

const SideBar = ({ selectedGenre, onSelectGenre }: SideBarProps) => {
  const { data, loading, error } = useData<GenresResults>("/genres");
  const toast = useToast();

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
        <Text fontSize={"25px"} margin={"10px"} marginBottom={"25px"}>
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
        {data.map((genre) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              width: "95%",
              height: "40px",
              marginBottom: "18px",
              backgroundColor: "gray.100",
              borderRadius: "10px",
            }}
          >
            <Button
              variant={"link"}
              paddingLeft={genre.id === selectedGenre?.id ? "10px" : "0px"}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              color={genre.id === selectedGenre?.id ? "yellow" : "-moz-initial"}
              onClick={() => {
                console.log(genre.name + " clicked");
                onSelectGenre(genre);
                toast({
                  title: genre.name + " clicked.",
                  description:
                    "You've clicked on the " + genre.name + " genre.",
                  status: "success",
                  duration: 2200,
                  isClosable: true,
                });
              }}
              ///////////////////////////////////////////
              fontSize={"19px"}
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
                  marginLeft: "3px",
                  boxSizing: "border-box",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              ></img>
              <Text>{genre.name}</Text>
            </Button>
          </div>
        ))}
      </VStack>
    </div>
  );
};

export default SideBar;
