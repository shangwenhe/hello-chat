import 'umi/typings';
import 'cordova-plugin-statusbar'
import { Permissions } from  'cordova-plugin-android-permissions/www/permissions';
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

  namespace QRScanner {
    function prepare(callback:(error: any, data: any)=>void): void;
    function destroy(callback:(error: any, data: any)=>void): void;
    function scan(callback:(error: any, data: any)=>void): void;
    function cancelScan(callback:(error: any, data: any)=>void): void;
    function show(callback:(error: any, data: any)=>void): void;
    function hide(callback:(error: any, data: any)=>void): void;
    function pausePreview(callback:(error: any, data: any)=>void): void;
    function resumePreview(callback:(error: any, data: any)=>void): void;
    function enableLight(callback:(error: any, data: any)=>void): void;
    function disableLight(callback:(error: any, data: any)=>void): void;
    function useCamera(callback:(error: any, data: any)=>void): void;
    function useFrontCamera(callback:(error: any, data: any)=>void): void;
    function useBackCamera(callback:(error: any, data: any)=>void): void;
    function openSettings(callback:(error: any, data: any)=>void): void;
    function getStatus(callback:(error: any, data: any)=>void): void;
  }

  // 当在全局再次声名接口时，会触发声名合并
  interface Cordova {
    InAppBrowser: {
      open:(url: string, target: string, options: string) => void;
    }
  }
  // 当在全局再次声名接口时，会触发声名合并
  interface CordovaPlugins {
    StatusBarHeight?: {
      getValue: ( successFn: (value: number) => void, FailFn: (value: string) => void ) => void;
    };
    permissions:  Permissions
  }
}
