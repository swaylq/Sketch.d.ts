/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPreviewColorSpaceProviderProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    previewColorSpaceForClient<R = NSColorSpace, P0 = unknown>(_previewColorSpaceForClient: P0): R;
  }
  namespace MSPreviewColorSpaceProviderProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
