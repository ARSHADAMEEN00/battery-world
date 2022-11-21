const useCloudinary = (imgUrl, styles) => {
  const imgUrlArray = imgUrl?.split("upload/")
  const modifiedUrl =
    imgUrlArray?.length >= 1 &&
    imgUrlArray[0] + "upload/" + styles + "/" + imgUrlArray[1]

  return modifiedUrl
}

export default useCloudinary

