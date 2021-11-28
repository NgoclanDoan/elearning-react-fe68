export const handleImgError = (e, img) => {
	e.target.onerror = null;
	e.target.src = img;
};
