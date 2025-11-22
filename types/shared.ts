export type VolumeInfo = {
  title: string;
  subtitle?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  industryIdentifiers?: { type: string; identifier: string }[];
  readingModes?: { text: boolean; image: boolean };
  pageCount?: number;
  printedPageCount?: number;
  dimensions?: {
    height: string;
  };
  printType?: string;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
  maturityRating?: string;
  allowAnonLogging?: boolean;
  contentVersion?: string;
  panelizationSummary?: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  imageLinks?: {
    smallThumbnail: string;
    thumbnail: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
  };
  language?: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
};

export type LayerInfo = {
  layers: { layerId: string; volumeAnnotationsVersion: string }[];
};

export type saleInfo = {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice?: {
    amount: number;
    currencyCode: string;
  };
  retailPrice?: {
    amount: number;
    currencyCode: string;
  };
  buyLink?: string;
  offers?: {
    finskyOfferType: number;
    listPrice: {
      amountInMicros: number;
      currencyCode: string;
    };
    retailPrice: {
      amountInMicros: number;
      currencyCode: string;
    };
  }[];
};

export type AccessInfo = {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: {
    isAvailable: boolean;
    acsTokenLink?: string;
  };
  pdf: {
    isAvailable: boolean;
    acsTokenLink?: string;
  };
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
};

export type SearchInfo = {
  textSnippet: string;
};

export type Volume = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  layerInfo?: LayerInfo;
  volumeInfo: VolumeInfo;
  saleInfo?: saleInfo;
  accessInfo?: AccessInfo;
  searchInfo?: SearchInfo;
};
