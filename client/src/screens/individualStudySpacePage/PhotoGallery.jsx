import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";
import { useSelector } from "react-redux";

export function PhotoGallery({ studySpace }) {
  const images = studySpace.images;
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
      {/* <SplideSlide>
        <ImageHolder>
          <img src={require("../../shared/images/cafe7.jpeg")} alt="1" />
        </ImageHolder>
      </SplideSlide>
      <SplideSlide>
        <ImageHolder>
          <img src={require("../../shared/images/cafe-study2.webp")} alt="2" />
        </ImageHolder>
      </SplideSlide>
      <SplideSlide>
        <ImageHolder>
          <img src={require("../../shared/images/cafe-study3.jpeg")} alt="2" />
        </ImageHolder>
      </SplideSlide>
      <SplideSlide>
        <ImageHolder>
          <img src={require("../../shared/images/cafe1.jpeg")} alt="2" />
        </ImageHolder>
      </SplideSlide>
      <SplideSlide>
        <ImageHolder>
          <img src={require("../../shared/images/cafe2.jpeg")} alt="2" />
        </ImageHolder>
      </SplideSlide>
      <SplideSlide>
        <ImageHolder>
          <img src={require("../../shared/images/cafe3.jpeg")} alt="2" />
        </ImageHolder>
      </SplideSlide>
      <SplideSlide>
        <ImageHolder>
          <img src={require("../../shared/images/cafe-study1.jpeg")} alt="2" />
        </ImageHolder>
      </SplideSlide> */}
    </Splide>
  );
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
