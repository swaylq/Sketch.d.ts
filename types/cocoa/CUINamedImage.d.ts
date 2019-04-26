/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CUINamedImage<T0 = void, T1 = void, T2 = void> {
    // + CUINamedImage(NSAlignmentRect):
    NS_alignmentRect<R = CGRect>(): R;
  }
  namespace CUINamedImage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const CUINamedImage: cocoa.CUINamedImage.CLASS;
