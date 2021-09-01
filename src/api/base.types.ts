export interface ISearchResults {
  totalItems: number;
  items?: IBook[];
}

export interface IError {
  code: number;
  message: string;
  status: string;
}

export interface IBook {
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}
