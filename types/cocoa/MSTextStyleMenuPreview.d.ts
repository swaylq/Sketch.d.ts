/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextStyleMenuPreview<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSTextStyleMenuPreview {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSTextStyleMenuPreview>(): R;
      new: <R = MSTextStyleMenuPreview>() => R;
      ensureAttributes_areVisibleAgainstColor<R = unknown, P0 = unknown, P1 = unknown>(_ensureAttributes: P0, _areVisibleAgainstColor: P1): R;
      attributedTitleForTextStyle_colorSpace<R = unknown, P0 = unknown, P1 = unknown>(_attributedTitleForTextStyle: P0, _colorSpace: P1): R;
      applyTextStylesToMenuItem_colorSpace<R = void, P0 = unknown, P1 = unknown>(_applyTextStylesToMenuItem: P0, _colorSpace: P1): R;
      ensureAttributes_areVisibleDrawingInMenuItem<R = unknown, P0 = unknown, P1 = unknown>(_ensureAttributes: P0, _areVisibleDrawingInMenuItem: P1): R;
      ensureAttributes_areVisibleDrawingAgainstRed_green_blue<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = number>(_ensureAttributes: P0, _areVisibleDrawingAgainstRed: P1, _green: P2, _blue: P3): R;
      attributesForDrawingTextWithStyle_inColorSpace<R = unknown, P0 = unknown, P1 = unknown>(_attributesForDrawingTextWithStyle: P0, _inColorSpace: P1): R;
      attributedDescriptionOfTextStyles_withHightlight<R = unknown, P0 = unknown, P1 = boolean>(_attributedDescriptionOfTextStyles: P0, _withHightlight: P1): R;
    }
  }
}

declare const MSTextStyleMenuPreview: cocoa.MSTextStyleMenuPreview.CLASS;
