import { useState, useEffect } from "react";
import "modern-normalize";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { fetchPhotos } from "./httpRequests/fetchFotos";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ReturnTopBtn from "./components/ReturnTopBtn/ReturnTopBtn";

function App() {
  const [searchText, setSearchText] = useState("");
  const [imagesArr, setImagesArr] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setLoading(true);

    fetchPhotos(searchText, currentPage)
      .then(({ data: { results, total_pages } }) => {
        setImagesArr((prev) => [...prev, ...results]);
        setTotalPages(total_pages);

        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchText, currentPage]);

  function handleFormSubmit(searchText) {
    const normalizeSearchText = searchText.trim().toLowerCase();

    setSearchText(normalizeSearchText);
    setImagesArr([]);
    setCurrentPage(1);
  }

  function modalOpen() {
    setModalIsOpen(true);
  }

  function modalClose() {
    setModalIsOpen(false);
  }

  function viewFullSizeImg(img) {
    setModalContent(img);
    modalOpen();
  }

  function setNextPage() {
    setCurrentPage((prev) => prev + 1);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {loading && <Loader />}
      {isError && <ErrorMessage />}
      <ImageGallery imagesArr={imagesArr} viewImg={viewFullSizeImg} />
      {modalContent && (
        <ImageModal
          modalContent={modalContent}
          modalIsOpen={modalIsOpen}
          modalClose={modalClose}
        />
      )}
      {currentPage < totalPages && <LoadMoreBtn setNextPage={setNextPage} />}
      <Toaster position="bottom-left" reverseOrder={false} />
      {scrollPosition > window.innerHeight && <ReturnTopBtn scrollToTop={scrollToTop}/>}
    </>
  );
}

export default App;
