/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerPreviewabilityProtocol<T0 = void, T1 = void, T2 = void> {
    contextualMenuPreviewTemplateImage<R = NSImage>(): R;
    unselectedPreviewTemplateImage<R = NSImage>(): R;
    selectedPreviewTemplateImage<R = NSImage>(): R;
    badgeType<R = number>(): R;
  }
  namespace MSLayerPreviewabilityProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
