export default function ImageCard({ url, alt, openModal, setCurrentPicture }) {
  const handleclick = () => {
    setCurrentPicture({
      url: url,
      alt: alt,
    });
    openModal();
  };
  return (
    <div>
      <img src={url} alt={alt} onClick={handleclick} />
    </div>
  );
}
