/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableParagraphStyle<T0 = void, T1 = void, T2 = void> {
    // + NSMutableParagraphStyle(Striping): 
    removeUnsupportedAttributes<R = void>(): R;
    // + NSMutableParagraphStyle(MSFixedLineHeight):
    fixedLineHeight_ms<R = number>(): R;
    setFixedLineHeight_ms<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSMutableParagraphStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const NSMutableParagraphStyle: cocoa.NSMutableParagraphStyle.CLASS;
