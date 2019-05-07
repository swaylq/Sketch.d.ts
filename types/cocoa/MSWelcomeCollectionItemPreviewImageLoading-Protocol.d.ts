/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionItemPreviewImageLoadingProtocol<T0 = void, T1 = void, T2 = void> {
    fetchPreviewImageWithMaximumPixelSize_completionHandler<R = void, P0 = number, P1 = CDUnknownBlockType>(_fetchPreviewImageWithMaximumPixelSize: P0, _completionHandler: P1): R;
    providesPreviewImage<R = boolean>(): R;
    URL<R = NSURL>(): R;
  }
  namespace MSWelcomeCollectionItemPreviewImageLoadingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
