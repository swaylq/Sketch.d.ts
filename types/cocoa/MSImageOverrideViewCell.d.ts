/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageOverrideViewCell<T0 = void, T1 = void, T2 = void> extends NSImageCell {}
  namespace MSImageOverrideViewCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageCell {
      alloc<R = MSImageOverrideViewCell>(): R;
      new: <R = MSImageOverrideViewCell>() => R;
    }
  }
}

declare const MSImageOverrideViewCell: cocoa.MSImageOverrideViewCell.CLASS;
