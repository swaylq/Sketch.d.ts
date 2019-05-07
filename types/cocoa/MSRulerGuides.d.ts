/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRulerGuides<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSRulerGuides {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSRulerGuides>(): R;
      new: <R = MSRulerGuides>() => R;
      absoluteFrameOfSelectedLayersOnPage<R = CGRect, P0 = unknown>(_absoluteFrameOfSelectedLayersOnPage: P0): R;
      snapGuidesForRulerData_axis<R = unknown, P0 = unknown, P1 = number>(_snapGuidesForRulerData: P0, _axis: P1): R;
      verticalGuidesForGrid_ruler_mask_inRect_zoomScale<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = CGRect, P4 = number>(_verticalGuidesForGrid: P0, _ruler: P1, _mask: P2, _inRect: P3, _zoomScale: P4): R;
      verticalGuidesForHorizontalRulerOnPage_mask_inRect_zoomScale<R = unknown, P0 = unknown, P1 = number, P2 = CGRect, P3 = number>(_verticalGuidesForHorizontalRulerOnPage: P0, _mask: P1, _inRect: P2, _zoomScale: P3): R;
      verticalGuidesForHorizontalRulerOnPage_mask_zoomScale<R = unknown, P0 = unknown, P1 = number, P2 = number>(_verticalGuidesForHorizontalRulerOnPage: P0, _mask: P1, _zoomScale: P2): R;
      horizontalGuidesForGrid_ruler_mask_inRect_zoomScale<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = CGRect, P4 = number>(_horizontalGuidesForGrid: P0, _ruler: P1, _mask: P2, _inRect: P3, _zoomScale: P4): R;
      horizontalGuidesForVerticalRulerOnPage_mask_inRect_zoomScale<R = unknown, P0 = unknown, P1 = number, P2 = CGRect, P3 = number>(_horizontalGuidesForVerticalRulerOnPage: P0, _mask: P1, _inRect: P2, _zoomScale: P3): R;
      horizontalGuidesForVerticalRulerOnPage_mask_zoomScale<R = unknown, P0 = unknown, P1 = number, P2 = number>(_horizontalGuidesForVerticalRulerOnPage: P0, _mask: P1, _zoomScale: P2): R;
      findHoverGuidesOnPage_mouse_mask_zoomScale<R = unknown, P0 = unknown, P1 = CGPoint, P2 = number, P3 = number>(_findHoverGuidesOnPage: P0, _mouse: P1, _mask: P2, _zoomScale: P3): R;
    }
  }
}

declare const MSRulerGuides: cocoa.MSRulerGuides.CLASS;
