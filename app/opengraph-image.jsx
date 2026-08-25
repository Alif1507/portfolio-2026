import { createSocialImage, socialImageAlt, socialImageSize } from "../src/lib/social-image";

export const alt = socialImageAlt;
export const size = socialImageSize;
export const contentType = "image/png";

export default function Image() {
  return createSocialImage();
}
