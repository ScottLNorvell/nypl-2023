const querify = title => title.replace(' ', '+')

export const hooplaLink = ({ title }) =>
  `https://www.hoopladigital.com/search?q=${querify(
    title
  )}&scope=COMIC&type=direct`;

export const madisonLibEbookLink = ({ title }) =>
  `https://ma.catalog.lionlibraries.org/Search/Results?lookfor=${querify(
    title
  )}&basicType=Keyword&basicType=Keyword&filter[]=format_category_ma%3A%22eBook%22&sort=relevance&view=list&searchSource=local`;

export const westchesterEbooks = ({ title }) =>
  `https://opac.westchesterlibraries.org/Search/Results?lookfor=${querify(
    title
  )}&searchIndex=Keyword&filter[]=format_category%3A%22eBook%22&sort=relevance&view=list&searchSource=local`;

export const madisonLibrary = ({ title }) =>
  `https://ma.catalog.lionlibraries.org/Union/Search?view=list&lookfor=${querify(
    title
  )}&basicType=Keyword&searchSource=local&showCovers=on`;

export const getComics = ({ title }) =>
  `https://www.google.com/search?q=${querify(title)}+site%3Agetcomics.org`;

export const readComics = ({ title }) =>
  `https://www.google.com/search?q=${querify(title)}+site%3Areadcomiconline.li`;
