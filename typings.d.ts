import 'umi/typings';
import 'cordova-plugin-statusbar'
declare global {
  namespace UserCoustom {
    function show (): void
  }

  namespace BMapGL {
    class Point {
      constructor (x: number, y: number);
    }
    class Marker {
      constructor (point: Point);
      addEventListener(event: 'click', callback: () => void ): void;
    }

    class Map {
      constructor (html: HTMLElement | null);
      centerAndZoom: (point: Point, zoom: number) => void;
      enableScrollWheelZoom: (zoom: boolean) => void;
      addOverlay: (marker: Marker)=> void;
      getBounds: () => void;
    }

    class LocalSearch {
      constructor (map: Map, options: { [key: string]: string | number | any });
      searchInBounds( keys: string[], fn: any ): void;
      search(key: string): void;
    }

  }
}

