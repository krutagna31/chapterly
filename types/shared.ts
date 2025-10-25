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
  panelizationSummary: {
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

export type SafeInfo = {
  country: string;
  saleability: string;
  isEbook: boolean;
};

export type AcessInfo = {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: {
    isAvailable: boolean;
    acsTokenLink: string;
  };
  pdf: {
    isAvailable: boolean;
  };
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
};

export type Volume = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  layerInfo: LayerInfo;
  volumeInfo: VolumeInfo;
  saleInfo: SafeInfo;
  accessInfo: AcessInfo;
};
