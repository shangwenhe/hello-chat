export interface Camera {
  getPicture(callback:(error: any)=>void, error:(error: any)=>void, options: any): void;
  cleanup(): void;
}
