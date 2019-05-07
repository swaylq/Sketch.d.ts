/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewMiniControlStripLayoutAttributes<T0 = void, T1 = void, T2 = void> extends NSTouchBarCustomizationPreviewLayoutAttributes {
    rightCornerRadius<R = number>(): R;
    setRightCornerRadius<R = void, P0 = number>(_v: P0): R;
    leftCornerRadius<R = number>(): R;
    setLeftCornerRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSTouchBarCustomizationPreviewMiniControlStripLayoutAttributes {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarCustomizationPreviewLayoutAttributes {}
  }
}

declare const NSTouchBarCustomizationPreviewMiniControlStripLayoutAttributes: cocoa.NSTouchBarCustomizationPreviewMiniControlStripLayoutAttributes.CLASS;
