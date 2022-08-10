import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";
import { useGetStudySpaceByIdQuery } from "../../features/api/apiSlice";
export function PhotoGallery({ studySpace }) {
  const { data, isLoading } = useGetStudySpaceByIdQuery(
    studySpace ? studySpace._id : "null"
  );

  if (!isLoading) {
    const images = data.images;
    return (
      <Splide
        options={{
          perPage: 3,
          autoplay: true,
          height: "25rem",
          loop: true,
          rewind: true,
        }}
        aria-label="React Splide Example"
      >
        {images?.map((photo, index) => {
          return (
            <SplideSlide key={index}>
              <ImageHolder>
                <img src={photo} alt="1" />
              </ImageHolder>
            </SplideSlide>
          );
        })}
      </Splide>
    );
  }
}

const ImageHolder = styled.div`
  display: flex;
  border-radius: 2rem;
  overflow: hidden;
  height: 50vh;
  justify-content: center;

  img {
    border-radius: 2rem;
    left: 0;
    max-width: 30vh;
    max-height: 80%;
    object-fit: cover;
  }
`;
