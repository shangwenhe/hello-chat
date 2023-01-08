export interface ILocalPoint {
  lat: number;
  lng: number;
}

export interface IPointInfo {
  address: string;
  point: ILocalPoint;
  title: string;
  uid: string;
  url: string;
}

export interface ISearchResult {
city: string;
keyword: string;
moreResultsUrl: string;
province: string;
_pois: IPointInfo[]
}
