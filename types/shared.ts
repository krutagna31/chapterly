export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publisher: string;
    publishedDate: string;
    industryIdentifiers: { type: string; identifier: string }[];
    description?: string;
    pageCount: number;
    printedPageCount: number;
    printType: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    maturityRating: string;
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
      small?: string;
      medium?: string;
      large?: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  safeInfo: {
    buyLink: string;
  }
};
